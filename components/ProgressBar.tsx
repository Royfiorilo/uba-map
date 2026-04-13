'use client';
import React from 'react';
import { useCareerStore } from '../store/useCareerStore';
import { carrera } from '../data/medicina';

export default function ProgressBar() {
  const { approvedIds } = useCareerStore();

const getStats = (cicloNombre: string) => {
  const materias = carrera.nodos.filter(n => n.ciclo.toLowerCase() === cicloNombre.toLowerCase());
  let total = materias.length;
  let aprobadas = approvedIds.filter(id => materias.some(m => m.id === id)).length;

  // Lógica especial para Electivas: Con 2 ya cumplió el ciclo
  if (cicloNombre.toLowerCase() === 'electivas') {
    total = 2; // Seteamos el tope en 2
    if (aprobadas > 2) aprobadas = 2; 
  }

  const porcentaje = total === 0 ? 0 : (aprobadas / total) * 100;
  return { porcentaje, aprobadas, total };
};

  const cbc = getStats('CBC');
  const biomedico = getStats('Biomédico');
  const clinico = getStats('Clínico');
  const especialidades = getStats('Especialidades');
  const iar = getStats('IAR');
  const electivas = getStats('Electivas');

  // Definimos los pesos visuales para que la suma de todos de 100%
  // CBC (15%), Biomédico (20%), Clínico/Esp (45%), IAR (15%), Electivas (5%)
  const segmentos = [
    { stats: cbc, color: 'from-emerald-500 to-emerald-400', weight: 15, label: 'CBC' },
    { stats: biomedico, color: 'from-blue-500 to-blue-400', weight: 20, label: 'Bio' },
    { stats: clinico, color: 'from-sky-500 to-indigo-500', weight: 30, label: 'Clín' },
    { stats: especialidades, color: 'from-cyan-500 to-cyan-400', weight: 15, label: 'Esp' },
    { stats: iar, color: 'from-amber-500 to-orange-400', weight: 15, label: 'IAR' },
    { stats: electivas, color: 'from-purple-600 to-fuchsia-500', weight: 5, label: 'Elec' },
  ];

  return (
    <div className="w-full bg-zinc-950/90 backdrop-blur-md border-t border-white/10 p-6 flex flex-col gap-4">
      {/* Stats con mejores indicadores */}
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

      {/* Barra Gruesa y Neon (h-8 es el doble de la anterior) */}
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
            {/* Brillo interno para dar profundidad */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
}