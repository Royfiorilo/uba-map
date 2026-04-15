export const careersData: Record<string, any> = {
  medicina: {
    nombre: "Medicina (Plan Nuevo)",
    nodos: [
      // --- CICLO BÁSICO COMÚN (CBC) ---
      { id: 'cbc_master', nombre: 'Ciclo Básico Común', ciclo: 'CBC', x: 250, y: 150, type: 'rombo' },
      
      // Columna 1 del CBC
      { id: 'mat', nombre: 'Matemática', ciclo: 'CBC', x: -150, y: 0, categoria: 'obligatoria' },
      { id: 'qui', nombre: 'Química', ciclo: 'CBC', x: -150, y: 100, categoria: 'obligatoria' },
      { id: 'icse', nombre: 'ICSE', ciclo: 'CBC', x: -150, y: 200, categoria: 'obligatoria' },
      { id: 'ipc', nombre: 'IPC', ciclo: 'CBC', x: -150, y: 300, categoria: 'obligatoria' },
      
      // Columna 2 del CBC
      { id: 'fis', nombre: 'Biofísica', ciclo: 'CBC', x: 50, y: 50, categoria: 'obligatoria' },
      { id: 'bio', nombre: 'Biología Celular', ciclo: 'CBC', x: 50, y: 250, categoria: 'obligatoria' },
      
      // --- CICLO BIOMÉDICO: PRIMER AÑO ---
      // (En el plan nuevo, 1er año es solo Ana e Histo)
      { id: 'ana', nombre: 'Anatomía (A)', ciclo: 'Biomédico', x: 450, y: 50, categoria: 'obligatoria' },
      { id: 'histo', nombre: 'Histología (C)', ciclo: 'Biomédico', x: 450, y: 150, categoria: 'obligatoria' },

      // --- CICLO BIOMÉDICO: SEGUNDO AÑO ---
      { id: 'embrio', nombre: 'Embriología (C)', ciclo: 'Biomédico', x: 700, y: -50, categoria: 'obligatoria' },
      { id: 'genetica', nombre: 'Genética (C)', ciclo: 'Biomédico', x: 700, y: 50, categoria: 'obligatoria' },
      { id: 'fisio', nombre: 'Fisiología y Biofísica (A)', ciclo: 'Biomédico', x: 700, y: 150, categoria: 'obligatoria' },
      { id: 'bioqui', nombre: 'Bioquímica (C)', ciclo: 'Biomédico', x: 700, y: 250, categoria: 'obligatoria' },
      { id: 'inmuno', nombre: 'Inmunología (C)', ciclo: 'Biomédico', x: 700, y: 350, categoria: 'obligatoria' },
      { id: 'micro', nombre: 'Microbiología (C)', ciclo: 'Biomédico', x: 700, y: 450, categoria: 'obligatoria' },

      // --- MATERIAS TRANSVERSALES (Biomédico o Clínico) ---
      { id: 'sm', nombre: 'Salud Mental (C)', ciclo: 'Biomédico', x: 450, y: 350, categoria: 'obligatoria' },
      { id: 'sp', nombre: 'Salud Pública (C)', ciclo: 'Biomédico', x: 450, y: 450, categoria: 'obligatoria' },
      { id: 'bioetica', nombre: 'Bioética (C)', ciclo: 'Biomédico', x: 450, y: 550, categoria: 'obligatoria' },
      { id: 'ingles', nombre: 'Inglés Técnico', ciclo: 'Biomédico', x: 450, y: 650, categoria: 'obligatoria' },

      // --- CICLO CLÍNICO: TRONCALES ---
      { id: 'medA', nombre: 'Medicina A (C)', ciclo: 'Clínico', x: 1000, y: 0, categoria: 'obligatoria' },
      { id: 'pato', nombre: 'Patología (C)', ciclo: 'Clínico', x: 1000, y: 100, categoria: 'obligatoria' },
      { id: 'farma1', nombre: 'Farmacología I (C)', ciclo: 'Clínico', x: 1000, y: 200, categoria: 'obligatoria' },
      { id: 'legal', nombre: 'Med Legal y Deonto (C)', ciclo: 'Clínico', x: 1000, y: 300, categoria: 'obligatoria' },
      { id: 'toxi', nombre: 'Toxicología (C)', ciclo: 'Clínico', x: 1000, y: 400, categoria: 'obligatoria' },
      { id: 'farma2', nombre: 'Farmacología II (C)', ciclo: 'Clínico', x: 1000, y: 500, categoria: 'obligatoria' },

      // --- CICLO CLÍNICO: CLÍNICAS Y QUIRÚRGICAS ---
      { id: 'medB', nombre: 'Medicina B', ciclo: 'Clínico', x: 1300, y: -50, categoria: 'obligatoria' },
      { id: 'nutri', nombre: 'Nutrición', ciclo: 'Clínico', x: 1300, y: 50, categoria: 'obligatoria' },
      { id: 'derma', nombre: 'Dermatología', ciclo: 'Clínico', x: 1300, y: 150, categoria: 'obligatoria' },
      { id: 'infecto', nombre: 'Infectología', ciclo: 'Clínico', x: 1300, y: 250, categoria: 'obligatoria' },
      { id: 'neumo', nombre: 'Neumonología', ciclo: 'Clínico', x: 1300, y: 350, categoria: 'obligatoria' },
      { id: 'neuro', nombre: 'Neurología', ciclo: 'Clínico', x: 1300, y: 450, categoria: 'obligatoria' },
      { id: 'imagenes', nombre: 'Diag. por Imágenes', ciclo: 'Clínico', x: 1300, y: 550, categoria: 'obligatoria' },
      { id: 'psiquiatria', nombre: 'Psiquiatría', ciclo: 'Clínico', x: 1300, y: 650, categoria: 'obligatoria' },

      { id: 'pediatria', nombre: 'Pediatría', ciclo: 'Clínico', x: 1550, y: -50, categoria: 'obligatoria' },
      { id: 'obs', nombre: 'Obstetricia', ciclo: 'Clínico', x: 1550, y: 50, categoria: 'obligatoria' },
      { id: 'gineco', nombre: 'Ginecología', ciclo: 'Clínico', x: 1550, y: 150, categoria: 'obligatoria' },
      { id: 'cirugia', nombre: 'Cirugía General', ciclo: 'Clínico', x: 1550, y: 250, categoria: 'obligatoria' },
      { id: 'uro', nombre: 'Urología', ciclo: 'Clínico', x: 1550, y: 350, categoria: 'obligatoria' },
      { id: 'ortopedia', nombre: 'Ortopedia - Trauma', ciclo: 'Clínico', x: 1550, y: 450, categoria: 'obligatoria' },
      { id: 'oftalmo', nombre: 'Oftalmología', ciclo: 'Clínico', x: 1550, y: 550, categoria: 'obligatoria' },
      { id: 'otorrino', nombre: 'Otorrinolaringología', ciclo: 'Clínico', x: 1550, y: 650, categoria: 'obligatoria' },
      { id: 'neurociru', nombre: 'Neurocirugía', ciclo: 'Clínico', x: 1550, y: 750, categoria: 'obligatoria' },

      // --- PFO (Práctica Final Obligatoria) ---
      { id: 'pfo_medfam', nombre: 'PFO Med. Familiar', ciclo: 'IAR', x: 1850, y: 100, categoria: 'obligatoria' },
      { id: 'pfo_emer', nombre: 'PFO Emergentología', ciclo: 'IAR', x: 1850, y: 200, categoria: 'obligatoria' },
      { id: 'pfo_comun', nombre: 'PFO Práct. Comunitarias', ciclo: 'IAR', x: 1850, y: 300, categoria: 'obligatoria' },
      { id: 'pfo_rotaciones', nombre: 'PFO 4 Rotaciones', ciclo: 'IAR', x: 1850, y: 400, categoria: 'obligatoria' },
    ],

    correlativas: [
      // Puente CBC a 1er Año
      { source: 'mat', target: 'ana' }, { source: 'qui', target: 'ana' }, { source: 'icse', target: 'ana' }, { source: 'ipc', target: 'ana' }, { source: 'fis', target: 'ana' }, { source: 'bio', target: 'ana' },
      { source: 'mat', target: 'histo' }, { source: 'qui', target: 'histo' }, { source: 'icse', target: 'histo' }, { source: 'ipc', target: 'histo' }, { source: 'fis', target: 'histo' }, { source: 'bio', target: 'histo' },
      
      // Puente 1er Año a 2do Año (Correlativas según el esquema de rendir/cursar)
      { source: 'ana', target: 'embrio' }, { source: 'histo', target: 'embrio' },
      { source: 'ana', target: 'genetica' }, { source: 'histo', target: 'genetica' },
      { source: 'ana', target: 'fisio' }, { source: 'histo', target: 'fisio' },
      { source: 'ana', target: 'bioqui' }, { source: 'histo', target: 'bioqui' },
      
      // Puente Biomédico a Clínico
      { source: 'fisio', target: 'medA' }, { source: 'bioqui', target: 'medA' },
      { source: 'fisio', target: 'pato' }, { source: 'bioqui', target: 'pato' },
      { source: 'fisio', target: 'farma1' }, { source: 'bioqui', target: 'farma1' },

      // Puente Clínico a Especialidades
      { source: 'medA', target: 'medB' }, { source: 'pato', target: 'medB' },
      { source: 'medA', target: 'cirugia' }, { source: 'pato', target: 'cirugia' },
      { source: 'medA', target: 'pediatria' }, { source: 'pato', target: 'pediatria' },
      
      // Puente a PFO (Requiere todo aprobado)
      { source: 'medB', target: 'pfo_medfam' }, { source: 'cirugia', target: 'pfo_medfam' },
      { source: 'medB', target: 'pfo_rotaciones' }, { source: 'pediatria', target: 'pfo_rotaciones' }
    ]
  },

  nutricion: {
    nombre: "Lic. en Nutrición",
    nodos: [
      // --- CBC ---
      { id: 'cbc_master', nombre: 'Ciclo Básico Común', ciclo: 'CBC', x: 250, y: 150, type: 'rombo' },
      { id: 'mat', nombre: 'Matemática', ciclo: 'CBC', x: -150, y: 0, categoria: 'obligatoria' },
      { id: 'qui', nombre: 'Química', ciclo: 'CBC', x: -150, y: 100, categoria: 'obligatoria' },
      { id: 'icse', nombre: 'ICSE', ciclo: 'CBC', x: -150, y: 200, categoria: 'obligatoria' },
      { id: 'ipc', nombre: 'IPC', ciclo: 'CBC', x: -150, y: 300, categoria: 'obligatoria' },
      { id: 'fis', nombre: 'Física y Biofísica', ciclo: 'CBC', x: 50, y: 50, categoria: 'obligatoria' },
      { id: 'bio', nombre: 'Biología Celular', ciclo: 'CBC', x: 50, y: 250, categoria: 'obligatoria' },

      // --- SEGUNDO AÑO ---
      { id: 'bnutri', nombre: 'Bioquímica de Nutrición (A)', ciclo: 'Segundo', x: 500, y: -50, categoria: 'obligatoria' },
      { id: 'ana_n', nombre: 'Anatomía (A)', ciclo: 'Segundo', x: 500, y: 50, categoria: 'obligatoria' },
      { id: 'fisio_n', nombre: 'Fisiología (A)', ciclo: 'Segundo', x: 500, y: 150, categoria: 'obligatoria' },
      { id: 'nutri_norm', nombre: 'Nutrición Normal (A)', ciclo: 'Segundo', x: 500, y: 250, categoria: 'obligatoria' },
      { id: 'isp', nombre: 'Intro a Salud Pública', ciclo: 'Segundo', x: 500, y: 350, categoria: 'obligatoria' },
      { id: 'socio_n', nombre: 'Socioantropología', ciclo: 'Segundo', x: 500, y: 450, categoria: 'obligatoria' },
      { id: 'estadi', nombre: 'Estadística', ciclo: 'Segundo', x: 500, y: 550, categoria: 'obligatoria' },

      // --- TERCER AÑO ---
      { id: 'rh_eticas', nombre: 'Relaciones Humanas', ciclo: 'Tercer', x: 800, y: -50, categoria: 'obligatoria' },
      { id: 'comu', nombre: 'Desarrollo de Comunidad', ciclo: 'Tercer', x: 800, y: 50, categoria: 'obligatoria' },
      { id: 'fisiopato_n', nombre: 'Fisiopatología (A)', ciclo: 'Tercer', x: 800, y: 150, categoria: 'obligatoria' },
      { id: 'niño_sano', nombre: 'Alim. Niño Sano', ciclo: 'Tercer', x: 800, y: 250, categoria: 'obligatoria' },
      { id: 'tec_diet', nombre: 'Técnica Dietética (A)', ciclo: 'Tercer', x: 800, y: 350, categoria: 'obligatoria' },
      { id: 'broma', nombre: 'Bromatología (A)', ciclo: 'Tercer', x: 800, y: 450, categoria: 'obligatoria' },
      { id: 'micro_n', nombre: 'Microbiología', ciclo: 'Tercer', x: 800, y: 550, categoria: 'obligatoria' },
      { id: 'eco_gral', nombre: 'Economía Gral y Familiar', ciclo: 'Tercer', x: 800, y: 650, categoria: 'obligatoria' },
      { id: 'bioesta', nombre: 'Bioestadística', ciclo: 'Tercer', x: 800, y: 750, categoria: 'obligatoria' },
      { id: 'saneamiento', nombre: 'Saneamiento Ambiental', ciclo: 'Tercer', x: 800, y: 850, categoria: 'obligatoria' },

      // --- CUARTO AÑO ---
      { id: 'prod_merc', nombre: 'Producción y Mercadeo', ciclo: 'Cuarto', x: 1100, y: 0, categoria: 'obligatoria' },
      { id: 'metodologia_n', nombre: 'Metodología Inv.', ciclo: 'Cuarto', x: 1100, y: 100, categoria: 'obligatoria' },
      { id: 'psico_n', nombre: 'Psicología en Nutrición', ciclo: 'Cuarto', x: 1100, y: 200, categoria: 'obligatoria' },
      { id: 'educ_n', nombre: 'Educación en Nutrición (A)', ciclo: 'Cuarto', x: 1100, y: 300, categoria: 'obligatoria' },
      { id: 'adm_serv', nombre: 'Adm. Serv. Alimentación (A)', ciclo: 'Cuarto', x: 1100, y: 400, categoria: 'obligatoria' },
      { id: 'planif_san', nombre: 'Planificación Sanitaria', ciclo: 'Cuarto', x: 1100, y: 500, categoria: 'obligatoria' },

      // --- QUINTO AÑO ---
      { id: 'epidemi', nombre: 'Epidemiología', ciclo: 'Quinto', x: 1400, y: 50, categoria: 'obligatoria' },
      { id: 'eval_nutri', nombre: 'Evaluación Nutricional', ciclo: 'Quinto', x: 1400, y: 150, categoria: 'obligatoria' },
      { id: 'dietot_n', nombre: 'Dietoterapia del Adulto (A)', ciclo: 'Quinto', x: 1400, y: 250, categoria: 'obligatoria' },
      { id: 'tec_dieto', nombre: 'Técnica Dietoterápica (A)', ciclo: 'Quinto', x: 1400, y: 350, categoria: 'obligatoria' },
      { id: 'fisio_niño', nombre: 'Fisiopatología del Niño', ciclo: 'Quinto', x: 1400, y: 450, categoria: 'obligatoria' },
      { id: 'nutri_sp', nombre: 'Nutrición en Salud Pública', ciclo: 'Quinto', x: 1400, y: 550, categoria: 'obligatoria' },
      
      { id: 'prac_sp', nombre: 'Práctica Salud Pública', ciclo: 'Quinto', x: 1700, y: 200, categoria: 'obligatoria' },
      { id: 'prac_diet', nombre: 'Práctica Dietoterapia', ciclo: 'Quinto', x: 1700, y: 300, categoria: 'obligatoria' }
    ],
    correlativas: [
      // CBC a 2do
      { source: 'mat', target: 'fis' }, { source: 'qui', target: 'bio' },
      { source: 'fis', target: 'bnutri' }, { source: 'bio', target: 'bnutri' },
      
      // 2do a 3ro
      { source: 'bnutri', target: 'fisiopato_n' }, { source: 'ana_n', target: 'fisiopato_n' }, { source: 'fisio_n', target: 'fisiopato_n' },
      { source: 'nutri_norm', target: 'tec_diet' }, { source: 'bnutri', target: 'tec_diet' },
      { source: 'estadi', target: 'bioesta' },
      
      // 3ro a 4to
      { source: 'niño_sano', target: 'psico_n' }, { source: 'socio_n', target: 'psico_n' },
      { source: 'fisiopato_n', target: 'dietot_n' }, { source: 'tec_diet', target: 'dietot_n' },
      
      // 4to a 5to
      { source: 'dietot_n', target: 'prac_diet' }, { source: 'adm_serv', target: 'prac_diet' }
    ]
  },
  cosmetologia: {
    nombre: "Tecnicatura en Cosmetología",
    nodos: [
      // --- CICLO BÁSICO COMÚN (CBC) ---
      { id: 'cbc_master', nombre: 'Ciclo Básico Común', ciclo: 'CBC', x: 250, y: 150, type: 'rombo' },
      { id: 'icse', nombre: 'Trabajo y Sociedad (ICSE)', ciclo: 'CBC', x: -150, y: 50, categoria: 'obligatoria' },
      { id: 'qui', nombre: 'Química', ciclo: 'CBC', x: -150, y: 150, categoria: 'obligatoria' },
      { id: 'fis', nombre: 'Física y Biofísica', ciclo: 'CBC', x: -150, y: 250, categoria: 'obligatoria' },

      // --- PRIMER AÑO ---
      { id: 'hist_cosme', nombre: 'Historia de la Cosmetología', ciclo: 'Primer', x: 450, y: 0, categoria: 'obligatoria' },
      { id: 'ana_cosme', nombre: 'Anatomía', ciclo: 'Primer', x: 450, y: 100, categoria: 'obligatoria' },
      { id: 'bio_histo_gen', nombre: 'Biología, Histología y Gen.', ciclo: 'Primer', x: 450, y: 200, categoria: 'obligatoria' },
      { id: 'fisio_cosme', nombre: 'Fisiología', ciclo: 'Primer', x: 450, y: 300, categoria: 'obligatoria' },
      { id: 'cosme_facial', nombre: 'Cosmetología Facial y Anexos', ciclo: 'Primer', x: 450, y: 400, categoria: 'obligatoria' },

      // --- SEGUNDO AÑO ---
      // Columna 1
      { id: 'ingles_bas', nombre: 'Inglés Básico', ciclo: 'Segundo', x: 750, y: -50, categoria: 'obligatoria' },
      { id: 'derma_bas', nombre: 'Dermatología Básica', ciclo: 'Segundo', x: 750, y: 50, categoria: 'obligatoria' },
      { id: 'cosme_corp', nombre: 'Cosmetología Corporal', ciclo: 'Segundo', x: 750, y: 150, categoria: 'obligatoria' },
      { id: 'psico_gral', nombre: 'Psicología Gral. y Aplicada', ciclo: 'Segundo', x: 750, y: 250, categoria: 'obligatoria' },
      { id: 'prac_prof_2', nombre: 'Práctica Prof. 2do Año (A)', ciclo: 'Segundo', x: 750, y: 350, categoria: 'obligatoria' },
      { id: 'maq_bas', nombre: 'Maquillaje Básico', ciclo: 'Segundo', x: 750, y: 450, categoria: 'obligatoria' },

      // Columna 2
      { id: 'nutri_cosme', nombre: 'Intro a la Nutrición', ciclo: 'Segundo', x: 1050, y: 0, categoria: 'obligatoria' },
      { id: 'bioestadistica', nombre: 'Bioestadística y Epid.', ciclo: 'Segundo', x: 1050, y: 100, categoria: 'obligatoria' },
      { id: 'micro_cosme', nombre: 'Microbiología', ciclo: 'Segundo', x: 1050, y: 200, categoria: 'obligatoria' },
      { id: 'quim_cosme', nombre: 'Química Cosmética', ciclo: 'Segundo', x: 1050, y: 300, categoria: 'obligatoria' },

      // --- TERCER AÑO ---
      // Columna 1
      { id: 'prac_prof_3', nombre: 'Práctica Prof. 3er Año (A)', ciclo: 'Tercer', x: 1350, y: -50, categoria: 'obligatoria' },
      { id: 'derma_semio', nombre: 'Derma y Semiología Cosm.', ciclo: 'Tercer', x: 1350, y: 50, categoria: 'obligatoria' },
      { id: 'mkt_cosme', nombre: 'Marketing Cosmetológico', ciclo: 'Tercer', x: 1350, y: 150, categoria: 'obligatoria' },
      { id: 'maq_terap', nombre: 'Maquillaje Terapéutico', ciclo: 'Tercer', x: 1350, y: 250, categoria: 'obligatoria' },
      { id: 'salud_pub_cosme', nombre: 'Salud Pública', ciclo: 'Tercer', x: 1350, y: 350, categoria: 'obligatoria' },
      { id: 'tec_cosme', nombre: 'Tecnología Cosmetológica', ciclo: 'Tercer', x: 1350, y: 450, categoria: 'obligatoria' },

      // Columna 2
      { id: 'bioetica_cosme', nombre: 'Bioética y Derma Cosmética', ciclo: 'Tercer', x: 1650, y: 100, categoria: 'obligatoria' },
      { id: 'info_cosme', nombre: 'Informática', ciclo: 'Tercer', x: 1650, y: 200, categoria: 'obligatoria' },
      { id: 'ingles_tec', nombre: 'Inglés Técnico', ciclo: 'Tercer', x: 1650, y: 300, categoria: 'obligatoria' },

      // --- ELECTIVAS ---
      { id: 'elec_teatral', nombre: 'Carac. Teatral y Maq. Art.', ciclo: 'Electivas', x: 1950, y: 0, categoria: 'electiva' },
      { id: 'elec_dermo', nombre: 'Dermopigmentación', ciclo: 'Electivas', x: 1950, y: 100, categoria: 'electiva' },
      { id: 'elec_mani', nombre: 'Seminario de Manicuría', ciclo: 'Electivas', x: 1950, y: 200, categoria: 'electiva' },
      { id: 'elec_depi', nombre: 'Seminario de Depilación', ciclo: 'Electivas', x: 1950, y: 300, categoria: 'electiva' },
      { id: 'elec_mani_est', nombre: 'Seminario Manicuría Estét.', ciclo: 'Electivas', x: 1950, y: 400, categoria: 'electiva' }
    ],
    correlativas: [
      // --- Puente CBC a 1er Año ---
      { source: 'icse', target: 'hist_cosme' }, { source: 'qui', target: 'hist_cosme' }, { source: 'fis', target: 'hist_cosme' },
      { source: 'icse', target: 'ana_cosme' }, { source: 'qui', target: 'ana_cosme' }, { source: 'fis', target: 'ana_cosme' },
      { source: 'icse', target: 'bio_histo_gen' }, { source: 'qui', target: 'bio_histo_gen' }, { source: 'fis', target: 'bio_histo_gen' },
      { source: 'icse', target: 'fisio_cosme' }, { source: 'qui', target: 'fisio_cosme' }, { source: 'fis', target: 'fisio_cosme' },
      { source: 'icse', target: 'cosme_facial' }, { source: 'qui', target: 'cosme_facial' }, { source: 'fis', target: 'cosme_facial' },

      // --- Puente CBC directo a 2do Año (Solo piden CBC) ---
      { source: 'icse', target: 'ingles_bas' }, { source: 'qui', target: 'ingles_bas' }, { source: 'fis', target: 'ingles_bas' },
      { source: 'icse', target: 'derma_bas' }, { source: 'qui', target: 'derma_bas' }, { source: 'fis', target: 'derma_bas' },
      { source: 'icse', target: 'cosme_corp' }, { source: 'qui', target: 'cosme_corp' }, { source: 'fis', target: 'cosme_corp' },
      { source: 'icse', target: 'psico_gral' }, { source: 'qui', target: 'psico_gral' }, { source: 'fis', target: 'psico_gral' },

      // --- 1er Año a 2do Año ---
      { source: 'ana_cosme', target: 'prac_prof_2' }, { source: 'bio_histo_gen', target: 'prac_prof_2' }, { source: 'fisio_cosme', target: 'prac_prof_2' }, { source: 'cosme_facial', target: 'prac_prof_2' },
      { source: 'hist_cosme', target: 'maq_bas' }, { source: 'cosme_facial', target: 'maq_bas' },
      { source: 'ana_cosme', target: 'nutri_cosme' }, { source: 'bio_histo_gen', target: 'nutri_cosme' }, { source: 'fisio_cosme', target: 'nutri_cosme' }, { source: 'cosme_facial', target: 'nutri_cosme' },

      { source: 'ana_cosme', target: 'bioestadistica' }, { source: 'bio_histo_gen', target: 'bioestadistica' }, { source: 'fisio_cosme', target: 'bioestadistica' }, { source: 'cosme_facial', target: 'bioestadistica' }, { source: 'derma_bas', target: 'bioestadistica' }, { source: 'cosme_corp', target: 'bioestadistica' },
      { source: 'ana_cosme', target: 'micro_cosme' }, { source: 'bio_histo_gen', target: 'micro_cosme' }, { source: 'fisio_cosme', target: 'micro_cosme' }, { source: 'cosme_facial', target: 'micro_cosme' }, { source: 'derma_bas', target: 'micro_cosme' }, { source: 'cosme_corp', target: 'micro_cosme' },
      { source: 'ana_cosme', target: 'quim_cosme' }, { source: 'bio_histo_gen', target: 'quim_cosme' }, { source: 'fisio_cosme', target: 'quim_cosme' }, { source: 'cosme_facial', target: 'quim_cosme' }, { source: 'derma_bas', target: 'quim_cosme' }, { source: 'cosme_corp', target: 'quim_cosme' }, { source: 'maq_bas', target: 'quim_cosme' },

      // --- 2do a 3er Año ---
      { source: 'ana_cosme', target: 'prac_prof_3' }, { source: 'bio_histo_gen', target: 'prac_prof_3' }, { source: 'fisio_cosme', target: 'prac_prof_3' }, { source: 'cosme_facial', target: 'prac_prof_3' }, { source: 'prac_prof_2', target: 'prac_prof_3' }, { source: 'maq_bas', target: 'prac_prof_3' }, { source: 'psico_gral', target: 'prac_prof_3' }, { source: 'derma_bas', target: 'prac_prof_3' }, { source: 'ingles_bas', target: 'prac_prof_3' }, { source: 'cosme_corp', target: 'prac_prof_3' },
      
      { source: 'ana_cosme', target: 'derma_semio' }, { source: 'bio_histo_gen', target: 'derma_semio' }, { source: 'fisio_cosme', target: 'derma_semio' }, { source: 'cosme_facial', target: 'derma_semio' }, { source: 'prac_prof_2', target: 'derma_semio' }, { source: 'maq_bas', target: 'derma_semio' }, { source: 'psico_gral', target: 'derma_semio' }, { source: 'derma_bas', target: 'derma_semio' }, { source: 'ingles_bas', target: 'derma_semio' }, { source: 'cosme_corp', target: 'derma_semio' }, { source: 'micro_cosme', target: 'derma_semio' }, { source: 'bioestadistica', target: 'derma_semio' }, { source: 'quim_cosme', target: 'derma_semio' }, { source: 'nutri_cosme', target: 'derma_semio' },

      { source: 'cosme_facial', target: 'maq_terap' }, { source: 'maq_bas', target: 'maq_terap' },

      { source: 'hist_cosme', target: 'salud_pub_cosme' }, { source: 'ana_cosme', target: 'salud_pub_cosme' }, { source: 'bio_histo_gen', target: 'salud_pub_cosme' }, { source: 'fisio_cosme', target: 'salud_pub_cosme' }, { source: 'cosme_facial', target: 'salud_pub_cosme' }, { source: 'prac_prof_2', target: 'salud_pub_cosme' }, { source: 'maq_bas', target: 'salud_pub_cosme' }, { source: 'derma_bas', target: 'salud_pub_cosme' }, { source: 'cosme_corp', target: 'salud_pub_cosme' }, { source: 'micro_cosme', target: 'salud_pub_cosme' }, { source: 'quim_cosme', target: 'salud_pub_cosme' },
      
      { source: 'hist_cosme', target: 'tec_cosme' }, { source: 'ana_cosme', target: 'tec_cosme' }, { source: 'bio_histo_gen', target: 'tec_cosme' }, { source: 'fisio_cosme', target: 'tec_cosme' }, { source: 'cosme_facial', target: 'tec_cosme' }, { source: 'prac_prof_2', target: 'tec_cosme' }, { source: 'maq_bas', target: 'tec_cosme' }, { source: 'derma_bas', target: 'tec_cosme' }, { source: 'cosme_corp', target: 'tec_cosme' }, { source: 'micro_cosme', target: 'tec_cosme' }, { source: 'quim_cosme', target: 'tec_cosme' },

      // Bioética (Bloqueo masivo: pide 1ro, 2do y específicas de 3ro)
      { source: 'derma_semio', target: 'bioetica_cosme' }, { source: 'mkt_cosme', target: 'bioetica_cosme' }, { source: 'maq_terap', target: 'bioetica_cosme' }, { source: 'salud_pub_cosme', target: 'bioetica_cosme' },
      { source: 'hist_cosme', target: 'bioetica_cosme' }, { source: 'ana_cosme', target: 'bioetica_cosme' }, { source: 'bio_histo_gen', target: 'bioetica_cosme' }, { source: 'fisio_cosme', target: 'bioetica_cosme' }, { source: 'cosme_facial', target: 'bioetica_cosme' },
      { source: 'ingles_bas', target: 'bioetica_cosme' }, { source: 'prac_prof_2', target: 'bioetica_cosme' }, { source: 'derma_bas', target: 'bioetica_cosme' }, { source: 'cosme_corp', target: 'bioetica_cosme' }, { source: 'psico_gral', target: 'bioetica_cosme' }, { source: 'maq_bas', target: 'bioetica_cosme' }, { source: 'nutri_cosme', target: 'bioetica_cosme' }, { source: 'bioestadistica', target: 'bioetica_cosme' }, { source: 'micro_cosme', target: 'bioetica_cosme' }, { source: 'quim_cosme', target: 'bioetica_cosme' },

      // --- Electivas --- (Mismas correlativas para todas: 1er año + gran parte de 2do)
      ...['elec_teatral', 'elec_dermo', 'elec_mani', 'elec_depi', 'elec_mani_est'].flatMap(electiva => [
         { source: 'hist_cosme', target: electiva }, { source: 'ana_cosme', target: electiva }, { source: 'bio_histo_gen', target: electiva }, { source: 'fisio_cosme', target: electiva }, { source: 'cosme_facial', target: electiva },
         { source: 'prac_prof_2', target: electiva }, { source: 'maq_bas', target: electiva }, { source: 'psico_gral', target: electiva }, { source: 'derma_bas', target: electiva }, { source: 'ingles_bas', target: electiva }, { source: 'cosme_corp', target: electiva }, { source: 'micro_cosme', target: electiva }, { source: 'bioestadistica', target: electiva }, { source: 'quim_cosme', target: electiva }, { source: 'nutri_cosme', target: electiva }
      ])
    ]
  },

  kinesiologia: {
    nombre: "Licenciatura en Kinesiología y Fisiatría",
    nodos: [
      // --- CICLO BÁSICO COMÚN (CBC) ---
      { id: 'cbc_master', nombre: 'Ciclo Básico Común', ciclo: 'CBC', x: 250, y: 150, type: 'rombo' },
      { id: 'mat', nombre: 'Matemática', ciclo: 'CBC', x: -150, y: 0, categoria: 'obligatoria' },
      { id: 'qui', nombre: 'Química', ciclo: 'CBC', x: -150, y: 100, categoria: 'obligatoria' },
      { id: 'icse', nombre: 'ICSE', ciclo: 'CBC', x: -150, y: 200, categoria: 'obligatoria' },
      { id: 'ipc', nombre: 'IPC', ciclo: 'CBC', x: -150, y: 300, categoria: 'obligatoria' },
      { id: 'fis', nombre: 'Física / Biofísica', ciclo: 'CBC', x: 50, y: 50, categoria: 'obligatoria' },
      { id: 'bio', nombre: 'Biología Celular', ciclo: 'CBC', x: 50, y: 250, categoria: 'obligatoria' },

      // --- PRIMER AÑO ---
      { id: 'ana_k', nombre: 'Anatomía (A)', ciclo: 'Primer', x: 450, y: 0, categoria: 'obligatoria' },
      { id: 'biofis_k', nombre: 'Biofísica (A)', ciclo: 'Primer', x: 450, y: 100, categoria: 'obligatoria' },
      { id: 'biohis_k', nombre: 'Biol, Histo, Embrio y Genética (A)', ciclo: 'Primer', x: 450, y: 200, categoria: 'obligatoria' },
      { id: 'fisio_k', nombre: 'Fisiología (A)', ciclo: 'Primer', x: 450, y: 300, categoria: 'obligatoria' },
      { id: 'mod_k', nombre: 'Módulo Intro. a Kinesiología', ciclo: 'Primer', x: 450, y: 400, categoria: 'obligatoria' },
      { id: 'psico_k', nombre: 'Psicología Médica', ciclo: 'Primer', x: 450, y: 500, categoria: 'obligatoria' },

      // --- SEGUNDO AÑO ---
      { id: 'biomec', nombre: 'Biomecánica y Anat. Func. (A)', ciclo: 'Segundo', x: 750, y: -50, categoria: 'obligatoria' },
      { id: 'fisio1', nombre: 'Fisioterapia I', ciclo: 'Segundo', x: 750, y: 50, categoria: 'obligatoria' },
      { id: 'semio_med', nombre: 'Semiopatología Médica (A)', ciclo: 'Segundo', x: 750, y: 150, categoria: 'obligatoria' },
      { id: 'tk1', nombre: 'Técnicas Kinésicas I (A)', ciclo: 'Segundo', x: 750, y: 250, categoria: 'obligatoria' },
      { id: 'eval_k', nombre: 'Evaluaciones Kinefisiátricas', ciclo: 'Segundo', x: 750, y: 350, categoria: 'obligatoria' },
      { id: 'quibio_k', nombre: 'Química Biológica', ciclo: 'Segundo', x: 750, y: 450, categoria: 'obligatoria' },

      // --- TERCER AÑO ---
      { id: 'semio_qui', nombre: 'Semiopatología Quirúrgica (A)', ciclo: 'Tercer', x: 1050, y: -50, categoria: 'obligatoria' },
      { id: 'tk2', nombre: 'Técnicas Kinésicas II (A)', ciclo: 'Tercer', x: 1050, y: 50, categoria: 'obligatoria' },
      { id: 'farma_k', nombre: 'Farmacología', ciclo: 'Tercer', x: 1050, y: 150, categoria: 'obligatoria' },
      { id: 'fisio2', nombre: 'Fisioterapia II y Climatoterapia', ciclo: 'Tercer', x: 1050, y: 250, categoria: 'obligatoria' },
      { id: 'kinefi', nombre: 'Kinefilaxia', ciclo: 'Tercer', x: 1050, y: 350, categoria: 'obligatoria' },
      { id: 'metodo_k', nombre: 'Metodología de la Investigación', ciclo: 'Tercer', x: 1050, y: 450, categoria: 'obligatoria' },
      { id: 'mod_ap', nombre: 'Módulo de Atención Primaria', ciclo: 'Tercer', x: 1050, y: 550, categoria: 'obligatoria' },

      // --- CUARTO AÑO ---
      { id: 'clin_fisio', nombre: 'Clínica Fisiátrica Médica (A)', ciclo: 'Cuarto', x: 1350, y: 0, categoria: 'obligatoria' },
      { id: 'psicomotriz', nombre: 'Psicomotricidad y Neurodesarrollo', ciclo: 'Cuarto', x: 1350, y: 100, categoria: 'obligatoria' },
      { id: 'tk3', nombre: 'Técnicas Kinésicas III (A)', ciclo: 'Cuarto', x: 1350, y: 200, categoria: 'obligatoria' },
      { id: 'kine_depor', nombre: 'Kinesiología Deportiva', ciclo: 'Cuarto', x: 1350, y: 300, categoria: 'obligatoria' },
      { id: 'ortesis', nombre: 'Ortesis y Prótesis', ciclo: 'Cuarto', x: 1350, y: 400, categoria: 'obligatoria' },

      // --- QUINTO AÑO ---
      { id: 'clin_kine_qui', nombre: 'Clínica Kinefisiátrica Quir. (A)', ciclo: 'Quinto', x: 1650, y: -50, categoria: 'obligatoria' },
      { id: 'bioinfo_k', nombre: 'Bioinformática y Rehab. Comp.', ciclo: 'Quinto', x: 1650, y: 50, categoria: 'obligatoria' },
      { id: 'kine_estet', nombre: 'Kinefisiatría Estética', ciclo: 'Quinto', x: 1650, y: 150, categoria: 'obligatoria' },
      { id: 'kine_ocup', nombre: 'Kinesiología Ocup. y Laboral', ciclo: 'Quinto', x: 1650, y: 250, categoria: 'obligatoria' },
      { id: 'kine_legal', nombre: 'Kinefisiatría Legal y Deontología', ciclo: 'Quinto', x: 1650, y: 350, categoria: 'obligatoria' },
      { id: 'org_hosp', nombre: 'Organización Hospitalaria', ciclo: 'Quinto', x: 1650, y: 450, categoria: 'obligatoria' }
    ],
    correlativas: [
      // Puente CBC a 1er Año
      { source: 'mat', target: 'ana_k' }, { source: 'qui', target: 'ana_k' }, { source: 'icse', target: 'ana_k' }, { source: 'ipc', target: 'ana_k' }, { source: 'fis', target: 'ana_k' }, { source: 'bio', target: 'ana_k' },
      { source: 'mat', target: 'biofis_k' }, { source: 'qui', target: 'biohis_k' }, { source: 'fis', target: 'fisio_k' }, { source: 'bio', target: 'psico_k' },
      
      // 1er a 2do Año
      { source: 'ana_k', target: 'biomec' }, { source: 'biofis_k', target: 'biomec' }, { source: 'fisio_k', target: 'biomec' }, { source: 'mod_k', target: 'biomec' },
      { source: 'ana_k', target: 'fisio1' }, { source: 'biohis_k', target: 'fisio1' }, { source: 'fisio_k', target: 'fisio1' },
      { source: 'ana_k', target: 'semio_med' }, { source: 'fisio_k', target: 'semio_med' },
      { source: 'ana_k', target: 'tk1' }, { source: 'fisio_k', target: 'tk1' }, { source: 'mod_k', target: 'tk1' },
      { source: 'fisio_k', target: 'eval_k' }, { source: 'mod_k', target: 'eval_k' },
      { source: 'biohis_k', target: 'quibio_k' },

      // 2do a 3er Año
      { source: 'biomec', target: 'semio_qui' }, { source: 'eval_k', target: 'semio_qui' }, { source: 'semio_med', target: 'semio_qui' },
      { source: 'biomec', target: 'tk2' }, { source: 'eval_k', target: 'tk2' }, { source: 'semio_med', target: 'tk2' }, { source: 'tk1', target: 'tk2' },
      { source: 'quibio_k', target: 'farma_k' }, { source: 'semio_med', target: 'farma_k' },
      { source: 'semio_med', target: 'fisio2' }, { source: 'fisio1', target: 'fisio2' }, { source: 'quibio_k', target: 'fisio2' },
      { source: 'biomec', target: 'kinefi' }, { source: 'tk1', target: 'kinefi' },
      { source: 'semio_med', target: 'metodo_k' }, { source: 'eval_k', target: 'metodo_k' },
      { source: 'semio_med', target: 'mod_ap' }, { source: 'fisio1', target: 'mod_ap' },

      // 3er a 4to Año
      { source: 'tk2', target: 'clin_fisio' }, { source: 'farma_k', target: 'clin_fisio' },
      { source: 'tk2', target: 'psicomotriz' }, { source: 'kinefi', target: 'psicomotriz' },
      { source: 'semio_qui', target: 'tk3' }, { source: 'tk2', target: 'tk3' },
      { source: 'kinefi', target: 'kine_depor' }, { source: 'semio_qui', target: 'kine_depor' },
      { source: 'semio_qui', target: 'ortesis' }, { source: 'metodo_k', target: 'ortesis' },

      // 4to a 5to Año
      { source: 'tk3', target: 'clin_kine_qui' }, { source: 'clin_fisio', target: 'clin_kine_qui' }, { source: 'psicomotriz', target: 'clin_kine_qui' },
      { source: 'tk3', target: 'bioinfo_k' }, { source: 'ortesis', target: 'bioinfo_k' },
      { source: 'clin_fisio', target: 'kine_estet' },
      { source: 'clin_fisio', target: 'kine_ocup' }, { source: 'ortesis', target: 'kine_ocup' },
      { source: 'clin_fisio', target: 'kine_legal' }, { source: 'kine_depor', target: 'kine_legal' },
      { source: 'clin_fisio', target: 'org_hosp' }
    ]
  },
  hemoterapia: {
    nombre: "Hemoterapia e Inmunohematología",
    nodos: [
      // --- CICLO BÁSICO COMÚN (CBC) ---
      { id: 'cbc_master', nombre: 'Ciclo Básico Común', ciclo: 'CBC', x: 250, y: 150, type: 'rombo' },
      { id: 'icse', nombre: 'Trabajo y Sociedad', ciclo: 'CBC', x: -150, y: 50, categoria: 'obligatoria' },
      { id: 'qui', nombre: 'Química', ciclo: 'CBC', x: -150, y: 150, categoria: 'obligatoria' },
      { id: 'bio_intro', nombre: 'Biol. e Intro. a Biol. Cel.', ciclo: 'CBC', x: -150, y: 250, categoria: 'obligatoria' },

      // --- PRIMER AÑO ---
      { id: 'hist_med_trans', nombre: 'Hist. de Med. Transfusional', ciclo: 'Primer', x: 450, y: 0, categoria: 'obligatoria' },
      { id: 'ana_h', nombre: 'Anatomía', ciclo: 'Primer', x: 450, y: 100, categoria: 'obligatoria' },
      { id: 'histo_h', nombre: 'Histología', ciclo: 'Primer', x: 450, y: 200, categoria: 'obligatoria' },
      { id: 'fisio_gral', nombre: 'Fisiología General', ciclo: 'Primer', x: 450, y: 300, categoria: 'obligatoria' },
      { id: 'fisio_sangre', nombre: 'Fisiología de la Sangre', ciclo: 'Primer', x: 450, y: 400, categoria: 'obligatoria' },
      { id: 'salud_pub_h', nombre: 'Salud Pública', ciclo: 'Primer', x: 450, y: 500, categoria: 'obligatoria' },

      // --- SEGUNDO AÑO (Bloque 1) ---
      { id: 'ingles_bas_h', nombre: 'Inglés Básico', ciclo: 'Segundo', x: 750, y: -50, categoria: 'obligatoria' },
      { id: 'micro_h', nombre: 'Microbiología', ciclo: 'Segundo', x: 750, y: 50, categoria: 'obligatoria' },
      { id: 'inmuno_h', nombre: 'Inmunología', ciclo: 'Segundo', x: 750, y: 150, categoria: 'obligatoria' },
      { id: 'banco_sangre', nombre: 'Banco de Sangre', ciclo: 'Segundo', x: 750, y: 250, categoria: 'obligatoria' },
      { id: 'inmunohema', nombre: 'Inmunohematología', ciclo: 'Segundo', x: 750, y: 350, categoria: 'obligatoria' },
      { id: 'inmunosero', nombre: 'Inmunoserología', ciclo: 'Segundo', x: 750, y: 450, categoria: 'obligatoria' },
      { id: 'bioest_h', nombre: 'Bioestadística y Epid.', ciclo: 'Segundo', x: 750, y: 550, categoria: 'obligatoria' },

      // --- SEGUNDO AÑO (Bloque 2 - Requieren las del Bloque 1) ---
      { id: 'pato_inmuno', nombre: 'Patología Inmunohematológica', ciclo: 'Segundo', x: 1050, y: 200, categoria: 'obligatoria' },
      { id: 'prac_prof_2_h', nombre: 'Prácticas Prof. 2do Año', ciclo: 'Segundo', x: 1050, y: 350, categoria: 'obligatoria' },

      // --- TERCER AÑO ---
      { id: 'ingles_tec_h', nombre: 'Inglés Técnico', ciclo: 'Tercer', x: 1350, y: -50, categoria: 'obligatoria' },
      { id: 'terapia_trans', nombre: 'Terapia Transfusional', ciclo: 'Tercer', x: 1350, y: 150, categoria: 'obligatoria' },
      { id: 'deonto_h', nombre: 'Deontología Profesional', ciclo: 'Tercer', x: 1350, y: 300, categoria: 'obligatoria' },
      { id: 'prac_prof_3_h', nombre: 'Prácticas Prof. 3er Año', ciclo: 'Tercer', x: 1350, y: 450, categoria: 'obligatoria' },

      // --- ELECTIVAS ---
      { id: 'elec_promo', nombre: 'Promoción Donación Sangre', ciclo: 'Electivas', x: 1650, y: 50, categoria: 'electiva' },
      { id: 'elec_cordon', nombre: 'Banco Sangre Cordón Umb.', ciclo: 'Electivas', x: 1650, y: 150, categoria: 'electiva' },
      { id: 'elec_tejidos', nombre: 'Banco de Tejidos', ciclo: 'Electivas', x: 1650, y: 250, categoria: 'electiva' },
      { id: 'elec_biomol', nombre: 'Biol. Molecular en Banco', ciclo: 'Electivas', x: 1650, y: 350, categoria: 'electiva' }
    ],
    correlativas: [
      // --- Puente CBC a 1er Año y Inglés Básico ---
      { source: 'icse', target: 'hist_med_trans' }, { source: 'qui', target: 'hist_med_trans' }, { source: 'bio_intro', target: 'hist_med_trans' },
      { source: 'icse', target: 'ana_h' }, { source: 'qui', target: 'ana_h' }, { source: 'bio_intro', target: 'ana_h' },
      { source: 'icse', target: 'histo_h' }, { source: 'qui', target: 'histo_h' }, { source: 'bio_intro', target: 'histo_h' },
      { source: 'icse', target: 'fisio_gral' }, { source: 'qui', target: 'fisio_gral' }, { source: 'bio_intro', target: 'fisio_gral' },
      { source: 'icse', target: 'fisio_sangre' }, { source: 'qui', target: 'fisio_sangre' }, { source: 'bio_intro', target: 'fisio_sangre' },
      { source: 'icse', target: 'salud_pub_h' }, { source: 'qui', target: 'salud_pub_h' }, { source: 'bio_intro', target: 'salud_pub_h' },
      { source: 'icse', target: 'ingles_bas_h' }, { source: 'qui', target: 'ingles_bas_h' }, { source: 'bio_intro', target: 'ingles_bas_h' },

      // --- 1er a 2do Año (Bloque 1) ---
      ...['micro_h', 'inmuno_h', 'banco_sangre', 'inmunohema', 'inmunosero', 'bioest_h'].flatMap(target => [
        { source: 'ana_h', target },
        { source: 'histo_h', target },
        { source: 'fisio_sangre', target }
      ]),

      // --- 2do Año Bloque 1 a 2do Año Bloque 2 ---
      { source: 'inmuno_h', target: 'pato_inmuno' }, { source: 'inmunohema', target: 'pato_inmuno' }, { source: 'banco_sangre', target: 'pato_inmuno' }, { source: 'inmunosero', target: 'pato_inmuno' },
      { source: 'inmunohema', target: 'prac_prof_2_h' }, { source: 'banco_sangre', target: 'prac_prof_2_h' }, { source: 'inmunosero', target: 'prac_prof_2_h' },

      // --- 2do a 3er Año ---
      { source: 'ingles_bas_h', target: 'ingles_tec_h' },
      
      { source: 'prac_prof_2_h', target: 'terapia_trans' }, { source: 'pato_inmuno', target: 'terapia_trans' }, { source: 'inmunosero', target: 'terapia_trans' },
      
      // Deontología pide "2do Año Regular" (todas las de 2do)
      ...['ingles_bas_h', 'micro_h', 'inmuno_h', 'banco_sangre', 'inmunohema', 'inmunosero', 'bioest_h', 'pato_inmuno', 'prac_prof_2_h'].map(source => (
        { source, target: 'deonto_h' }
      )),

      // Prácticas de 3er año pide un combo masivo de 2do año y bases de 3ro
      { source: 'ingles_bas_h', target: 'prac_prof_3_h' }, { source: 'bioest_h', target: 'prac_prof_3_h' }, { source: 'micro_h', target: 'prac_prof_3_h' }, { source: 'inmuno_h', target: 'prac_prof_3_h' }, { source: 'banco_sangre', target: 'prac_prof_3_h' }, { source: 'inmunohema', target: 'prac_prof_3_h' }, { source: 'inmunosero', target: 'prac_prof_3_h' }, { source: 'pato_inmuno', target: 'prac_prof_3_h' }, { source: 'prac_prof_2_h', target: 'prac_prof_3_h' },

      // --- Electivas --- (Piden Prácticas Profesionales de 2do año)
      { source: 'prac_prof_2_h', target: 'elec_promo' },
      { source: 'prac_prof_2_h', target: 'elec_cordon' },
      { source: 'prac_prof_2_h', target: 'elec_tejidos' },
      { source: 'prac_prof_2_h', target: 'elec_biomol' }
    ]
  },
  obstetricia: {
    nombre: "Licenciatura en Obstetricia",
    nodos: [
      // --- CICLO BÁSICO COMÚN (CBC) ---
      // (Usamos los IDs globales de tu store actual)
      { id: 'cbc_master', nombre: 'Ciclo Básico Común', ciclo: 'CBC', x: 250, y: 150, type: 'rombo' },
      { id: 'mat', nombre: 'Matemática', ciclo: 'CBC', x: -150, y: 0, categoria: 'obligatoria' },
      { id: 'qui', nombre: 'Química', ciclo: 'CBC', x: -150, y: 100, categoria: 'obligatoria' },
      { id: 'icse', nombre: 'ICSE', ciclo: 'CBC', x: -150, y: 200, categoria: 'obligatoria' },
      { id: 'ipc', nombre: 'IPC', ciclo: 'CBC', x: -150, y: 300, categoria: 'obligatoria' },
      { id: 'fis', nombre: 'Física e Int. a Biofísica', ciclo: 'CBC', x: 50, y: 50, categoria: 'obligatoria' },
      { id: 'bio', nombre: 'Biol. Celular', ciclo: 'CBC', x: 50, y: 250, categoria: 'obligatoria' },

      // --- PRIMER AÑO ---
      { id: 'ana_obs', nombre: 'Anatomía (A)', ciclo: 'Primer', x: 450, y: -150, categoria: 'obligatoria' },
      { id: 'fisio_obs', nombre: 'Fisiología (A)', ciclo: 'Primer', x: 450, y: -50, categoria: 'obligatoria' },
      { id: 'histo_obs', nombre: 'Histología, Embrio y Genética (A)', ciclo: 'Primer', x: 450, y: 50, categoria: 'obligatoria' },
      { id: 'quim_bio_obs', nombre: 'Química Biológica', ciclo: 'Primer', x: 450, y: 150, categoria: 'obligatoria' },
      { id: 'fis_bio_obs', nombre: 'Física Biológica', ciclo: 'Primer', x: 450, y: 250, categoria: 'obligatoria' },
      { id: 'micro_obs', nombre: 'Microbio, Parasito e Inmuno', ciclo: 'Primer', x: 450, y: 350, categoria: 'obligatoria' },
      { id: 'intro_obs', nombre: 'Int. a la Disciplina Obstétrica', ciclo: 'Primer', x: 450, y: 450, categoria: 'obligatoria' },
      { id: 'intro_hosp', nombre: 'Int. al Ambiente Hospitalario', ciclo: 'Primer', x: 450, y: 550, categoria: 'obligatoria' },
      { id: 'sm_obs', nombre: 'Salud Mental', ciclo: 'Primer', x: 450, y: 650, categoria: 'obligatoria' },

      // --- SEGUNDO AÑO ---
      { id: 'obs_norm', nombre: 'Obstetricia Normal (A)', ciclo: 'Segundo', x: 750, y: -100, categoria: 'obligatoria' },
      { id: 'neo_norm', nombre: 'Neonatología Normal', ciclo: 'Segundo', x: 750, y: 0, categoria: 'obligatoria' },
      { id: 'farma_obs', nombre: 'Farmacología Reproductiva', ciclo: 'Segundo', x: 750, y: 100, categoria: 'obligatoria' },
      { id: 'aps_obs', nombre: 'Atención Primaria de la Salud', ciclo: 'Segundo', x: 750, y: 200, categoria: 'obligatoria' },
      { id: 'at_preco', nombre: 'Atención Preconcepcional', ciclo: 'Segundo', x: 750, y: 300, categoria: 'obligatoria' },
      { id: 'psico_gral_obs', nombre: 'Psicología General', ciclo: 'Segundo', x: 750, y: 400, categoria: 'obligatoria' },
      { id: 'nutri_mat', nombre: 'Nutrición Materno Infantil', ciclo: 'Segundo', x: 750, y: 500, categoria: 'obligatoria' },
      { id: 'prac_hosp_1', nombre: 'Práctica Hospitalaria I (A)', ciclo: 'Segundo', x: 750, y: 600, categoria: 'obligatoria' },

      // --- TERCER AÑO ---
      { id: 'obs_pato', nombre: 'Obstetricia Patológica y Quir. (A)', ciclo: 'Tercer', x: 1050, y: -100, categoria: 'obligatoria' },
      { id: 'neo_pato', nombre: 'Neonatología Patológica', ciclo: 'Tercer', x: 1050, y: 0, categoria: 'obligatoria' },
      { id: 'deonto_obs', nombre: 'Deontología y Bioética (A)', ciclo: 'Tercer', x: 1050, y: 100, categoria: 'obligatoria' },
      { id: 'psico_evo', nombre: 'Psicología Evolutiva del Emb.', ciclo: 'Tercer', x: 1050, y: 200, categoria: 'obligatoria' },
      { id: 'antro_obs', nombre: 'Antropología Obstétrica', ciclo: 'Tercer', x: 1050, y: 300, categoria: 'obligatoria' },
      { id: 'educ_salud_obs', nombre: 'Educ. para la Salud (Mujer/Niño)', ciclo: 'Tercer', x: 1050, y: 400, categoria: 'obligatoria' },
      { id: 'sp_obs', nombre: 'Salud Pública Obstétrica', ciclo: 'Tercer', x: 1050, y: 500, categoria: 'obligatoria' },
      { id: 'prac_hosp_2', nombre: 'Práctica Hospitalaria II (A)', ciclo: 'Tercer', x: 1050, y: 600, categoria: 'obligatoria' },

      // --- CUARTO AÑO ---
      { id: 'clin_obs', nombre: 'Clínica Obstétrica (A)', ciclo: 'Cuarto', x: 1350, y: -150, categoria: 'obligatoria' },
      { id: 'psicoprofilaxis', nombre: 'Psicoprofilaxis Obstétrica (A)', ciclo: 'Cuarto', x: 1350, y: -50, categoria: 'obligatoria' },
      { id: 'metodo_obs', nombre: 'Metodología Inv. y Estadística (A)', ciclo: 'Cuarto', x: 1350, y: 50, categoria: 'obligatoria' },
      { id: 'educ_sex', nombre: 'Educación Sexual', ciclo: 'Cuarto', x: 1350, y: 150, categoria: 'obligatoria' },
      { id: 'adm_hosp', nombre: 'Administración Hospitalaria', ciclo: 'Cuarto', x: 1350, y: 250, categoria: 'obligatoria' },
      { id: 'salud_comu', nombre: 'Salud Comunitaria', ciclo: 'Cuarto', x: 1350, y: 350, categoria: 'obligatoria' },
      { id: 'tec_eco', nombre: 'Tecnología en Diag. Ecográfico', ciclo: 'Cuarto', x: 1350, y: 450, categoria: 'obligatoria' },
      { id: 'salud_repro', nombre: 'Salud Reproductiva', ciclo: 'Cuarto', x: 1350, y: 550, categoria: 'obligatoria' },
      { id: 'prac_hosp_3', nombre: 'Práctica Hospitalaria III (A)', ciclo: 'Cuarto', x: 1350, y: 650, categoria: 'obligatoria' },

      // --- MATERIAS ELECTIVAS ---
      { id: 'elec_didac', nombre: 'Didáctica aplicada', ciclo: 'Electivas', x: 1650, y: 50, categoria: 'electiva' },
      { id: 'elec_ing_obs', nombre: 'Inglés Técnico', ciclo: 'Electivas', x: 1650, y: 150, categoria: 'electiva' },
      { id: 'elec_semi_obs', nombre: 'Seminario', ciclo: 'Electivas', x: 1650, y: 250, categoria: 'electiva' },
      { id: 'elec_pueri', nombre: 'Puericultura', ciclo: 'Electivas', x: 1650, y: 350, categoria: 'electiva' }
    ],
    correlativas: [
      // --- Puente CBC a 1er Año ---
      ...['ana_obs', 'fisio_obs', 'histo_obs', 'quim_bio_obs', 'fis_bio_obs', 'micro_obs', 'intro_obs', 'intro_hosp', 'sm_obs'].flatMap(target => [
        { source: 'mat', target }, { source: 'qui', target }, { source: 'icse', target },
        { source: 'ipc', target }, { source: 'fis', target }, { source: 'bio', target }
      ]),

      // --- 1er a 2do Año ---
      // El plan exige aprobadas/regulares: Ana, Fisio, Histo/Embrio, Salud Mental y Micro.
      ...['obs_norm', 'neo_norm', 'farma_obs', 'aps_obs', 'at_preco', 'psico_gral_obs', 'nutri_mat', 'prac_hosp_1'].flatMap(target => [
        { source: 'ana_obs', target },
        { source: 'fisio_obs', target },
        { source: 'histo_obs', target },
        { source: 'sm_obs', target },
        { source: 'micro_obs', target }
      ]),

      // --- 2do a 3er Año ---
      // Llaves para cursar 3ero: Obs Normal, Neo Normal, Psico General y Práctica Hosp 1.
      ...['obs_pato', 'neo_pato', 'deonto_obs', 'psico_evo', 'antro_obs', 'educ_salud_obs', 'sp_obs', 'prac_hosp_2'].flatMap(target => [
        { source: 'obs_norm', target },
        { source: 'neo_norm', target },
        { source: 'psico_gral_obs', target },
        { source: 'prac_hosp_1', target }
      ]),

      // --- 3er a 4to Año ---
      // Llaves para cursar 4to: Obs Patológica, Neo Patológica, Psico Evolutiva y Práctica Hosp 2.
      ...['clin_obs', 'psicoprofilaxis', 'metodo_obs', 'educ_sex', 'adm_hosp', 'salud_comu', 'tec_eco', 'salud_repro', 'prac_hosp_3'].flatMap(target => [
        { source: 'obs_pato', target },
        { source: 'neo_pato', target },
        { source: 'psico_evo', target },
        { source: 'prac_hosp_2', target }
      ]),

      // --- Electivas ---
      // Se pueden elegir a partir de 3er año (requiere las llaves de 2do)
      ...['elec_didac', 'elec_ing_obs', 'elec_semi_obs', 'elec_pueri'].flatMap(target => [
        { source: 'obs_norm', target },
        { source: 'neo_norm', target },
        { source: 'psico_gral_obs', target },
        { source: 'prac_hosp_1', target }
      ])
    ]
  },
  radiologia: {
    nombre: "Licenciatura en Prod. de Bioimágenes",
    nodos: [
      // --- CICLO BÁSICO COMÚN (CBC) ---
      { id: 'cbc_master', nombre: 'Ciclo Básico Común', ciclo: 'CBC', x: 250, y: 150, type: 'rombo' },
      { id: 'ipc', nombre: 'Pensamiento Científico', ciclo: 'CBC', x: -150, y: 0, categoria: 'obligatoria' },
      { id: 'qui', nombre: 'Química', ciclo: 'CBC', x: -150, y: 100, categoria: 'obligatoria' },
      { id: 'icse', nombre: 'Sociedad y Estado', ciclo: 'CBC', x: -150, y: 200, categoria: 'obligatoria' },
      
      { id: 'mat', nombre: 'Matemática', ciclo: 'CBC', x: 50, y: 0, categoria: 'obligatoria' },
      { id: 'fis', nombre: 'Biofísica', ciclo: 'CBC', x: 50, y: 100, categoria: 'obligatoria' },
      { id: 'bio', nombre: 'Biología Celular', ciclo: 'CBC', x: 50, y: 200, categoria: 'obligatoria' },

      // ==========================================
      // TÍTULO: TÉCNICO RADIÓLOGO UNIVERSITARIO
      // ==========================================

      // --- 1er CUATRIMESTRE ---
      { id: 'fq_rad', nombre: 'Int. a la Físico Química', ciclo: 'Tecnicatura', x: 450, y: 0, categoria: 'obligatoria' },
      { id: 'ana1_rad', nombre: 'Anatomía I', ciclo: 'Tecnicatura', x: 450, y: 100, categoria: 'obligatoria' },
      { id: 'bio_fisio_rad', nombre: 'Int. a la Biol. y Fisio Humana', ciclo: 'Tecnicatura', x: 450, y: 200, categoria: 'obligatoria' },

      // --- 2do CUATRIMESTRE ---
      { id: 'ana2_rad', nombre: 'Anatomía II', ciclo: 'Tecnicatura', x: 700, y: 50, categoria: 'obligatoria' },
      { id: 'fis_apl_rad', nombre: 'Física Aplicada', ciclo: 'Tecnicatura', x: 700, y: 150, categoria: 'obligatoria' },
      { id: 'clin_bio_rad', nombre: 'Clínica en Bioimágenes', ciclo: 'Tecnicatura', x: 700, y: 250, categoria: 'obligatoria' },

      // --- 3er CUATRIMESTRE ---
      { id: 'ana3_rad', nombre: 'Anatomía III', ciclo: 'Tecnicatura', x: 950, y: 50, categoria: 'obligatoria' },
      { id: 'intro_bio_rad', nombre: 'Int. a la Prod. de Bioimágenes', ciclo: 'Tecnicatura', x: 950, y: 150, categoria: 'obligatoria' },

      // --- 4to CUATRIMESTRE ---
      { id: 'bioest1_rad', nombre: 'Bioestadística I', ciclo: 'Tecnicatura', x: 1200, y: 100, categoria: 'obligatoria' },
      { id: 'intro_radio_rad', nombre: 'Int. a la Radioterapia', ciclo: 'Tecnicatura', x: 1200, y: 200, categoria: 'obligatoria' },

      // --- 5to CUATRIMESTRE ---
      { id: 'tec_rad1', nombre: 'Técnicas Radiológicas I', ciclo: 'Tecnicatura', x: 1450, y: 50, categoria: 'obligatoria' },
      { id: 'radiobio_rad', nombre: 'Nociones de Radiobiología', ciclo: 'Tecnicatura', x: 1450, y: 150, categoria: 'obligatoria' },

      // --- 6to CUATRIMESTRE ---
      { id: 'tec_rad2', nombre: 'Técnicas Radiológicas II', ciclo: 'Tecnicatura', x: 1700, y: 0, categoria: 'obligatoria' },
      { id: 'tec_rad_pedi', nombre: 'Técnicas Rad. Pediátricas', ciclo: 'Tecnicatura', x: 1700, y: 100, categoria: 'obligatoria' },
      { id: 'psico_etica_rad', nombre: 'Psicología y Ética Prof.', ciclo: 'Tecnicatura', x: 1700, y: 200, categoria: 'obligatoria' },

      // ==========================================
      // TÍTULO: LICENCIATURA EN BIOIMÁGENES
      // ==========================================

      // --- 1er CUATRIMESTRE (LIC) ---
      { id: 'sp1_rad', nombre: 'Salud Pública I', ciclo: 'Licenciatura', x: 2000, y: 0, categoria: 'obligatoria' },
      { id: 'fisio1_rad', nombre: 'Fisiología I', ciclo: 'Licenciatura', x: 2000, y: 100, categoria: 'obligatoria' },
      { id: 'didactica_rad', nombre: 'Didáctica en Prod. de Bioim.', ciclo: 'Licenciatura', x: 2000, y: 200, categoria: 'obligatoria' },

      // --- 2do CUATRIMESTRE (LIC) ---
      { id: 'bioinfo_rad', nombre: 'Bioinformática', ciclo: 'Licenciatura', x: 2250, y: 0, categoria: 'obligatoria' },
      { id: 'fis_biomed_rad', nombre: 'Física Biomédica', ciclo: 'Licenciatura', x: 2250, y: 100, categoria: 'obligatoria' },
      { id: 'sp2_rad', nombre: 'Salud Pública II', ciclo: 'Licenciatura', x: 2250, y: 200, categoria: 'obligatoria' },

      // --- 3er CUATRIMESTRE (LIC) ---
      { id: 'metodos_dig_rad', nombre: 'Métodos Digitales y Proc.', ciclo: 'Licenciatura', x: 2500, y: -50, categoria: 'obligatoria' },
      { id: 'metodo_inv_rad', nombre: 'Metodología Inv. y Bioest. II', ciclo: 'Licenciatura', x: 2500, y: 50, categoria: 'obligatoria' },
      { id: 'farma_rad', nombre: 'Farmacología', ciclo: 'Licenciatura', x: 2500, y: 150, categoria: 'obligatoria' },
      { id: 'tec_radioiso', nombre: 'Tec. en Img. Radioisotópicas', ciclo: 'Licenciatura', x: 2500, y: 250, categoria: 'obligatoria' },

      // --- 4to CUATRIMESTRE (LIC) ---
      { id: 'radioterapia_lic', nombre: 'Radioterapia', ciclo: 'Licenciatura', x: 2750, y: 0, categoria: 'obligatoria' },
      { id: 'admin_salud_rad', nombre: 'Admin. en Serv. de Salud', ciclo: 'Licenciatura', x: 2750, y: 200, categoria: 'obligatoria' },

      // --- FINAL LICENCIATURA ---
      { id: 'radiofis_sanit', nombre: 'Radiofísica Sanit. y Calidad', ciclo: 'Licenciatura', x: 3000, y: 0, categoria: 'obligatoria' },
      { id: 'tec_comp_eco', nombre: 'Técnicas en Img. Comp. y Eco.', ciclo: 'Licenciatura', x: 3000, y: 100, categoria: 'obligatoria' }
    ],
    correlativas: [
      // --- Conexiones sugeridas desde CBC a Tecnicatura ---
      { source: 'ipc', target: 'fq_rad' }, { source: 'qui', target: 'ana1_rad' }, { source: 'icse', target: 'bio_fisio_rad' },

      // --- Tecnicatura: 1er a 2do Cuatrimestre ---
      { source: 'ana1_rad', target: 'ana2_rad' },
      { source: 'fq_rad', target: 'fis_apl_rad' },
      { source: 'bio_fisio_rad', target: 'clin_bio_rad' },

      // --- Tecnicatura: 2do a 3er Cuatrimestre ---
      { source: 'ana1_rad', target: 'ana3_rad' }, { source: 'ana2_rad', target: 'ana3_rad' },
      { source: 'ana1_rad', target: 'intro_bio_rad' }, { source: 'fis_apl_rad', target: 'intro_bio_rad' },

      // --- Tecnicatura: 3er a 4to Cuatrimestre ---
      { source: 'intro_bio_rad', target: 'bioest1_rad' },
      { source: 'fis_apl_rad', target: 'intro_radio_rad' },

      // --- Tecnicatura: 4to a 5to Cuatrimestre ---
      { source: 'ana1_rad', target: 'tec_rad1' }, { source: 'fis_apl_rad', target: 'tec_rad1' }, { source: 'intro_bio_rad', target: 'tec_rad1' },
      { source: 'bio_fisio_rad', target: 'radiobio_rad' }, { source: 'ana1_rad', target: 'radiobio_rad' }, { source: 'fis_apl_rad', target: 'radiobio_rad' },

      // --- Tecnicatura: 5to a 6to Cuatrimestre ---
      { source: 'tec_rad1', target: 'tec_rad2' }, { source: 'ana3_rad', target: 'tec_rad2' },
      { source: 'tec_rad1', target: 'tec_rad_pedi' }, { source: 'ana3_rad', target: 'tec_rad_pedi' },
      { source: 'tec_rad1', target: 'psico_etica_rad' },

      // --- Conexión Tecnico -> Licenciatura ---
      // (Se asume que la base técnica permite iniciar el ciclo de licenciatura)
      
      // --- Licenciatura: 1er a 2do Cuatrimestre ---
      { source: 'sp1_rad', target: 'sp2_rad' },

      // --- Licenciatura: 2do a 3er Cuatrimestre ---
      { source: 'bioinfo_rad', target: 'metodos_dig_rad' },
      { source: 'fisio1_rad', target: 'metodo_inv_rad' }, { source: 'bioinfo_rad', target: 'metodo_inv_rad' },
      { source: 'fisio1_rad', target: 'farma_rad' },
      { source: 'fisio1_rad', target: 'tec_radioiso' }, { source: 'farma_rad', target: 'tec_radioiso' },

      // --- Licenciatura: 3er a 4to Cuatrimestre ---
      { source: 'metodos_dig_rad', target: 'radioterapia_lic' }, { source: 'tec_radioiso', target: 'radioterapia_lic' },
      { source: 'sp1_rad', target: 'admin_salud_rad' }, { source: 'sp2_rad', target: 'admin_salud_rad' },

      // --- Licenciatura: 4to Cuatrimestre al Final ---
      { source: 'fis_biomed_rad', target: 'radiofis_sanit' }, { source: 'radioterapia_lic', target: 'radiofis_sanit' },
      { source: 'farma_rad', target: 'tec_comp_eco' }, { source: 'radioterapia_lic', target: 'tec_comp_eco' }
    ]
  },
  instrumentacion: {
    nombre: "Instrumentación Quirúrgica",
    nodos: [
      // --- CICLO BÁSICO COMÚN (CBC) ---
      { id: 'cbc_master', nombre: 'Ciclo Básico Común', ciclo: 'CBC', x: 250, y: 150, type: 'rombo' },
      { id: 'icse', nombre: 'Trabajo y Sociedad', ciclo: 'CBC', x: -150, y: 50, categoria: 'obligatoria' },
      { id: 'fis', nombre: 'Física y Biofísica', ciclo: 'CBC', x: -150, y: 150, categoria: 'obligatoria' },
      { id: 'qui', nombre: 'Química', ciclo: 'CBC', x: -150, y: 250, categoria: 'obligatoria' },

      // --- PRIMER AÑO ---
      { id: 'funda_iq', nombre: 'Fundamentos de la Inst. Quirúrgica', ciclo: 'Primer', x: 450, y: 0, categoria: 'obligatoria' },
      { id: 'fisio_iq', nombre: 'Fisiología', ciclo: 'Primer', x: 450, y: 100, categoria: 'obligatoria' },
      { id: 'micro_iq', nombre: 'Microbiología y Parasitología', ciclo: 'Primer', x: 450, y: 200, categoria: 'obligatoria' },
      { id: 'ana_iq', nombre: 'Anatomía', ciclo: 'Primer', x: 450, y: 300, categoria: 'obligatoria' },

      // --- SEGUNDO AÑO (Bloque Menores) ---
      { id: 'proc_menores', nombre: 'Proc. Quirúrgicos Menores', ciclo: 'Segundo', x: 750, y: -50, categoria: 'obligatoria' },
      { id: 'prac_menores', nombre: 'Prácticas Quirúrgicas Menores', ciclo: 'Segundo', x: 750, y: 50, categoria: 'obligatoria' },
      { id: 'ingles_bas_iq', nombre: 'Inglés Básico', ciclo: 'Segundo', x: 750, y: 150, categoria: 'obligatoria' },
      { id: 'info_iq', nombre: 'Informática', ciclo: 'Segundo', x: 750, y: 250, categoria: 'obligatoria' },

      // --- SEGUNDO AÑO (Bloque Medianos) ---
      { id: 'proc_medianos', nombre: 'Proc. Quirúrgicos Medianos', ciclo: 'Segundo', x: 1050, y: -50, categoria: 'obligatoria' },
      { id: 'prac_medianas', nombre: 'Prácticas Quirúrgicas Medianas', ciclo: 'Segundo', x: 1050, y: 50, categoria: 'obligatoria' },
      { id: 'psico_iq', nombre: 'Psicología Social e Institucional', ciclo: 'Segundo', x: 1050, y: 150, categoria: 'obligatoria' },

      // --- TERCER AÑO ---
      { id: 'proc_mayores', nombre: 'Proc. Quirúrgicos Mayores', ciclo: 'Tercer', x: 1350, y: -50, categoria: 'obligatoria' },
      { id: 'prac_mayores', nombre: 'Prácticas Quirúrgicas Mayores', ciclo: 'Tercer', x: 1350, y: 50, categoria: 'obligatoria' },
      { id: 'ingles_tec_iq', nombre: 'Inglés Técnico', ciclo: 'Tercer', x: 1350, y: 150, categoria: 'obligatoria' },
      { id: 'etica_iq', nombre: 'Ética y Deontología', ciclo: 'Tercer', x: 1350, y: 250, categoria: 'obligatoria' },
      { id: 'org_salud_iq', nombre: 'Org. y Gestión de Inst. de Salud', ciclo: 'Tercer', x: 1350, y: 350, categoria: 'obligatoria' }
    ],
    correlativas: [
      // --- Puente CBC a 1er Año ---
      ...['funda_iq', 'fisio_iq', 'micro_iq', 'ana_iq'].flatMap(target => [
        { source: 'icse', target }, { source: 'fis', target }, { source: 'qui', target }
      ]),

      // --- 1er a 2do Año (Bloque Menores) ---
      // Requiere todo 1er año aprobado
      ...['proc_menores', 'prac_menores', 'ingles_bas_iq', 'info_iq'].flatMap(target => [
        { source: 'funda_iq', target }, { source: 'fisio_iq', target }, { source: 'micro_iq', target }, { source: 'ana_iq', target }
      ]),

      // --- 2do Año Interno (Menores a Medianos) ---
      // Requiere 1er año + Proc. y Prácticas Menores
      ...['proc_medianos', 'prac_medianas', 'psico_iq'].flatMap(target => [
        { source: 'proc_menores', target }, { source: 'prac_menores', target }
      ]),

      // --- 2do a 3er Año ---
      // Requiere Proc. y Prácticas Medianas + Psicología + Inglés Básico (y todo lo anterior por herencia)
      ...['proc_mayores', 'prac_mayores', 'ingles_tec_iq', 'etica_iq', 'org_salud_iq'].flatMap(target => [
        { source: 'proc_medianos', target },
        { source: 'prac_medianas', target },
        { source: 'psico_iq', target },
        { source: 'ingles_bas_iq', target }
      ])
    ]
  },
  // =========================================================================
  // 1. ENFERMERÍA (Título de pregrado - 3 años)
  // =========================================================================
  enfermeria_uni: {
    nombre: "Enfermería Universitaria",
    nodos: [
      // --- CBC ---
      { id: 'cbc_master', nombre: 'Ciclo Básico Común', ciclo: 'CBC', x: 250, y: 150, type: 'rombo' },
      { id: 'icse', nombre: 'Sociedad y Estado', ciclo: 'CBC', x: -150, y: 50, categoria: 'obligatoria' },
      { id: 'ipc', nombre: 'Pensamiento Científico', ciclo: 'CBC', x: -150, y: 150, categoria: 'obligatoria' },

      // --- PRIMER AÑO ---
      { id: 'anatomo_enf', nombre: 'Anatomofisiología (A)', ciclo: 'Primer', x: 450, y: -200, categoria: 'obligatoria' },
      { id: 'quim_bio_enf', nombre: 'Química Biológica', ciclo: 'Primer', x: 450, y: -100, categoria: 'obligatoria' },
      { id: 'fis_bio_enf', nombre: 'Física Biológica', ciclo: 'Primer', x: 450, y: 0, categoria: 'obligatoria' },
      { id: 'intro_sp_enf', nombre: 'Int. a la Enf. en Salud Pública', ciclo: 'Primer', x: 450, y: 100, categoria: 'obligatoria' },
      { id: 'intro_psico_enf', nombre: 'Int. a las Cs. Psicosociales', ciclo: 'Primer', x: 450, y: 200, categoria: 'obligatoria' },
      { id: 'med1_enf', nombre: 'Enfermería Médica I', ciclo: 'Primer', x: 450, y: 300, categoria: 'obligatoria' },
      { id: 'deonto1_enf', nombre: 'Deontología I', ciclo: 'Primer', x: 450, y: 400, categoria: 'obligatoria' },
      { id: 'micro_enf', nombre: 'Microbiología y Parasit.', ciclo: 'Primer', x: 450, y: 500, categoria: 'obligatoria' },
      { id: 'nutri_enf', nombre: 'Nutrición', ciclo: 'Primer', x: 450, y: 600, categoria: 'obligatoria' },
      { id: 'sp1_enf', nombre: 'Enfermería Salud Pública I', ciclo: 'Primer', x: 450, y: 700, categoria: 'obligatoria' },

      // --- SEGUNDO AÑO ---
      { id: 'mat_inf_enf', nombre: 'Enf. Salud Materno Infantil', ciclo: 'Segundo', x: 750, y: 0, categoria: 'obligatoria' },
      { id: 'psico_evo_enf', nombre: 'Psicología Evolutiva', ciclo: 'Segundo', x: 750, y: 100, categoria: 'obligatoria' },
      { id: 'salud_mental_enf', nombre: 'Enf. en Salud Mental', ciclo: 'Segundo', x: 750, y: 200, categoria: 'obligatoria' },
      { id: 'sp2_enf', nombre: 'Enf. en Salud Pública II', ciclo: 'Segundo', x: 750, y: 300, categoria: 'obligatoria' },
      { id: 'med2_enf', nombre: 'Enfermería Médica II', ciclo: 'Segundo', x: 750, y: 400, categoria: 'obligatoria' },
      { id: 'quirurgica_enf', nombre: 'Enfermería Quirúrgica', ciclo: 'Segundo', x: 750, y: 500, categoria: 'obligatoria' },
      { id: 'dieto_enf', nombre: 'Dietoterapia', ciclo: 'Segundo', x: 750, y: 600, categoria: 'obligatoria' },

      // --- TERCER AÑO (1er Semestre) ---
      { id: 'admin_enf', nombre: 'Int. a la Admin. en Enf.', ciclo: 'Tercer', x: 1050, y: 100, categoria: 'obligatoria' },
      { id: 'deonto2_enf', nombre: 'Deontología II', ciclo: 'Tercer', x: 1050, y: 200, categoria: 'obligatoria' },
      { id: 'pediatrica_enf', nombre: 'Enfermería Pediátrica', ciclo: 'Tercer', x: 1050, y: 300, categoria: 'obligatoria' },
      { id: 'obstetrica_enf', nombre: 'Enfermería Obstétrica', ciclo: 'Tercer', x: 1050, y: 400, categoria: 'obligatoria' },
      { id: 'psiquiatrica_enf', nombre: 'Enfermería Psiquiátrica', ciclo: 'Tercer', x: 1050, y: 500, categoria: 'obligatoria' }
    ],
    correlativas: [
      // CBC a 1ero
      ...['anatomo_enf', 'quim_bio_enf', 'fis_bio_enf', 'intro_sp_enf', 'intro_psico_enf', 'med1_enf', 'deonto1_enf', 'micro_enf', 'nutri_enf', 'sp1_enf'].flatMap(target => [
        { source: 'icse', target }, { source: 'ipc', target }
      ]),
      // 1ero a 2do
      { source: 'intro_sp_enf', target: 'sp1_enf' },
      { source: 'med1_enf', target: 'mat_inf_enf' }, { source: 'sp1_enf', target: 'mat_inf_enf' },
      { source: 'intro_psico_enf', target: 'psico_evo_enf' }, { source: 'intro_psico_enf', target: 'salud_mental_enf' },
      { source: 'sp1_enf', target: 'sp2_enf' },
      { source: 'med1_enf', target: 'med2_enf' }, { source: 'med1_enf', target: 'quirurgica_enf' }, { source: 'med2_enf', target: 'quirurgica_enf' },
      // Filtro estricto de 1ero a 2do (las bases)
      ...['mat_inf_enf', 'sp2_enf', 'med2_enf', 'quirurgica_enf', 'dieto_enf'].flatMap(target => [
        { source: 'intro_sp_enf', target }, { source: 'intro_psico_enf', target }, { source: 'micro_enf', target }, { source: 'anatomo_enf', target }, { source: 'nutri_enf', target }
      ]),
      // 2do a 3ero
      { source: 'deonto1_enf', target: 'deonto2_enf' },
      { source: 'mat_inf_enf', target: 'pediatrica_enf' }, { source: 'quirurgica_enf', target: 'pediatrica_enf' },
      { source: 'mat_inf_enf', target: 'obstetrica_enf' }, { source: 'quirurgica_enf', target: 'obstetrica_enf' },
      { source: 'salud_mental_enf', target: 'psiquiatrica_enf' }
    ]
  },

  // =========================================================================
  // 2. LICENCIATURA EN ENFERMERÍA (2do Ciclo para graduados UBA)
  // =========================================================================
  lic_enfermeria_uba: {
    nombre: "Licenciatura en Enfermería (2do Ciclo UBA)",
    nodos: [
      // CBC Restante (Lo agrupamos en un nodo para no cargar el grafo)
      { id: 'cbc_restante_lic', nombre: '4 Materias Electivas de CBC', ciclo: 'CBC', x: -150, y: 150, categoria: 'obligatoria' },
      
      // 1er Cuatrimestre
      { id: 'didactica_lic', nombre: 'Didáctica de Enfermería', ciclo: 'Primer', x: 450, y: 50, categoria: 'obligatoria' },
      { id: 'invest1_lic', nombre: 'Investigación I', ciclo: 'Primer', x: 450, y: 150, categoria: 'obligatoria' },
      { id: 'bioest_lic', nombre: 'Bioestadística', ciclo: 'Primer', x: 450, y: 250, categoria: 'obligatoria' },

      // 2do Cuatrimestre
      { id: 'dinamica_lic', nombre: 'Dinámica de Grupos', ciclo: 'Segundo', x: 750, y: 0, categoria: 'obligatoria' },
      { id: 'enf_avanz_lic', nombre: 'Enfermería Avanzada', ciclo: 'Segundo', x: 750, y: 100, categoria: 'obligatoria' },
      { id: 'semi_admin_lic', nombre: 'Seminario Admin. en Enf.', ciclo: 'Segundo', x: 750, y: 200, categoria: 'obligatoria' },
      { id: 'invest2_lic', nombre: 'Investigación II', ciclo: 'Segundo', x: 750, y: 300, categoria: 'obligatoria' },

      // 3er Cuatrimestre
      { id: 'admin_lic', nombre: 'Administración en Enfermería', ciclo: 'Tercer', x: 1050, y: 50, categoria: 'obligatoria' },
      { id: 'sp3_lic', nombre: 'Enfermería en Salud Pública III', ciclo: 'Tercer', x: 1050, y: 150, categoria: 'obligatoria' },
      { id: 'tesis_lic', nombre: 'Trabajo Científico (Tesis)', ciclo: 'Tercer', x: 1050, y: 250, categoria: 'obligatoria' }
    ],
    correlativas: [
      // CBC habilita
      { source: 'cbc_restante_lic', target: 'didactica_lic' }, { source: 'cbc_restante_lic', target: 'invest1_lic' }, { source: 'cbc_restante_lic', target: 'bioest_lic' },
      // 1er a 2do Cuat
      ...['dinamica_lic', 'enf_avanz_lic', 'semi_admin_lic', 'invest2_lic'].flatMap(target => [
        { source: 'invest1_lic', target }, { source: 'didactica_lic', target }, { source: 'bioest_lic', target }
      ]),
      // 2do a 3er Cuat
      ...['admin_lic', 'sp3_lic', 'tesis_lic'].flatMap(target => [
        { source: 'invest1_lic', target }, { source: 'didactica_lic', target }, { source: 'bioest_lic', target }
      ])
    ]
  },

  // =========================================================================
  // 3. LIC. EN ENFERMERÍA - CICLO DE COMPLEMENTACIÓN (Para Terciarios)
  // =========================================================================
  lic_enfermeria_ccc: {
    nombre: "Lic. en Enfermería (Ciclo Complementación)",
    nodos: [
      // 1er Cuatrimestre (Reemplaza al CBC)
      { id: 'antro_ccc', nombre: 'Antropología', ciclo: 'Primer', x: 450, y: 0, categoria: 'obligatoria' },
      { id: 'socio_ccc', nombre: 'Sociología', ciclo: 'Primer', x: 450, y: 100, categoria: 'obligatoria' },
      { id: 'filo_ccc', nombre: 'Filosofía', ciclo: 'Primer', x: 450, y: 200, categoria: 'obligatoria' },
      { id: 'psico_ccc', nombre: 'Psicología', ciclo: 'Primer', x: 450, y: 300, categoria: 'obligatoria' },

      // 2do Cuatrimestre
      { id: 'bioest_ccc', nombre: 'Bioestadística', ciclo: 'Segundo', x: 750, y: 50, categoria: 'obligatoria' },
      { id: 'metodo_ccc', nombre: 'Metodología de la Enseñanza', ciclo: 'Segundo', x: 750, y: 150, categoria: 'obligatoria' },
      { id: 'invest_ccc', nombre: 'Investigación en Enfermería', ciclo: 'Segundo', x: 750, y: 250, categoria: 'obligatoria' },

      // 3er Cuatrimestre
      { id: 'liderazgo_ccc', nombre: 'Liderazgo y Dinámica', ciclo: 'Tercer', x: 1050, y: -50, categoria: 'obligatoria' },
      { id: 'criticos_ccc', nombre: 'Enf. en Cuidados Críticos', ciclo: 'Tercer', x: 1050, y: 50, categoria: 'obligatoria' },
      { id: 'etica_ccc', nombre: 'Ética y Socialización Prof.', ciclo: 'Tercer', x: 1050, y: 150, categoria: 'obligatoria' },
      { id: 'prac_int_ccc', nombre: 'Práctica Integrada', ciclo: 'Tercer', x: 1050, y: 250, categoria: 'obligatoria' },

      // 4to Cuatrimestre
      { id: 'gestion_ccc', nombre: 'Gestión en Enfermería', ciclo: 'Cuarto', x: 1350, y: -100, categoria: 'obligatoria' },
      { id: 'semi_sp_ccc', nombre: 'Seminario en Salud Pública', ciclo: 'Cuarto', x: 1350, y: 0, categoria: 'obligatoria' },
      { id: 'ingles_ccc', nombre: 'Inglés Técnico', ciclo: 'Cuarto', x: 1350, y: 100, categoria: 'obligatoria' },
      { id: 'info_ccc', nombre: 'Informática', ciclo: 'Cuarto', x: 1350, y: 200, categoria: 'obligatoria' },
      { id: 'taller_inv_ccc', nombre: 'Taller de Investigación', ciclo: 'Cuarto', x: 1350, y: 300, categoria: 'obligatoria' }
    ],
    correlativas: [
      // 1er Cuat a 2do Cuat
      ...['bioest_ccc', 'metodo_ccc', 'invest_ccc'].flatMap(target => [
        { source: 'antro_ccc', target }, { source: 'socio_ccc', target }, { source: 'filo_ccc', target }, { source: 'psico_ccc', target }
      ]),
      // 2do Cuat a 3er Cuat (El PDF dice que pide 1er Cuat, conectamos a modo cascada)
      ...['liderazgo_ccc', 'criticos_ccc', 'etica_ccc', 'prac_int_ccc'].flatMap(target => [
        { source: 'bioest_ccc', target }, { source: 'metodo_ccc', target }, { source: 'invest_ccc', target }
      ]),
      // 3er Cuat a 4to Cuat (Pide todo lo anterior)
      ...['gestion_ccc', 'semi_sp_ccc', 'ingles_ccc', 'info_ccc', 'taller_inv_ccc'].flatMap(target => [
        { source: 'liderazgo_ccc', target }, { source: 'criticos_ccc', target }, { source: 'etica_ccc', target }, { source: 'prac_int_ccc', target }
      ])
    ]
  }
};