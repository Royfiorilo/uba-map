'use client';
import { useCareerStore } from '../store/useCareerStore';
import { careersData } from '../data/careers';

export default function CareerSelector() {
  const { currentCareer, setCareer } = useCareerStore();

  return (
    <div className="absolute top-6 right-6 z-[120]">
      <select 
        value={currentCareer}
        onChange={(e) => setCareer(e.target.value)}
        className="bg-zinc-900/90 border border-zinc-800 text-white text-xs font-bold rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xl backdrop-blur-md appearance-none cursor-pointer hover:bg-zinc-800 transition-all uppercase tracking-wider"
      >
        {Object.keys(careersData).map(key => (
          <option key={key} value={key} className="bg-zinc-900 text-white">
            {careersData[key].nombre}
          </option>
        ))}
      </select>
    </div>
  );
}