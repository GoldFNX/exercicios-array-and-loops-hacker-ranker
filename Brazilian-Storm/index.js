const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]

let maiorValor; 
let menorValor;
let sumOfNotes = 0

for (digitos of notas) {
    if ( menorValor === undefined) {
        menorValor = digitos
    }
    if ( menorValor > digitos) {
        menorValor = digitos
    }
}
for (digitos of notas) {
    if ( maiorValor === undefined) {
        maiorValor = digitos
    }
    if ( maiorValor < digitos) {
        maiorValor = digitos
    }
}
for (nota of notas) {
    sumOfNotes += nota
}
sumOfNotes -= (maiorValor + menorValor)
console.log(sumOfNotes / (notas.length - 2))
