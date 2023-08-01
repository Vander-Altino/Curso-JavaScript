
const idadeMinima = 18;
const idadeCliente = 16;

//Comparacao Normal
if(idadeCliente >= idadeMinima){
    console.log('Cerveja');
}else{
    console.log('Suco');
}

//Comparacao Ternaria comparacao           //true    //false
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");