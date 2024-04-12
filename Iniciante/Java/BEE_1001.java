// Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. 
// Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado e 
// não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

// Entrada
// A entrada contém 2 valores inteiros.

// Saída
// Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. 
// Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.

import java.io.IOException;
import java.util.Scanner;


public class BEE_1001 { //Para utilizar este código no BEECROWD a public class deve ser "Main"
    public static void main(String[] args) throws IOException {
    Scanner ler = new Scanner(System.in);   //Para scannear os números de entrada, é criado um scanner
    int A, B, X;

    A = ler.nextInt();          //os valores de A e B, recebem a leitura desse scanner
    B = ler.nextInt();

    X = A + B;   //Fazendo a soma

    System.out.println("X = "+ X);      //Exibindo a mensagem "X =" e concatenando para mostrar o conteúdo de X

 
    }
 
}