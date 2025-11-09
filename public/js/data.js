const speakers = [
    {
        nombres: 'Herminio',
        apellidos: 'Paucar Curasma',
        perfil: `Doctor en Ciencias de la Computación por la Universidad de São Paulo (USP-Brasil) y Magíster por la Pontificia Universidad Católica de Río de Janeiro (PUC-Rio). Ingeniero de software por la UNMSM (Perú). Profesor universitario y conferencista en tecnología a nivel nacional e internacional.`,
        social_media: {
            linkedin: 'https://www.linkedin.com/in/herminio-paucar/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '10',
                inicio: '14:00',
                fin: '15:00',
                nombre: 'Oportunidades de desarrollo profesional y académico en Brasil: Posgrados, becas y líneas de investigación',
                detalles: '',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Javier',
        apellidos: 'Albarracín Valdivia',
        perfil: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/jalbarracin/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '10',
                inicio: '15:00',
                fin: '16:00',
                nombre: 'lorem ipsum dolor sit amet',
                detalles: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Gera',
        apellidos: 'Flores Sempertegui',
        perfil: 'Ingeniera Industrial con MBA y 12 años de experiencia en tecnología y startups. Especializada en analítica de datos, Machine Learning y gestión comercial, impulsando la innovación en las organizaciones.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/geraflores-tech-ai/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '10',
                inicio: '16:00',
                fin: '17:00',
                nombre: 'IA y transformación digital en el contexto empresarial de Perú',
                detalles: 'Explica cómo iniciar un proceso de transformación digital en las empresas peruanas, pasando de procesos manuales a la incorporación progresiva de herramientas de IA.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Jaime Eduardo',
        apellidos: 'Medina Delgado',
        perfil: 'CEO de la academia de programación MitoCode, Mg. en Ingeniería de Software por la PUCP y con más de 10 años de experiencia en desarrollo Java.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/jaimemd21/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '10',
                inicio: '17:30',
                fin: '18:30',
                nombre: 'Inteligencia Artificial generativa en Java con Spring AI',
                detalles: 'Presenta los fundamentos de la IA generativa y ejemplos de aplicación en Java empleando Spring AI.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'André Omar',
        apellidos: 'Chávez Panduro',
        perfil: 'Consultor Senior en Inteligencia Artificial y Analítica Avanzada en el Ministerio Público y People Analytics & PPM Senior Manager en Backus. Ha sido Analytics Manager en AB InBev, con experiencia en Interbank, Claro, Chubb Seguros e INEI. Especializado en Transformación Digital por el MIT y en Machine Learning y Cómputo Distribuido por el CIMAT.',
        social_media: {},
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '11',
                inicio: '11:00',
                fin: '12:00',
                nombre: 'Inteligencia Artificial y Analítica Avanzada para la toma de decisiones',
                detalles: '',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Jorge Jesús',
        apellidos: 'Quispe Villaverde',
        perfil: 'AI Engineer en Pandero y ganador del Hackathon Kavak x OpenAI del México Tech Week 2025, especializado en investigación aplicada y proyectos de IA con ciclos de feedback y auto-reflexión.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/jorgejesusquispevillaverde/',
        },
        pais: 'peru',
        talleres: [
            {
                dia: '12',
                inicio: '17:15',
                fin: '18:15',
                nombre: 'Sistemas RAG: Fundamentos e implementación con Google Cloud Platform (GCP)',
                detalles: 'Un deep dive técnico sobre los sistemas de Generación Aumentada por Recuperación (RAG). Exploraremos los fundamentos del RAG (Alucinación vs. Precisión), su lenguaje ubicuo (Chunking, Embeddings, Retrieval), y la arquitectura ideal para grounding en GCP. Se cubrirán los principios de las bases de datos vectoriales y su relevancia, con una mención clave al paper "Attention Is All You Need" como pilar de la tecnología de embeddings. El foco estará en el uso práctico de Vertex AI (Embeddings API y Vector Search) para construir un RAG funcional.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
        charlas: [
            {
                dia: '11',
                inicio: '17:00',
                fin: '18:00',
                nombre: 'Darwin Gödel Machine: IAs que evolucionan reescribiendo su propio código para mejorar',
                detalles: 'Ponencia teórico-práctica sobre sistemas de IA auto-mejorables inspirados en la Darwin-Gödel Machine (DGM) de Sakana AI, con un caso aplicado a generación de audio que evoluciona sus prompts.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Michaelt Jhoseph',
        apellidos: 'Inga Cahuana',
        perfil: 'Ingeniero de Nube especializado en AWS con más de cuatro años de experiencia diseñando e implementando arquitecturas seguras, escalables y altamente disponibles, certificado como AWS Solutions Architect – Professional.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/michaelt-j-inga-cahuana/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '12',
                inicio: '11:00',
                fin: '12:00',
                nombre: 'El maravilloso mundo de la nube de AWS… o eso dicen',
                detalles: 'Profundiza en el funcionamiento real de los servicios de AWS, buenas prácticas, patrones de diseño y lecciones aprendidas para arquitecturas modernas desde la experiencia como Cloud Engineer.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'César Antonio',
        apellidos: 'Chalco Elías',
        perfil: 'Ingeniero Industrial con más de cinco años de experiencia en el desarrollo e implementación de soluciones de Inteligencia Artificial (Machine Learning y Deep Learning). Ha liderado proyectos de modelado predictivo en la nube (GCP), gestionado el ciclo completo de aprendizaje automático y diseñado procesos de ingeniería de datos, comunicando soluciones complejas a equipos técnicos y de negocio. Apasionado por compartir conocimiento, promueve el uso de la IA para generar valor y potenciar el impacto positivo en las organizaciones.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/cesarchalcoelias/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '12',
                inicio: '16:00',
                fin: '17:00',
                nombre: 'Repograma tu mente, no tu carrera',
                detalles: 'Charla para desarrollar una mente enfocada en fundamentos sólidos, resiliencia y aprendizaje continuo frente al ritmo acelerado de la innovación tecnológica.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Alonso Raul',
        apellidos: 'Melgarejo Galvan',
        perfil: 'Ejecutivo en tecnología y transformación digital especializado en Big Data, Cloud e IA, director en Big Data Academy y promotor de la adopción estratégica de IA en entornos corporativos.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/alonsoraulmg/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '13',
                inicio: '15:30',
                fin: '16:30',
                nombre: '¿Cómo las empresas usan la Inteligencia Artificial?',
                detalles: 'Analiza cómo las empresas demandan soluciones de IA, qué desafíos enfrentan y qué habilidades necesitan los profesionales para aportar valor.',
                lugar: 'Virtual',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Jhennyfer Nayeli',
        apellidos: 'Zárate Villar',
        perfil: `Solutions Architect Analyst en BBVA, bachiller en Ingeniería de Software de la UNMSM con diplomados internacionales en Arquitectura de Software y Gestión de Proyectos. Experiencia en liderazgo, automatización y diseño de soluciones escalables, además de creadora de contenido en redes sociales.`,
        social_media: {
            linkedin: 'https://www.linkedin.com/in/jhennyferzarate/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '13',
                inicio: '17:00',
                fin: '18:00',
                nombre: 'Más Allá del Código: El Solutions Architect como Estratega y Traductor Tecnológico',
                detalles: 'Esta ponencia explora el rol fundamental del Solutions Architect (SA) como el traductor estratégico entre las necesidades del negocio y las soluciones tecnológicas viables. A través de un caso de estudio práctico se demostrará la importancia de diseñar arquitecturas que prioricen la agilidad y el valor para el usuario. Se analizará la clara distinción entre la Arquitectura de Soluciones y la Arquitectura de Software, y se desglosará el conjunto de habilidades (tanto técnicas como blandas) esenciales para quien aspire a dominar esta disciplina clave en el mundo tecnológico actual.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Jorge Enrique',
        apellidos: 'Villavicencio Antúnez',
        perfil: 'Magíster en Computer Science especializado en Inteligencia Artificial y Ciencia de Datos, coordinador de la Maestría en Ciencia de Datos e IA en UTEC y Senior Data Scientist en el BCP.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/villavant/',
        },
        pais: 'peru',
        talleres: [
            {
                dia: '14',
                inicio: '15:00',
                fin: '17:00',
                nombre: 'Hands-On: Construyendo Agentes IA con n8n potenciado por MCP',
                detalles: 'Taller práctico para crear un servidor MCP en Python, conectarlo con n8n y automatizar flujos inteligentes con agentes que ejecutan acciones.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
        charlas: [
            {
                dia: '14',
                inicio: '12:00',
                fin: '13:00',
                nombre: 'Ponencia: De la Idea al Prototipo: Vibecoding entre la Velocidad y el Criterio',
                detalles: 'Explora cómo el vibecoding y la colaboración con modelos de IA generativa transforman la ingeniería de software, destacando habilidades, oportunidades y ejemplos con MCP, agentes inteligentes y herramientas modernas.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Gianpaul',
        apellidos: 'Custodio Chavarría',
        perfil: 'Ingeniero en ciberseguridad, docente y creador de contenido.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/gianpaul-custodio-chavarria/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '14',
                inicio: '17:00',
                fin: '18:00',
                nombre: 'Hackeando tu información con 1 link',
                detalles: '',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Manuel',
        apellidos: 'Flores',
        perfil: 'Especialista en ciberseguridad con experiencia en pentesting, seguridad de aplicaciones y ciberinteligencia en sectores público, telecomunicaciones y financiero. Conferencista en comunidades de América Latina.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/mfloresf/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '15',
                inicio: '11:00',
                fin: '12:00',
                nombre: '¿Tu MFA es tan fuerte como crees?',
                detalles: 'Analiza vectores de ataque y errores comunes en la implementación de MFA, con ejemplos de explotación y estrategias para reforzar la protección.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
    {
        nombres: 'Miguel Angel',
        apellidos: 'Cotrina Espinoza',
        perfil: 'Especialista en Gen AI y LangChain; diseña arquitecturas seguras y escalables para llevar modelos de lenguaje a producción. Speaker con más de 300 horas de contenido técnico impartido.',
        social_media: {
            linkedin: 'https://www.linkedin.com/in/mcotrina/',
        },
        pais: 'peru',
        talleres: [],
        charlas: [
            {
                dia: '15',
                inicio: '12:00',
                fin: '13:00',
                nombre: 'De Prompt Engineer a Context Engineer: La Nueva Evolución de los Agentes Inteligentes',
                detalles: 'Explora la evolución del Prompt Engineer hacia el Context Engineer, responsable de diseñar, seleccionar y gobernar el contexto que utilizan los modelos de IA.',
                lugar: 'Auditorio FISI - UNMSM',
                link: '',
                publicacion: '2024-10-01T00:00:00',
            },
        ],
    },
];

const aliados_sponsors = [
    // colocar el tipo (aliado - sponsor)
    // Aliados
    {
        type: 'aliado',
        nombre: '1551',
        slogan: '1551, Incubadora de Empresas Innovadoras de la UNMSM',
        visible: true,
        link: 'https://1551.unmsm.edu.pe/'
    },
    // Sponsors
     {
        type: 'sponsor',
        nombre: '1551',
        slogan: '1551, Incubadora de Empresas Innovadoras de la UNMSM',
        visible: true,
        link: 'https://1551.unmsm.edu.pe/'
    },
    {
        type: 'sponsor',
        nombre: 'DSRP',
        slogan: 'Data Science Research Perú',
        visible: true,
        link: 'https://datascience.pe/'
    },
    {
        type: 'sponsor',
        nombre: 'Datux',
        slogan: 'Datux',
        visible: true,
        link: 'https://www.datuxonline.com/'
    },
     {
        type: 'sponsor',
        nombre: 'Bitdefender',
        slogan: 'Bitdefender',
        visible: true,
        link: 'https://www.bitdefender.com/'
    },
    {
        type: 'sponsor',
        nombre: 'Mitocode',
        slogan: 'Mitocode',
        visible: true,
        link: 'https://mitocode.com/'
    },
     
    
]

const eventos_programados = [
  {
    title: 'Ceremonia de apertura',
    start: '2025-11-10T13:00:00',
    end: '2025-11-10T14:00:00',
    extendedProps: {
      description: 'Ceremonia de apertura',
    }
  },
  {
    title: 'Difusión del evento',
    start: '2025-11-05T08:00:00',
    end: '2025-11-05T09:00:00',
    extendedProps: {
      description: 'Inicio de difusión del evento ENEISOFT 2025',
    }
  },
  {
    title: 'Apertura de inscripciones',
    start: '2025-11-07T08:00:00',
    end: '2025-11-07T09:00:00',
    extendedProps: {
      description: '<a class="link-horario" href="/programacion-competitiva">Inicio del periodo de inscripción al Torneo de Programación Competitiva</a>',
    }
  },
  {
    title: 'Cierre de inscripciones',
    start: '2025-11-15T23:00:00',
    end: '2025-11-15T23:59:59',
    extendedProps: {
      description: '<a class="link-horario" href="/programacion-competitiva">Cierre de inscripciones al Torneo de Programación Competitiva</a>',
    }
  },
  {
    title: 'Primera Fase - Eliminatoria Virtual',
    start: '2025-11-17T12:00:00',
    end: '2025-11-17T23:59:00',
    extendedProps: {
      description: '<a class="link-horario" href="/programacion-competitiva">Fase eliminatoria virtual en Codeforces</a>',
    }
  },
  {
    title: 'Fase Final Auditorio FISI - UNMSM',
    start: '2025-11-19T18:00:00',
    end: '2025-11-19T21:00:00',
    extendedProps: {
      description: '<a class="link-horario" href="/programacion-competitiva">Fase final auditorio fisi - unmsm del Torneo de Programación Competitiva</a>',
    }
  },
  {
    title: 'Publicación de Ganadores',
    start: '2025-11-20T10:00:00',
    end: '2025-11-20T11:00:00',
    extendedProps: {
      description: '<a class="link-horario" href="/programacion-competitiva">Publicación oficial de los ganadores del torneo</a>',
    }
  },
  {
    title: 'Premiación del Torneo de Programación Competitiva',
    start: '2025-11-21T08:00:00',
    end: '2025-11-21T13:00:00',
    extendedProps: {
      description: '<a class="link-horario" href="/programacion-competitiva">Ceremonia de premiación del Torneo de Programación Competitiva - ENEISOFT 2025</a>',
    }
  },
  {
    title: 'Ceremonia de cierre',
    start: '2025-11-21T13:00:00',
    end: '2025-11-21T14:00:00',
    extendedProps: {
      description: 'Ceremonia de clausura del ENEISOFT 2025',
    }
  }
];