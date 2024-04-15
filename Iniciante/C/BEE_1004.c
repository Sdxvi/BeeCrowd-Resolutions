// Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. 
// A seguir mostre a variável PROD com mensagem correspondente.   

// Entrada
// O arquivo de entrada contém 2 valores inteiros.

// Saída
// Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.

#include <stdio.h>

int main(){
    int V1, V2, PROD;      //definindo as variáveis V1 e V2, que o usuário ira digitar, e PROD que será calculado
    scanf("%d", &V1);      //Solicitando inputs do usuário e atribuindo em V1
    scanf("%d", &V2);      //Solicitando inputs do usuário e atribuindo em V2

    PROD = V1 * V2;        //Calculando PROD (multiplicando V1 e V2)

    printf("PROD = %d\n", PROD);    //Exibindo PROD

    return 0;
}