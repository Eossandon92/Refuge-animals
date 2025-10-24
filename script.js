// Datos de perros para mostrar
const dogs = [
    {
        name: "Max",
        age: "3 años",
        size: "Grande",
        breed: "Pastor Alemán",
        description: "Max es un perro muy cariñoso y protector. Le encanta jugar y es excelente con los niños.",
        image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Luna",
        age: "2 años",
        size: "Mediano",
        breed: "Mestizo",
        description: "Luna es una perra muy juguetona y energética. Perfecta para familias activas.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Rocky",
        age: "5 años",
        size: "Grande",
        breed: "Labrador",
        description: "Rocky es un perro muy tranquilo y obediente. Ideal para personas mayores o familias relajadas.",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Bella",
        age: "1 año",
        size: "Pequeño",
        breed: "Chihuahua Mix",
        description: "Bella es una perrita muy dulce y cariñosa. Le gusta estar cerca de sus humanos.",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Charlie",
        age: "4 años",
        size: "Mediano",
        breed: "Beagle",
        description: "Charlie es muy inteligente y le encanta explorar. Perfecto para aventuras al aire libre.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Daisy",
        age: "6 años",
        size: "Grande",
        breed: "Golden Retriever",
        description: "Daisy es una perra muy gentil y paciente. Excelente con niños y otros animales.",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

// Función para crear tarjetas de perros
function createDogCard(dog) {
    return `
        <div class="dog-card">
            <img src="${dog.image}" alt="${dog.name}">
            <div class="dog-info">
                <h3>${dog.name}</h3>
                <div class="dog-details">
                    <span><i class="fas fa-birthday-cake"></i> ${dog.age}</span>
                    <span><i class="fas fa-ruler"></i> ${dog.size}</span>
                    <span><i class="fas fa-paw"></i> ${dog.breed}</span>
                </div>
                <p>${dog.description}</p>
                <button class="btn btn-primary" onclick="showAdoptionForm('${dog.name}')">
                    <i class="fas fa-heart"></i> Adoptar
                </button>
            </div>
        </div>
    `;
}

// Cargar perros al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const dogsContainer = document.getElementById('dogs-container');
    if (dogsContainer) {
        dogsContainer.innerHTML = dogs.map(dog => createDogCard(dog)).join('');
    }
    
    // Inicializar funcionalidades
    initializeNavigation();
    initializeDonations();
    initializeAnimations();
});

// Navegación móvil
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un enlace
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Sistema de donaciones
function initializeDonations() {
    // Botones de cantidad de donación
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de otros botones
            document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
        });
    });
    
    // Botones de donación
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.textContent.includes('Donar') || btn.textContent.includes('Ser Padrino')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                showDonationAlert();
            });
        }
    });
}

// Animaciones al hacer scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    document.querySelectorAll('.dog-card, .step, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Función para mostrar formulario de adopción
function showAdoptionForm(dogName) {
    const message = `¡Gracias por tu interés en adoptar a ${dogName}!\n\nPara continuar con el proceso de adopción, por favor:\n\n1. Visita nuestro refugio para conocer a ${dogName} en persona\n2. Trae una identificación válida\n3. Si tienes otros animales, trae sus registros de vacunación\n\n¿Te gustaría que te contactemos para programar una visita?`;
    
    if (confirm(message)) {
        alert('¡Excelente! Nos pondremos en contacto contigo pronto para programar tu visita.');
    }
}

// Función para mostrar alerta de donación
function showDonationAlert() {
    alert('¡Gracias por tu generosidad!\n\nEn una implementación real, aquí se abriría un sistema de pago seguro.\n\nTu donación nos ayuda a:\n• Alimentar a los perros\n• Proporcionar atención veterinaria\n• Mantener las instalaciones\n• Rescatar más perros necesitados');
}

// Contador animado para estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
            }
        }, 40);
    });
}

// Activar contador cuando la sección de estadísticas sea visible
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Efecto parallax suave para el hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});