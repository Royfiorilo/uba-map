import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CareerState {
  currentCareer: string;
  approvalsByCareer: Record<string, string[]>;
  setCareer: (career: string) => void;
  toggleMateria: (materiaId: string) => void;
}

export const useCareerStore = create<CareerState>()(
  persist(
    (set) => ({
      currentCareer: 'medicina',
      approvalsByCareer: {
        medicina: [],
        nutricion: [],
      },
      setCareer: (career) => set({ currentCareer: career }),
      toggleMateria: (materiaId) => set((state) => {
        const currentList = state.approvalsByCareer[state.currentCareer] || [];
        const newList = currentList.includes(materiaId)
          ? currentList.filter((id: string) => id !== materiaId)
          : [...currentList, materiaId];
        
        return {
          approvalsByCareer: { 
            ...state.approvalsByCareer, 
            [state.currentCareer]: newList 
          }
        };
      }),
    }),
    { name: 'fmed-map-storage' }
  )
);