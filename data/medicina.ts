export const carrera = {
  nodos: [
    // --- CBC (x: 0) ---
    { id: 'mat', nombre: 'Matemática', ciclo: 'CBC', x: 0, y: 0 },
    { id: 'qui', nombre: 'Química', ciclo: 'CBC', x: 0, y: 100 },
    { id: 'icse', nombre: 'ICSE', ciclo: 'CBC', x: 0, y: 200 },
    { id: 'ipc', nombre: 'IPC', ciclo: 'CBC', x: 0, y: 300 },
    { id: 'fis', nombre: 'Física / Biofísica', ciclo: 'CBC', x: 200, y: 0 },
    { id: 'bio', nombre: 'Biología Celular', ciclo: 'CBC', x: 200, y: 100 },

    // --- BIOMÉDICO AÑO 1 (x: 450) ---
    { id: 'ana', nombre: 'Anatomía', ciclo: 'Biomédico', x: 450, y: 0 },
    { id: 'histo', nombre: 'Histología y Embrio', ciclo: 'Biomédico', x: 450, y: 100 },
    { id: 'salud_mental', nombre: 'Salud Mental', ciclo: 'Biomédico', x: 450, y: 200 },
    { id: 'bioetica1', nombre: 'Bioética I', ciclo: 'Biomédico', x: 450, y: 300 },
    { id: 'med_fam1', nombre: 'Medicina Familiar I', ciclo: 'Biomédico', x: 450, y: 400 },

    // --- BIOMÉDICO AÑO 2 & 3 (x: 700 / 950) ---
    { id: 'quibio', nombre: 'Química Biológica', ciclo: 'Biomédico', x: 700, y: 50 },
    { id: 'fisio', nombre: 'Fisiología y Biofísica', ciclo: 'Biomédico', x: 950, y: 50 },
    { id: 'micro', nombre: 'Microbiología', ciclo: 'Biomédico', x: 950, y: 150 },
    { id: 'pato1', nombre: 'Patología I', ciclo: 'Biomédico', x: 950, y: 250 },
    { id: 'farma1', nombre: 'Farmacología I', ciclo: 'Biomédico', x: 950, y: 350 },

    // --- CLÍNICO BÁSICAS (x: 1250) ---
    { id: 'medA', nombre: 'Medicina A', ciclo: 'Clínico', x: 1250, y: 50 },
    { id: 'pato2', nombre: 'Patología II', ciclo: 'Clínico', x: 1250, y: 150 },
    { id: 'farma2', nombre: 'Farmacología II', ciclo: 'Clínico', x: 1250, y: 250 },
    { id: 'nutri', nombre: 'Nutrición', ciclo: 'Clínico', x: 1250, y: 350 },
    { id: 'imagenes', nombre: 'Diag. por Imágenes', ciclo: 'Clínico', x: 1250, y: 450 },
    { id: 'saludp1', nombre: 'Salud Pública I', ciclo: 'Clínico', x: 1250, y: 550 },

    // --- CLÍNICO ESPECIALIDADES & MED B (x: 1550) ---
    { id: 'medB', nombre: 'Medicina B', ciclo: 'Clínico', x: 1550, y: 0 },
    { id: 'cirugia', nombre: 'Cirugía General', ciclo: 'Clínico', x: 1550, y: 100 },
    { id: 'pediatria', nombre: 'Pediatría', ciclo: 'Clínico', x: 1550, y: 200 },
    { id: 'obs', nombre: 'Obstetricia', ciclo: 'Clínico', x: 1550, y: 300 },
    { id: 'gineco', nombre: 'Ginecología', ciclo: 'Clínico', x: 1550, y: 400 },
    { id: 'psiquiatria', nombre: 'Psiquiatría', ciclo: 'Clínico', x: 1550, y: 500 },
    { id: 'saludp2', nombre: 'Salud Pública II', ciclo: 'Clínico', x: 1550, y: 600 },
    
    // (Podes agregar el resto de especialidades acá con x: 1550 y bajando en el eje Y)
    
    // --- IAR (x: 1850) ---
    { id: 'iar_med', nombre: 'IAR Medicina', ciclo: 'IAR', x: 1850, y: 100 },
    { id: 'iar_cir', nombre: 'IAR Cirugía', ciclo: 'IAR', x: 1850, y: 200 },
    { id: 'iar_pedi', nombre: 'IAR Pediatría', ciclo: 'IAR', x: 1850, y: 300 },
  ],
  correlativas: [
    { source: 'mat', target: 'fis' },
    { source: 'qui', target: 'bio' },
    
    // Quimica Biológica requiere Histo y Ana
    { source: 'histo', target: 'quibio' },
    { source: 'ana', target: 'quibio' },
    
    // Hacia 3ero
    { source: 'quibio', target: 'micro' },
    { source: 'quibio', target: 'fisio' },
    { source: 'fisio', target: 'pato1' },
    { source: 'quibio', target: 'pato1' },
    { source: 'fisio', target: 'farma1' },
    { source: 'quibio', target: 'farma1' },

    // Hacia Clínico (Med A y Pato 2)
    { source: 'farma1', target: 'medA' },
    { source: 'pato1', target: 'medA' },
    { source: 'micro', target: 'medA' }, // Cursada
    
    { source: 'farma1', target: 'pato2' },
    { source: 'pato1', target: 'pato2' },

    // Clínico Avanzado
    { source: 'medA', target: 'medB' },
    { source: 'pato2', target: 'medB' },
    { source: 'medA', target: 'cirugia' },
    { source: 'pato2', target: 'cirugia' },
    { source: 'medA', target: 'pediatria' },
    { source: 'pato2', target: 'pediatria' },
    { source: 'saludp1', target: 'saludp2' },
  ]
};