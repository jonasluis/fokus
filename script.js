const html =  document.querySelector('html');
const focoBotao = document.querySelector('.app__card-button--foco');
const descansoCurtoBotao = document.querySelector('.app__card-button--curto');
const descansoLongoBotao = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    }else {
        musica.pause();
    }
})

focoBotao.addEventListener('click', () => {
    alterarContexto('foco');
    focoBotao.classList.add('active');
});

descansoCurtoBotao.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    descansoCurtoBotao.classList.add('active');
});

descansoLongoBotao.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    descansoLongoBotao.classList.add('active');
});

function alterarContexto(contexto) {
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
                titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal da uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
        default:
            break;
    }
}


