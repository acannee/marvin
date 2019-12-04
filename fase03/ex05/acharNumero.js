function acharNumero(num){
    x=num.toString();
    if(x<5){
    return "mercurio";
    }
    else if (x>=5&&x<=10){
    return "venus";
    }
    else if(x>10&&x<=100){
    return "terra";
}
    else {
    return "marte";
}
}

