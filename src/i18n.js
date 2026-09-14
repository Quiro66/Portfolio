import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            resume: "Resume",
            contact: "Contact"
          },
          home: {
            hiThere: "Hi There!",
            iAm: "I'M",
            findMeOn: "Find Me On",
            connect: "Feel free to connect with me",
            connectHighlight: "connect",
            introduce: "LET ME INTRODUCE MYSELF",
            introduceHighlight: "INTRODUCE",
            description: "I'm a Full Stack Developer with experience in developing web applications using Next.js, React, Node.js and MongoDB. I've built interfaces and pages from scratch, developing responsive functionalities, integrating REST APIs and working with authentication, profiles, searches, filters, payments, dashboards, SEO and performance optimization.",
            proficient: "I'm proficient in",
            technologies: "Next.js, React, JavaScript (ES6+), TypeScript, Tailwind CSS, Node.js, Express, NestJS",
            stacks: "— and I enjoy working across both backend and frontend stacks.",
            areas: "My key areas of interest include developing",
            areasList: "Web Applications, REST APIs, Authentication Systems",
            applying: "and applying best practices in architecture, validation, error handling and security.",
            building: "Whenever possible, I love building projects with",
            frameworks: "and modern frameworks like"
          },
          about: {
            knowWho: "Know Who",
            knowWhoHighlight: "I'M",
            professionalSkillset: "Professional",
            professionalSkillsetHighlight: "Skillset",
            tools: "Tools",
            toolsHighlight: "I use",
            hiEveryone: "Hi everyone! I'm",
            name: "Juan José Quiroz Bolivar",
            from: "from",
            location: "Medellín, Colombia",
            developer: "I'm a Full Stack Developer with experience in developing web applications using Next.js, React, Node.js and MongoDB.",
            hold: "I hold a",
            degree: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
            fromInstitution: "from",
            institution: "SENA",
            outsideCoding: "Outside of coding, I love engaging in activities that keep me creative and inspired:",
            teamwork: "Teamwork and Collaboration",
            learning: "Continuous Learning",
            problemSolving: "Problem Solving",
            quote: "Build maintainable solutions and work collaboratively to create impactful technology!",
            signature: "Juan José"
          },
          resume: {
            experience: "My",
            experienceHighlight: "Experience",
            skills: "My",
            skillsHighlight: "Skills",
            languages: "Languages",
            frontend: "Frontend",
            frontendSkills: "Next.js, React, JavaScript (ES6+), TypeScript, Tailwind CSS, Vue.js, Nuxt 3, HTML5, CSS3, Axios",
            backend: "Backend",
            backendSkills: "Node.js, Express, NestJS, REST API design, JWT authentication, WebSockets",
            databases: "Databases",
            databaseSkills: "MongoDB, Mongoose, PostgreSQL, MySQL, SQLite, Sequelize",
            toolsQuality: "Tools & Quality",
            toolsSkills: "Jest, Docker, Docker Compose, GitHub Actions, PM2, SonarQube, Git, GitHub, GitFlow, Conventional Commits, Swagger (OpenAPI), Postman",
            methodologies: "Methodologies",
            methodologiesSkills: "Agile, Scrum, Jira, Trello, Code Review, SOLID, environment management (.env)",
            softSkills: "Soft Skills",
            softSkillsList: "Teamwork, effective communication, critical thinking, problem solving, autonomy, adaptability, continuous learning, time management, professional empathy, continuous improvement mindset",
            spanish: "Spanish: Native",
            english: "English: A2 (in progress)",
            novacodifyTitle: "Frontend Developer",
            novacodifyCompany: "Novacodify",
            novacodifyDate: "February 2026 - September 2026",
            novacodifyDesc: "Developed interfaces and complete pages from scratch using Next.js, React and Tailwind CSS with responsive design. Implemented authentication, user profiles, forms, dashboards, search and filtering functionalities, and REST API integration. Participated in booking, payment, rating, review and notification features. Worked with MongoDB and Mongoose for intermediate-level operations including CRUD, schemas, models, queries and document relationships.",
            neusSoftTitle: "Web Developer",
            neusSoftCompany: "Neus Soft",
            neusSoftDate: "May 2024 - November 2024",
            neusSoftDesc: "Developed and maintained online stores optimized for performance and user experience. Implemented dynamic components in Nuxt 3 integrated with Laravel backend. Participated in the product lifecycle applying development best practices, version control and agile methodologies. Worked with REST integrations and collaboration tools like Git, GitHub, Trello, Jira, Postman, Figma and VS Code.",
            neusSoftStack: "Stack: Nuxt 3, JavaScript (ES6+), PHP, Laravel, HTML5, CSS3, MySQL, Axios, REST APIs.",
            rewiTitle: "Software Development Bootcamp",
            rewiCompany: "REWI",
            rewiDate: "May 2025 - May 2026",
            rewiDesc: "Intensive software development bootcamp",
            senaTitle: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
            senaCompany: "SENA",
            senaDate: "2024",
            senaDesc: "Software Analysis and Development Technology",
            bachelorTitle: "Bachiller Técnico en Análisis y Desarrollo de Software",
            bachelorCompany: "High School",
            bachelorDate: "2023",
            bachelorDesc: "Technical Bachelor in Software Analysis and Development"
          },
          projects: {
            heading: "My Recent",
            headingHighlight: "Works",
            description: "Here are a few projects I've worked on recently.",
            mediwaveTitle: "Mediwave",
            mediwaveDesc: "A web platform that integrates IoT and Blockchain to optimize medication management. Our main focus was to ensure security in handling and guarantee traceability of the cold chain during transportation, always prioritizing product integrity. Developed with colleagues as part of an innovative healthcare solution."
          },
          footer: {
            designedBy: "Designed and Built by Juan José Quiroz Bolivar",
            copyright: "Copyright © {year} Luan"
          },
          contact: {
            heading: "Get In",
            headingHighlight: "Touch",
            description: "Feel free to reach out to me through any of these channels:",
            linkedin: "LinkedIn",
            github: "GitHub",
            phone: "Phone",
            email: "Email",
            callMe: "Call me at",
            sendEmail: "Send me an email"
          }
        }
      },
      es: {
        translation: {
          nav: {
            home: "Inicio",
            about: "Sobre mí",
            projects: "Proyectos",
            resume: "Currículum",
            contact: "Contacto"
          },
          home: {
            hiThere: "¡Hola!",
            iAm: "SOY",
            findMeOn: "Encuéntrame en",
            connect: "Siéntete libre de conectar conmigo",
            connectHighlight: "conectar",
            introduce: "PERMÍTEME",
            introduceHighlight: "PRESENTARME",
            description: "Soy un Full Stack Developer con experiencia en el desarrollo de aplicaciones web usando Next.js, React, Node.js y MongoDB. He construido interfaces y páginas desde cero, desarrollando funcionalidades responsive, integrando APIs REST y trabajando con autenticación, perfiles, búsquedas, filtros, pagos, dashboards, SEO y optimización de rendimiento.",
            proficient: "Soy competente en",
            technologies: "Next.js, React, JavaScript (ES6+), TypeScript, Tailwind CSS, Node.js, Express, NestJS",
            stacks: "— y disfruto trabajando en ambos stacks, backend y frontend.",
            areas: "Mis áreas clave de interés incluyen desarrollar",
            areasList: "Aplicaciones Web, APIs REST, Sistemas de Autenticación",
            applying: "y aplicando mejores prácticas en arquitectura, validación, manejo de errores y seguridad.",
            building: "Siempre que sea posible, me encanta construir proyectos con",
            frameworks: "y frameworks modernos como"
          },
          about: {
            knowWho: "Conoce quién",
            knowWhoHighlight: "SOY",
            professionalSkillset: "Habilidades",
            professionalSkillsetHighlight: "Profesionales",
            tools: "Herramientas",
            toolsHighlight: "que uso",
            hiEveryone: "¡Hola a todos! Soy",
            name: "Juan José Quiroz Bolivar",
            from: "de",
            location: "Medellín, Colombia",
            developer: "Soy un Full Stack Developer con experiencia en el desarrollo de aplicaciones web usando Next.js, React, Node.js y MongoDB.",
            hold: "Poseo un",
            degree: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
            fromInstitution: "de",
            institution: "SENA",
            outsideCoding: "Fuera del código, me encanta participar en actividades que me mantienen creativo e inspirado:",
            teamwork: "Trabajo en equipo y Colaboración",
            learning: "Aprendizaje Continuo",
            problemSolving: "Resolución de Problemas",
            quote: "¡Construye soluciones mantenibles y trabaja colaborativamente para crear tecnología impactante!",
            signature: "Juan José"
          },
          resume: {
            experience: "Mi",
            experienceHighlight: "Experiencia",
            skills: "Mis",
            skillsHighlight: "Habilidades",
            languages: "Idiomas",
            frontend: "Frontend",
            frontendSkills: "Next.js, React, JavaScript (ES6+), TypeScript, Tailwind CSS, Vue.js, Nuxt 3, HTML5, CSS3, Axios",
            backend: "Backend",
            backendSkills: "Node.js, Express, NestJS, diseño de APIs REST, autenticación JWT, WebSockets",
            databases: "Bases de Datos",
            databaseSkills: "MongoDB, Mongoose, PostgreSQL, MySQL, SQLite, Sequelize",
            toolsQuality: "Herramientas y Calidad",
            toolsSkills: "Jest, Docker, Docker Compose, GitHub Actions, PM2, SonarQube, Git, GitHub, GitFlow, Conventional Commits, Swagger (OpenAPI), Postman",
            methodologies: "Metodologías",
            methodologiesSkills: "Agile, Scrum, Jira, Trello, Code Review, SOLID, gestión de entornos (.env)",
            softSkills: "Habilidades Blandas",
            softSkillsList: "Trabajo en equipo, comunicación efectiva, pensamiento crítico, resolución de problemas, autonomía, adaptabilidad, aprendizaje continuo, gestión del tiempo, empatía profesional, mentalidad de mejora continua",
            spanish: "Español: Nativo",
            english: "Inglés: A2 (en progreso)",
            novacodifyTitle: "Desarrollador Frontend",
            novacodifyCompany: "Novacodify",
            novacodifyDate: "Febrero 2026 - Septiembre 2026",
            novacodifyDesc: "Desarrollé interfaces y páginas completas desde cero utilizando Next.js, React y Tailwind CSS con diseño responsive. Implementé autenticación, perfiles de usuarios, formularios, dashboards, funcionalidades de búsqueda y filtrado, e integración de APIs REST. Participé en funcionalidades de reservas, pagos, calificaciones, reseñas y notificaciones. Trabajé con MongoDB y Mongoose a nivel intermedio incluyendo CRUD, esquemas, modelos, consultas y relaciones entre documentos.",
            neusSoftTitle: "Desarrollador Web",
            neusSoftCompany: "Neus Soft",
            neusSoftDate: "Mayo 2024 - Noviembre 2024",
            neusSoftDesc: "Desarrollé y mantuve tiendas online optimizadas para rendimiento y experiencia de usuario. Implementé componentes dinámicos en Nuxt 3 integrados con Laravel en el backend. Participé en el ciclo de vida del producto aplicando buenas prácticas de desarrollo, control de versiones y metodologías ágiles. Trabajé con integraciones REST y herramientas de colaboración y desarrollo como Git, GitHub, Trello, Jira, Postman, Figma y VS Code.",
            neusSoftStack: "Stack: Nuxt 3, JavaScript (ES6+), PHP, Laravel, HTML5, CSS3, MySQL, Axios, REST APIs.",
            rewiTitle: "Bootcamp de Desarrollo de Software",
            rewiCompany: "REWI",
            rewiDate: "Mayo 2025 - Mayo 2026",
            rewiDesc: "Bootcamp intensivo de desarrollo de software",
            senaTitle: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
            senaCompany: "SENA",
            senaDate: "2024",
            senaDesc: "Tecnología en Análisis y Desarrollo de Software",
            bachelorTitle: "Bachiller Técnico en Análisis y Desarrollo de Software",
            bachelorCompany: "Institución Educativa",
            bachelorDate: "2023",
            bachelorDesc: "Bachiller Técnico en Análisis y Desarrollo de Software"
          },
          projects: {
            heading: "Mis Trabajos",
            headingHighlight: "Recientes",
            description: "Aquí hay algunos proyectos en los que he trabajado recientemente.",
            mediwaveTitle: "Mediwave",
            mediwaveDesc: "Una plataforma web que integra IoT y Blockchain para optimizar la gestión de medicamentos. Nuestro enfoque principal fue garantizar la seguridad en la manipulación y asegurar la trazabilidad de la cadena de frío durante el transporte, priorizando siempre la integridad del producto. Desarrollado junto a mis compañeros como parte de una solución innovadora de atención médica."
          },
          footer: {
            designedBy: "Diseñado y Construido por Juan José Quiroz Bolivar",
            copyright: "Derechos de autor © {year} Luan"
          },
          contact: {
            heading: "Ponte en",
            headingHighlight: "Contacto",
            description: "Siéntete libre de contactarme a través de cualquiera de estos canales:",
            linkedin: "LinkedIn",
            github: "GitHub",
            phone: "Teléfono",
            email: "Correo",
            callMe: "Llámame al",
            sendEmail: "Envíame un correo"
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;