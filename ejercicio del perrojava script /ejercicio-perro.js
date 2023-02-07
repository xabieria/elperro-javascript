let parrafo=document.getElementById("frase")
let cadena="Las Olimpiadas de Munich fueron en su momento las mas innovadoras. Munich  creo las mejores instalaciones deportivas de la epoca. En Munich se reunieron deportistas de mas de 125 naciones."
let cadena2 = cadena.replace(/Munich/g, "Roma")
// parrafo.innerHTML = cadena2

function reenplazar(original,searchTxt, replaceTxt){
const regrex = new RegExp(searchTxt,"g")
return original.replace(regrex,replaceTxt);
}

let cadena3=reenplazar(cadena, "Munich","Bilbao")
parrafo.innerHTML = cadena2

function sustitucion(a,b,c){
let cadenaArray=a.split
}