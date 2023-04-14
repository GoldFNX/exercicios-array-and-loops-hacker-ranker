const palpite = "a"
const palavra = "abelha"

// ============================

let quantidadeDeLetras = 0

for (letras of palavra) {
    if (palpite === letras) {
        quantidadeDeLetras ++
    }
}
console.log(quantidadeDeLetras);