const botao = document.querySelector('.botao')
const corpo = document.querySelector('body')


  botao.addEventListener('click', () => {
    corpo.classList.toggle('dark');
  })
