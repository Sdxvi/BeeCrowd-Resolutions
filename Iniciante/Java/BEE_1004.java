// Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. 
// A seguir mostre a variável PROD com mensagem correspondente.   

// Entrada
// O arquivo de entrada contém 2 valores inteiros.

// Saída
// Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.


import java.io.IOException;
import java.util.Scanner;
public class BEE_1004 { //Para utilizar este código no BEECROWD a public class deve se chamar "Main"
 
    public static void main(String[] args) throws IOException {
        try (Scanner ler = new Scanner(System.in)) {
            int V1 = ler.nextInt(), V2 = ler.nextInt();
            int PROD = V1 * V2;

            System.out.printf("PROD = %d", PROD);
        }
    }
}