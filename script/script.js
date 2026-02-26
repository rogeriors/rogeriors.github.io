    const boneco = document.getElementById('boneco-interativo');

    document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const larguraTela = window.innerWidth;

    // Lógica simples dividindo a tela em colunas
    if (x < larguraTela * 0.2) {
        // Mouse muito à esquerda -> Mostra o 1º boneco
        boneco.style.backgroundPosition = '-1810px 0';
    } else if (x < larguraTela * 0.4) {
        // Mouse levemente à esquerda -> Mostra o 2º boneco
        boneco.style.backgroundPosition = '-7px 0';
    } else if (x < larguraTela * 0.6) {
        // Mouse no centro -> Mostra o 3º boneco
        boneco.style.backgroundPosition = '-460px 0';
    } else if (x < larguraTela * 0.8) {
        // Mouse levemente à direita -> Mostra o 4º boneco
        boneco.style.backgroundPosition = '-460px 0';
    } else {
        // Mouse muito à direita -> Mostra o 5º boneco
        boneco.style.backgroundPosition = '-898px 0';
    }
    });

    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach( (entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    const elements = document.querySelectorAll('.hidden')

    elements.forEach((element) => myObserver.observe(element))


// 1. Selecionamos os elementos que vamos manipular
const track = document.getElementById('track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Selecionamos todos os slides para saber quantos existem
const slides = document.querySelectorAll('.carousel-slide');

// Variável para guardar a posição atual do carrossel
let currentIndex = 0;

// 2. Função para mover o carrossel
function updateCarousel() {
  // Pega a largura exata de um slide
  const slideWidth = slides[0].clientWidth;
  
  // Move a trilha no eixo X baseado no índice atual
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// 3. Adiciona a ação de clique no botão "Avançar"
nextBtn.addEventListener('click', () => {
  // Só avança se não estiver no último slide
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// 4. Adiciona a ação de clique no botão "Voltar"
prevBtn.addEventListener('click', () => {
  // Só volta se não estiver no primeiro slide
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});   