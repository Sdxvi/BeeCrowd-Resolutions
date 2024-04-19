// Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B 
// pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

// Entrada
// O arquivo de entrada contém 4 valores inteiros.

// Saída
// Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em 
// branco antes e depois da igualdade.

import java.io.IOException;
import java.util.Scanner;

public class BEE_1007 {
    public static void main(String[] args) throws IOException {
        try (Scanner ler = new Scanner(System.in)) {        //Criando o scanner para inputs
            int A, B, C, D;                                 //Declarando e atribuindo valores nas variáveis
            A = ler.nextInt();
            B = ler.nextInt();
            C = ler.nextInt();
            D = ler.nextInt();
            System.out.printf("DIFERENCA = %d\n", (A*B)-(C*D));     //Calcula e Exibe
        }
    }
    
}
