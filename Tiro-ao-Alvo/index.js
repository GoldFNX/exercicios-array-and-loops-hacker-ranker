const disparos = [0, 10, 50, 70, 80, 30]

//=================

let contador = 0

for (tiros of disparos) {
    if (tiros >= 70) {
    contador += 1
    }
}
if (contador >= 3) {
    console.log(contador)
} else {
    console.log("ELIMINADO")
}
