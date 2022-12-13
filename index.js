// verificar si oferta es true

const descuento = () => {
    [...productos].forEach(producto => {
        if (producto.oferta === true) {
            producto.precio = producto.precio * 0.90}
    })
}

descuento()



//ordenar los productos de la a-z o de z-a

const ordenarAz = [... productos].sort ( (a, b) => {
    if (a.producto > b.producto){
        return 1;
    }
    if (a.producto < b.producto){
        return -1;
}
})


const ordenarZa = [... productos].sort ( (a, b) => {
    if (a.producto < b.producto){
        return 1;
    }
    if (a.producto > b.producto){
        return -1;
}
})
const ordenarProductos = () => {
const ordenar = prompt("Usted quiere ver los productos de a-z o de z-a")
    if (ordenar === "a-z" ){
        return ordenarAz;
    }else{
        return ordenarZa;
    }
}

console.log(ordenarProductos())

// ver los productos en oferta

const verificar = confirm("Quiere ver las ofertas de la tienda")


const ofertas = productos.filter ( (p) =>{
    if ( verificar === p.oferta){
        return true;
    }else{
        return false;
    }
})

// const mostrarOfertas = () => {
//     const verOfertas = ofertas.map ( 
//     (elemento) => elemento.nombre);
//     alert(verOfertas.join("-"));
// } 

console.log(ofertas)


// buscar productos

function buscarProductos  () {
    const buscar = prompt("Ingrese el producto que quiere buscar")

    const productoBuscado = productos.find(productos => productos.producto === buscar)
    if (productoBuscado === undefined) {
        alert("El producto que ingreso no se encuentra disponible")
    } else {
        console.log(productoBuscado)
    }
}

console.log(buscarProductos())