//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
/////console.log(area);


const forma = 'retangulo';

const altura = 5;
const comprimento = 7;
//let area;
//const area; // nao ira compilar pois variveis declaradas como const
//nao podem ser alterados;

if(forma === 'retangulo'){

    area = altura * comprimento;
    
}else {

    area = (altura * comprimento)/2;
}

console.log(area);

//boolean
const usuarioLogado = true;
const contaPaga = false;


//truthy ou falsy

//0 => false;
//1 => true;
console.log(0==false);
console.log("" == false);

//undefined ==> nao defenido ou vazio 
//null ==> vazio nada 

let minhaVar;
let varNull = null;

console.log(typeof minhaVar);
console.log(typeof varNull); //bug no JS que 
//informa a variavel null como objeto;




