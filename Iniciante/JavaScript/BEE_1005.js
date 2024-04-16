// Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. 
// A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11).
// Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

// Entrada
// O arquivo de entrada contém 2 valores com uma casa decimal cada um.

// Saída
// Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em
// branco antes e depois da igualdade. Utilize variáveis de dupla precisão (double)

const ler = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
})

ler.question('', A => {     //recebendo o input do usuário e atribuindo em A
    ler.question('', B => { //recebendo o input do usuário e atribuindo em B
        const MEDIA = ((3.5 * parseFloat(A)) + (7.5 * parseFloat(B)))/11;   //Realizando o cálculo da Média
        console.log('MEDIA = '+ MEDIA.toFixed(5))       //Exibindo Média

        ler.close();        //Fechando o readline
    })
})