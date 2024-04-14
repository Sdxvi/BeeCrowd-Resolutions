// A fórmula para calcular a área de uma circunferência é: area = π . raio2. 
// Considerando para este problema que π = 3.14159:

// - Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

// Entrada
// A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

// Saída
// Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. 
// Utilize variáveis de dupla precisão (double).

import java.io.IOException;
import java.util.Scanner;


public class BEE_1002 {
    public static void main(String[] args) throws IOException {
        try (Scanner ler = new Scanner(System.in)) {            //Adicionado o metodo trycatch para dar encerramento ao scanner criado
            double raio, n = 3.14159, A;                        //Inicializando as variáveis em double
            raio = ler.nextDouble();                            //Utilizando o scanner para ler o input do usuário (raio inserido)
            A = (raio * raio) * n;                              //Calculando área
            System.out.printf("A=%.4f%n", A);                   //Exibindo área com apenas 4 casas decimais
        } 
    }
}