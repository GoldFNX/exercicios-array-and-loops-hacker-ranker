const precos = [50, 30, 28, 33, 6, 99, 70,]

// ======================

let somaDosPrecos = 0
let quantidadeDeIntens = 0
let menorValor;


for (preco of precos) {
    if (menorValor === undefined) {
        menorValor = preco
    }
    if (menorValor > preco) {
        menorValor = preco
    }
}


for (valores of precos) {
    somaDosPrecos += valores
    quantidadeDeIntens += 1
    if (quantidadeDeIntens >= 5) {
        somaDosPrecos -= menorValor
    }
}
console.log(somaDosPrecos);