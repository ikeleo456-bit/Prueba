const contenido = [
{ url:"https://picsum.photos/id/1/800/400", texto:"IA: ¿El fin de la creatividad humana?" },
{ url:"https://picsum.photos/id/2/800/400", texto:"Algoritmos que aprenden de nosotros" },
{ url:"https://picsum.photos/id/3/800/400", texto:"El futuro del diseño es colaborativo" }
];

let indice = 0;
const imagen = document.getElementById("imagen-slider");
const texto = document.getElementById("texto-slider");

function rotarSlider(){
indice = (indice + 1) % contenido.length;
imagen.src = contenido[indice].url;
texto.textContent = contenido[indice].texto;
}
setInterval(rotarSlider,3000);