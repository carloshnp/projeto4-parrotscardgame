let numeroCartas;
let parrotsCardsShuffled;

const times = x => f => { if (x > 0) { f()
    times (x - 1) (f) } }

function inicio() {
    // Pergunta para o usuário quantas cartas ele deseja para jogar
    // O número de cartas deve ser par e estar entre 4 e 14
    numeroCartas = parseInt(prompt('Quantas cartas'));
    while ((numeroCartas > 14 || numeroCartas < 4) || (numeroCartas%2) !== 0) {
        numeroCartas = parseInt(prompt('Insira um número par de cartas entre 4 e 14!'));
    }
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
        ul.innerHTML += `<li class='.hidden'>${parrotsCardsShuffled[i]}</li>`;
    }
    // Inicia o jogo
    jogo();
}

function jogo() {
    // Verificar cliques do usuário
    // Dizer se todas as cartas estão pareadas
    return '';
}

function fim() {
    // Parabéns, você ganhou o jogo em X tempo e Y jogadas!
    // Deseja jogar novamente?
    return '';
}

inicio();