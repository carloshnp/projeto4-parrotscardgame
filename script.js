let numeroCartas;
let parrotsCardsShuffled;
let cartasPareadas = [];
let cartasSelecionadas = [];
let cartasClicadas = [];
let verificaCartasClicadas = [];
let total = 0;
let count;
let time = 0;

const times = x => f => { if (x > 0) { f()
    times (x - 1) (f) } }

function inicio() {
    // Pergunta para o usuário quantas cartas ele deseja para jogar
    // O número de cartas deve ser par e estar entre 4 e 14
    numeroCartas = parseInt(prompt('Bem vindo ao Parrot Card Game! \n Insira um número par de cartas entre 4 e 14 para começar.'));
    while ((numeroCartas > 14 || numeroCartas < 4) || (numeroCartas%2) !== 0) {
        numeroCartas = parseInt(prompt('Insira um número par de cartas entre 4 e 14!'));
    }

    
    let ul = document.querySelector('ul');
        ul.innerHTML = '' ;

    iniciarJogo();
}

function cronometro(){
    time++;
    let cronometro = document.querySelector('.cronometro');
    cronometro.innerHTML = time + ' s';  
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
            <img class='carta verso' src=${parrotsCardsShuffled[i]}>
            <img class='carta frente' src=img/front.png>
            </li>`;
    }

    count = setInterval(cronometro, 1000);
    // Inicia o jogo
}

function fim() {
    let element = document.querySelector('.verifica');
    if (element == null) {
    setTimeout(y => {alert(`Você ganhou em ${total} jogadas!`)}, 500);
    setTimeout(y => {reiniciarJogo()}, 500);
    }
}

function reiniciarJogo() {
    let decisao = prompt('Deseja continuar jogando? Digite "sim".');
    while (decisao !== 'sim') {
        decisao = prompt('Digite "sim" para continuar jogando.');
    }
    total = 0;
    time = 0;
    clearInterval(count);
    let aside = document.querySelector('.cronometro')
    aside.innerHTML = '0 s';
    cartasPareadas = [];
    inicio();
}

function cardClick(cartaClicada) {
    if (cartaClicada.classList.contains('cartaSelecionada') == false) {
    verificaCartasClicadas++;
    }
    if (verificaCartasClicadas < 3 && cartaClicada.classList.contains('cartaSelecionada') == false) {
        cartasClicadas.push(cartaClicada);

        cartaClicada.classList.add('cartaSelecionada');
        cartaClicada.classList.add('show');
        cartaClicada.classList.remove('hide');

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
                verificaCartasClicadas = 0;
            }
            else {
                setTimeout(function() {
                for (let i=0; i < element.length; i++) {
                    element[i].classList.remove('cartaSelecionada');
                    element[i].classList.remove('show');
                    element[i].classList.add('hide');
                    times (2) (() => cartasPareadas.pop());
                    }
                cartasClicadas = [];
                verificaCartasClicadas = 0;
                }, 1000);
            }
        }
    }

    fim();
}

inicio();

