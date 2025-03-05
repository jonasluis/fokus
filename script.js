const html =  document.querySelector('html');
const focoBotao = document.querySelector('.app__card-button--foco');
const descansoCurtoBotao = document.querySelector('.app__card-button--curto');
const descansoLongoBotao = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');

focoBotao.addEventListener('click', () => {
    alterarContexto('foco')
})

descansoCurtoBotao.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

descansoLongoBotao.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`)
}
 

