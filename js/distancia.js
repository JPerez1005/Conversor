let eleccionDistancia = {
    primer: '',
    segun: ''
}

let eleccionesDistancia = JSON.parse(localStorage.getItem('eleccionDistancia'));
if (eleccionesDistancia) {
    eleccionDistancia = eleccionesDistancia;
    let seleccionD1 = d.getElementById('seleccionD1');
    let seleccionD2 = d.getElementById('seleccionD2');
    seleccionD1.value = eleccionDistancia.primer
    seleccionD2.value = eleccionDistancia.segun
}

function mostrarDistancia() {
    let valorD = d.getElementById('valorD').value;
    let seleccionD1 = d.getElementById('seleccionD1').value;
    let seleccionD2 = d.getElementById('seleccionD2').value;

    if (seleccionD1 == 'metros' && seleccionD2 == 'pies') {
        metrosPies(valorD);
    }
    if (seleccionD1 == 'pies' && seleccionD2 == 'metros') {
        piesMetros(valorD);
    }
    if (seleccionD1 == seleccionD2) {
        alert("Ambas medidas no pueden ser iguales");
    }

    eleccionDistancia.primer = seleccionD1
    eleccionDistancia.segun = seleccionD2
    localStorage.setItem('eleccionDistancia', JSON.stringify(eleccionDistancia));
}

function piesMetros(valorD) {
    let mostrar = document.getElementById("mostrarDist");
    let metros = valorD * 0.3048;
    let datos = `<h2>son:</h2><br>
    <label style='font-weight: bold;'>${Math.round(metros)} Metros</label>`;
    mostrar.innerHTML = '';
    mostrar.insertAdjacentHTML('beforeend', datos);
}


function metrosPies(valorD) {
    let mostrar = document.getElementById("mostrarDist");
    let pies = valorD / 0.3048;
    let datos = `<h2>son:</h2><br>
    <label style='font-weight: bold;'>${Math.round(pies)} Pies</label>`;
    mostrar.innerHTML = '';//vacielo
    mostrar.insertAdjacentHTML('beforeend'/*posicion*/, datos/*variable con html*/);
}

export {mostrarDistancia}