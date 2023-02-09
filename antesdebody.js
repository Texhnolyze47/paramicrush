let encabezados = ""

window.onload = function (){
    // Crea una serie de elements por cada tag encontrado
    let encabezados = document.createElement("h1");
    //console.log(encabezados);
    const text = document.createTextNode("¿Quieres ser mi morrita?");
    console.log(encabezados);
    console.log(text);

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}

