//item 1
let frase = "Hello, World! OpenAI is amazing";
let aux = [];

for( i = 0; i < frase.split(" ").length; i++){
     
    aux[i] = frase.split(" ")[frase.split(" ").length -( i + 1)];
        
}

let fraseNova = aux.join(" ");
console.log(fraseNova);
    
//item 2

frase =  "Hello, World!";

frase = new Set(frase);
aux = [...frase];
fraseNova = aux.join(" ");

console.log(fraseNova);

