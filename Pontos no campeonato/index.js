const resultados = ["V", "E", "V", "E"]

// =====================

let pontuacao = 0

for (jogos of resultados) {
    if (jogos === "V") {
        pontuacao += 3
    } else if (jogos === "E") {
        pontuacao += 1
    } else if (jogos === "D") {
        pontuacao += 0
    }
}
console.log(pontuacao)