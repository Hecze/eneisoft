const speakers = [
    // aca van los speakers y talleristas
    // lesly samaritano
    // Oliver Sandoval
    {
        nombres: 'Oliver',
        apellidos: 'Sandoval',
        perfil: "Ingeniero Informático, Fundador de Developer.pe, plataforma donde comparte tutoriales de programación en Python, Django y otros temas. Además, es miembro de la comunidad de Python Piura y Tech Lead en Muchticket.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/oliver-sandoval-developer ",
            youtube: "https://www.youtube.com/@Developerpe ",
            instagram: "https://www.instagram.com/developer.pe ",
            github: "https://github.com/developerpe ",
            facebook: "https://www.facebook.com/developerper",
        },
        pais: "peru",
        visible: true,
        talleres: [
            {
                dia: '05',
                inicio: '15:00',
                fin: '17:00',
                nombre: 'Python desde Cero',
                detalles: 'En este taller descubrirás qué es Python y por qué es importante aprenderlo. Aprenderás sobre variables, tipos de datos, operadores, condicionales, bucles, listas, tuplas y diccionarios. Además, exploraremos funciones, lambdas, clases, decoradores, POO en Python, y el manejo de excepciones y errores, brindándote una base sólida en este lenguaje.',
                lugar: 'Auditorio de la FISI',
                link: 'https://forms.gle/9sJBBZ7uFE3mWua7A',
                visible: true,
            },            
            {
                dia: '06',
                inicio: '15:00',
                fin: '18:00',
                nombre: 'Tu Primera API con Django Rest Framework',
                detalles: 'En este taller aprenderás qué es una API y cómo utilizar Django Rest Framework para desarrollarlas. Exploraremos temas clave como serializers, vistas, viewsets, routers, autenticación y el uso de decoradores, proporcionándote las herramientas necesarias para crear APIs robustas y seguras.',
                lugar: 'Auditorio de la FISI',
                link: 'https://forms.gle/6zCr4fQqc4uqKqtR7',
                visible: false,
            },            
        ],
        charlas: [  
                      
        ],
    },
    {
        nombres: 'Lesly',
        apellidos: 'Samaritano',
        perfil: "Ingeniera en Sistemas e Informática y embajadora del Programa Google Developers Women Techmakers. Experiencia en RPA (Automatización robótica de procesos) y BD (Base de datos). Actual desarrolladora de aplicaciones móviles con Flutter de manera independiente.",
        social_media: {
            instagram: "https://www.instagram.com/flutterinastudio",
            linkedin: "https://www.linkedin.com/in/leslysamaritano/",
            twitter: "https://x.com/samaritanoayala",
            tiktok: "https://www.tiktok.com/@flutterinastudio",
            youtube: "https://www.youtube.com/@flutterinastudio",
        },
        pais: "peru",
        visible: false,
        talleres: [
            {
                dia: '04',
                inicio: '14:00',
                fin: '16:00',
                nombre: 'Gestión de Repositorio de Código con GitHub',
                detalles: 'En este taller aprenderás a crear repositorios públicos y privados en GitHub, gestionar proyectos mediante issues y ramas, y elaborar un README y una licencia. También cubriremos cómo generar pull requests y realizar merges para facilitar la colaboración en proyectos de desarrollo.',
                lugar: 'Auditorio de la FISI',
                link: '',
                visible: false,
            },            
            {
                dia: '06',
                inicio: '09:00',
                fin: '11:00',
                nombre: 'Fundamentos de Flutter',
                detalles: 'En este taller aprenderás los fundamentos de Flutter, incluyendo el uso de widgets básicos y la integración de paquetes desde Pub.dev. También exploraremos la maquetación multiplataforma, permitiéndote crear aplicaciones eficientes y visualmente atractivas para diferentes dispositivos.',
                lugar: 'Auditorio de la FISI',
                link: '',
                visible: false,
            },            
            {
                dia: '06',
                inicio: '12:00',
                fin: '14:00',
                nombre: 'Creación de un MVP con Flutterflow',
                detalles: 'En este taller aprenderás diversas formas de crear un MVP, explorando Flutterflow como herramienta educativa y su integración con Flutter. Al finalizar, estarás preparado para crear tu propio MVP de manera eficiente.',
                lugar: 'Auditorio de la FISI',
                link: '',
                visible: false,
            },            
        ],
        charlas: [
        ],
    },
    // javier blanco
    {
        nombres: 'Javier',
        apellidos: 'Blanco',
        perfil: "Cloud Full Stack Developer & AWS Community Builder Serverless, Solution Architect MultiCloud, Google Cloud Innovator, GenAI enthusiast apasionado por la educación inclusiva, autodidacta dispuesto a asumir nuevos retos, técnico, competitivo, curioso con los problemas para convertirlos en oportunidades y contribuir a la comunidad con cada nueva experiencia adquirida",
        social_media: {
            github: "https://github.com/javierblancoch",
            instagram: "https://www.instagram.com/javierblancoch/",
            youtube: 'https://www.youtube.com/channel/UCPw7LcyXAmIxt5uCkIGnStg',
            linkedin: "https://pe.linkedin.com/in/javier-esmith-blanco-chuquizuta",
            twitter: "https://twitter.com/javierblancoch",
        },
        pais: "peru",
        visible: false,
        talleres: [
        ],
        charlas: [
            {
                dia: '08',
                inicio: '11:00',
                fin: '12:00',
                nombre: 'Un ser de anclaje en el multiverso Cloud',
                detalles: '¿La nube sigue de moda? ¿Qué se puede construir ahí? y aún mejor, ¿cómo puedes construir ahí?',
                lugar: 'Auditorio de la FISI',
                link: '',
                visible: false,
            },
        ],
    },
    // maybemar hernandez
    {
        nombres: 'Maybemar',
        apellidos: 'Hernandez',
        perfil: "Licenciada en Física de la Universidad Central de Venezuela y Magíster en Ingeniería electrónica de la Universidad Simón Bolívar. Con 14 años de experiencia en proyectos tecnológicos para sistemas embebidos, sistemas navales y sistemas de pruebas de hardware, llegando a ser gerente de Ingeniería de Software. Actualmente trabaja para Scale AI como “Software Engineer for AI training data” utilizando Python para entrenamiento de IA",
        social_media: {
            github: "https://github.com/maybemarhs",
            instagram: "https://www.instagram.com/maybemarhs/",
            twitter: "https://twitter.com/maybemarhs",
            tiktok: "https://tiktok.com/@maybemarhs",
            youtube: "https://www.youtube.com/@maybemarhs",
        },
        pais: "peru",
        visible: false,
        talleres: [
        ],
        charlas: [
            {
                dia: '07',
                inicio: '14:00',
                fin: '15:00',
                nombre: 'El camino del Jedi',
                detalles: 'En esta conferencia aprenderemos cuáles son esas habilidades técnicas y blandas que debemos adquirir para convertirnos en programadores expertos y cotizados en el mercado laboral.',
                lugar: 'Google Meet',
                link: '',
                visible: false,
            },            
        ],
    },
    // kevin davila
    {
        nombres: 'Kevin',
        apellidos: 'Dávila',
        perfil: "Google Developer Expert en Angular & Microsoft Most Valuable Professional en Web. Software Engineer y creador de contenido sobre programación Web.",
        social_media: {
            github: "https://github.com/kevindaviladev",
            instagram: "https://www.instagram.com/kevindaviladev",
            tiktok: "https://www.tiktok.com/@kevindaviladev",
            youtube: "https://www.youtube.com/channel/UCgu_s0iHevVNatUGXnINEHg",
            linkedin: "https://pe.linkedin.com/in/kevin-davila-dev",
            twitter: "https://x.com/kevindaviladev",
        },
        pais: "peru",
        visible: false,
        talleres: [
        ],
        charlas: [            
            {
                 dia: '04',
                 inicio: '16:00',
                 fin: '17:00',
                 nombre: 'Desarrollo Web con Typescript: Un viaje sin retorno',
                 detalles: 'Hablaremos sobre Typescript, el superset de Javascript que permite escribir aplicaciones web escalables y mantenibles en el tiempo.',
                 lugar: 'Auditorio de la FISI',
                 link: '',
                 visible: false,
             },
        ],
    },
    // yazmina gonzales
    {
        nombres: 'Yasmina',
        apellidos: 'Gonzales',
        perfil: "Ingeniera de Software y emprendedora, con Máster en Tecnologías de Análisis de Datos Masivos. CEO de Lucerna Software y creadora de contenido en ciencias de la computación. Trabaja en proyectos de IoT, sistemas inteligentes y ciencia de datos.",
        social_media: {
            instagram: "https://www.instagram.com/yasminacodes/",
            linkedin: "https://www.linkedin.com/in/yasgalmon",
            github: "https://github.com/yasminacodes",
            discord: "https://discord.com/invite/MpTj5bvd8G",
            tiktok: "https://www.tiktok.com/@yasminacodes",
            youtube: "https://www.youtube.com/@yasminacodes",
        },
        pais: "spain",
        link: "https://forms.gle/EdqkvFXDWCMoi2Vf8",
        visible: true,
        talleres: [
        ],
        charlas: [
            {
                dia: '06',
                inicio: '14:00',
                fin: '15:00',
                nombre: 'IoT, datos y su relación en proyectos de impacto real',
                detalles: 'En esta conferencia, hablamos de cómo los sectores de IoT y data se relacionan de forma bastante habitual para conformar proyectos de relevancia en el ámbito corporativo e industrial. Concretamente, hablaremos de un proyecto del que formo parte, en el cual se monitorizan y analizan grifos de cerveza.',
                lugar: 'Google Meet',
                link: '',
                visible: true,
            },            
        ],
    },
    // gianpaul custodio (hackemate)
    {
        nombres: 'HackeMate',
        apellidos: '',
        perfil: "Creador de contenido relacionado a la Programación y Ciberseguridad. Más de 4 años de experiencia en análisis y gestión de vulnerabilidades web.",
        social_media: {
            instagram: "https://www.instagram.com/hackemate.pe/ ",
            youtube: "https://www.youtube.com/@HackeMate",
        },
        pais: "peru",
        visible: false,
        talleres: [
            {
                dia: 'por definir',
                inicio: '17:00',
                fin: '19:00',
                nombre: 'Creando una aplicación maliciosa y tener acceso al móvil',
                detalles: 'Este taller está diseñado para brindar a los participantes una comprensión profunda del proceso de creación de aplicaciones APK maliciosas mediante la inyección de código malicioso utilizando Metasploit Framework. Exploraremos cómo se puede modificar una aplicación verdadera, ocultar un payload malicioso en su interior y obtener acceso remoto al dispositivo móvil de un usuario desprevenido. A lo largo del taller, se hará hincapié en las implicaciones éticas y defensivas de estas técnicas, destacando cómo pueden ser utilizadas para identificar y mitigar amenazas reales en el entorno móvil. ',
                lugar: 'Auditorio de la FISI',
                link: '', 
                visible: false,
            },            
        ],
        charlas: [            
        ],
    },
    // Mirna Ampuero
    {
        nombres: 'Mirna',
        apellidos: 'Ampuero',
        perfil: "Ingeniera mecatrónica con experiencia en desarrollo de proyectos blockchain. Ha participado en hackatones internacionales, enfocándose en la creación de soluciones tecnológicas innovadoras que aprovechan blockchain. Su trayectoria combina habilidades técnicas con una visión para aplicar la tecnología en problemas reales y generar impacto positivo.",
        social_media: {
            instagram: "https://www.instagram.com/hackemate.pe/ ",
            youtube: "https://www.youtube.com/@HackeMate",
        },
        pais: "peru",
        visible: false,
        talleres: [
        ],
        charlas: [            
            {
                dia: '07',
                inicio: '16:00',
                fin: '17:00',
                nombre: 'Blockchain y Sostenibilidad: Tecnología para un Mundo Mejor',
                detalles: 'Esta conferencia aborda cómo blockchain está ayudando a resolver desafíos ambientales mediante la trazabilidad en las cadenas de suministro, la tokenización de créditos de carbono y la descentralización a través de DAOs. Exploraremos su papel en la creación de un futuro más sostenible y equitativo.',
                lugar: 'Auditorio de la FISI',
                link: '', 
                visible: false,
            },            
        ],
    },
    // Yera Flores Sempertegui
    {
        nombres: 'Yera',
        apellidos: 'Flores Sempertegui',
        perfil: "Ingeniera Industrial MBA con 11 años de experiencia laboral y amplia experiencia en los sectores de tecnología y startups. Experta en datos analítica, Machine Learning y gestión y desarrollo comercial.",
        social_media: {
            instagram: "https://www.instagram.com/hackemate.pe/ ",
            youtube: "https://www.youtube.com/@HackeMate",
        },
        pais: "peru",
        visible: false,
        talleres: [
            {
                dia: '06',
                inicio: '18:00',
                fin: '20:00',
                nombre: 'Introducción a análisis de datos',
                detalles: 'Introducción básica de análisis de datos desde nociones básicas de datos, introducción a SQL y Python y un roadmap para el desarrollo en este rubro.',
                lugar: 'Auditorio de la FISI',
                link: '', 
                visible: false,
            },               
        ],
        charlas: [  
            {
                dia: '07 ',
                inicio: '15:00',
                fin: '16:00',
                nombre: 'Aplicaciones de ML en logística y retail',
                detalles: 'Descripción de distintos usos de ML en logística y retail entendiendo el contexto de los problemas, sus aplicaciones e impactos.',
                lugar: 'Auditorio de la FISI',
                link: '', 
                visible: false,
            },         
        ],
    },
    // Jair Manrique
    {
        nombres: 'Jair',
        apellidos: 'Manrique',
        perfil: "",
        social_media: {
            instagram: "",
            youtube: "",
        },
        pais: "peru",
        visible: false,
        talleres: [
        ],
        charlas: [  
            {
                dia: '05',
                inicio: '14:00',
                fin: '13:00',
                nombre: '',
                detalles: '',
                lugar: '',
                link: '', 
                visible: false,
            },               
        ],
    },
    // Emilia Paz
    {
        nombres: 'Emilia',
        apellidos: 'Paz',
        perfil: "",
        social_media: {
            instagram: "",
            youtube: "",
        },
        pais: "peru",
        visible: false,
        talleres: [
        ],
        charlas: [  
            {
                dia: '05',
                inicio: '17:00',
                fin: '19:00',
                nombre: '',
                detalles: '',
                lugar: '',
                link: '', 
                visible: false,
            },               
        ],
    },
    // Jorge Villavicencio
    {
        nombres: 'Jorge',
        apellidos: 'Villavicencio',
        perfil: "",
        social_media: {
            instagram: "",
            youtube: "",
        },
        pais: "peru",
        visible: false,
        talleres: [
        ],
        charlas: [  
            {
                dia: '07',
                inicio: '17:00',
                fin: '19:00',
                nombre: '',
                detalles: '',
                lugar: '',
                link: '', 
                visible: false,
            },               
        ],
    },
];

const aliados_sponsors = [
    // colocar el tipo (aliado - sponsor)
    {
        type: 'aliado',
        nombre: 'Google',
        slogan: 'Ing. de Software UNMSM CEO de Tortuga & Caballo Inc.',
        visible: false,
    },
    {
        type: 'aliado',
        nombre: 'Google',
        slogan: 'Ing. de Software UNMSM CEO de Tortuga & Caballo Inc.',
        visible: false,
    },
    {
        type: 'sponsor',
        nombre: 'Google',
        slogan: 'Ing. de Software UNMSM CEO de Tortuga & Caballo Inc.',
        visible: false,
    },
    {
        type: 'sponsor',
        nombre: 'Google',
        slogan: 'Ing. de Software UNMSM CEO de Tortuga & Caballo Inc.',
        visible: false,
    },

]

const eventos_programados = [
    {
        title: 'Ceremonia de apertura',
        start: '2024-11-04T08:00:00',
        end: '2024-11-04T09:00:00',
        extendedProps: {
            description: 'Ceremonia de apertura',
        }
    },
    {
        title: 'Inicio hackathon (ELIMINATORIAS)',
        start: '2024-11-04T09:00:00',
        end: '2024-11-04T10:00:00',
        extendedProps: {
            description: 'Inicio hackathon (ELIMINATORIAS)',
        }
    },
    {
        title: 'Inicio Programación competitiva (ELIMINATORIAS)',
        start: '2024-11-04T12:00:00',
        end: '2024-11-04T13:00:00',
        extendedProps: {
            description: 'Inicio Programación competitiva (ELIMINATORIAS)',
        }
    },
    {
        title: 'Fin Programación competitiva (ELIMINATORIAS)',
        start: '2024-11-04T21:00:00',
        end: '2024-11-04T22:00:00',
        extendedProps: {
            description: 'Fin Programación competitiva (ELIMINATORIAS)',
        }
    },
    {
        title: 'Publicación de resultados Programación competitiva (ELIMINATORIAS)',
        start: '2024-11-04T22:00:00',
        end: '2024-11-04T23:00:00',
        extendedProps: {
            description: 'Publicación de resultados Programación competitiva (ELIMINATORIAS)',
        }
    },
    {
        title: 'Fin Hackathon (ELIMINATORIAS)',
        start: '2024-11-04T23:00:00',
        end: '2024-11-04T23:59:59',
        extendedProps: {
            description: 'Fin Hackathon (ELIMINATORIAS)',
        }
    },
    {
        title: 'Selección Hackathon (ELIMINATORIAS)',
        start: '2024-11-05T08:00:00',
        end: '2024-11-05T09:00:00',
        extendedProps: {
            description: 'Selección Hackathon (ELIMINATORIAS)',
        }
    },
    {
        title: 'Publicación de resultados Hackathon (ELIMINATORIAS)',
        start: '2024-11-05T12:00:00',
        end: '2024-11-05T13:00:00',
        extendedProps: {
            description: 'Publicación de resultados Hackathon (ELIMINATORIAS)',
        }
    },
    {
        title: 'Programación competitiva (FINAL)',
        start: '2024-11-07T18:00:00',
        end: '2024-11-07T21:00:00',
        extendedProps: {
            description: 'Programación competitiva (FINAL)',
        }
    },
    {
        title: 'Recepción de participantes Hackathon (FINAL)',
        start: '2024-11-08T16:00:00',
        end: '2024-11-08T17:00:00',
        extendedProps: {
            description: 'Recepción de participantes Hackathon (FINAL)',
        }
    },
    {
        title: 'Inicio Hackathon (FINAL)',
        start: '2024-11-08T17:00:00',
        end: '2024-11-08T18:00:00',
        extendedProps: {
            description: 'Inicio Hackathon (FINAL)',
        }
    },
    {
        title: 'Desayuno Hackathon (FINAL)',
        start: '2024-11-09T07:00:00',
        end: '2024-11-09T08:00:00',
        extendedProps: {
            description: 'Desayuno Hackathon (FINAL)',
        }
    },
    {
        title: 'Almuerzo Hackathon (FINAL)',
        start: '2024-11-09T12:00:00',
        end: '2024-11-09T13:00:00',
        extendedProps: {
            description: 'Almuerzo Hackathon (FINAL)',
        }
    },
    {
        title: 'Fin Hackathon (FINAL)',
        start: '2024-11-09T16:00:00',
        end: '2024-11-09T17:00:00',
        extendedProps: {
            description: 'Fin Hackathon (FINAL)',
        }
    },
    {
        title: 'Pitch Hackathon (FINAL)',
        start: '2024-11-09T17:00:00',
        end: '2024-11-09T19:00:00',
        extendedProps: {
            description: 'Pitch Hackathon (FINAL)',
        }
    },
    {
        title: 'Premiaciones',
        start: '2024-11-09T19:00:00',
        end: '2024-11-09T20:00:00',
        extendedProps: {
            description: 'Premiaciones',
        }
    },
    {
        title: 'Ceremonia de cierre',
        start: '2024-11-09T20:00:00',
        end: '2024-11-09T21:00:00',
        extendedProps: {
            description: 'Ceremonia de cierre',
        }
    },
]
