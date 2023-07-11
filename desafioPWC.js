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

//item 3

frase = "babad";
count = 0;
aux = [];

for(i = 0; i < frase.length; i++){
    
    if(frase[frase.length - (i + 1)] === frase[i]){
    
        aux[count] = frase[i];
        
        count++;
    
    }
    
}
fraseNova = aux.join("")
console.log(fraseNova);

//item 4

frase = "hello, how are you? i'm fine, thank you"

aux = frase.split(" ");

for (var i = 0; i < aux.length; i++) {
    
    if(i < aux.length -2){
    
        aux[i] = aux[i].charAt(0).toUpperCase() + aux[i].slice(1); 
    
    }
    
  }

fraseNova = aux.join(" ");
console.log(fraseNova);


//item 5

frase = "racecar";
count = 0;
aux = [];

for(i = 0; i < frase.length; i++){
    
    aux[i] = frase[frase.length - (i + 1)];
    
}

fraseNova = aux.join("")

if(fraseNova === frase){
    
    console.log(true);
    
}

