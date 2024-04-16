// Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. 
// A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. 
// Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

// Entrada
// O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

// Saída
// Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um 
// espaço em branco antes e depois da igualdade.

const Ler = require('readline').createInterface({   //Criando Ler para receber os inputs dos usuários
    input: process.stdin,
    output: process.output
})

Ler.question('', (A) => {       //recebendo input de A
    Ler.question('', (B) => {   //recebendo input de B
      Ler.question('', (C) => { //recebendo input de C
        const MEDIA = ((A*2)+(B*3)+(C*5))/10;   //Cálculo média
        console.log("MEDIA =", MEDIA.toFixed(1)); //Exibindo Média
        Ler.close();
      })
    })
})