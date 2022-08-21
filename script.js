let numeroCartas;
let parrotsCardsShuffled;
let cartasPareadas = [];
let cartasSelecionadas = [];
let cartasClicadas = [];
let total = 0;
let jogadas = 0;
let statusJogo;


const times = x => f => { if (x > 0) { f()
    times (x - 1) (f) } }

function inicio() {
    // Pergunta para o usuário quantas cartas ele deseja para jogar
    // O número de cartas deve ser par e estar entre 4 e 14
    numeroCartas = parseInt(prompt('Quantas cartas'));
    while ((numeroCartas > 14 || numeroCartas < 4) || (numeroCartas%2) !== 0) {
        numeroCartas = parseInt(prompt('Insira um número par de cartas entre 4 e 14!'));
    }
    let ul = document.querySelector('ul');
    ul.innerHTML = '' ;
    iniciarJogo();
}

function cronometro(){
    return '';
}

function iniciarJogo() {
    // Cria a lista de parrots (gifs)
    let parrots = [
        'img/bobrossparrot.gif',
        'img/explodyparrot.gif',
        'img/fiestaparrot.gif',
        'img/metalparrot.gif',
        'img/revertitparrot.gif',
        'img/tripletsparrot.gif',
        'img/unicornparrot.gif'
    ];
    // Embaralha a lista parrots
    let parrotsShuffled = parrots
        .map(value => ({ value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    let pares = numeroCartas/2;

    // Cria a lista de cartas dos parrots
    let parrotsCards = [];
    for (let i=0; i < pares; i++) {
        times (2) (() => parrotsCards.push(parrotsShuffled[i]));
    }

    // Embaralha as cartas de parrots
    parrotsCardsShuffled = parrotsCards
        .map(value => ({ value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    // Coloca as cartas dos parrots na lista do HTML
    let ul = document.querySelector('ul');
    for (let i=0; i < parrotsCardsShuffled.length; i++) {
        ul.innerHTML += `
            <li class="verifica" onclick="cardClick(this)">
            <img class='carta hidden' src=${parrotsCardsShuffled[i]}>
            </li>`;
    }
    // Inicia o jogo
}

function fim() {
    let element = document.querySelector('.verifica');
    if (element == null) {
    setTimeout(y => {alert('Teste')}, 500);
    }
}

function cardClick(cartaClicada) {
    cartasClicadas.push(cartaClicada);
    console.log(cartasClicadas);
    if (cartasClicadas.length < 3) {
        cartaClicada.firstElementChild.classList.remove('hidden');
        cartaClicada.classList.add('cartaSelecionada');
        cartasPareadas.push(cartaClicada.firstElementChild.currentSrc);
        total++;

        if (cartasClicadas.length === 2) {
            let element = document.querySelectorAll('.cartaSelecionada');

            if (cartasPareadas[cartasPareadas.length -1] == cartasPareadas[cartasPareadas.length -2]) {
                for (let i=0; i < element.length; i++) {
                    element[i].removeAttribute('onclick');
                    element[i].classList.remove('cartaSelecionada');
                    element[i].classList.remove('verifica');
                }
                cartasClicadas = [];
            }
            else {
                setTimeout(function() {
                for (let i=0; i < element.length; i++) {
                    element[i].classList.remove('cartaSelecionada');
                    element[i].firstElementChild.classList.add('hidden');
                    times (2) (() => cartasPareadas.pop());
                    }
                cartasClicadas = [];
                }, 1000);
            }
        }
    }

    fim();
}

inicio();