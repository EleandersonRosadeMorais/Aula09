// Valor fixo do produto em questão
const custo = 89.90
// Valor total da compra de 3 produtos
let valorTotal = custo * 3;
// Valor com 10%(0.1) de desconto
let valorDesconto = valorTotal + (valorTotal * 0.1)
// Formatando o valor para ter no máximo duas casa decimais
let valorFormatado = valorDesconto.toFixed(2)
// Função para converter o valor em Real
function converter() {
    return parseFloat(valorFormatado).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
// Saída do valor final da compra
console.log(`O valor final dos 3 produtos com 10% de desconto ficou em ${converter()}`)