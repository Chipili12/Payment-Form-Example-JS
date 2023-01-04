/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let form = document.querySelector("form");
  let caracteres = /^[a-zA-Z]+$/;

  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();

    let card = document.getElementById("inputCard");
    let ccv = document.getElementById("inputCCV");
    let amount = document.getElementById("inputAmount");
    let name = document.getElementById("inputName");
    let lastname = document.getElementById("inputLastname");
    let city = document.getElementById("inputCity");
    let state = document.getElementById("inputState");
    let zip = document.getElementById("inputZip");

    function validoIngreso(
      valor,
      claserror,
      isNumber,
      minLargo,
      maxLargo,
      regex
    ) {
      let value = valor.value.split("-").join("");
      if (
        value === "" ||
        (isNumber && isNaN(Number(value))) ||
        value.length < minLargo ||
        value.length > maxLargo ||
        (regex && !regex.test(value))
      ) {
        claserror.style.display = "block";
        valor.classList.add("bg-danger", "bg-opacity-25");
      } else {
        valor.classList.remove("bg-danger");
        claserror.style.display = "none";
      }
    }
    validoIngreso(card, errorcard, true, 16, 16);
    validoIngreso(ccv, errorccv, true, 3, 3);
    validoIngreso(amount, erroramount, true);
    validoIngreso(name, errorname, false, 4, 30, caracteres);
    validoIngreso(lastname, errorlastname, false, 1, 30, caracteres);
    validoIngreso(city, errorcity, false, 4, 30, caracteres);
    validoIngreso(zip, errorzip, true);

    if (state.value === "Pick a state") {
      errorstate.style.display = "block";
      inputState.classList.add("bg-danger", "bg-opacity-25");
    } else {
      inputState.classList.remove("bg-danger");
      errorstate.style.display = "none";
    }
    if (
      !(
        document.getElementById("Master").checked ||
        document.getElementById("Visa").checked ||
        document.getElementById("Paypal").checked ||
        document.getElementById("Dinners").checked
      )
    ) {
      document.getElementById("errortarjetas").style.display = "block";
      document.getElementById("Errorheader").style.display = "block";
    } else {
      document.getElementById("errortarjetas").style.display = "none";
      document.getElementById("Errorheader").style.display = "none";
    }
  }
  let card = document.getElementById("inputCard");

  card.addEventListener("keyup", function() {
    let value = card.value.split("-").join("");
    let result = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        result += "-";
      }
      result += value[i];
    }
    card.value = result;
  });
};
