let inventario = [
    {
        nombre: 'Monitor',
        unidades: 50,
        precio: 200
    },
    {
        nombre: 'Televisor',
        unidades: 20,
        precio: 400
    },
    {
        nombre: 'Tablet',
        unidades: 10,
        precio: 300
    },

    {
        nombre: 'Teclado',
        unidades: 10,
        precio: 80
    }
]
function monitores() {
    alert("*** Monitor **** \n" + " "
        + "Precio: " + inventario[0].precio + "\n"
        + " unidades: " + inventario[0].unidades + "\n");
    let compra1 = Number(prompt("¿Cuantos desea comprar?"));
    if (compra1 <= inventario[0].unidades) {


        let compraMonitores = {
            nombre: 'Monitor',
            compra1: compra1,
        }
        carrito.push(compraMonitores);
        inventario[0].unidades -= compra1;
        let totalMonitores = compra1 * inventario[0].precio;

        if (compra1 >= 10 && compra1 < 20) {
            let descuento10 = totalMonitores * 0.1;
            totalMonitores = totalMonitores - descuento10;
            alert('su compra es de ' + compra1 + ' Monitores con un descuento de 10% el TOTAL es de ' + totalMonitores + ' pesos');
        } else if (compra1 > 20) {

            let descuento20 = totalMonitores * 0.2;
            totalMonitores = totalMonitores - descuento20;
            alert('su compra es de ' + compra1 + ' Monitores con un descuento de 20% el TOTAL es de ' + totalMonitores + ' pesos');

        } else if (compra1 < 10) {
            alert('su compra es de ' + compra1 + ' Monitores sin descuento' + ' el TOTAL es de ' + totalMonitores + ' pesos');
        }

    }
    else {
        alert("No hay suficientes productos");
    }
    if (inventario[0].unidades < 5) {
        alert("Solo quean menos de  5 Monitores");
    }
}

function Televisor() {
    alert("*** Televisor **** \n" + " "
        + "Precio: " + inventario[1].precio + "\n"
        + " unidades: " + inventario[1].unidades + "\n");
    let compra2 = Number(prompt("¿Cuantos desea comprar?"));
    if (compra2 <= inventario[1].unidades) {


        let compraTelevisores = {
            nombre: 'Televisor',
            compra2: compra2,
        }
        carrito.push(compraTelevisores);
        inventario[1].unidades -= compra2;
        let totalTelevisores = compra2 * inventario[1].precio;

        if (compra2 >= 10 && compra2 < 20) {
            let descuento10 = totalTelevisores * 0.1;
            totalTelevisores = totalTelevisores - descuento10;
            alert('su compra es de ' + compra2 + ' Televisores con un descuento de 10% el TOTAL es de ' + totalTelevisores + ' pesos');
        } else if (compra2 > 20) {

            let descuento20 = totalTelevisores * 0.2;
            totalTelevisores = totalTelevisores - descuento20;
            alert('su compra es de ' + compra2 + ' Televisores con un descuento de 20% el TOTAL es de ' + totalTelevisores + ' pesos');
        } else if (compra2 < 10) {
            alert('su compra es de ' + compra2 + ' Televisores sin descuento' + ' el TOTAL es de ' + totalTelevisores + ' pesos');
        }

    }
    else {
        alert("No hay suficientes productos");
    }
    if (inventario[1].unidades < 5) {
        alert("Solo quean menos de  5 Televisores");
    }
}
function Tablet() {
    alert("*** Tablet **** \n" + " "
        + "Precio: " + inventario[2].precio + "\n"
        + " unidades: " + inventario[2].unidades + "\n");
    let compra3 = prompt("¿Cuantos desea comprar?");
    if (compra3 <= inventario[2].unidades) {


        let compraTablet = {
            nombre: 'Tablet',
            compra3: compra3,
        }
        carrito.push(compraTablet);
        inventario[2].unidades -= compra3;
        let totalTablet = compra3 * inventario[2].precio;

        if (compra3 >= 10 && compra3 < 20) {
            let descuento10 = totalTablet * 0.1;
            totalTablet = totalTablet - descuento10;
            alert('su compra es de ' + compra3 + ' Tablets con un descuento de 10% el TOTAL es de ' + totalTablet + ' pesos');
        } else if (compra3 > 20) {

            let descuento20 = totalTablet * 0.2;
            totalTablet = totalTablet - descuento20;
            alert('su compra es de ' + compra3 + ' Tablets con un descuento de 20% el TOTAL es de ' + totalTablet + ' pesos');
        } else if (compra3 < 10) {
            alert('su compra es de ' + compra3 + ' Tablets sin descuento' + ' el TOTAL es de ' + totalTablet + ' pesos');
        }

    }
    else {
        alert("No hay suficientes productos");
    }
    if (inventario[2].unidades < 5) {
        alert("Solo quean menos de  5 Tablets");
    }
}
function Teclado(params) {
    alert("*** Teclado **** \n" + " "
        + "Precio: " + inventario[3].precio + "\n"
        + " unidades: " + inventario[3].unidades + "\n");
    let compra4 = prompt("¿Cuantos desea comprar?");
    if (compra4 <= inventario[3].unidades) {

        4
        let compraTeclado = {
            nombre: 'Teclado',
            compra4: compra4,
        }
        carrito.push(compraTeclado);
        inventario[3].unidades -= compra4;
        let totalTeclado = compra4 * inventario[3].precio;

        if (compra4 >= 10 && compra4 < 20) {
            let descuento10 = totalTeclado * 0.1;
            totalTeclado = totalTeclado - descuento10;
            alert('su compra es de ' + compra4 + ' Teclado con un descuento de 10% el TOTAL es de ' + totalTeclado + ' pesos');
        } else if (compra4 > 20) {

            let descuento20 = totalTeclado * 0.2;
            totalTeclado = totalTeclado - descuento20;
            alert('su compra es de ' + compra4 + ' Teclado con un descuento de 20% el TOTAL es de ' + totalTeclado + ' pesos');
        } else if (compra4 < 10) {
            alert('su compra es de ' + compra4 + ' Teclado sin descuento' + ' el TOTAL es de ' + totalTeclado + ' pesos');
        }

    }
    else {
        alert("No hay suficientes productos");
    }
    if (inventario[3].unidades < 5) {
        alert("Solo quean menos de  5 Teclados");
    }
}

let carrito = [];
for (let index = 0; index <= 4; index++) {

    let productos = prompt("Seleccione el producto que desea comprar \n 1. Monitor \n 2. Televisor \n 3. Tablet \n 4. Teclado");
    switch (productos) {
        case "1":
            monitores();
            break;
        case "2":
            Televisor();
            break;
        case "3":
            Tablet();
            break;
        case "4":
            Teclado();
            break;
        default: break;
            alert("Opción inválida");
            break;
    }

}

console.log(carrito);
console.log(inventario);
