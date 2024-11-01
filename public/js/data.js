const speakers = [
    // aca van los speakers y talleristas
    
    // Oliver Sandoval (CORRECTO)
    {
        nombres: 'Oliver',
        apellidos: 'Sandoval',
        perfil: "Ingeniero Informático, Fundador de Developer.pe, plataforma donde comparte tutoriales de programación en Python, Django y otros temas. Además, es miembro de la comunidad de Python Piura y Tech Lead en Muchticket.",
        social_media: {
            github: "https://github.com/developerpe",
            instagram: "https://www.instagram.com/developer.pe",
            youtube: "https://www.youtube.com/@Developerpe",
            linkedin: "https://www.linkedin.com/in/oliver-sandoval-developer",
            threads: "https://www.threads.net/@developer.pe",
            facebook: "https://www.facebook.com/developerper",
        },
        pais: "peru",        
        talleres: [
            {
                dia: '05',
                inicio: '15:00',
                fin: '17:00',
                nombre: 'Python desde Cero',
                detalles: 'En este taller descubrirás qué es Python y por qué es importante aprenderlo. Aprenderás sobre variables, tipos de datos, operadores, condicionales, bucles, listas, tuplas y diccionarios. Además, exploraremos funciones, lambdas, clases, decoradores, POO en Python, y el manejo de excepciones y errores, brindándote una base sólida en este lenguaje.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/9sJBBZ7uFE3mWua7A',                
                publicacion: '2024-10-25T08:00:00',
            },            
            {
                dia: '06',
                inicio: '15:00',
                fin: '18:00',
                nombre: 'Tu Primera API con Django Rest Framework',
                detalles: 'En este taller aprenderás qué es una API y cómo utilizar Django Rest Framework para desarrollarlas. Exploraremos temas clave como serializers, vistas, viewsets, routers, autenticación y el uso de decoradores, proporcionándote las herramientas necesarias para crear APIs robustas y seguras.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/6zCr4fQqc4uqKqtR7',                
                publicacion: '2024-10-26T20:00:00',
            },            
        ],
        charlas: [  
                      
        ],
    },
    // yasmina gonzales (CORRECTO)
    {
        nombres: 'Yasmina',
        apellidos: 'Gonzales',
        perfil: "Ingeniera de Software y emprendedora, con Máster en Tecnologías de Análisis de Datos Masivos. CEO de Lucerna Software y creadora de contenido en ciencias de la computación. Trabaja en proyectos de IoT, sistemas inteligentes y ciencia de datos.",
        social_media: {
            github: "https://github.com/yasminacodes",
            instagram: "https://www.instagram.com/yasminacodes/",
            tiktok: "https://www.tiktok.com/@yasminacodes",
            youtube: "https://www.youtube.com/@yasminacodes",
            discord: "https://discord.com/invite/MpTj5bvd8G",
            linkedin: "https://www.linkedin.com/in/yasgalmon",
        },
        pais: "spain",        
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
                link: 'https://forms.gle/EdqkvFXDWCMoi2Vf8',                
                publicacion: '2024-10-25T08:00:00',
            },            
        ],
    },
    // javier blanco (CORRECTO)
    {
        nombres: 'Javier',
        apellidos: 'Blanco',
        perfil: "Cloud Full Stack Developer & AWS Community Builder Serverless, Solution Architect MultiCloud, Google Cloud Innovator. Consultor TI, Speaker y Creador de contenido. GenAI enthusiast y autodidacta apasionado por la educación inclusiva.",
        social_media: {
            github: "https://github.com/javierblancoch",
            instagram: "https://www.instagram.com/javierblancoch/",
            youtube: 'https://www.youtube.com/channel/UCPw7LcyXAmIxt5uCkIGnStg',
            linkedin: "https://pe.linkedin.com/in/javier-esmith-blanco-chuquizuta",
            twitter: "https://twitter.com/javierblancoch",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [
            {
                dia: '08',
                inicio: '14:00',
                fin: '15:00',
                nombre: 'Un ser de anclaje en el multiverso Cloud',
                detalles: '¿La nube sigue de moda? En esta charla, exploraremos cómo la tecnología Cloud está transformando la manera de construir soluciones innovadoras. Descubre los recursos que ofrece, desde infraestructuras hasta servicios avanzados, y conoce el roadmap ideal para dar tus primeros pasos y crecer en grande.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/hw143rYBKYE2S3zv5',                
                publicacion: '2024-10-25T08:00:00',
            },
        ],
    },
    // lesly samaritano (CORRECTO)
    {
        nombres: 'Lesly',
        apellidos: 'Samaritano',
        perfil: "Ingeniera en Sistemas e Informática y embajadora del programa Google Developers Women Techmakers, con experiencia en RPA (Robotic Process Automation). Desarrolladora de aplicaciones móviles con Flutter y consultora TI independiente.",
        social_media: {
            instagram: "https://www.instagram.com/flutterinastudio",
            tiktok: "https://www.tiktok.com/@flutterinastudio",
            youtube: "https://www.youtube.com/@flutterinastudio",
            linkedin: "https://www.linkedin.com/in/leslysamaritano/",
            twitter: "https://x.com/samaritanoayala",
        },
        pais: "peru",        
        talleres: [
            {
                dia: '04',
                inicio: '14:00',
                fin: '16:00',
                nombre: 'Gestión de Repositorios de Código con GitHub',
                detalles: 'En este taller aprenderás a crear repositorios públicos y privados en GitHub, gestionar proyectos mediante issues y ramas, y elaborar un README y una licencia. También cubriremos cómo generar pull requests y realizar merges para facilitar la colaboración en proyectos de desarrollo.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/DLjhvQtsFHQYUgpr5',                
                publicacion: '2024-10-27T10:00:00',
            },            
            {
                dia: '06',
                inicio: '09:00',
                fin: '11:00',
                nombre: 'Fundamentos de Flutter',
                detalles: 'En este taller aprenderás los fundamentos de Flutter, incluyendo el uso de widgets básicos y la integración de paquetes desde Pub.dev. También exploraremos la maquetación multiplataforma, permitiéndote crear aplicaciones eficientes y visualmente atractivas para diferentes dispositivos.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/4okioEhfHh4wdZmi8',
                publicacion: '2024-10-27T17:00:00',
            },            
            {
                dia: '06',
                inicio: '12:00',
                fin: '14:00',
                nombre: 'Creación de un MVP con Flutterflow',
                detalles: 'En este taller aprenderás diversas formas de crear un MVP, explorando Flutterflow como herramienta educativa y su integración con Flutter. Al finalizar, estarás preparado para crear tu propio MVP de manera eficiente.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/PHeSDD5cKtAG9fzW7',
                publicacion: '2024-10-27T20:00:00',
            },            
        ],
        charlas: [
        ],
    },
    // kevin davila (CORRECTO)
    {
        nombres: 'Kevin',
        apellidos: 'Dávila',
        perfil: "Google Developer Expert en Angular y Microsoft Most Valuable Professional en Tecnologías Web. Ingeniero de software con amplia experiencia en el sector bancario, Fintech y Regtech. Creador de contenido enfocado en programación web.",
        social_media: {
            github: "https://github.com/kevindaviladev",
            instagram: "https://www.instagram.com/kevindaviladev",
            tiktok: "https://www.tiktok.com/@kevindaviladev",
            youtube: "https://www.youtube.com/channel/UCgu_s0iHevVNatUGXnINEHg",
            linkedin: "https://pe.linkedin.com/in/kevin-davila-dev",
            twitter: "https://x.com/kevindaviladev",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [            
            {
                dia: '04',
                inicio: '16:00',
                fin: '17:00',
                nombre: 'Desarrollo Web con Typescript: Un viaje sin retorno',
                detalles: 'Exploraremos TypeScript, el superset de JavaScript que facilita crear aplicaciones web escalables y mantenibles a largo plazo, mejorando la productividad del equipo con su tipado estático y herramientas de desarrollo avanzadas.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/B9hHkZ3Sf1yqyLxGA',                
                publicacion: '2024-10-27T11:00:00',
            },
        ],
    },
    // maybemar hernandez (CORRECTO)
    {
        nombres: 'Maybemar',
        apellidos: 'Hernandez',
        perfil: "Licenciada en Física y Magíster en Ingeniería electrónica con más de 14 años de experiencia en proyectos TI para sistemas embebidos, navales y de pruebas de hardware. Software Engineer for AI training data en Scale AI y creadora de contenido.",
        social_media: {
            github: "https://github.com/maybemarhs",
            instagram: "https://www.instagram.com/maybemarhs/",
            tiktok: "https://tiktok.com/@maybemarhs",
            youtube: "https://www.youtube.com/@maybemarhs",
            twitter: "https://twitter.com/maybemarhs",
        },
        pais: "venezuela",        
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
                link: 'https://forms.gle/3foz1dfQQ7xpMEip6',                
                publicacion: '2024-10-27T12:00:00',
            },            
        ],
    },
    // gianpaul custodio (hackemate) (CORRECTO)
    {
        nombres: 'Gianpaul',
        apellidos: 'Custodio',
        perfil: "Creador de contenido especializado en programación y ciberseguridad, con más de 4 años de experiencia en análisis y gestión de vulnerabilidades web. Enfocado en educar y concienciar sobre la importancia de la seguridad informática.",
        social_media: {
            instagram: "https://www.instagram.com/hackemate.pe/ ",
            youtube: "https://www.youtube.com/@HackeMate",
            linkedin: "https://pe.linkedin.com/in/gianpaul-custodio-chavarr%C3%ADa",
            facebook: "https://www.facebook.com/hackemateperu"
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [            
            {
                dia: '04',
                inicio: '17:00',
                fin: '19:00',
                nombre: 'Creando una aplicación maliciosa y tener acceso al móvil',
                detalles: 'Esta conferencia ofrece una comprensión profunda sobre cómo crear aplicaciones APK maliciosas mediante la inyección de código usando Metasploit Framework. Aprenderemos a modificar aplicaciones legítimas, ocultar payloads maliciosos y acceder de forma remota a dispositivos móviles. También abordaremos las implicaciones éticas y defensivas de estas técnicas para identificar y mitigar amenazas en el entorno móvil.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/3G1i152A1JZQK2uu8',                 
                publicacion: '2024-10-27T13:00:00',
            },            
        ],
    },
    // Yera Flores Sempertegui (CORRECTO)
    {
        nombres: 'Yera',
        apellidos: 'Flores',
        perfil: "Ingeniera Industrial con MBA y 11 años de experiencia en los sectores de tecnología y startups. Especializada en analítica de datos, Machine Learning y gestión y desarrollo comercial, impulsando la innovación en las organizaciones.",
        social_media: {
            github: "https://github.com/gflores1092",
            instagram: "https://www.instagram.com/layeraxd",
            tiktok: "https://www.tiktok.com/@layeraxd",
            youtube: "https://www.youtube.com/@layeraxd",
            twitch: "https://www.twitch.tv/missyera",
            linkedin: "https://www.linkedin.com/in/gflores1092/",
            twitter: "https://x.com/gerafs92",
        },
        pais: "peru",        
        talleres: [
            {
                dia: '06',
                inicio: '18:00',
                fin: '20:00',
                nombre: 'Introducción a análisis de datos',
                detalles: 'Introducción básica de análisis de datos desde nociones básicas de datos, introducción a SQL y Python y un roadmap para el desarrollo en este rubro.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/5A3DgPgxQz1SJL6EA',
                publicacion: '2024-10-27T14:00:00',
            },
        ],
        charlas: [  
            {
                dia: '07',
                inicio: '15:00',
                fin: '16:00',
                nombre: 'Aplicaciones de ML en logística y retail',
                detalles: 'Exploración de los distintos usos de Machine Learning en logística y retail, abordando cómo esta tecnología puede optimizar procesos y predecir tendencias. Entenderemos el contexto de los desafíos en cada sector, sus aplicaciones prácticas e impactos, desde la gestión de inventarios hasta la personalización de la experiencia del cliente.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/6NQGSwWefmqcYmyBA',
                publicacion: '2024-10-27T19:00:00',
            },
        ],
    },
    // Mirna Ampuero (CORRECTO)
    {
        nombres: 'Mirna',
        apellidos: 'Ampuero',
        perfil: "Ingeniera mecatrónica con experiencia en proyectos blockchain, participante en hackatones internacionales. Enfocada en crear soluciones tecnológicas innovadoras que aprovechan blockchain, aplicando tecnología para impactar positivamente.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/mirnaampuero",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [            
            {
                dia: '07',
                inicio: '16:00',
                fin: '17:00',
                nombre: 'Blockchain y Sostenibilidad: Tecnología para un Mundo Mejor',
                detalles: 'Esta conferencia aborda cómo blockchain está ayudando a resolver desafíos ambientales mediante la trazabilidad en las cadenas de suministro, la tokenización de créditos de carbono y la descentralización a través de DAOs. Exploraremos su papel en la creación de un futuro más sostenible y equitativo.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/VSBgjw2LnR7frxnX6',
                publicacion: '2024-10-28T12:00:00',
            },            
        ],
    },
    // Jair Manrique (CORRECTO)
    {
        nombres: 'Jair',
        apellidos: 'Manrique',
        perfil: "Egresado de la UNI con postgrado en Transformación Digital por el MIT. Docente de Blockchain en INICTEL UNI y 1551 UNMSM, CTO y fundador de Solvi, ganadora de StartUp Perú 6G. Fundador de Divelia Studio, con más de 200 proyectos en tecnología avanzada para 100 clientes en 10 países.",
        social_media: {
            linkedin: "https://pe.linkedin.com/in/manrico",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [  
            {
                dia: '05',
                inicio: '14:00',
                fin: '15:00',
                nombre: 'Tokenization of everything',
                detalles: 'Tokenizacion es un proceso de transformación en el que cualquier activo físico, financiero o dato puede convertirse en una unidad digital, pero ¿Realmente se puede tokenizar todo? ¿Como Blockchain ha ayudado a esta transformación y cómo puedo crear negocios de alto valor con ello?',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/CS3XBE1oQe6iHRwe7',                 
                publicacion: '2024-10-28T16:00:00',
            },               
        ],
    },
    // Jhunely Santos (CORRECTO)
    {
        nombres: 'Jhunely',
        apellidos: 'Santos',
        perfil: "Ingeniera de Sistemas, MBA e ISTQB Test Manager, con más de 8 años de experiencia en calidad de software. Actualmente se desempeña como QE Senior Level 2 en Globant, aportando conocimientos avanzados en testing y gestión de calidad.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/jhunely-santos-9a1188ba/",
            instagram: "https://www.instagram.com/jhunelyhilari/",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [  
            {
                dia: '05',
                inicio: '13:00',
                fin: '14:00',
                nombre: 'Más Allá del Testing: Innovación y buenas prácticas en Calidad de Software',
                detalles: 'En esta charla exploraremos las tendencias y mejores prácticas en calidad de software, destacando cómo la innovación está transformando el testing. Revisaremos metodologías ágiles y casos prácticos que optimizan el aseguramiento de calidad, elevan la satisfacción del cliente y mejoran la eficiencia en el desarrollo.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/m1y7gqzm4Kk4bwws5',                 
                publicacion: '2024-10-28T16:00:00',
            },               
        ],
    },
    // Jorge Villavicencio (CORRECTO)
    {
        nombres: 'Jorge',
        apellidos: 'Villavicencio',
        perfil: "Ingeniero de Software por la UNMSM y magíster en Ciencia de Datos por UTEC, donde es Docente y Coordinador de la Maestría en Ciencia de Datos e IA. Speaker en temas de IA e ingeniería de software, con amplia experiencia en el área.",
        social_media: {
            linkedin: "https://pe.linkedin.com/in/villavant",
            instagram: "https://www.instagram.com/villavant",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [  
            {
                dia: '07',
                inicio: '17:00',
                fin: '18:00',
                nombre: 'Transformando la Ingeniería de Software con IA Generativa: Aplicaciones Prácticas y Futuro',
                detalles: 'Esta ponencia aborda el impacto de la IA generativa en ingeniería de software, desde creación de código hasta automatización de pruebas. Con herramientas como ChatGPT y Copilot, veremos cómo aceleran el desarrollo, mejoran la calidad y redefinen el rol del ingeniero, con ejemplos prácticos y una actividad interactiva.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/LCsvaxJkyzGpRTfH6',                 
                publicacion: '2024-10-28T16:00:00',
            },               
        ],
    },
    // Emilia Paz (CORRECTO)
    {
        nombres: 'Emilia',
        apellidos: 'Paz',
        perfil: "Ingeniera de software de Arequipa, Perú, radicada en San Francisco, EE. UU. Graduada en Ciencias de la Computación en la Universidad de Kansas, lidera el trabajo de UI para Chrome Extensions en Google. Promueve la diversidad en tecnología como panelista, profesora en comunidades latinas y organizadora de eventos en Perú.",
        social_media: {
            github: "https://github.com/EmiliaPaz",
            linkedin: "https://www.linkedin.com/in/emiliapaz",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [  
            {
                dia: '05',
                inicio: '17:00',
                fin: '18:00',
                nombre: 'Introducción a Chrome Extensions',
                detalles: 'Sumérgete en el desarrollo de extensiones para Chrome y descubre cómo potenciar la experiencia del usuario en la web. Aprenderás desde los fundamentos, APIs clave y las mejores prácticas de seguridad hasta cómo crear y publicar tus propias extensiones.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/tRdV1QfagETkdFq37',                 
                publicacion: '2024-10-28T16:00:00',
            },               
        ],
    },
    // Ronald Barzola (CORRECTO)
    {
        nombres: 'Ronald',
        apellidos: 'Barzola',
        perfil: "YLAI Alumni, Director de Innovación e Impacto en Incubadora Scale y Program Manager en Impact Startup Competition, enfocado en desarrollo de proyectos de alto impacto y fomento del emprendimiento con soluciones innovadoras y sostenibles.",
        social_media: {
            instagram: "https://www.instagram.com/ronaldbarzolape",
            linkedin: "https://www.linkedin.com/in/ronaldbarzola",
            facebook: "https://www.facebook.com/ronaldbarzolape",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [  
            {
                dia: '07',
                inicio: '13:00',
                fin: '14:00',
                nombre: 'Habilidades del Futuro: Aprender a Aprender',
                detalles: 'En un mundo donde la tecnología y la automatización están transformando los trabajos a una velocidad sin precedentes, la habilidad de aprender de forma ágil y continua se convierte en una de las competencias más valiosas. Esta conferencia busca inspirar y capacitar a los asistentes en el arte de aprender a aprender, facilitando herramientas prácticas de productividad, gestión del tiempo y recursos digitales para desarrollar un enfoque de aprendizaje eficiente y adaptativo.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/1NNdbZdSmhsHbkwy8',                 
                publicacion: '2024-10-28T16:00:00',
            },               
        ],
    },
    // Javier Cuicapuza (CORRECTO)
    {
        nombres: 'Javier',
        apellidos: 'Cuicapuza',
        perfil: "Fundador de Data Science Research Perú, consultor en TI con más de 9 años de experiencia y candidato a MBA con especialización en Analytics. Apasionado por la innovación y la transformación de empresas y organizaciones con data.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/javier-richard-cuicapuza-antonio",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [  
            {
                dia: '07',
                inicio: '11:00',
                fin: '12:00',
                nombre: 'Tendencias y Avances en Ciencia de Datos e IA para 2025',
                detalles: 'Exploraremos las tendencias y desarrollos que transforman la ciencia de datos y la IA, desde modelos generativos y sistemas predictivos hasta técnicas de automatización y optimización. Los participantes obtendrán una visión práctica de las habilidades en demanda para enfrentar los retos y oportunidades del 2025 en IA y ciencia de datos.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/jTNwL45renMk1aLX8',                 
                publicacion: '2024-10-28T16:00:00',
            },               
        ],
    },
    // Laren Osorio (CORRECTO)
    {
        nombres: 'Laren',
        apellidos: 'Osorio',
        perfil: "Ingeniero de Sistemas de la UNI con 10+ años en IA, Big Data y Cloud Computing. Diplomado en Analítica de Negocios en Centrum PUCP y Micromaster en Data Science en MITx. Actualmente es Data & Analytics Lead en Finerio Connect, con amplia experiencia.",
        social_media: {
            instagram: "https://www.instagram.com/larenwell",
            linkedin: "https://www.linkedin.com/in/losoriot",
            facebook: "https://www.facebook.com/larenosoriotoribio",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [  
            {
                dia: '08',
                inicio: '15:00',
                fin: '16:00',
                nombre: 'Entre intentos y lecciones: Una carrera en el mundo de los datos',
                detalles: 'En esta conferencia, compartiré los pasos, habilidades y proyectos que construyeron mi carrera en ciencia de datos. Desde experiencias universitarias hasta trabajos en IA y Big Data, exploraremos mi ruta de aprendizaje y los desafíos enfrentados. Una guía práctica con lecciones para quienes aspiran a crecer en esta industria.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/LW31zUEKZ89pygRz8',                 
                publicacion: '2024-10-28T09:00:00',
            },               
        ],
    },
    // Alonso Melgarejo
    {
        nombres: 'Alonso',
        apellidos: 'Melgarejo',
        perfil: "Director Ejecutivo en BigCloudDev y Gerente General de Big Data Academy. Profesional con 14 años de experiencia en Big Data, Cloud e IA. Lidera proyectos en banca, telecomunicaciones y gobierno, aportando innovación y liderazgo tecnológico.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/alonsoraulmg/",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [  
            {
                dia: '04',
                inicio: '11:00',
                fin: '12:00',
                nombre: '¿Cómo usan ChatGPT las grandes empresas?',
                detalles: 'La Inteligencia Artificial Generativa está transformando la forma en que trabajamos, ofreciendo herramientas poderosas para optimizar procesos y potenciar la productividad. Sin embargo, su implementación en el entorno empresarial presenta varios desafíos clave que es fundamental comprender y saber afrontar.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/swpTUrLnqKNaY8wg9',                 
                publicacion: '2024-10-29T09:00:00',
            },               
        ],
    },
    // Edwin Maraví
    {
        nombres: 'Edwin',
        apellidos: 'Maraví',
        perfil: "Director General de CJava y Arquitecto de sistemas basados en tecnología Java. Con amplia experiencia en Consultoría TI para entidades gubernamentales y organizaciones del sector privado.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/emaravi",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [  
            {
                dia: '07',
                inicio: '12:00',
                fin: '13:00',
                nombre: 'Lo que conoces hoy no será lo mismo mañana',
                detalles: 'Tecnologías disruptivas en constante cambio, nuevos paradigmas en cuestión de horas, el conocimiento humano está evolucionando más lento que la IA. La brecha entre el futuro y el presente se acorta y gran parte de nosotros aún no toma conciencia de esta nueva revolución tecnológica. ¿Qué debemos hacer? ¿Qué es bueno o qué es malo? ¿A dónde debemos concentrar nuestras energías? ¿Cuál es nuestro rol como ingenieros en este nuevo mundo?',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/ikZHg8isZyZkQvdg6',                 
                publicacion: '2024-10-28T09:00:00',
            },               
        ],
    },
    // Fiorella Nuñez
    {
        nombres: 'Fiorella',
        apellidos: 'Nuñez',
        perfil: "Especialista en ciberseguridad con experiencia en PCI DSS, pentesting y DevSecOps. Destaca en gestión de vulnerabilidades y liderazgo en transformación digital. Instructora en Levo Learning Center. Cuenta con certificaciones como Lead Cybersecurity y Scrum Foundation.",
        social_media: {
            linkedin: "https://www.linkedin.com/in/fiorella-araceli-nu%C3%B1ez-zegarra-44884616a/",
        },
        pais: "peru",        
        talleres: [
        ],
        charlas: [  
            {
                dia: '07',
                inicio: '13:00',
                fin: '14:00',
                nombre: 'Introducción a la Ciberseguridad',
                detalles: 'Analizaremos los fundamentos de la ciberseguridad y sus buenas prácticas aplicadas en sectores clave como la banca, salud y telecomunicaciones. Abordaremos el manejo seguro de datos, gestión de vulnerabilidades y autenticación, destacando la importancia de proteger la información financiera en el ámbito bancario de manera efectiva.',
                lugar: 'Auditorio de la FISI - UNMSM',
                link: 'https://forms.gle/d5mpjDvpPjL25wQM8',                 
                publicacion: '2024-10-28T09:00:00',
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
    },
    {
        type: 'aliado',
        nombre: 'Innovation Lab',
        slogan: 'Laboratorio de Innovación de la UNI',
        visible: true,
    },
    {
        type: 'aliado',
        nombre: 'Scale',
        slogan: 'Scale, Incubadora de Impacto',
        visible: true,
    },
    {
        type: 'aliado',
        nombre: 'Maker Lab',
        slogan: 'Maker Lab, comunidad de desarrolladores de tecnología',
        visible: true,
    },
    {
        type: 'aliado',
        nombre: 'CPC UNMSM',
        slogan: 'Club de Programación Competitiva de la UNMSM',
        visible: true,
    },
    // Sponsors
    {
        type: 'sponsor',
        nombre: 'DSRP',
        slogan: 'Data Science Reserach Perú',
        visible: true,
    },
    {
        type: 'sponsor',
        nombre: 'BDA',
        slogan: 'Big Data Academy',
        visible: true,
    },
    {
        type: 'sponsor',
        nombre: 'Datapath',
        slogan: 'Datapath',
        visible: false,
    },
    {
        type: 'sponsor',
        nombre: 'CJava',
        slogan: 'CJava',
        visible: true,
    },
    {
        type: 'sponsor',
        nombre: 'Levo',
        slogan: 'Levo Learning Center, Sé disruptivo en el mundo tecnológico',
        visible: true,
    },
    {
        type: 'sponsor',
        nombre: 'Peru Hacking',
        slogan: 'Perú Hacking, Hacking en entornos reales',
        visible: true,
    },
    {
        type: 'sponsor',
        nombre: 'Divelia',
        slogan: 'Divelia Studio, Transformación digital para negocios',
        visible: true,
    },
    {
        type: 'sponsor',
        nombre: 'GIM',
        slogan: 'Go Insame Media, Influencer Marketing y Social Media',
        visible: true,
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
            description: '<a class="link-horario" href="/hackathon">Inicio hackathon (ELIMINATORIAS)</a>',
        }
    },
    {
        title: 'Inicio Programación competitiva (ELIMINATORIAS)',
        start: '2024-11-04T12:00:00',
        end: '2024-11-04T13:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/programacion-competitiva">Inicio Programación competitiva (ELIMINATORIAS)</a>',
        }
    },
    {
        title: 'Fin Programación competitiva (ELIMINATORIAS)',
        start: '2024-11-04T21:00:00',
        end: '2024-11-04T22:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/programacion-competitiva">Fin Programación competitiva (ELIMINATORIAS)</a>',
        }
    },
    {
        title: 'Publicación de resultados Programación competitiva (ELIMINATORIAS)',
        start: '2024-11-04T22:00:00',
        end: '2024-11-04T23:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/programacion-competitiva">Publicación de resultados Programación competitiva (ELIMINATORIAS)</a>',
        }
    },
    {
        title: 'Fin Hackathon (ELIMINATORIAS)',
        start: '2024-11-04T23:00:00',
        end: '2024-11-04T23:59:59',
        extendedProps: {
            description: '<a class="link-horario" href="/hackathon">Fin Hackathon (ELIMINATORIAS)</a>',
        }
    },
    {
        title: 'Selección Hackathon (ELIMINATORIAS)',
        start: '2024-11-05T08:00:00',
        end: '2024-11-05T09:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/hackathon">Selección Hackathon (ELIMINATORIAS)</a>',
        }
    },
    {
        title: 'Publicación de resultados Hackathon (ELIMINATORIAS)',
        start: '2024-11-05T12:00:00',
        end: '2024-11-05T13:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/hackathon">Publicación de resultados Hackathon (ELIMINATORIAS)</a>',
        }
    },
    {
        title: 'Programación competitiva (FINAL)',
        start: '2024-11-07T18:00:00',
        end: '2024-11-07T21:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/programacion-competitiva">Programación competitiva (FINAL)</a>',
        }
    },
    {
        title: 'Recepción de participantes Hackathon (FINAL)',
        start: '2024-11-08T16:00:00',
        end: '2024-11-08T17:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/hackathon">Recepción de participantes Hackathon (FINAL)</a>',
        }
    },
    {
        title: 'Inicio Hackathon (FINAL)',
        start: '2024-11-08T17:00:00',
        end: '2024-11-08T18:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/hackathon">Inicio Hackathon (FINAL)</a>',
        }
    },
    {
        title: 'Desayuno Hackathon (FINAL)',
        start: '2024-11-09T07:00:00',
        end: '2024-11-09T08:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/hackathon">Desayuno Hackathon (FINAL)</a>',
        }
    },
    {
        title: 'Almuerzo Hackathon (FINAL)',
        start: '2024-11-09T12:00:00',
        end: '2024-11-09T13:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/hackathon">Almuerzo Hackathon (FINAL)</a>',
        }
    },
    {
        title: 'Fin Hackathon (FINAL)',
        start: '2024-11-09T16:00:00',
        end: '2024-11-09T17:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/hackathon">Fin Hackathon (FINAL)</a>',
        }
    },
    {
        title: 'Pitch Hackathon (FINAL)',
        start: '2024-11-09T17:00:00',
        end: '2024-11-09T19:00:00',
        extendedProps: {
            description: '<a class="link-horario" href="/hackathon">Pitch Hackathon (FINAL)</a>',
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
