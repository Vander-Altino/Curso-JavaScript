
//const nome = 'Vander';
//const idade = 2023 - 1990;
//const cidadeDeNascimento ='MANAUS';

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
// exibindo de forma tradicional com sinal de + concatenacao
//const apresentacao = 'Meu nome e ' + nome + ', minha idade e ' + idade + ', nasci na cidade de ' + cidadeDeNascimento;


//usando tamplete de Strings 
//const apresentacao = `Meu nome e ${nome} , minha idade e ${idade} , nasci na cidade de ${cidadeDeNascimento}`;

//console.log(apresentacao);

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

/*Com este exemplo, usamos três ferramentas do JavaScript vistas durante esta aula:

1) O uso de operadores: >= como operador de comparação entre o valor da variável idade e 18 e também o operador ternário como condicional para retornar o valor da variável bebidaMaior ou bebidaMenor de acordo com o resultado da comparação.

2) Template strings: Utilizamos a sintaxe do acento grave + ${} em conjunto com as aspas duplas ””. Teste também com aspas simples!

3) Operador ternário: Vimos que é possível não apenas exibir o valor de variáveis utilizando o ${}, mas também fazer operações com JavaScript - por exemplo, condicionais - 
e inserir o correspondente ao true ou false na string de texto. */