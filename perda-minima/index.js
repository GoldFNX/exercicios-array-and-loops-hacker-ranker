const precos = [30, 10, 54, 76, 1, 4, 35]

let number1;
let compra;
let venda;
let valores = []
let menorDiferença;
for (let i = 0; i < precos.length; i++ ) {
    for (let a = i + 1; a < precos.length; a++) {
         compra = precos[i]
         venda = precos[a]
         valores.push(compra - venda);
    }
}


for (preco of valores) {
    if (menorDiferença === undefined && preco >= 0) {
        menorDiferença = preco
    } else if (menorDiferença > preco && preco > 0) {
        menorDiferença = preco
}
}
console.log(menorDiferença);

