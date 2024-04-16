// Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. 
// A seguir escrever o valor desta variável.

// Entrada
// O arquivo de entrada contém 2 valores inteiros.

// Saída
// Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e depois da igualdade seguido 
// pelo valor correspondente à soma de A e B. 

const ler = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  ler.question('', (A) => {         //Lê o input e atribui como string em A
    ler.question('', (B) => {       //Lê o input e atribui como string em B
        var SOMA = parseInt(A) + parseInt(B);   //Cria variável soma, e efetua o calculo, convertendo as strings A e B para int
        console.log("SOMA = " + SOMA);  //Exibe soma
        ler.close();
    })
  })

