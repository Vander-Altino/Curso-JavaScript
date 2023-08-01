// ==  (Comparacao Implicita)

const numero = 5;
const texto = '5';

console.log(numero == texto);// == compara somente o valor da variavel
console.log(numero === texto);//=== convert de forma implicita o tipo numerico para string e compara o tipo de variavel.

//typeOff
console.log(typeof numero);
console.log(typeof texto);

//e uma boa pratica usar conversao explicita como

Number();
String();