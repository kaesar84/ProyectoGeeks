//var
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

// función que genera HTML de los productos que conforman el array de objetos productos
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

    catalogo.insertAdjacentHTML("beforeend", itemCatalogo);

    let imgCat = document.getElementsByClassName("itemImg")[i];
    let finArrastre = document.getElementById('containerCarrito');

    // imgCat.addEventListener('dragstart',e=>{
    //   console.log('drag start')
    // })

    imgCat.addEventListener('dragend',e=>{
      console.log('drag enter')
      printCarrito(i);
    })

    finArrastre.addEventListener('dragover',e=>{
      e.preventDefault();
      console.log('dragover')
    
    })

    finArrastre.addEventListener('drop',e=>{
      // e.preventDefault();
      console.log('drop')
      console.log(i)
      
    })





    // imgCat.addEventListener("click", function () {
    //   // identificamos el indice del elemento clickado y lo pasamos como parametro para pintarlo en el carrito
    //   // console.log(i)

    //   printCarrito(i);
    // });
  }
};

printCatalogo();

// CARRITO
let precio;
let totalPrecio = 0;

const carrito = document.getElementById("containerCarrito");
const totalCesta = document.getElementById("buy");

printCarrito = (i) => {
  document.getElementById("titulo-buy").style.display = "none";
  document.getElementById("buy").style.display = "flex";
  
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

  precio = productos[i].precio;
  // console.log(precio)
  totalPrecio += precio;
  console.log(totalPrecio);
  carrito.insertAdjacentHTML("afterbegin", carritoItem);

  const spanTotalCompra = document.getElementById('valorCompra');
  spanTotalCompra.textContent = totalPrecio;


};


