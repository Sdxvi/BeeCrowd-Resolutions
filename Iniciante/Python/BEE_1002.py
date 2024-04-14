# A fórmula para calcular a área de uma circunferência é: area = π . raio2. 
# Considerando para este problema que π = 3.14159:

# - Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

# Entrada
# A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

# Saída
# Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. 
# Utilize variáveis de dupla precisão (double).

raio = float(input(''))                                     #recebendo o input do usuário
print("A="+str("{:.4f}".format(3.14159 * raio * raio)))     #printando na tela com a formatação de 4 casas decimais


