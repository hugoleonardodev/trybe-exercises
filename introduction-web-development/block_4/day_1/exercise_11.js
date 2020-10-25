// IR and INSS taxes from a raw wage.
// INSS for raw wages, IR for base wages and net wage after these taxes

let ir;
let inss;
let raw = 3000;
let base;

console.log("Raw wage without taxes:");

console.log(raw);

//For INSS (raw):

if (raw <= 0) {
    console.log("Error: raw value must be higher than 0."); 
}
else if ( raw >0 && raw <= 1556.94) {
    inss=0.08;
}else if ( raw > 1556.94 && raw <= 2594.92) {
    inss=0.09;
}else if ( raw > 2594.92 && raw <= 5189.82) {
    inss=0.11;
}else{
    inss=570.88
}

//Calculos of base wage wich will be discounted INSS and then IR after that.

base=raw-(raw*inss);  

console.log("Base wage after INSS:");
console.log(base);

//For IR (base):

let p;

if (base<=0) {
    console.log("Error: raw value must be higher than 0.");
}else if (base>0 && base<=1903.98) {
    ir=0;
    p=0;
}else if (base>1903.98 && base<=2826.65) {
    ir=0.075;
    p=142.80;
}else if (base>2826.65 && base<3751.05) {
    ir=0.15;
    p=354.80;
}else if (base>3751.05 && base<4664.68) {
    ir=0.225;
    p=636.13;
}else{
    ir=0.275;
    p=869.36;
}

//Net wage after IR tax on base wage

net=base-(((base*ir)-p));

console.log("Net wage after INSS and IR:");

console.log(net);

//end :D
