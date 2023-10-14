// const d=document;

let eleccion = {
    primer: '',
    segun: ''
}

let elecciones = JSON.parse(localStorage.getItem('eleccion'));
if (elecciones) {
    eleccion = elecciones
    let seleccionT1 = d.getElementById('seleccionT1');
    let seleccionT2 = d.getElementById('seleccionT2');
    seleccionT1.value = eleccion.primer
    seleccionT2.value = eleccion.segun
}


function mostrarTemperatura() {
    let valorT = d.getElementById('valorT').value;
    let seleccionT1 = d.getElementById('seleccionT1').value;
    let seleccionT2 = d.getElementById('seleccionT2').value;




    if (seleccionT1 == 'C' & seleccionT2 == 'F') {
        celsiusFaren(valorT);
    }
    if (seleccionT1 == 'F' & seleccionT2 == 'C') {
        farenCelsius(valorT);
    }
    if (seleccionT1 == seleccionT2) {
        alert("Ambas medidas no pueden ser iguales");
    }

    eleccion.primer = seleccionT1
    eleccion.segun = seleccionT2
    localStorage.setItem('eleccion', JSON.stringify(eleccion));
}


function farenCelsius(valorT) {
    let mostrar = document.getElementById("mostrarTemp");
    let celsius = (valorT - 32) / 1.8;
    console.log(celsius);
    let datos = `<h2>son:</h2><br>
    <label style='font-weight: bold;'>${Math.round(celsius)} Celsius</label>`;
    mostrar.innerHTML = '';
    mostrar.insertAdjacentHTML('beforeend', datos);

}


function celsiusFaren(valorT) {
    let mostrar = document.getElementById("mostrarTemp");
    let faren = (valorT * 1.8) + 32
    console.log(faren);
    let datos = `<h2>son:</h2><br>
    <label style='font-weight: bold;'>${Math.round(faren)} Fahrenheit</label>`;
    mostrar.innerHTML = '';
    mostrar.insertAdjacentHTML('beforeend', datos);
}

export  { mostrarTemperatura };