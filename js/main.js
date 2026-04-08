const listaCategorias = document.getElementById("lista-categorias");
const contenedorProductos = document.getElementById("contenedor-productos");


function cargarCategorias() {
    categorias.forEach(categoria =>{
        
        const li = document.createElement("li");

        li.innerHTML = `<a href="#">${categoria}</a>`;

        listaCategorias.appendChild(li);
    });
}


function cargarProductos() {
    productos.forEach(producto =>{
        const article = document.createElement("article");

        article.innerHTML = `
        <img src="${producto.imagen}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>${producto.precio}</p>
        <button>Agregar</button>`;
        
        const boton = article.querySelector("button");
        boton.addEventListener("click", () =>{
            alert(`Agregaste: ${producto.nombre}`);
        });

        contenedorProductos.appendChild(article);
    });
}



cargarCategorias();
cargarProductos();


