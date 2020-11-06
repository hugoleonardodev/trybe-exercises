var n = 5;
for (var index = 0; index < 1; index++){
    var linhaDeAsteriscos = "";
    for (var linha = n; linha > 0; linha--){
        linhaDeAsteriscos += " *";
        console.log(linhaDeAsteriscos);
    }
}

// imprime um triângulo de asterisicos com parâmentro n igual a um número inteiro