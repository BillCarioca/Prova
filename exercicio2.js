const palavraCompleta = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"

function quantidadeDePalavras(texto){
    var x=1
    for (const letra of texto) {
        if (/[A-Z]/.test(letra)) x++
    }
    return x
}

console.log(quantidadeDePalavras(palavraCompleta))