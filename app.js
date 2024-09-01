let listaDeNumerosSorteados = [];
let numeroLimiteLista = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroAleatorio);


function textoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function textoInicial() {
    textoNaTela('h1', 'Jogo do número secreto!');
    textoNaTela('p', 'Escolha um número de 1 a 100!');
}

textoInicial();

function verificarChute() {
    let chute = document.querySelector('.container__input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `você acertou com ${tentativas} ${palavraTentativa}!`;
    

    if (numeroAleatorio == chute) {
        textoNaTela('h1', 'Parabens!');
        textoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').disabled = false;
        return;
    } else if (numeroAleatorio > chute) {
        textoNaTela('h1', 'Errou');
        textoNaTela('p', `o numero secreto é maior.`);
        tentativas++;
        limparCampo();
        } else {
            textoNaTela('h1', 'Errou');
        textoNaTela('p', `o numero secreto é menor.`);
        tentativas++;
        limparCampo();
        }
    }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteLista + 1);
    let quantNumerosLista = listaDeNumerosSorteados.length;

    if (quantNumerosLista == numeroLimiteLista) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (`${listaDeNumerosSorteados}`);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('.container__input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
