// Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. 
// A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. 
// Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

// Entrada
// O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

// Saída
// Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um 
// espaço em branco antes e depois da igualdade.

#include<stdio.h>

int main(){

    double A, B, C, MEDIA;          //declarando A, B, C e MEDIA como double
    scanf("%lf", &A);               //Lendo inputs do usuário para receber A, B e C
    scanf("%lf", &B);
    scanf("%lf", &C);
    MEDIA = ((A*2)+(B*3)+(C*5))/10; //Cálculo da média com os pesos
    printf("MEDIA = %.1lf", MEDIA); //exibindo média

    return 0;
}