// Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B 
// pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

// Entrada
// O arquivo de entrada contém 4 valores inteiros.

// Saída
// Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em 
// branco antes e depois da igualdade.

const ler = require ('readline').createInterface({      //Requisitando do Modulo readline os métodos de input
    input: process.stdin,
    output: process.stdout
})

ler.question('', A => {                                 //Perguntando ao usuário e atribuindo a resposta na variável A
    ler.question('', B => {                             //Perguntando ao usuário e atribuindo a resposta na variável B
        ler.question('', C => {                         //Perguntando ao usuário e atribuindo a resposta na variável C
            ler.question('', D => {                     //Perguntando ao usuário e atribuindo a resposta na variável D
                console.log('DIFERENCA = %d', (A*B)-(C*D))  //Calculando e exibindo
                ler.close();                            //Método para encerrar os inputs no terminal
            })
        })
    })
})