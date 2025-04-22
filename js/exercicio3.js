// Cotação fixada do Dolár
const dolar = 5.2
// Cotação fixada do Euro
const euro = 5.7
// Quantidade de dinheiro em reais a ser convertida
let reais = 1500
// Valor convertido em Dolár
let valorDolar = reais / dolar
// Valor convertido em Euro
let valorEuro = reais / euro
// Função para converter número em Real
function converterReais() {
    return reais.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}
// Função para converter número em Dolár
function converterDolar() {
    valorDolar.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
// Função para converter número em Euro
function converterEuro() {
    valorEuro.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
    })
}
// Saída da dados referente ao valor em Dolár
console.log(`${converterReais()} convertidos em Dolares fica no total de: ${converterDolar()}`)
// Saída da dados referente ao valor em Euro
console.log(`${converterReais()} convertidos em Euros   fica no total de: ${converterEuro()}`)
