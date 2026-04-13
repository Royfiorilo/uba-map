export const carrera = {
  nodos: [
// --- CICLO BÁSICO COMÚN (CBC) ---
    // El Rombo lo ponemos un poco más adelante para que las flechas salgan bien
    { id: 'cbc_master', nombre: 'Ciclo Básico Común', ciclo: 'CBC', x: 250, y: 150, type: 'rombo' },

    // Columna 1 del CBC (Más a la izquierda)
    { id: 'mat', nombre: 'Matemática', ciclo: 'CBC', x: -150, y: 0, categoria: 'obligatoria' },
    { id: 'qui', nombre: 'Química', ciclo: 'CBC', x: -150, y: 100, categoria: 'obligatoria' },
    { id: 'icse', nombre: 'ICSE', ciclo: 'CBC', x: -150, y: 200, categoria: 'obligatoria' },
    { id: 'ipc', nombre: 'IPC', ciclo: 'CBC', x: -150, y: 300, categoria: 'obligatoria' },

    // Columna 2 del CBC
    { id: 'fis', nombre: 'Física / Biofísica', ciclo: 'CBC', x: 50, y: 50, categoria: 'obligatoria' },
    { id: 'bio', nombre: 'Biología Celular', ciclo: 'CBC', x: 50, y: 250, categoria: 'obligatoria' },
    
    // --- CICLO BIOMÉDICO (1° A 3° AÑO) ---
    // Columna inicial (450): Materias de 1er año + "Libres"
    { id: 'ana', nombre: 'Anatomía', ciclo: 'Biomédico', x: 450, y: 0, categoria: 'obligatoria' },
    { id: 'histo', nombre: 'Histología y Embrio', ciclo: 'Biomédico', x: 450, y: 100, categoria: 'obligatoria' },
    { id: 'sm1', nombre: 'Salud Mental I', ciclo: 'Biomédico', x: 450, y: 200, categoria: 'obligatoria' },
    { id: 'bioetica1', nombre: 'Bioética I', ciclo: 'Biomédico', x: 450, y: 300, categoria: 'obligatoria' },
    { id: 'med_fam1', nombre: 'Medicina Familiar I', ciclo: 'Biomédico', x: 450, y: 400, categoria: 'obligatoria' },
    
    // Columna Intermedia (700): Química Biológica
    { id: 'quibio', nombre: 'Química Biológica', ciclo: 'Biomédico', x: 700, y: 50, categoria: 'obligatoria' },
    
    // Columna Final Biomédico (950): El filtro para pasar al Clínico
    { id: 'fisio', nombre: 'Fisiología y Biofísica', ciclo: 'Biomédico', x: 950, y: 50, categoria: 'obligatoria' },
    { id: 'micro', nombre: 'Microbiología', ciclo: 'Biomédico', x: 950, y: 150, categoria: 'obligatoria' },
    { id: 'pato1', nombre: 'Patología I', ciclo: 'Biomédico', x: 950, y: 250, categoria: 'obligatoria' },
    { id: 'farma1', nombre: 'Farmacología I', ciclo: 'Biomédico', x: 950, y: 350, categoria: 'obligatoria' },

    // --- CICLO CLÍNICO: TRONCALES ---
    // Columna (1250): Medicina A y sus "Libres" asociadas
    { id: 'medA', nombre: 'Medicina A', ciclo: 'Clínico', x: 1250, y: 50, categoria: 'obligatoria' },
    { id: 'pato2', nombre: 'Patología II', ciclo: 'Clínico', x: 1250, y: 150, categoria: 'obligatoria' },
    { id: 'farma2', nombre: 'Farmacología II', ciclo: 'Clínico', x: 1250, y: 250, categoria: 'obligatoria' },
    { id: 'nutri', nombre: 'Nutrición', ciclo: 'Clínico', x: 1250, y: 350, categoria: 'obligatoria' },
    { id: 'imagenes', nombre: 'Diag. por Imágenes', ciclo: 'Clínico', x: 1250, y: 450, categoria: 'obligatoria' },
    { id: 'saludp1', nombre: 'Salud Pública I', ciclo: 'Clínico', x: 1250, y: 550, categoria: 'obligatoria' },
    
    // Columna (1550): Bloque Clínico Avanzado
    { id: 'medB', nombre: 'Medicina B', ciclo: 'Clínico', x: 1550, y: 0, categoria: 'obligatoria' },
    { id: 'cirugia', nombre: 'Cirugía General', ciclo: 'Clínico', x: 1550, y: 100, categoria: 'obligatoria' },
    { id: 'pediatria', nombre: 'Pediatría', ciclo: 'Clínico', x: 1550, y: 200, categoria: 'obligatoria' },
    { id: 'obs', nombre: 'Obstetricia', ciclo: 'Clínico', x: 1550, y: 300, categoria: 'obligatoria' },
    { id: 'gineco', nombre: 'Ginecología', ciclo: 'Clínico', x: 1550, y: 400, categoria: 'obligatoria' },
    { id: 'saludp2', nombre: 'Salud Pública II', ciclo: 'Clínico', x: 1550, y: 600, categoria: 'obligatoria' },
    { id: 'bioetica2', nombre: 'Bioética II', ciclo: 'Clínico', x: 1550, y: 700, categoria: 'obligatoria' },

    // --- CICLO CLÍNICO: ESPECIALIDADES ---
    { id: 'derma', nombre: 'Dermatología', ciclo: 'Especialidades', x: 1850, y: 0, categoria: 'obligatoria' },
    { id: 'infecto', nombre: 'Infectología', ciclo: 'Especialidades', x: 1850, y: 70, categoria: 'obligatoria' },
    { id: 'neumo', nombre: 'Neumonología', ciclo: 'Especialidades', x: 1850, y: 140, categoria: 'obligatoria' },
    { id: 'neuro', nombre: 'Neurología', ciclo: 'Especialidades', x: 1850, y: 210, categoria: 'obligatoria' },
    { id: 'uro', nombre: 'Urología', ciclo: 'Especialidades', x: 1850, y: 280, categoria: 'obligatoria' },
    { id: 'orto', nombre: 'Ortopedia y Traumatol.', ciclo: 'Especialidades', x: 1850, y: 350, categoria: 'obligatoria' },
    { id: 'oftalmo', nombre: 'Oftalmología', ciclo: 'Especialidades', x: 1850, y: 420, categoria: 'obligatoria' },
    { id: 'otorrino', nombre: 'Otorrinolaringología', ciclo: 'Especialidades', x: 1850, y: 490, categoria: 'obligatoria' },
    { id: 'psiquiatria', nombre: 'Psiquiatría', ciclo: 'Especialidades', x: 1850, y: 560, categoria: 'obligatoria' },
    { id: 'toxicologia', nombre: 'Toxicología', ciclo: 'Especialidades', x: 1850, y: 630, categoria: 'obligatoria' },
    { id: 'legal', nombre: 'Medicina Legal', ciclo: 'Especialidades', x: 1850, y: 700, categoria: 'obligatoria' },
    { id: 'neurociru', nombre: 'Neurocirugía', ciclo: 'Especialidades', x: 2050, y: 0, categoria: 'obligatoria' },
    { id: 'onco', nombre: 'Oncología', ciclo: 'Especialidades', x: 2050, y: 70, categoria: 'obligatoria' },
    { id: 'rehab', nombre: 'Medicina de Rehab.', ciclo: 'Especialidades', x: 2050, y: 140, categoria: 'obligatoria' },
    { id: 'paliativos', nombre: 'Cuidados Paliativos', ciclo: 'Especialidades', x: 2050, y: 210, categoria: 'obligatoria' },

    // --- CICLO INTERNADO ANUAL ROTATORIO (IAR) ---
    { id: 'iar_med', nombre: 'IAR Medicina', ciclo: 'IAR', x: 2350, y: 100, categoria: 'obligatoria' },
    { id: 'iar_cir', nombre: 'IAR Cirugía', ciclo: 'IAR', x: 2350, y: 200, categoria: 'obligatoria' },
    { id: 'iar_toco', nombre: 'IAR Tocoginecología', ciclo: 'IAR', x: 2350, y: 300, categoria: 'obligatoria' },
    { id: 'iar_pedi', nombre: 'IAR Pediatría', ciclo: 'IAR', x: 2350, y: 400, categoria: 'obligatoria' },
    { id: 'iar_sm', nombre: 'IAR Salud Mental', ciclo: 'IAR', x: 2350, y: 500, categoria: 'obligatoria' },
    { id: 'iar_apap', nombre: 'IAR APAP', ciclo: 'IAR', x: 2350, y: 600, categoria: 'obligatoria' },

    // --- ASIGNATURAS ELECTIVAS ---
    { id: 'bioinfo', nombre: 'Bioinformática', ciclo: 'Electivas', x: 700, y: -150, categoria: 'electiva' },
    { id: 'ingles', nombre: 'Inglés Médico', ciclo: 'Electivas', x: 900, y: -150, categoria: 'electiva' },
    { id: 'metodologia', nombre: 'Metodología Invest.', ciclo: 'Electivas', x: 1100, y: -150, categoria: 'electiva' },
  ],

  correlativas: [
    // --- Puentes del CBC al Biomédico (Las 6 obligatorias desbloquean 1º Año) ---
    { source: 'mat', target: 'ana' }, { source: 'qui', target: 'ana' },
    { source: 'icse', target: 'ana' }, { source: 'ipc', target: 'ana' },
    { source: 'fis', target: 'ana' }, { source: 'bio', target: 'ana' },
    
    { source: 'mat', target: 'histo' }, { source: 'qui', target: 'histo' },
    { source: 'icse', target: 'histo' }, { source: 'ipc', target: 'histo' },
    { source: 'fis', target: 'histo' }, { source: 'bio', target: 'histo' },

    // --- CONEXIÓN DE MATERIAS "LIBRES" (Evitamos nodos huérfanos) ---
    { source: 'fis', target: 'sm1' }, { source: 'bio', target: 'sm1' },
    { source: 'fis', target: 'bioetica1' }, { source: 'bio', target: 'bioetica1' },
    { source: 'fis', target: 'med_fam1' }, { source: 'bio', target: 'med_fam1' },

    // --- Biomédico Troncal ---
    { source: 'ana', target: 'quibio' }, { source: 'histo', target: 'quibio' },
    { source: 'quibio', target: 'fisio' }, { source: 'quibio', target: 'micro' },
    { source: 'fisio', target: 'pato1' }, { source: 'fisio', target: 'farma1' },
    { source: 'quibio', target: 'pato1' }, { source: 'quibio', target: 'farma1' },

    // --- Filtro Clínico ---
    { source: 'pato1', target: 'medA' }, { source: 'farma1', target: 'medA' },
    { source: 'pato1', target: 'pato2' }, { source: 'farma1', target: 'pato2' },
    { source: 'pato1', target: 'saludp1' }, { source: 'farma1', target: 'saludp1' },

    // --- Clínico y Especialidades (Se habilitan post-MedA/Pato2) ---
    { source: 'medA', target: 'medB' }, { source: 'pato2', target: 'medB' },
    { source: 'medA', target: 'cirugia' }, { source: 'pato2', target: 'cirugia' },
    { source: 'medA', target: 'pediatria' }, { source: 'pato2', target: 'pediatria' },
    { source: 'medA', target: 'obs' }, { source: 'pato2', target: 'obs' },
    { source: 'medA', target: 'gineco' }, { source: 'pato2', target: 'gineco' },
    { source: 'medA', target: 'nutri' }, { source: 'medA', target: 'imagenes' },
    { source: 'medA', target: 'bioetica2' },
    { source: 'saludp1', target: 'saludp2' },

    // --- Conexión Especialidades ---
    { source: 'medA', target: 'derma' }, { source: 'pato2', target: 'derma' },
    { source: 'medA', target: 'neuro' }, { source: 'pato2', target: 'neuro' },
    { source: 'medA', target: 'oftalmo' }, { source: 'pato2', target: 'oftalmo' },
    { source: 'medA', target: 'psiquiatria' }, { source: 'pato2', target: 'psiquiatria' },
    { source: 'psiquiatria', target: 'legal' },

    // --- Puente al IAR ---
    { source: 'medB', target: 'iar_med' },
    { source: 'cirugia', target: 'iar_cir' },
    { source: 'pediatria', target: 'iar_pedi' },
    { source: 'gineco', target: 'iar_toco' },
    { source: 'psiquiatria', target: 'iar_sm' },
{ source: 'saludp2', target: 'iar_apap' },
{ source: 'med_fam1', target: 'iar_apap' },
  ]
  
};