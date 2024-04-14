// Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. 
// A seguir escrever o valor desta variável.

// Entrada
// O arquivo de entrada contém 2 valores inteiros.

// Saída
// Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e depois da igualdade seguido 
// pelo valor correspondente à soma de A e B. 

#include <stdio.h>

int main(){
    int A, B, SOMA;
    scanf("%d", &A);     //Recebendo inputs do usuário e atribuindo em &A
    scanf("%d", &B);     //Recebendo inputs do usuário e atribuindo em &B

    SOMA = A + B;  //Efetuando a soma

    printf("SOMA = %d\n",SOMA);  //exibindo SOMA com a mensagem requisitada
}