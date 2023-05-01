//declarando as duas variáveis (a, b). Importante que sejam declaradas na mesma linha.
var a, b;

//scanf é utilizado para aguardar a resposta do usuário. Ele irá declarar as entradas das variáveis "a" e "b".
//em JS as variáveis dentro de um scanf precisam estar entre aspas. 
scanf("%d%d","a","b");

//Esta será a saída do programa que aparecerá para quem está testando.
//Nesta parte o comando lógico if fará a analise lógica para encontrar o valor da 3 variável.
/*Se o valor de a for menor que o valor de b, então séra feito o cálculo 2*a-b, assim será econtrado
um valor para C, que resultará em uma média que terá o mesmo valor que a mediana.*/
/*Caso o valor de b seja menor que o de a, será feito o cálculo 2*b-a, que resultará em um
um valor para C, em que a média que terá o mesmo valor que a mediana.*/

if (a < b)
    printf("%d\n", 2*a-b);
else
    printf("%d\n", 2*b-a);