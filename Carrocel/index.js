const carrocel = ["imagemInicial", "imagem2", "imagem3", "imagem4", "imagem5", "imagem6", "imagem7"]

const order = "<<"

let posicao = 0

for (simbolos of order) {
    if (simbolos === ">") {
    posicao += 1
    } else {
        posicao -= 1
    }
    if (posicao > 6) {
        posicao -= 7
    } else if (posicao < 0) {
        posicao += 7
    }
}
console.log(posicao)
