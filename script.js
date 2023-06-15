//var
var productos = [
  {
    nombre: "Turbo Fit",
    precio: 60,
    src: "img/i1r.png",
  },
  {
    nombre: "Power Strike",
    precio: 90,
    src: "img/i2r.png",
  },
  {
    nombre: "Speed flex",
    precio: 100,
    src: "img/i3r.png",
  },
  {
    nombre: "Strike Force",
    precio: 85,
    src: "img/i4r.png",
  },
  {
    nombre: "Dark Side",
    precio: 120,
    src: "img/i5r.png",
  },
  {
    nombre: "Party Fest",
    precio: 19,
    src: "img/i6r.png",
  },
];

// Elemento contenedor del catálogo de productos
var catalogo = document.getElementById("container-Catalogo");

// función que genera HTML de los productos que conforman el array de objetos productos
printCatalogo = () => {
  for (let i = 0; i < productos.length; i++) {
    var itemCatalogo = ` <div class="catItem">
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

    var imgCat = document.getElementsByClassName("itemImg")[i];
    var finArrastre = document.getElementById('containerCarrito');

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
var precio;
var totalPrecio = 0;

var carrito = document.getElementById("containerCarrito");
var totalCesta = document.getElementById("buy");

printCarrito = (i) => {
  document.getElementById("titulo-buy").style.display = "none";
  document.getElementById("buy").style.display = "flex";
  
  var carritoItem = ` 
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

  var spanTotalCompra = document.getElementById('valorCompra');
  spanTotalCompra.textContent = totalPrecio;


};


