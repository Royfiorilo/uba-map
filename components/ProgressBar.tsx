'use client';
import React from 'react';
import { useCareerStore } from '../store/useCareerStore';
import { careersData } from '../data/careers';

export default function ProgressBar() {
  const { currentCareer, approvalsByCareer } = useCareerStore();
  
  // Obtenemos la data de la carrera actual
  const carrera = careersData[currentCareer] || careersData['medicina'];
  const approvedIds = approvalsByCareer[currentCareer] || [];

  const getStats = (cicloNombre: string) => {
    // Tipamos 'n' como any para evitar el error TS7006 rápido
    const materias = carrera.nodos.filter((n: any) => n.ciclo.toLowerCase() === cicloNombre.toLowerCase());
    let total = materias.length;
    let aprobadas = approvedIds.filter((id: string) => materias.some((m: any) => m.id === id)).length;

    if (cicloNombre.toLowerCase() === 'electivas') {
      total = currentCareer === 'nutricion' ? 3 : 2; 
      if (aprobadas > total) aprobadas = total; 
    }

    const porcentaje = total === 0 ? 0 : (aprobadas / total) * 100;
    return { porcentaje, aprobadas, total };
  };

  // Definimos los segmentos según la carrera
  const esNutricion = currentCareer === 'nutricion';
  
  const segmentos = [
    { stats: getStats('CBC'), color: 'from-emerald-500 to-emerald-400', weight: 15, label: 'CBC' },
    { stats: getStats(esNutricion ? 'Segundo' : 'Biomédico'), color: 'from-blue-500 to-blue-400', weight: 20, label: esNutricion ? '2°' : 'Bio' },
    { stats: getStats(esNutricion ? 'Tercer' : 'Clínico'), color: 'from-sky-500 to-indigo-500', weight: 25, label: esNutricion ? '3°' : 'Clín' },
    { stats: getStats(esNutricion ? 'Cuarto' : 'Especialidades'), color: 'from-cyan-500 to-cyan-400', weight: 20, label: esNutricion ? '4°' : 'Esp' },
    { stats: getStats(esNutricion ? 'Quinto' : 'IAR'), color: 'from-amber-500 to-orange-400', weight: 15, label: esNutricion ? '5°' : 'IAR' },
    { stats: getStats('Electivas'), color: 'from-purple-600 to-fuchsia-500', weight: 5, label: 'Elec' },
  ];

  return (
    <div className="w-full bg-zinc-950/90 backdrop-blur-md border-t border-white/10 p-6 flex flex-col gap-4">
      <div className="flex flex-wrap gap-8">
        {segmentos.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-tighter">{s.label}</span>
            <span className={`text-sm font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
              {Math.round(s.stats.porcentaje)}%
            </span>
          </div>
        ))}
      </div>

      <div className="flex h-8 w-full bg-zinc-900 rounded-lg overflow-hidden border border-white/5 shadow-2xl relative">
        {segmentos.map((s) => (
          <div 
            key={s.label}
            className={`h-full bg-gradient-to-r ${s.color} transition-all duration-700 ease-out relative group`}
            style={{ 
              width: `${(s.stats.porcentaje / 100) * s.weight}%`,
              boxShadow: s.stats.porcentaje > 0 ? '0 0 15px rgba(255,255,255,0.1)' : 'none'
            }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
}