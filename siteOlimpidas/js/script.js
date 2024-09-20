document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementById('verMais');
    botao.addEventListener('click', function() {
        var itens = document.querySelectorAll('.escondido');
        itens.forEach(function(item) {
            if (item.style.display === 'none' || item.style.display === '') {
                item.style.display = 'list-item';
            } else {
                item.style.display = 'none';
            }
        });

        // Alterar o texto do botão
        if (botao.textContent === 'Ver Menos') {
            botao.textContent = 'Ver Mais';
        } else {
            botao.textContent = 'Ver Menos';
        }
    });
});


    
    // Ocultar Tela de Carregamento
    window.addEventListener('load', function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    });

    // Animação de Carregamento de Imagens Lazy Load
    const lazyImages = document.querySelectorAll('.lazy');
    const lazyLoad = function () {
        lazyImages.forEach(image => {
            if (image.getBoundingClientRect().top <= window.innerHeight) {
                image.src = image.dataset.src;
                image.classList.add('loaded');
                image.classList.remove('lazy');
            }
        });
    };

    lazyLoad();
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);

// Inicialização do Mapa Interativo
function initMap() {
    const losAngeles = { lat: 34.0522, lng: -118.2437 }; // Coordenadas de Los Angeles
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: losAngeles
    });
    new google.maps.Marker({
        position: losAngeles,
        map: map,
        title: 'Olimpíadas de 2028 - Los Angeles'
    });
}

// Carregar o Script do Google Maps
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.defer = true;
document.head.appendChild(script);


    // Contador Regressivo para Eventos
    function startCountdown(endDate) {
        const countdown = document.querySelector('.countdown');
        function updateCountdown() {
            const now = new Date();
            const timeLeft = endDate - now;
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
        setInterval(updateCountdown, 1000);
    }

    const eventDate = new Date('2028-07-31T23:59:59');
    startCountdown(eventDate);

    // Efeito de Navegação Suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Filtros Dinâmicos para Galeria
    document.querySelectorAll('.filter').forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            document.querySelectorAll('.gallery a').forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Envio de Formulário de Contato com Feedback
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const feedback = document.getElementById('form-feedback');
        feedback.textContent = 'Mensagem enviada com sucesso!';
        feedback.style.color = '#27ae60';
        this.reset();
    });

    // Notificações em Tempo Real (Simulação)
    setTimeout(() => {
        alert('Confira as novas ofertas disponíveis!');
    }, 5000);

    // Carregar Mais Posts do Blog
    let page = 1;
    document.getElementById('load-more').addEventListener('click', function () {
        page++;
        fetch(`https://api.example.com/blog/posts?page=${page}`)
            .then(response => response.json())
            .then(data => {
                const blogPosts = document.getElementById('blog-posts');
                data.posts.forEach(post => {
                    const article = document.createElement('article');
                    article.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        <a href="${post.url}" target="_blank">Leia Mais</a>
                    `;
                    blogPosts.appendChild(article);
                });
            })
            .catch(error => console.error('Erro ao carregar posts:', error));
    });

    // Animação de Texto e Transições
    document.querySelectorAll('h2, .countdown').forEach(element => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.transition = 'opacity 1s ease-in-out';
            element.style.opacity = 1;
        }, 500);
    });

    // Manipulação de Eventos de Mídia Social
    document.querySelectorAll('footer .social-media a').forEach(link => {
        link.addEventListener('click', function () {
            const platform = this.getAttribute('aria-label');
            console.log(`Link clicado para ${platform}`);
        });
    });

    // Adicionar Animações de Parallax
    window.addEventListener('scroll', function () {
        const scrollPos = window.scrollY;
        document.querySelector('.banner').style.backgroundPositionY = -(scrollPos * 0.5) + 'px';
    });

    // Atualizar o Mapa com Novo Marker
    const updateMapMarker = (lat, lng, title) => {
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: { lat, lng }
        });
        new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: title
        });
    };

    // Definir Novos Dados para Marker
    const newLat = -22.975;
    const newLng = -43.235;
    const newTitle = 'Novo Ponto de Interesse';
    updateMapMarker(newLat, newLng, newTitle);

    // Definir Função de Carregamento de Dados
    const loadData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log('Dados carregados:', data);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    };

    loadData();
;
