'use client';
import React from 'react';
import { useCareerStore } from '../store/useCareerStore';
import { carrera } from '../data/medicina';

export default function ProgressBar() {
  const { approvedIds } = useCareerStore();
  
  const totalMaterias = carrera.nodos.length;
  const aprobadas = approvedIds.length;
  const porcentaje = totalMaterias === 0 ? 0 : Math.round((aprobadas / totalMaterias) * 100);

  return (
    <div className="w-full bg-[#1a1a1a] border-t border-zinc-800 flex items-center px-6 py-2 text-xs font-medium text-zinc-300 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      {/* Contadores y Stats */}
      <div className="flex items-center gap-4 mr-6 min-w-max">
        <div className="flex flex-col">
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Progreso</span>
          <span className="text-white text-lg font-bold">{porcentaje}%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Materias</span>
          <span className="text-white text-sm">{aprobadas} de {totalMaterias}</span>
        </div>
      </div>

      {/* Barra Visual (Estilo FIUBA Map) */}
      <div className="flex-1 h-6 bg-zinc-800 rounded-md overflow-hidden flex shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500 ease-out flex items-center justify-end px-2"
          style={{ width: `${porcentaje}%` }}
        >
          {/* Un pequeño tramado para que se vea como en tu captura */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCA4TDggMFpNOCA4TDE2IDBaTTAgMTZMODg4WiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20" />
        </div>
      </div>
    </div>
  );
}