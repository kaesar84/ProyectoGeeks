//var
var productos = [
    {
        nombre:'Turbo Fit',
        precio: 60,
        src: 'img/i1r.png'
    },
    {
        nombre:'Power Strike',
        precio: 90,
        src: 'img/i2r.png'
    },
    {
        nombre:'Speed flex',
        precio: 100,
        src: 'img/i3r.png'
    },
    {
        nombre:'Strike Force',
        precio: 85,
        src: 'img/i4r.png'
    },
    {
        nombre:'Dark Side',
        precio: 120,
        src: 'img/i5r.png'
    },
    {
        nombre:'Party Fest',
        precio: 19,
        src: 'img/i6r.png'
    }
   

]
console.log(productos.length)





var catalogo = document.getElementById("container-Catalogo");

printCatalogo = () => {
  for(let i =0; i<productos.length;i++){
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
  }  
 
};

printCatalogo();