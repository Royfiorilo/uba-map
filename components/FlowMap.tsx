'use client';
import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, { Background, Controls, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { useCareerStore } from '../store/useCareerStore';
import { carrera } from '../data/medicina';

export default function FlowMap() {
  const { approvedIds, toggleMateria } = useCareerStore();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  useEffect(() => {
    const connectedIds = {
      incoming: selectedNodeId ? carrera.correlativas.filter(c => c.target === selectedNodeId).map(c => c.source) : [],
      outgoing: selectedNodeId ? carrera.correlativas.filter(c => c.source === selectedNodeId).map(c => c.target) : []
    };

    const updatedNodes = carrera.nodos.map((m) => {
      const isApproved = approvedIds.includes(m.id);
      const isSelected = m.id === selectedNodeId;
      const isRelated = isSelected || connectedIds.incoming.includes(m.id) || connectedIds.outgoing.includes(m.id);
      const isDimmed = selectedNodeId !== null && !isRelated;

      return {
        id: m.id,
        data: { label: m.nombre },
        position: { x: m.x, y: m.y },
        style: {
          background: isApproved ? '#10b981' : '#1e293b', // Verde si está aprobada 
          color: '#fff',
          borderRadius: '8px',
          fontSize: '11px',
          width: 160,
          border: isSelected ? '2px solid #60a5fa' : (isApproved ? '1px solid #059669' : '1px solid #334155'),
          opacity: isDimmed ? 0.2 : 1,
          boxShadow: isSelected ? '0 0 20px rgba(96, 165, 250, 0.5)' : 'none',
          transition: 'all 0.2s ease',
        },
      };
    });

    const updatedEdges = carrera.correlativas.map((c) => {
      const isApproved = approvedIds.includes(c.source);
      const isConnected = c.source === selectedNodeId || c.target === selectedNodeId;
      return {
        id: `e-${c.source}-${c.target}`,
        source: c.source,
        target: c.target,
        animated: isApproved || isConnected,
        style: { 
          stroke: isConnected ? '#60a5fa' : (isApproved ? '#34d399' : '#475569'),
          strokeWidth: isConnected ? 3 : 1.5,
          opacity: selectedNodeId !== null && !isConnected ? 0.1 : 1,
        },
      };
    });

    setNodes(updatedNodes);
    setEdges(updatedEdges);
  }, [approvedIds, selectedNodeId, setNodes, setEdges]);

  const onNodeClick = useCallback((_: any, node: any) => setSelectedNodeId(node.id), []);
  const onNodeDoubleClick = useCallback((_: any, node: any) => toggleMateria(node.id), [toggleMateria]);
  const onPaneClick = useCallback(() => setSelectedNodeId(null), []);

  return (
    <div className="absolute inset-0">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onPaneClick={onPaneClick}
        fitView
        minZoom={0.1}
      >
        <Background color="#121212" gap={25} />
        <Controls className="bg-zinc-800 border-zinc-700 fill-white" />
      </ReactFlow>
    </div>
  );
}