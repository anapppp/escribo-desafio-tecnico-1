/* 
Descrição:
- Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

Exemplos:
- Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e
9 que são menores que 10.
- Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9
e 10 que são menores que 11.
*/



function somatorio(numero) {
    let somatorio = 0
    // verificando se o numero é inteiro e positivo
    if (numero <= 0 || numero % 1 !== 0) {
        return 'Valor invalido. Insira um valor inteiro e miaor do que zero.'
    } else {
        // encontrando valores divisiveis por 3 e 5
        for (let i = numero - 1; i > 0; i--) {
            if (i % 5 === 0 || i % 3 === 0) {
                somatorio += i
            }
        }
        return somatorio
    }
}

console.log(somatorio(13))