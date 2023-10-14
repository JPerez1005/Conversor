import {  mostrarTemperatura } from "./temperatura.js";
import { mostrarDistancia } from "./distancia.js";
import { mostrarPeso } from "./peso.js";

let btnT=document.getElementById('btnT');

btnT.addEventListener('click',mostrarTemperatura);

let btnD=document.getElementById('btnD');

btnD.addEventListener('click',mostrarDistancia);

let btnP=document.getElementById('btnP');

btnP.addEventListener('click',mostrarPeso);





