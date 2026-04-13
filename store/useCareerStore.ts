import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CareerState {
  approvedIds: string[];
  toggleMateria: (id: string) => void;
  setPadrón: (padron: string) => void;
  padron: string | null;
}

export const useCareerStore = create<CareerState>()(
  persist(
    (set) => ({
      approvedIds: [],
      padron: null,
      
      toggleMateria: (id) => set((state) => ({
        approvedIds: state.approvedIds.includes(id)
          ? state.approvedIds.filter((mId) => mId !== id)
          : [...state.approvedIds, id]
      })),

      setPadrón: (padron) => set({ padron }),
    }),
    {
      name: 'uba-map-storage', // Nombre de la key en localStorage 
    }
  )
);