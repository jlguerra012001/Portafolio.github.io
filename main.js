document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.querySelector('.project-grid');

    const projects = [
        {
            name: 'E-commerce Platform',
            description: 'Plataforma completa de comercio electrónico desarrollada con React y Node.js. Incluye sistema de pagos, gestión de inventario y panel de administración.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            name: 'App de Gestión de Tareas',
            description: 'Aplicación móvil para gestión de proyectos y tareas con sincronización en tiempo real y notificaciones push.',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
            tags: ['React Native', 'Firebase', 'Redux'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            name: 'Dashboard Analytics',
            description: 'Panel de control interactivo para análisis de datos con gráficos dinámicos y reportes personalizables.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
            tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            name: 'Sistema de Reservas',
            description: 'Sistema web para gestión de reservas y citas con calendario integrado y confirmaciones automáticas.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
            tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            name: 'API REST de Microservicios',
            description: 'Arquitectura de microservicios escalable con documentación automática y sistema de autenticación JWT.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
            tags: ['Node.js', 'Express', 'Docker', 'Swagger'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            name: 'Sitio Web Corporativo',
            description: 'Sitio web moderno y responsivo para empresa con SEO optimizado y sistema de gestión de contenido.',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
            liveLink: '#',
            codeLink: '#'
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.name;
        projectCard.appendChild(projectImage);

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project-info');

        const projectName = document.createElement('h4');
        projectName.textContent = project.name;
        projectInfo.appendChild(projectName);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectInfo.appendChild(projectDescription);

        const projectTags = document.createElement('div');
        projectTags.classList.add('project-tags');
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('project-tag');
            tagElement.textContent = tag;
            projectTags.appendChild(tagElement);
        });
        projectInfo.appendChild(projectTags);

        const projectLinks = document.createElement('div');
        projectLinks.classList.add('project-links');

        const liveLink = document.createElement('a');
        liveLink.href = project.liveLink;
        liveLink.classList.add('live-link');
        liveLink.textContent = 'Ver Demo';
        projectLinks.appendChild(liveLink);

        const codeLink = document.createElement('a');
        codeLink.href = project.codeLink;
        codeLink.classList.add('code-link');
        codeLink.textContent = 'Ver Código';
        projectLinks.appendChild(codeLink);

        projectInfo.appendChild(projectLinks);
        projectCard.appendChild(projectInfo);

        projectGrid.appendChild(projectCard);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Button click handlers
    const primaryBtn = document.querySelector('.primary-btn');
    if (primaryBtn) {
        primaryBtn.addEventListener('click', () => {
            document.querySelector('#proyectos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    const secondaryBtn = document.querySelector('.secondary-btn');
    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', () => {
            // Simular descarga de CV
            alert('Descargando CV... (Esta es una simulación)');
        });
    }

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
});

// Preloader effect
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';