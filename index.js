/**
 * Esta funcion modifica la posicion del elemento que recibe por 
 * parametro
 * @param {Elemento DOM} elm 
 */
function moverPosicionRandom(elm){
    elm.style.position = 'absolute';

    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerHeight - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter' , function (e) { moverPosicionRandom(e.target)  })

btnSi.addEventListener('click', function(e){
    alert('Sabía que dirías que Sí. Casemonos ya y tengamos hijos. TE AMO!! ❤️❤️❤️');

    divModoSexo.style.display = 'block';
    const cancion = new Audio('video/DingDong.mp3')
    cancion.play()
});

botones = document.getElementsByTagName("button")
console.log(botones)

divModoSexo.addEventListener('click', function (e)  {
    // innerHTML cambia todo el html dentro del divModoSexo
    
    //divModoSexo.innerHTML = " <img src='video/perro.jpg'>";
    // cosa muy diferente al comportamiento del appendChild
    //query se usa para buscar uno o varios elementos
    const img = document.createElement("img");
    img.src = "video/perro.jpg";
    divModoSexo.appendChild(img);
})

window.addEventListener('beforeunload' , (event) => {
    event.preventDefault();
    event.returnValue = "";
})