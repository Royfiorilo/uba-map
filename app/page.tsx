'use client';
import React from 'react';
import FlowMap from '@/components/FlowMap'; 
import ProgressBar from '@/components/ProgressBar';
import CareerSelector from '@/components/CareerSelector'; // <--- IMPORTANTE

export default function Home() {
  return (
    <main className="relative w-screen h-screen bg-[#0a0a0a] overflow-hidden text-white font-sans">
      
      {/* CAPA 1: El Mapa */}
      <div className="absolute inset-0 pb-[80px]">
        <FlowMap />
      </div>

      {/* CAPA 2: UI Flotante Izquierda (Login) */}
      <div className="absolute top-6 left-6 z-[100] flex gap-2 items-center bg-zinc-900/90 p-2 rounded-xl border border-white/5 shadow-2xl backdrop-blur-md">
        <input type="text" placeholder="Padrón / Legajo" className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-white w-32 outline-none" />
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-all">Cargar</button>
      </div>

      {/* CAPA 3: Selector de Carrera (DERECHA) */}
      <CareerSelector /> {/* <--- AGREGALO ACÁ */}

      {/* CAPA 4: Barra de Progreso */}
      <div className="absolute bottom-0 left-0 w-full z-[100]">
        <ProgressBar />
      </div>

    </main>
  );
}