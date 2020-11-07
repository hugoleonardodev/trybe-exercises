let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem vinda, ${info.personagem}`)

console.log(info);
info['recorrente'] = "Sim";
console.log(info);

for (key in info) {
    console.log(key);
}

for (key in info) {
    console.log(info[key]);
}

let info2 = {
    personagem: "Margarida e Tio Patinhas",
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas",
    recorrente: "Ambos recorrentes"
};

console.log(info2);
