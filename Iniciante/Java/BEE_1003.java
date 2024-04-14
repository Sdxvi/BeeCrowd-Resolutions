// Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. 
// A seguir escrever o valor desta variável.

// Entrada
// O arquivo de entrada contém 2 valores inteiros.

// Saída
// Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e depois da igualdade seguido 
// pelo valor correspondente à soma de A e B. 

import java.io.IOException;
import java.util.Scanner;


public class BEE_1003 { //Para utilizar este código no BEECROWD a public class deve ser "Main"
    public static void main(String[] args) throws IOException {
    try (Scanner ler = new Scanner(System.in)) {
        int A, B, SOMA;

        A = ler.nextInt();          //atribui input para A
        B = ler.nextInt();          //atribui input para B

        SOMA = A + B;   //Efetuando a soma
        System.out.println("SOMA = "+ SOMA);      //Exibindo a mensagem "SOMA =" e concatenando para mostrar o conteúdo de SOMA
        }
    }
}