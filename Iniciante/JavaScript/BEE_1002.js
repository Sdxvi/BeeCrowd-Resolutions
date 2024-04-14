// A fórmula para calcular a área de uma circunferência é: area = π . raio2. 
// Considerando para este problema que π = 3.14159:

const { Readline } = require('readline/promises');

// - Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

// Entrada
// A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

// Saída
// Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. 
// Utilize variáveis de dupla precisão (double).

//Em JavaScript, a maneira tal qual pode-se obter dados digitados pelo usuário é um tanto variável, 
//Quando integrado com HTML, é possível utilizar "prompt" para criar uma janela de inserção para o usuário, porém em exercícios do beecrowd
//Essa não é uma solução válida, por isso podemos utilizar o readline, comando que não depende de nenhum pacote instalado para funcionar
//As soluções utilizando prompts, readline-sync, lineshift ou prompt-sync (entre outras) dependem de pacotes contidos em NPM instalados para funcionar

//Solução utilizando Shift
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var raio = parseFloat(lines.shift()); 
var n = 3.14159, area;
area = n * (raio*raio);
console.log('A='+area.toFixed(4));


//Solução Utilizando ReadLine
const ler = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  ler.question('', (raio) => {
    var n = 3.14159, area, raio2 = parseFloat(raio);
    area = n * raio2 * raio2;
    console.log("A="+area.toFixed(4));
    ler.close();
  });
  
