// Array com todos objetos, sendo eles os alunos
let alunos = [
    {
        nome: "Pedro",
        nota1: 9,
        nota2: 9.5
    },
    {
        nome: "Maria",
        nota1: 4.5,
        nota2: 10
    },
    {
        nome: "Joana",
        nota1: 5,
        nota2: 2
    }
];
// Variaveis
let aprovado;
let media;
// Laço de repetição para calcular e imprimir se o aluno foi aprovado ou reprovado
for (let aluno of alunos) {
    // Processamento de media
    media = (aluno.nota1 + aluno.nota2) / 2;
    // Ternário referente a aprovação
    media >= 7 ? aprovado = true : aprovado = false;
    if (aprovado == true) {
        // Saída de dado caso o aluno seja aprovado
        console.log(`O aluno ${aluno.nome} com a nota: ${media} foi aprovado`);
    } else {
        // Saída de dado caso o aluno seja reprovado
        console.log(`O aluno ${aluno.nome} com a nota: ${media} foi reprovado`);
    }
};