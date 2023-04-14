const palavras = ["jabuticaba", "agua", "terra","fogo", "ar", "jacare", "jamanta"]
const primeiraLetra = "j"
const segundaLetra = "x" 

// =============================
let a = []
for (words of palavras) {
    if (primeiraLetra === words[0] && segundaLetra === words[1]) {
        console.log(words);
      a.push(words)
    } 
}
if (a.length === 0) {
    console.log("NENHUMA");
}