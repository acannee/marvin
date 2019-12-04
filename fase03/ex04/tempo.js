function tempo(data1,data2, unidade){
inicio = new Date (data1);
fim = new Date (data2);
time = Math.abs(fim-inicio);
switch (unidade){
    case "dia":
    return Math.ceil(time/(1000*60*60*24));
    case "mês":
    return Math.ceil(time/(1000*60*60*24*31));
    case "ano":
    return Math.ceil (time/(1000*60*60*24*31*12));
}
}
