let eleccionPeso = {
    primer: '',
    segun: ''
}

let eleccionesPeso = JSON.parse(localStorage.getItem('eleccionPeso'));
if (eleccionesPeso) {
    eleccionPeso = eleccionesPeso
    let seleccionP1 = d.getElementById('seleccionP1');
    let seleccionP2 = d.getElementById('seleccionP2');
    seleccionP1.value = eleccionPeso.primer
    seleccionP2.value = eleccionPeso.segun
}


function mostrarPeso()
{
    let valorP=d.getElementById('valorP').value;
    let seleccionP1=d.getElementById('seleccionP1').value;
    let seleccionP2=d.getElementById('seleccionP2').value;

    if(seleccionP1 == 'kg' && seleccionP2 == 'lb'){
        kiloLibra(valorP);
    }
    if(seleccionP1 == 'lb' && seleccionP2 == 'kg'){
        libraKilo(valorP);
    }
    if(seleccionP1 == seleccionP2 ){
        alert("Ambas medidas no pueden ser iguales");
    }

    eleccionPeso.primer = seleccionP1
    eleccionPeso.segun = seleccionP2
    localStorage.setItem('eleccionPeso', JSON.stringify(eleccionPeso));
}

function kiloLibra(valorP){
    let mostrar = document.getElementById("mostrarPes");
    let libra = valorP* 2.20462;
    let datos=`<h2>son:</h2><br>
    <label style='font-weight: bold;'>${Math.round(libra)} Libras</label>`;
    mostrar.innerHTML='';
    mostrar.insertAdjacentHTML('beforeend',datos);
}


function libraKilo(valorP){
    let mostrar = document.getElementById("mostrarPes");
    let kilo = valorP/2.20462;
    console.log(kilo);
    let datos=`<h2>son:</h2><br>
    <label style='font-weight: bold;'>${Math.round(kilo)} Kilogramos</label>`;
    mostrar.innerHTML='';
    mostrar.insertAdjacentHTML('beforeend',datos);
}

export {mostrarPeso}