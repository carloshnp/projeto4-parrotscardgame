# Parrot card game

## Jogo de memória 

- **Objetivo**: encontrar todos os pares de parrots em X jogadas num Y tempo.
- **Inicio**: escolher um numero par de cartas  (entre 4 e 14) 
- **O jogo**: as cartas iniciam todas viradas para baixo; a cada clique, a carta vira, e o jogador pode virar outra carta; se as cartas forem iguais, elas permanecem viradas para cima; se não, elas viram para baixo; apenas duas cartas podem estar viradas para cima (além dos pares que ja foram encontrados); Cada clique configura uma jogada; Um timer é iniciado a cada rodada.
- **Fim**: quando todos os pares são encontrados, o jogo acaba e o timer para; o jogo exibe quantas jogadas foram realizadas e a duração da rodada. O jogador é perguntado se quer continuar jogando ou não. Se sim, o jogo volta para o início.

## Início

- Perguntar quantas cartas o usuário deseja jogar
- O número deve ser par e estar entre 4 e 14
- Caso contrário, o jogo informa que ele deve inserir um número par entre 4 e 14
- O jogo espera 1 segundo antes de começar e distribui a quantidade de cartas pela tela do jogo
- O jogo também insere um _timer_ no canto superior direito do jogo que conta os segundos de duração do jogo


### Distribuição das cartas

  - O jogo possui uma lista das cartas dos parrots (7 gifs diferentes)
  - O jogo pega, aleatoriamente, a quantidade de gifs que foram requisitadas pelo usuário (número de cartas/2) e coloca numa lista de forma duplicada.
  - Os itens dessa lista são sorteados aleatoriamente
  - Depois disso, a lista é colocada no HTML dentro do \<ul>.

## O jogo
- O usuário deve virar as cartas que estão de cabeça para baixo, clicando nelas.
- Todas as cartas possuem pares (imagens iguais na parte superior delas), as quais devem ser pareadas.
- Cada rodada consiste em revelar 2 cartas e verificar se elas formam pares ou não.
- O usuário clica na primeira carta, e essa carta vira, revelando a imagem que ela possui. Esta carta permanece virada até que o usuário clique em outra carta.
- Cada clique configura uma jogada.
- No segundo clique em outra carta, a carta é revelada, e comparam-se as imagens das duas cartas viradas. 
- Caso ambas as cartas possuam a mesma imagem, estas cartas permanecem com as imagens viradas para cima.
- Caso as cartas clicadas não formem pares, elas permanecem expostas por 1 segundo, e depois são viradas de cabeça para baixo.
- O jogo termina quando todas as cartas tiverem formado pares e o timer é paralisado.

## Fim
- O jogo exibe uma mensagem de "Parabéns", seguida com a quantidade de jogadas executada pelo usuário, e com o tempo decorrido para finalizar o jogo (contado pelo timer).
- O usuário então, é perguntado se deseja continuar o jogo ou não.
- Se 'sim', o jogo volta ao início.
- Se 'não', o jogo fica estático na tela.
