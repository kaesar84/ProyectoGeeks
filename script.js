// Catálogo de productos
const productos = [
  {
    nombre: "Turbo",
    precio: 60,
    src: "img/i1r.png",
  },
  {
    nombre: "Power",
    precio: 90,
    src: "img/i2r.png",
  },
  {
    nombre: "Flex",
    precio: 100,
    src: "img/i3r.png",
  },
  {
    nombre: "Force",
    precio: 85,
    src: "img/i4r.png",
  },
  {
    nombre: "Dark",
    precio: 120,
    src: "img/i5r.png",
  },
  {
    nombre: "Party",
    precio: 19,
    src: "img/i6r.png",
  },
];

// Elemento contenedor del catálogo de productos
const catalogo = document.getElementById("container-Catalogo");

// función que genera HTML de los productos que conforman el catálogo de productos
printCatalogo = () => {
  for (let i = 0; i < productos.length; i++) {
    let itemCatalogo = ` <div class="catItem">
    <div class="container-itemImg">
        <img class="itemImg" draggable="true" src=${productos[i].src} alt="">
    </div>
    <div class="container-itemDescrip">
        <p>${productos[i].nombre}</p>
    </div>
    <div class="container-itemPrecio">
        <p>${productos[i].precio}<span class="material-symbols-outlined">euro_symbol</span></p>
    </div>
</div> `;

    // inserción en HTML
    catalogo.insertAdjacentHTML("beforeend", itemCatalogo);

    // imágenes de los productos insertados
    let imgCat = document.getElementsByClassName("itemImg")[i];

    // Incorporamos eventListeners e imprime articulos en el carrito al soltar el elemento
    imgCat.addEventListener("dragend", (e) => {
      printCarrito(i);
    });
  }
};

// Renderiza el catálogo de productos
printCatalogo();

// Carrito
let precio;
let totalPrecio = 0;

const carrito = document.getElementById("containerCarrito");
const totalCesta = document.getElementById("buy");

// función que renderiza los elementos en el carrito, una vez activado el evento(dragend)
printCarrito = (i) => {
  document.getElementById("titulo-buy").style.display = "none";
  document.getElementById("buy").style.display = "flex";

  // Estructura del renderizado del carrito
  let carritoItem = ` 
  <div class="carritoItem">
      <div class="container-itemImg container-carritoItemImg">
        <img class="itemImg" draggable="true" src=${productos[i].src} alt="">
      </div>
      <div class="container-itemDescrip container-carritoItemDescrip">
        <p>${productos[i].nombre}</p>
      </div>
      <div class="container-itemPrecio container-carritoItemprecio">
        <p>${productos[i].precio}<span class="material-symbols-outlined">euro_symbol</span></p>
      </div>
    </div>
  `;

  // precio de producto individual
  precio = productos[i].precio;

  // precio total de articulos del carrito
  totalPrecio += precio;
  carrito.insertAdjacentHTML("afterbegin", carritoItem);

  const spanTotalCompra = document.getElementById("valorCompra");
  spanTotalCompra.textContent = totalPrecio;
};
