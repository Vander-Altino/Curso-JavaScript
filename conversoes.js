//  tipo de dado 
// booleanos 

// conversao implicita converte um tipo de dados 
// em outro 

const numero =456;
const numeroString = '456';

console.log(numero + numeroString);
//nesse caso houve uma conversao de tipo numero para tipo texto  
//implicita pelo JS.

//OBS. quando usamos um sinal de = etamos atribuindo 
// quando usamos dois == de igual estamos comparando as variaveis
//quando usamos === de igual estamos comparando tambem os tipos de variaveis 


//conversao explicta
//Number(); converte um tipo em numero 
//String(); convert um tipo em texto string.
console.log(numero + Number(numeroString));
console.log(numeroString + String(numero));
// nese caso eu escolho converter as variaveis 
// entao e uma conversao explicita.


