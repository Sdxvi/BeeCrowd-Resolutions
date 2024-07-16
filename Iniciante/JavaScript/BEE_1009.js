// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
// Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, 
// com duas casas decimais.

// Entrada
// O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, 
// representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

// Saída
// Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

const ler = require ('readline').createInterface({          //Requisitando do Modulo readline os métodos de input
    input: process.stdin,
    output: process.stdout
})

ler.question('', nome => {                      //Recebendo input do usuário e atribuindo a resposta na variável nome
    ler.question('', SalFixo => {               //Recebendo input do usuário e atribuindo a resposta na variável SalFixo
        ler.question('', Vendas => {            //Recebendo input do usuário e atribuindo a resposta na variável Vendas
            const total = parseFloat(SalFixo) + (parseFloat(Vendas) * 0.15);        //calculando o total
            console.log("TOTAL = R$ "+ total.toFixed(2));       //exibindo com 2 casas decimais
            ler.close();                          //encerrando o método de input
        })
    })
})

