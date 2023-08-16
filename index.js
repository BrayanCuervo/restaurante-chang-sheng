const carrito= JSON.parse(localStorage.getItem("carrito"))||[]
const products=[
    {
        id: 1,
        imagen:'../img/entrada.jpg',
        nombre: 'Pita',
        precio:13000,
    },
    {
        id: 2,
        imagen:'../img/lumpias.jpg',
        nombre: "Lumpias",
        precio:10000,
    },
    {
        id: 3,
        imagen:'../img/gyozas.webp',
        nombre: 'Gyozas',
        precio:12000,
    },
    {
        id: 4,
        imagen:'../img/arroz-cantones.webp',
        nombre: 'Arroz Cantones',
        precio:21000,
    },
    {
        id: 5,
        imagen:'../img/pad-thai.jpg',
        nombre: 'Pad Thai',
        precio:20000,
    },
    {
        id: 6,
        imagen:'../img/ramen.jpg',
        nombre: 'Shoujo Ramen',
        precio:25000,
    },
    {
        id: 7,
        imagen:'../img/tiramisu.png',
        nombre: 'Tiramisu',
        precio:18000,
    },
    {
        id: 8,
        imagen:'../img/pie-de-limon.jpg',
        nombre: 'Pie de limon',
        precio:16000,
    },
    {
        id: 9,
        imagen:'../img/mouse-chocolate.jpg',
        nombre: 'Mouse de chocolate',
        precio:14000,
    },
    
]

const contenedorEntrada = document.querySelector("#contenedor__")
const contenedoEntrada= document.getElementById('contenedor__')

products.forEach( p =>{
    const div = document.createElement("div");
    div.classList.add("contenedor__padre");

    div.innerHTML= `
    <div class="img__gyoza img__ajuste" id="contenedor-${p.id}">
        <img class="img__menu" src="${p.imagen}">
        <h3 class="subtexto__small">"${p.nombre}"</h3>
        <p class="subtexto__small">"${p.precio}"</p>
    </div>`

    const agregarBoton =document.createElement("button");
    agregarBoton.classList.add("button","subtexto__small",);
    agregarBoton.innerText="Agregar";

    agregarBoton.addEventListener("click",()=>{
        carrito.push(p);
        localStorage.setItem("carrito", JSON.stringify(carrito))
    })

    contenedorEntrada.appendChild(div);
    const contenedorBoton=document.querySelector("#contenedor-" + p.id);
    contenedorBoton.appendChild(agregarBoton);
    
    
    const eliminarBoton =document.createElement("button");
    eliminarBoton.classList.add("button","subtexto__small",);
    eliminarBoton.innerText="Eliminar";

    eliminarBoton.addEventListener("click",()=>{
        carrito.pop(p);
        localStorage.setItem("carrito", JSON.stringify(carrito))
    })

    contenedorEntrada.appendChild(div);
    const containerBoton=document.querySelector("#contenedor-" + p.id);
    containerBoton.appendChild(eliminarBoton);
})

