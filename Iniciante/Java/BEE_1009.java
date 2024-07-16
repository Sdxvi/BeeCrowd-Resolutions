// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
// Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, 
// com duas casas decimais.

// Entrada
// O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, 
// representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

// Saída
// Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

import java.io.IOException;
import java.util.Scanner;

public class BEE_1009 {
    public static void main(String[] args) throws IOException {
        try(Scanner ler = new Scanner(System.in)){  //criando o scanner para ler os inputs
            double SalFixo, Vendas, total;          //declarando as variáveis
            String nome = ler.next();               //lendo os inputs
            SalFixo = ler.nextDouble();
            Vendas = ler.nextDouble();

            total = SalFixo + (Vendas * 0.15);      //calculando o total

            System.out.printf("TOTAL = R$ %.2f\n", total);      //exibindo o total com restrição de 2 casas após virgula

        }
    }
}