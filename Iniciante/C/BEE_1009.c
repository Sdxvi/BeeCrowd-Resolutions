// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
// Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, 
// com duas casas decimais.

// Entrada
// O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, 
// representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

// Saída
// Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

#include<stdio.h>

int main () {
    double SalFixo, Vendas, total;  //declarando os valores como double
    char nome[30];                  //declarando a variável pra nome  

    scanf("%s", &nome);             //lendo os 3 inputs do usuário
    scanf("%lf", &SalFixo);
    scanf("%lf", &Vendas);

    total = SalFixo + (Vendas * 0.15);  //calculando salário total

    printf("TOTAL = R$ %.2lf\n", total);  //exibindo salário total

    return 0;
}