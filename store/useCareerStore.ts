import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type MateriaStatus = 'cursando' | 'en_final' | 'aprobada' | 'nada';

interface CareerState {
  currentCareer: string;
  statusByCareer: Record<string, Record<string, MateriaStatus>>;
  notasByCareer: Record<string, Record<string, number>>; // NUEVO: Guarda las notas
  approvalsByCareer: Record<string, string[]>;
  setCareer: (career: string) => void;
  setMateriaStatus: (materiaId: string, status: MateriaStatus) => void;
  toggleAprobada: (materiaId: string) => void;
  setMateriaNota: (materiaId: string, nota: number) => void; // NUEVO: Ajusta la nota
}

export const useCareerStore = create<CareerState>()(
  persist(
    (set) => ({
      currentCareer: 'medicina',
      statusByCareer: {},
      notasByCareer: {},
      approvalsByCareer: {},
      
      setCareer: (career) => set({ currentCareer: career }),
      
      setMateriaStatus: (materiaId, status) => set((state) => {
        const currentCareerStatus = state.statusByCareer[state.currentCareer] || {};
        const currentCareerNotas = state.notasByCareer[state.currentCareer] || {};
        const newCareerStatus = { ...currentCareerStatus };
        const newCareerNotas = { ...currentCareerNotas };
        
        if (status === 'nada') {
          delete newCareerStatus[materiaId];
          delete newCareerNotas[materiaId]; // Borramos la nota si se desaprueba/resetea
        } else {
          newCareerStatus[materiaId] = status;
          // Si pasa a aprobada y no tenía nota, le clavamos un 4 por defecto
          if (status === 'aprobada' && !newCareerNotas[materiaId]) {
            newCareerNotas[materiaId] = 4;
          }
        }

        const newApprovals = Object.entries(newCareerStatus)
          .filter(([_, s]) => s === 'aprobada')
          .map(([id, _]) => id);

        return {
          statusByCareer: { ...state.statusByCareer, [state.currentCareer]: newCareerStatus },
          notasByCareer: { ...state.notasByCareer, [state.currentCareer]: newCareerNotas },
          approvalsByCareer: { ...state.approvalsByCareer, [state.currentCareer]: newApprovals }
        };
      }),

      toggleAprobada: (materiaId) => set((state) => {
        const currentCareerStatus = state.statusByCareer[state.currentCareer] || {};
        const currentCareerNotas = state.notasByCareer[state.currentCareer] || {};
        const isAprobada = currentCareerStatus[materiaId] === 'aprobada';
        
        const newCareerStatus = { ...currentCareerStatus };
        const newCareerNotas = { ...currentCareerNotas };

        if (isAprobada) {
          delete newCareerStatus[materiaId];
          delete newCareerNotas[materiaId];
        } else {
          newCareerStatus[materiaId] = 'aprobada';
          newCareerNotas[materiaId] = 4; // 4 por defecto al hacer doble clic
        }

        const newApprovals = Object.entries(newCareerStatus)
          .filter(([_, s]) => s === 'aprobada')
          .map(([id, _]) => id);

        return {
          statusByCareer: { ...state.statusByCareer, [state.currentCareer]: newCareerStatus },
          notasByCareer: { ...state.notasByCareer, [state.currentCareer]: newCareerNotas },
          approvalsByCareer: { ...state.approvalsByCareer, [state.currentCareer]: newApprovals }
        };
      }),

      setMateriaNota: (materiaId, nota) => set((state) => {
        const currentCareerNotas = state.notasByCareer[state.currentCareer] || {};
        // Nos aseguramos de que la nota esté entre 1 y 10
        const notaValida = Math.max(1, Math.min(10, nota));
        
        return {
          notasByCareer: {
            ...state.notasByCareer,
            [state.currentCareer]: { ...currentCareerNotas, [materiaId]: notaValida }
          }
        };
      })
    }),
    { name: 'fmed-map-storage' }
  )
);