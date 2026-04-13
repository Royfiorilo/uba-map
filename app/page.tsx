'use client';
import React, { useEffect } from 'react';
import FlowMap from '@/components/FlowMap'; 
import ProgressBar from '@/components/ProgressBar';

export default function Home() {
  
  useEffect(() => {
    // Hard Reset: Limpia el localStorage al cargar/refrescar la página
    // Esto asegura que el mapa siempre inicie en 0% para testing
    localStorage.removeItem('uba-map-storage');
  }, []);

  return (
    <main className="relative w-screen h-screen bg-[#0a0a0a] overflow-hidden text-white font-sans">
      
      {/* CAPA 1: El Mapa (Fondo total) */}
      <div className="absolute inset-0 pb-[80px]"> {/* Aumenté el padding para la barra más gruesa */}
        <FlowMap />
      </div>

      {/* CAPA 2: Login Flotante */}
      <div className="absolute top-6 left-6 z-[100] flex gap-2 items-center bg-zinc-900/90 p-2 rounded-xl border border-white/5 shadow-2xl backdrop-blur-md">
        <input 
          type="text" 
          placeholder="Padrón / Legajo" 
          className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-white w-32"
        />
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-emerald-900/20">
          Cargar
        </button>
      </div>

      {/* CAPA 3: Barra de Progreso (Fijada abajo) */}
      <div className="absolute bottom-0 left-0 w-full z-[100]">
        <ProgressBar />
      </div>

    </main>
  );
}