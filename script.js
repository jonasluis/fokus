const html =  document.querySelector('html');
const focoBotao = document.querySelector('.app__card-button--foco');
const descansoCurtoBotao = document.querySelector('.app__card-button--curto');
const descansoLongoBotao = document.querySelector('.app__card-button--longo');

focoBotao.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
})

descansoCurtoBotao.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
})

descansoLongoBotao.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
})
