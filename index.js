function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const header = document.getElementById("bodyHeader");
window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion-button');
  const imageElement = document.getElementById('imagemParaOqueOferecemos');
  
  accordions.forEach((accordion, index) => {
    accordion.addEventListener('click', function () {
      const circle = this.querySelector('.espacoCirculo');

      document.querySelectorAll('.espacoCirculo').forEach(item => {
        item.style.backgroundColor = '';
      });

      if (!this.classList.contains('collapsed')) {
        let newSrc = '';

        if (index === 0) {
          circle.style.backgroundColor = '#2EE9A6';
          newSrc = './Assets/imagem1.png';
        } else if (index === 1) {
          circle.style.backgroundColor = '#2E30E9';
          newSrc = './Assets/imagem2.png';
        } else if (index === 2) {
          circle.style.backgroundColor = '#E9B52E';
          newSrc = './Assets/imagem3.png';
        }

        // Adiciona a classe 'hidden' para iniciar a transição de fade-out
        imageElement.classList.add('hidden');
        
        // Aguarda a transição de fade-out e troca a imagem
        setTimeout(() => {
          imageElement.src = newSrc;
          imageElement.classList.remove('hidden'); // Mostra a nova imagem
        }, 500); // O tempo precisa coincidir com o valor da transição no CSS

      } else {
        circle.style.backgroundColor = '';
        imageElement.classList.add('hidden');
        
        setTimeout(() => {
          imageElement.src = './Assets/904bee991f93e0b2109487b39030dd42.jpeg';
          imageElement.classList.remove('hidden');
        }, 500);
      }
    });
  });
});

  
function redirecionarPageCadastro (){
  window.location.href = "https://sgcl.com.br/"
}