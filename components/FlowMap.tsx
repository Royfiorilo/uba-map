'use client';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import ReactFlow, { Background, Controls, useNodesState, useEdgesState, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import { useCareerStore } from '../store/useCareerStore';
import { careersData } from '../data/careers';
 
const EMPTY_ARRAY: string[] = [];
const EMPTY_OBJECT = {};
 
export default function FlowMap() {
  const { currentCareer, approvalsByCareer, statusByCareer, notasByCareer, setMateriaStatus, toggleAprobada, setMateriaNota } = useCareerStore();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [showElectivas, setShowElectivas] = useState(false);
  const [isCbcExpanded, setIsCbcExpanded] = useState(false);
 
  const carrera = careersData[currentCareer] || careersData['medicina'];
  const approvedIds = approvalsByCareer[currentCareer] || EMPTY_ARRAY;
  const materiaStatuses = statusByCareer?.[currentCareer] || EMPTY_OBJECT;
  const materiaNotas = notasByCareer?.[currentCareer] || EMPTY_OBJECT;
 
  const cbcIds = useMemo(() => {
    return carrera.nodos
      .filter((n: any) => n.ciclo === 'CBC' && n.id !== 'cbc_master')
      .map((n: any) => n.id);
  }, [carrera]);
 
  useEffect(() => {
    const connectedIds = {
      incoming: selectedNodeId ? carrera.correlativas.filter((c: any) => c.target === selectedNodeId).map((c: any) => c.source) : [],
      outgoing: selectedNodeId ? carrera.correlativas.filter((c: any) => c.source === selectedNodeId).map((c: any) => c.target) : []
    };
 
    const filteredNodos = carrera.nodos.filter((n: any) => {
      if ((n.ciclo === 'Electivas' || n.categoria === 'electiva') && !showElectivas) return false;
      if (cbcIds.includes(n.id)) return isCbcExpanded;
      if (n.id === 'cbc_master') return !isCbcExpanded;
      return true;
    });
 
    const updatedNodes: Node[] = filteredNodos.map((m: any) => {
      const status = materiaStatuses[m.id] || 'nada';
      const nota = materiaNotas[m.id];
 
      const isApproved = status === 'aprobada';
      const isEnFinal = status === 'en_final';
      const isCursando = status === 'cursando';
 
      const isSelected = m.id === selectedNodeId;
      const isElectiva = m.ciclo === 'Electivas' || m.categoria === 'electiva';
      const isCbcMaster = m.id === 'cbc_master';
 
      const correlativasNecesarias = carrera.correlativas.filter((c: any) => c.target === m.id).map((c: any) => c.source);
      const puedeCursar = correlativasNecesarias.length > 0 &&
        correlativasNecesarias.every((id: string) => materiaStatuses[id] === 'aprobada' || materiaStatuses[id] === 'en_final');
 
      const isRelated = isSelected || connectedIds.incoming.includes(m.id) || connectedIds.outgoing.includes(m.id);
      const isDimmed = selectedNodeId !== null && !isRelated;
 
      let backgroundColor = '#3b82f6';
      let borderColor = '#2563eb';
      let textColor = '#ffffff';
      let extraStyles = {};
 
      const cbcAllApproved = isCbcMaster && cbcIds.length > 0 && cbcIds.every((id: string) => materiaStatuses[id] === 'aprobada');
 
      if (isApproved || cbcAllApproved) {
        backgroundColor = '#22c55e';
        borderColor = '#16a34a';
      } else if (isEnFinal) {
        backgroundColor = '#deac16';
        borderColor = '#ca8a04';
        textColor = '#ffffff';
      } else if (isCursando) {
        backgroundColor = '#85898f';
        borderColor = '#8f8f8f';
      } else if (puedeCursar) {
        backgroundColor = '#f97316';
        borderColor = '#ea580c';
      } else if (isElectiva) {
        backgroundColor = '#a855f7';
        borderColor = '#9333ea';
      }
 
      // Badge de estado/nota siempre debajo usando JSX
      const badge = !isCbcMaster && (
        (isApproved && nota) ? (
          <span style={{ fontSize: '15px', opacity: 0.9, marginTop: '3px' }}>[{nota}]</span>
        ) : isEnFinal ? (
          <span style={{ fontSize: '15px', opacity: 0.9, marginTop: '3px' }}>[En Final]</span>
        ) : isCursando ? (
          <span style={{ fontSize: '15px', opacity: 0.9, marginTop: '3px' }}>[Cursando]</span>
        ) : null
      );
 
      const label = (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0px', width: '100%' }}>
          <span style={{ lineHeight: '1.2', textAlign: 'center' }}>
            {isCbcMaster ? 'Ciclo Básico\nComún' : m.nombre}
          </span>
          {badge}
        </div>
      );
 
      return {
        id: m.id,
        data: { label },
        position: { x: m.x, y: m.y },
        style: {
          background: backgroundColor,
          color: textColor,
          borderRadius: isCbcMaster ? '0px' : '8px',
          fontSize: '14px',
          fontWeight: 'bold',
          width: isCbcMaster ? 110 : 130,
          minHeight: isCbcMaster ? 110 : 65,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '8px',
          lineHeight: '1.2',
          border: isSelected ? '2px solid #fff' : `2px solid ${borderColor}`,
          opacity: isDimmed ? 0.2 : 1,
          boxShadow: isSelected ? '0 0 25px rgba(255, 255, 255, 0.4)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          clipPath: isCbcMaster ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'none',
          ...extraStyles
        },
      };
    });
 
    const edgeMap = new Map<string, Edge>();
 
    carrera.correlativas.forEach((c: any) => {
      let source = c.source;
      let target = c.target;
 
      if (!isCbcExpanded && cbcIds.includes(source)) {
        source = 'cbc_master';
      }
 
      const sourceExists = filteredNodos.some((n: any) => n.id === source);
      const targetExists = filteredNodos.some((n: any) => n.id === target);
 
      if (sourceExists && targetExists) {
        const edgeKey = `e-${source}-${target}`;
 
        if (!edgeMap.has(edgeKey)) {
          const sourceStatus = materiaStatuses[c.source] || 'nada';
          const isConnected = source === selectedNodeId || target === selectedNodeId;
 
          const sourceCorrels = carrera.correlativas.filter((cor: any) => cor.target === c.source).map((cor: any) => cor.source);
          const sourceHabilitada = sourceCorrels.length > 0 &&
            sourceCorrels.every((id: string) => materiaStatuses[id] === 'aprobada' || materiaStatuses[id] === 'en_final') &&
            sourceStatus === 'nada';
 
          let strokeColor = '#3b82f6';
          if (sourceStatus === 'aprobada') {
            strokeColor = '#22c55e';
          } else if (sourceStatus === 'en_final') {
            strokeColor = '#eab308';
          } else if (sourceStatus === 'cursando') {
            strokeColor = '#85898f';
          } else if (sourceHabilitada) {
            strokeColor = '#f97316';
          }
 
          edgeMap.set(edgeKey, {
            id: edgeKey,
            source,
            target,
            animated: sourceStatus !== 'nada' || sourceHabilitada || isConnected,
            style: {
              stroke: strokeColor,
              strokeWidth: isConnected ? 3 : 1.5,
              opacity: selectedNodeId !== null && !isConnected ? 0.1 : 1,
            },
          });
        }
      }
    });
 
    setNodes(updatedNodes);
    setEdges(Array.from(edgeMap.values()));
  }, [currentCareer, materiaStatuses, materiaNotas, selectedNodeId, showElectivas, isCbcExpanded, carrera, setNodes, setEdges, cbcIds]);
 
  const onNodeClick = useCallback((_: any, node: any) => {
    if (node.id === 'cbc_master') setIsCbcExpanded(true);
    else setSelectedNodeId(node.id);
  }, []);
 
  const onNodeDoubleClick = useCallback((_: any, node: any) => {
    if (node.id === 'cbc_master') return;
    toggleAprobada(node.id);
  }, [toggleAprobada]);
 
  const onPaneClick = useCallback(() => setSelectedNodeId(null), []);
 
  return (
    <div className="absolute inset-0">
      <div className="absolute top-24 left-6 z-[110] flex flex-col gap-2">
        <button onClick={() => setShowElectivas(!showElectivas)} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[15px] font-bold uppercase border transition-all ${showElectivas ? 'bg-purple-600/20 border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(124,58,237,0.2)]' : 'bg-zinc-900 border-zinc-700 text-zinc-500'}`}>
          <span className={`w-2 h-2 rounded-full ${showElectivas ? 'bg-purple-500 animate-pulse' : 'bg-zinc-700'}`} />
          Materias Electivas
        </button>
        <button onClick={() => setIsCbcExpanded(!isCbcExpanded)} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[15px] font-bold uppercase border transition-all ${isCbcExpanded ? 'bg-emerald-600/20 border-emerald-500 text-emerald-400' : 'bg-zinc-900 border-zinc-700 text-zinc-500'}`}>
          <span className={`w-2 h-2 rounded-full ${isCbcExpanded ? 'bg-emerald-500' : 'bg-zinc-700'}`} />
          {isCbcExpanded ? 'Contraer CBC' : 'Expandir CBC'}
        </button>
      </div>
 
      {/* LEYENDA DE REFERENCIAS (Flotante a la izquierda, VERTICAL, debajo de los botones de CBC) */}
      <div className="absolute top-48 left-6 z-[110] flex flex-col gap-3 bg-zinc-900/90 border border-zinc-700/50 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]" style={{ backgroundColor: '#22c55e' }}></span>
          <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest">Aprobada</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.5)]" style={{ backgroundColor: '#eab308' }}></span>
          <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest">En Final</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#85898f' }}></span>
          <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest">Cursando</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f97316' }}></span>
          <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest">Habilitada</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#a855f7' }}></span>
          <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest">Electiva</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3b82f6' }}></span>
          <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest">Pendiente</span>
        </div>
      </div>

      {selectedNodeId && selectedNodeId !== 'cbc_master' && (
        <div className="absolute top-24 right-6 z-[110] flex items-center gap-3 animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg text-sm font-bold text-white shadow-xl max-w-[250px] truncate">
            {carrera.nodos.find((n: any) => n.id === selectedNodeId)?.nombre}
          </div>
 
          <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl overflow-hidden h-[42px]">
            {materiaStatuses[selectedNodeId] === 'aprobada' && (
              <div className="flex items-center h-full px-2 border-r border-zinc-700 bg-zinc-800/50">
                <span className="text-white font-bold text-base w-6 text-center">
                  {materiaNotas[selectedNodeId] || 4}
                </span>
                <div className="flex flex-col ml-1 h-full justify-center gap-[2px]">
                  <button
                    onClick={() => setMateriaNota(selectedNodeId, (materiaNotas[selectedNodeId] || 4) + 1)}
                    className="text-emerald-500 hover:text-emerald-400 leading-none p-0.5 text-[10px]"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => setMateriaNota(selectedNodeId, (materiaNotas[selectedNodeId] || 4) - 1)}
                    className="text-red-500 hover:text-red-400 leading-none p-0.5 text-[10px]"
                  >
                    ▼
                  </button>
                </div>
              </div>
            )}
 
            <button
              onClick={() => setMateriaStatus(selectedNodeId, 'aprobada')}
              className="px-4 h-full hover:bg-emerald-500/20 text-emerald-500 font-black transition-colors border-r border-zinc-700 flex items-center"
              title="Aprobar"
            >
              ✓
            </button>
            <button
              onClick={() => setMateriaStatus(selectedNodeId, 'nada')}
              className="px-4 h-full hover:bg-red-500/20 text-red-500 font-black transition-colors border-r border-zinc-700 flex items-center"
              title="Desaprobar (Reset)"
            >
              X
            </button>
            <button
              onClick={() => setMateriaStatus(selectedNodeId, 'en_final')}
              className="px-4 h-full hover:bg-yellow-500/20 text-yellow-500 font-black transition-colors flex items-center"
              title="En Final"
            >
              F
            </button>
          </div>
 
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl overflow-hidden h-[42px]">
            <button
              onClick={() => setMateriaStatus(selectedNodeId, 'cursando')}
              className="px-4 h-full hover:bg-zinc-700 text-zinc-300 font-black transition-colors flex items-center"
              title="Cursando"
            >
              C
            </button>
          </div>
        </div>
      )}
 
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onPaneClick={onPaneClick}
        zoomOnDoubleClick={false}
        fitView
        minZoom={0.3}
        defaultEdgeOptions={{ type: 'bezier' }}
      >
        <Background color="#050505" gap={25} />
        <Controls className="bg-zinc-800 border-zinc-700 fill-white" />
      </ReactFlow>
    </div>
  );
}