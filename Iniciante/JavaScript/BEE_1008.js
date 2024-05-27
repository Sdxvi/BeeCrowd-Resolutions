// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, 
// o valor que recebe por hora e calcula o salário desse funcionário. 
// A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

// Entrada
// O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, 
// representando o número, quantidade de horas trabalhadas e o valor que o funcionário 
// recebe por hora trabalhada, respectivamente.

// Saída
// Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um 
// espaço em branco antes e depois da igualdade. No caso do salário, também deve haver 
// um espaço em branco após o $.

const ler = require ('readline').createInterface({          //Requisitando do Modulo readline os métodos de input
    input: process.stdin,
    output: process.stdout
})

ler.question('', N => {             //Recebendo input do usuário e atribuindo a resposta na variável N
    ler.question('', Hrs => {       //Recebendo input do usuário e atribuindo a resposta na variável Hrs
        ler.question('', Valor => { //Recebendo input do usuário e atribuindo a resposta na variável Valor
            console.log("NUMBER = %d", N);      //Exibindo primeiro output
            console.log("SALARY = U$ "+ (parseFloat(Hrs) * Valor).toFixed(2))       //Calculando, formatando e exibindo segundo output
            ler.close();            //Método para encerrar os inputs no terminal
        })
    })
})