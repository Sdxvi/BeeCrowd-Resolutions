// Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. 
// A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11).
// Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

// Entrada
// O arquivo de entrada contém 2 valores com uma casa decimal cada um.

// Saída
// Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em
// branco antes e depois da igualdade. Utilize variáveis de dupla precisão (double)

#include<stdio.h>
int main(){
    double A, B, MEDIA;         //Criando as variáveis que serão utilizadas
    scanf("%lf", &A);           //Recebendo entrada e atribuindo em A
    scanf("%lf", &B);           //Recebendo e atribuindo em B

    MEDIA = ((3.5 * A) + (7.5 * B))/11; //Realizando cálculo da média

    printf("MEDIA = %.5lf", MEDIA); //exibindo média com a mensagem solicitada

    return 0;
}