const chave = "*Canis %lupus )familiaris"

//========================

let palavraPurificada = []


for (caractere of chave) {
  if (caractere >= "a" || caractere >= "A" || caractere === " ") {
    palavraPurificada += caractere
  }
}
console.log(palavraPurificada);