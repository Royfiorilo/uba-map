'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useCareerStore } from '../store/useCareerStore';
import { careersData } from '../data/careers';

export default function CareerSelector() {
  const { currentCareer, setCareer } = useCareerStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cierra el menú si se hace clic afuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedName = careersData[currentCareer]?.nombre || 'Seleccionar Carrera';

  return (
    <div className="absolute top-6 right-6 z-[120]" ref={dropdownRef}>
      {/* Botón Principal (Trigger) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full min-w-[300px] bg-zinc-900/90 border border-zinc-700 text-white text-sm font-bold rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-emerald-500 shadow-[0_8px_30px_rgb(0,0,0,0.5)] backdrop-blur-md cursor-pointer hover:bg-zinc-800 hover:border-zinc-500 transition-all uppercase tracking-wide"
      >
        <span className="truncate pr-4">{selectedName}</span>
        
        {/* Ícono de Flecha animado */}
        <svg 
          className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Menú Desplegable Custom */}
      {isOpen && (
        <ul className="absolute top-full right-0 mt-2 w-full min-w-[300px] bg-zinc-900/95 border border-zinc-700 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl max-h-[50vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          {Object.keys(careersData).map(key => {
            const isSelected = key === currentCareer;
            
            return (
              <li 
                key={key} 
                onClick={() => {
                  setCareer(key);
                  setIsOpen(false);
                }}
                className={`px-5 py-3.5 cursor-pointer text-sm font-semibold transition-all flex items-center justify-between
                  ${isSelected 
                    ? 'bg-emerald-500/10 text-emerald-400 border-l-4 border-emerald-500' 
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-white border-l-4 border-transparent'
                  }
                `}
              >
                {careersData[key].nombre}
                
                {/* Puntito verde para la carrera activa */}
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}