function trianguloInvertido(n) {
    for (let index = 0; index <= n; index += 1) {
        let linhaDeAsteriscos = ""
        for (let index1 = 0; index1 < n; index1 += 1) {
            if (index1 < n-index) {
                linhaDeAsteriscos += " ";
            } else {
                linhaDeAsteriscos += " *";
            }
        }
        console.log(linhaDeAsteriscos);
    }
}
console.log(trianguloInvertido(5));
