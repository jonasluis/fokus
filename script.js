const html =  document.querySelector('html');
const focoBotao = document.querySelector('.app__card-button--foco');
const descansoCurtoBotao = document.querySelector('.app__card-button--curto');
const descansoLongoBotao = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBotao = document.querySelector('#start-pause');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const pauseSom = new Audio('/sons/pause.mp3');
const tempoEsgotadoSom = new Audio('/sons/beep.mp3');
const playSom = new Audio('/sons/play.wav');

musica.loop = true;

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

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

const contagemRegressiva = () => {

    if(tempoDecorridoEmSegundos <= 0){
        zerar()
        tempoEsgotadoSom.play();
        alert('Tempo Finalizado!');
        return
    }
    tempoDecorridoEmSegundos-= 1 ;
}

startPauseBotao.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId){
        zerar();
        pauseSom.play();
        return
    }
    playSom.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}
