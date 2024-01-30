var Seña;
var PrecioLJM;
var PrecioLJT;
var PrecioVSDF;
var PrecioN;
        (function checkLogin() {
            var isLoggedIn = false;
            window.checkLogin = function (event) {
                event.preventDefault();

                var enteredUsername = document.getElementById('username').value;
                var enteredPassword = document.getElementById('password').value;
                if (enteredUsername === 'admin' && enteredPassword === '1') {
                    isLoggedIn = true;

                    document.getElementById('loginContainer').style.display = 'none';

                    document.getElementById('userInterface').style.display = 'block';
                } else {
                    alert('Incorrect username or password. Please try again.');
                }
            };
        })();

// LUNES JUEVES MEDIODIA
function PrecioCambiar1() {
  var newContentValue = document.getElementById("l-j-minput").value;
  localStorage.setItem("PrecioLJM", newContentValue);
}

PrecioLJM = localStorage.getItem("PrecioLJM") || "Default Content";

document.getElementById("l-j-mPrecio").innerHTML = "$ " + PrecioLJM;

//LUNES JUEVES TARDE
function PrecioCambiar2() {
  var newContentValue = document.getElementById("l-j-tinput").value;
  localStorage.setItem("PrecioLJT", newContentValue);
}

PrecioLJT = localStorage.getItem("PrecioLJT") || "Default Content";
                                                                            //Consigue el valor del formulario y lo guarda para acceder despues
document.getElementById("l-j-tPrecio").innerHTML = "$ " + PrecioLJT;

//VIERNES SABADO DOMINGO FERIADO
function PrecioCambiar3() {
  var newContentValue = document.getElementById("v-s-d-finput").value;
  localStorage.setItem("PrecioVSDF", newContentValue);
}

PrecioVSDF = localStorage.getItem("PrecioVSDF") || "Default Content";

document.getElementById("v-s-d-fPrecio").innerHTML = "$ " + PrecioVSDF;

// NOCHE
function PrecioCambiar4() {
  var newContentValue = document.getElementById("ninput").value;
  localStorage.setItem("PrecioN", newContentValue);
}

PrecioN = localStorage.getItem("PrecioN") || "Default Content";

document.getElementById("nPrecio").innerHTML = "$ " + PrecioN;

//SEÑA
function PrecioCambiar5() {
  var newContentValue = document.getElementById("seña-input").value;
  localStorage.setItem("Seña", newContentValue);
}

Seña = localStorage.getItem("Seña") || "Default Content";

document.getElementById("señaPrecio").innerHTML = "$ " + Seña;

function newtab() {
  window.open("precio.html");
}