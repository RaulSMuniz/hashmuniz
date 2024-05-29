const c = 'O';
const x = 'X';
let inicio = false;
let jogadas = true;
let fim = document.getElementById('fimdojogo');
let table = document.getElementById('tabela')
const res = document.getElementById('vencedor')
const joguin = document.getElementById('jogo')
let contador = 1
let drawcounter = 1
const jogo = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


function play() {
    inicio = true;
    contador = 1
    joguin.style.display = 'none'
}

function jogar(celula) {
    contador = 1
    if (inicio) {
        if (jogadas) {
            if (celula.innerHTML !== c) {
                celula.innerHTML = x;
                jogadas = false;
                drawcounter += 1
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        let tabela = document.getElementById('e' + contador);
                        jogo[i][j] = tabela.innerHTML;
                        contador++;

                    }
                }
                if (verificarVitoria(x)) {
                    table.style.display = 'none'
                    fim.style.display = 'flex'
                    res.innerHTML = 'O jogador 1 (X) venceu!'
                }
            }
        } else {
            if (celula.innerHTML !== x) {
                celula.innerHTML = c;
                jogadas = true;
                drawcounter += 1
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        let tabela = document.getElementById('e' + contador);
                        jogo[i][j] = tabela.innerHTML;
                        contador++;

                    }
                }
                if (verificarVitoria(c)) {
                    table.style.display = 'none'
                    fim.style.display = 'flex'
                    res.innerHTML = 'O jogador 2 (O) venceu!'
                }
            }
        } if (drawcounter == 10 && verificarVitoria(x) != true && verificarVitoria(c) != true) {
            table.style.display = 'none'
            fim.style.display = 'block'
            res.innerHTML = 'O jogo acabou em empate.'
        }
    }
}
function verificarVitoria(vitoria) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (jogo[0][0] == vitoria && jogo[0][1] == vitoria && jogo[0][2] == vitoria) { // verificar linha 1
                return true // o 'return true' significa que a função em si será definida
                // como verdadeira, isso é feito pra que possa ser feita a verificação
                // boolean na função jogar, pra definir a vitória
            } else if (jogo[1][0] == vitoria && jogo[1][1] == vitoria && jogo[1][2] == vitoria) { // verificar linha 2
                return true
            } else if (jogo[2][0] == vitoria && jogo[2][1] == vitoria && jogo[2][2] == vitoria) { // verificar linha 3
                return true
            } else if (jogo[0][0] == vitoria && jogo[1][0] == vitoria && jogo[2][0] == vitoria) { // verificar coluna 1
                return true
            } else if (jogo[0][1] == vitoria && jogo[1][1] == vitoria && jogo[2][1] == vitoria) { // verificar coluna 2
                return true
            } else if (jogo[0][2] == vitoria && jogo[1][2] == vitoria && jogo[2][2] == vitoria) { // verificar coluna 3
                return true
            } else if (jogo[0][0] == vitoria && jogo[1][1] == vitoria && jogo[2][2] == vitoria) { // verifica a diagonal principal
                return true
            } else if (jogo[0][2] == vitoria && jogo[1][1] == vitoria && jogo[2][0] == vitoria) { // verifica diagonal secundária
                return true
            }
        }
    }
    return false
}
function final() {
    history.go(0)
}