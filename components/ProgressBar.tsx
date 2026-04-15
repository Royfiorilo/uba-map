'use client';
import React, { useMemo } from 'react';
import { useCareerStore } from '../store/useCareerStore';
import { careersData } from '../data/careers';

const EMPTY_ARRAY: string[] = [];
const EMPTY_OBJECT = {};

const COLOR_PALETTE = [
  'from-emerald-500 to-emerald-400', // CBC
  'from-blue-500 to-blue-400',       // Año 1 / Biomédico
  'from-sky-500 to-indigo-500',      // Año 2 / Clínico
  'from-cyan-500 to-cyan-400',       // Año 3
  'from-amber-500 to-orange-400',    // Año 4
  'from-pink-500 to-rose-400',       // Año 5
  'from-teal-500 to-teal-400',       // Extras
  'from-purple-600 to-fuchsia-500',  // Electivas
];

export default function ProgressBar() {
  const { currentCareer, approvalsByCareer, notasByCareer } = useCareerStore();
  
  const carrera = careersData[currentCareer] || careersData['medicina'];
  const approvedIds = approvalsByCareer[currentCareer] || EMPTY_ARRAY;
  const materiaNotas = notasByCareer?.[currentCareer] || EMPTY_OBJECT;

  const segmentos = useMemo(() => {
    const materiasReales = carrera.nodos.filter((n: any) => n.id !== 'cbc_master');
    const totalMateriasCarrera = materiasReales.length;

    if (totalMateriasCarrera === 0) return [];

    const ciclosMap = new Map<string, any[]>();
    materiasReales.forEach((m: any) => {
      if (!ciclosMap.has(m.ciclo)) {
        ciclosMap.set(m.ciclo, []);
      }
      ciclosMap.get(m.ciclo)!.push(m);
    });

    let colorIndex = 0;
    return Array.from(ciclosMap.entries()).map(([cicloNombre, materias]) => {
      const total = materias.length;
      const aprobadas = approvedIds.filter((id: string) => materias.some(m => m.id === id)).length;
      const porcentajeCompletado = total === 0 ? 0 : (aprobadas / total) * 100;
      const weight = (total / totalMateriasCarrera) * 100;

      const color = cicloNombre === 'Electivas' ? 'from-purple-600 to-fuchsia-500' : COLOR_PALETTE[colorIndex % COLOR_PALETTE.length];
      if (cicloNombre !== 'Electivas') colorIndex++;

      return {
        label: cicloNombre,
        stats: { porcentaje: porcentajeCompletado, aprobadas, total },
        weight,
        color
      };
    });
  }, [carrera, approvedIds]);

  const promedio = useMemo(() => {
    let sum = 0;
    let count = 0;

    approvedIds.forEach((id: string) => {
      if (id !== 'cbc_master') {
        const exists = carrera.nodos.some((n: any) => n.id === id);
        if (exists) {
          const nota = materiaNotas[id] || 4; 
          sum += nota;
          count++;
        }
      }
    });

    return count === 0 ? 0 : sum / count;
  }, [approvedIds, materiaNotas, carrera]);

  return (
    // Se redujo el padding a px-6 py-3 y el gap a gap-3
    <div className="w-full bg-zinc-950/90 backdrop-blur-md border-t border-white/10 px-6 py-3 flex flex-col gap-3">
      
      <div className="flex justify-between items-end">
        
        <div className="flex flex-wrap gap-9 flex-1 items-end">
          {segmentos.map((s) => (
            <div key={s.label} className="flex flex-col">
              {/* Fuente del label levemente más pequeña */}
              <span className="text-[12px] font-black text-zinc-500 uppercase tracking-tighter truncate max-w-[80px]" title={s.label}>
                {s.label}
              </span>
              <span className={`text-sm font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent leading-none mt-0.5`}>
                {Math.round(s.stats.porcentaje)}%
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-end pl-6 border-l border-zinc-800 ml-4">
          <div className="flex items-center gap-1.5 mb-1">
            <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <span className="text-[12px] font-black text-zinc-400 uppercase tracking-widest">Promedio</span>
          </div>
          {/* Promedio en text-2xl en lugar de 3xl para no ocupar tanto alto */}
          <span className="text-2xl font-black text-white tracking-tight drop-shadow-md leading-none">
            {promedio > 0 ? promedio.toFixed(2) : '-.--'}
          </span>
        </div>

      </div>

      {/* Barra de altura h-5 en lugar de h-8 */}
      <div className="flex h-8 w-full bg-zinc-900 rounded-md overflow-hidden border border-white/5 shadow-inner relative">
        {segmentos.map((s) => (
          <div 
            key={s.label}
            className={`h-full bg-gradient-to-r ${s.color} transition-all duration-700 ease-out relative group`}
            style={{ 
              width: `${(s.stats.porcentaje / 100) * s.weight}%`,
              boxShadow: s.stats.porcentaje > 0 ? '0 0 10px rgba(255,255,255,0.1)' : 'none'
            }}
            title={`${s.label}: ${s.stats.aprobadas}/${s.stats.total} aprobadas`}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

    </div>
  );
}