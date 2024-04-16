// Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. 
// A seguir mostre a variável PROD com mensagem correspondente.   

// Entrada
// O arquivo de entrada contém 2 valores inteiros.

// Saída
// Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.

    const ler = require('readline').createInterface({       //Criando a interface readline para inputs do usuário
        input: process.stdin,
        output: process.stdout
    })

    ler.question('', V1 => {                                //Armazenando o primeiro valor digitado em V1
        ler.question('', V2 => {                            //Armazenando o segundo valor digitado em V2
            const PROD = parseInt(V1) * parseInt(V2);       //Criando e executando a mulitplicação da variável PROD 
            console.log(`PROD = ${PROD}`)                   //Exibindo PROD = valor da variável prod
            ler.close();
        })  
    })