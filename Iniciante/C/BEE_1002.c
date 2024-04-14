// A fórmula para calcular a área de uma circunferência é: area = π . raio2. 
// Considerando para este problema que π = 3.14159:

// - Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

// Entrada
// A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

// Saída
// Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. 
// Utilize variáveis de dupla precisão (double).

#include <stdio.h>
 
int main() {
    double raio, n = 3.14159, A;   //Valores decimais para exercício utilizamos double
    scanf("%lf", &raio);           // para scannear double, utiliza-se "%lf"
    A = (raio * raio) * n;         // Fórmula para obter área
    
    printf("A=%.4lf\n", A);        // Para exibir double utilizamos lf, e para exibir 4 números após o decimal, utilizamos ".4"

    return 0;
}