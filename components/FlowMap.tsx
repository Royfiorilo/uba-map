'use client';
import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, { Background, Controls, useNodesState, useEdgesState, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import { useCareerStore } from '../store/useCareerStore';
import { carrera } from '../data/medicina';

export default function FlowMap() {
  const { approvedIds, toggleMateria } = useCareerStore();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  
  const [showElectivas, setShowElectivas] = useState(false);
  const [isCbcExpanded, setIsCbcExpanded] = useState(false);

  const cbcIds = ['mat', 'qui', 'icse', 'ipc', 'fis', 'bio'];

  useEffect(() => {
    const connectedIds = {
      incoming: selectedNodeId ? carrera.correlativas.filter(c => c.target === selectedNodeId).map(c => c.source) : [],
      outgoing: selectedNodeId ? carrera.correlativas.filter(c => c.source === selectedNodeId).map(c => c.target) : []
    };

    const filteredNodos = carrera.nodos.filter(n => {
      if (n.ciclo === 'Electivas' && !showElectivas) return false;
      if (cbcIds.includes(n.id)) return isCbcExpanded;
      if (n.id === 'cbc_master') return !isCbcExpanded;
      return true;
    });

    const updatedNodes: Node[] = filteredNodos.map((m) => {
      const isApproved = approvedIds.includes(m.id);
      const isSelected = m.id === selectedNodeId;
      const isElectiva = m.ciclo === 'Electivas';
      const isCbcMaster = m.id === 'cbc_master';

      const correlativasNecesarias = carrera.correlativas.filter(c => c.target === m.id).map(c => c.source);
      const puedeCursar = correlativasNecesarias.length > 0 && 
                          correlativasNecesarias.every(id => approvedIds.includes(id));

      const isRelated = isSelected || connectedIds.incoming.includes(m.id) || connectedIds.outgoing.includes(m.id);
      const isDimmed = selectedNodeId !== null && !isRelated;

      // --- PALETA FIUBA MAP REFINADA ---
      let backgroundColor = '#0f172a'; 
      let borderColor = '#1e3a8a';     
      let textColor = '#60a5fa';       

      if (isApproved || (isCbcMaster && cbcIds.every(id => approvedIds.includes(id)))) {
        backgroundColor = '#10b981'; // Verde
        borderColor = '#059669';
        textColor = '#fff';
      } else if (puedeCursar) {
        backgroundColor = '#f59e0b'; // Naranja
        borderColor = '#d97706';
        textColor = '#fff';
      } else if (isElectiva) {
        backgroundColor = '#581c87'; // Violeta
        borderColor = '#7c3aed';
        textColor = '#d8b4fe';
      }

      return {
        id: m.id,
        data: { label: isCbcMaster ? "Ciclo Básico\nComún" : m.nombre },
        position: { x: m.x, y: m.y },
        style: {
          background: backgroundColor,
          color: textColor,
          borderRadius: isCbcMaster ? '0px' : '12px',
          fontSize: '11px',
          fontWeight: 'bold',
          
          // --- MEJORA: NODOS CUADRADOS (Senior UX) ---
          width: isCbcMaster ? 110 : 130, // Más angosto
          minHeight: isCbcMaster ? 110 : 50, // Más alto
          
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '9px',
          lineHeight: '1.2',
          
          border: isSelected ? '2px solid #fff' : `1px solid ${borderColor}`,
          opacity: isDimmed ? 0.2 : 1,
          boxShadow: isSelected ? '0 0 25px rgba(255, 255, 255, 0.4)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          clipPath: isCbcMaster ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'none',
        },
      };
    });

    const edgeMap = new Map<string, Edge>();

    carrera.correlativas.forEach((c) => {
      let source = c.source;
      let target = c.target;

      if (!isCbcExpanded && cbcIds.includes(source)) {
        source = 'cbc_master';
      }

      const sourceExists = filteredNodos.some(n => n.id === source);
      const targetExists = filteredNodos.some(n => n.id === target);

      if (sourceExists && targetExists) {
        const edgeKey = `e-${source}-${target}`;

        if (!edgeMap.has(edgeKey)) {
          const isApproved = approvedIds.includes(c.source);
          const isConnected = source === selectedNodeId || target === selectedNodeId;
          
          const sourceCorrels = carrera.correlativas.filter(cor => cor.target === c.source).map(cor => cor.source);
          const sourceHabilitada = sourceCorrels.length > 0 && 
                                   sourceCorrels.every(id => approvedIds.includes(id)) && 
                                   !approvedIds.includes(c.source);

          let strokeColor = '#1e3a8a'; 
          if (isApproved) strokeColor = '#10b981';
          else if (sourceHabilitada) strokeColor = '#f59e0b';
          if (isConnected) strokeColor = '#60a5fa';

          edgeMap.set(edgeKey, {
            id: edgeKey,
            source,
            target,
            animated: isApproved || sourceHabilitada || isConnected,
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
  }, [approvedIds, selectedNodeId, showElectivas, isCbcExpanded, setNodes, setEdges]);

  const onNodeClick = useCallback((_: any, node: any) => {
    if (node.id === 'cbc_master') {
      setIsCbcExpanded(true);
    } else {
      setSelectedNodeId(node.id);
    }
  }, []);

  const onNodeDoubleClick = useCallback((_: any, node: any) => {
    if (node.id === 'cbc_master') return;
    toggleMateria(node.id);
  }, [toggleMateria]);

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute top-24 left-6 z-[110] flex flex-col gap-2">
        <button 
          onClick={() => setShowElectivas(!showElectivas)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase border transition-all ${
            showElectivas ? 'bg-purple-600/20 border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(124,58,237,0.2)]' : 'bg-zinc-900 border-zinc-700 text-zinc-500'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${showElectivas ? 'bg-purple-500 animate-pulse' : 'bg-zinc-700'}`} />
          Materias Electivas
        </button>

        <button 
          onClick={() => setIsCbcExpanded(!isCbcExpanded)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase border transition-all ${
            isCbcExpanded ? 'bg-emerald-600/20 border-emerald-500 text-emerald-400' : 'bg-zinc-900 border-zinc-700 text-zinc-500'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${isCbcExpanded ? 'bg-emerald-500' : 'bg-zinc-700'}`} />
          {isCbcExpanded ? 'Contraer CBC' : 'Expandir CBC'}
        </button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onPaneClick={onPaneClick}
        
        // --- MEJORA: UX Brother-Approved ---
        zoomOnDoubleClick={false} // Deshabilitamos el zoom al fondo
        
        fitView
        minZoom={0.1}
        defaultEdgeOptions={{ type: 'bezier' }}
      >
        <Background color="#0a0a0a" gap={25} />
        <Controls className="bg-zinc-800 border-zinc-700 fill-white" />
      </ReactFlow>
    </div>
  );
}