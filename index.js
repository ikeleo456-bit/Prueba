const contenido = [
{
url: "https://picsum.photos/id/1/800/400",
texto: "IA: ¿El fin de la creatividad humana?"
},
{
url: "https://picsum.photos/id/2/800/400",
texto: "Algoritmos que aprenden de nosotros"
},
{
url: "https://picsum.photos/id/3/800/400",
texto: "El futuro del diseño es colaborativo"
}
];

function rotarSlider() {
indice++;
if (indice >= contenido.length) {
indice = 0;
}
}
3000ms (3 segundos)
setInterval(rotarSlider, 3000);