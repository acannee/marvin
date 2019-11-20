function maiusculo(palavra){
    n = palavra.toUpperCase();
    resto = palavra.substring(3);
    return n.substring(0,3) + resto;
}
