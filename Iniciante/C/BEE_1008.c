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

#include <stdio.h>

int main () {
    int N, Hrs;         //declarando os valores inteiros que serão lidos de entrada
    double Valor;       //declarando o valor decimal
    scanf("%d", &N);    //lendo os 3 valores de entrada
    scanf("%d", &Hrs);
    scanf("%d", &Valor);

    printf("NUMBER = %d\nSALARY = U$ %.2d\n", N, Valor*Hrs);  //Calculando e exibindo a saída


    return 0;
}