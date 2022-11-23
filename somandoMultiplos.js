/*
Desafio
Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

Entrada
A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

Saída
A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.
*/


var a = 3
let N = 18


encontrarMultimos = parseInt(N/a)

let soma = a
let somarMultimplos = 0


for (let i = 0; i < encontrarMultimos  ; i++){
    somarMultimplos += soma
    soma += a
}

console.log(somarMultimplos)