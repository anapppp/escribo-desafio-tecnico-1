function somatorio(numero) {
    let somatorio = 0
    try {
        // verificando se o numero é inteiro e positivo
        if (numero <= 0 || numero % 1 !== 0) {
            return 'Valor invalido. Insira um valor inteiro e maior do que zero.'
        } else {
            // encontrando valores divisiveis por 3 e 5
            for (let i = numero - 1; i > 0; i--) {
                if (i % 5 === 0 || i % 3 === 0) {
                    somatorio += i
                }
            }
            return `O somatorio dos valores divisiveis por 3 e 5 menores que ${numero} é: ${somatorio}`
        }
    } catch (erro) {
        console.log(erro)
    }
}

let numero = prompt("Digite um número inteiro e positivo:");
alert(somatorio(numero));