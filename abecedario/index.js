const Letra = "m"
const Palavras = ["mamao", "melancia", "laranja", "melao"]
let numeroDePerdedores = 0 

for (letras of Palavras) {
    if (letras[0] !== Letra) {
        numeroDePerdedores += 1
    }
}
console.log(numeroDePerdedores);
