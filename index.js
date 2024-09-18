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
          if (index === 0) {
            circle.style.backgroundColor = '#2EE9A6';
            imageElement.src = './Assets/imagem1.png';
          } else if (index === 1) {
            circle.style.backgroundColor = '#2E30E9';
            imageElement.src = './Assets/imagem2.png';
          } else if (index === 2) {
            circle.style.backgroundColor = '#E9B52E';
            imageElement.src = './Assets/imagem3.png';
          }
        } else {
          circle.style.backgroundColor = '';
          imageElement.src = './Assets/904bee991f93e0b2109487b39030dd42.jpeg';
        }
      });
    });
  });
  
