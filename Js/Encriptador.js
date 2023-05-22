// alert("hOLI");
var buttonCod = document.getElementById("btnEncriptar");
var buttonDecod = document.getElementById("btnDesencriptar");
var buttonCopy = document.getElementById("btnCopy");

var imageSobrePos = document.getElementById("outputContent");

var inputText = document.getElementById("textInput");
var outputText = document.getElementById("textOutput");
var p = document.getElementById("smsAlert");
var icon = document.getElementById("iconAlert");



const codificar = (text) => {
  const textCod = text.toLowerCase().split("").map((word) => {
    console.log("La palabra es: ",word);
    switch (word) {
      case 'a':
        word = 'ai';
        break;
      case "e":
        word = 'enter';
        break;
      case "i":
        word = 'imes';
        break;
      case "o":
        word = 'ober';
        break;
      case "u":
        word = 'ufat';
        break;
      default:
        word = word; 
        break;
    }
    return word;
  });
  return textCod.join("");
};

const decodificar = (text) => {
  let newText = "", temporal="";
  let n=0;

  let arrayText = text.toLowerCase().trim("")


};

const verificar = (textCap) => {
  if (textCap.trim() !== "") {
    console.log("Entre al contendio verg")
    //Context Desparece
    imageSobrePos.classList.add("outputOpacity");

    buttonCopy.classList.remove("copiar");
    buttonCopy.classList.add("revelationOpacity");

    //CONTROLAR ICONO
    /* if (icon.classList.contains("bi-exclamation-circle-fill")) {
      icon.classList.remove("bi-exclamation-circle-fill");
      icon.classList.remove("icon-alert");
      icon.classList.add("bi-check-circle-fill");
    } else if (icon.classList.contains("bi-exclamation-triangle-fill")) {
      icon.classList.remove("bi-exclamation-triangle-fill");
      icon.classList.add("bi-check-circle-fill");
    } */
    p.innerHTML = "<i class='bi bi-check-circle-fill'></i> Encriptado con exito ";

    // Sms Alert
    // p.textContent = "Encriptado con exito";
    p.style.color = "rgb(114, 214, 110)";
    //Icon Alert
    outputText.value = codificar(inputText.value);
  } else {
    // if (icon.classList.contains("bi-check-circle-fill")) {
    //   icon.classList.remove("bi-check-circle-fill");
    //   icon.classList.add("bi-exclamation-triangle-fill");
    // } else if (icon.classList.contains("bi-exclamation-circle-fill")) {
    //   icon.classList.remove("bi-exclamation-circle-fill");
    //   icon.classList.remove("icon-alert");
    //   icon.classList.add("bi-exclamation-triangle-fill");
    // }
    // p.textContent = "No deje vacio el campo por favor";

    p.innerHTML =
      "<i class='bi bi-exclamation-triangle-fill'></i> No deje vacio el campo por favor ";
    p.style.color = "red";
    console.log("El contenido esta vacio");
  }
};



// EVENTOS DE BOTONES
buttonCod.addEventListener("click", function (event) {
  event.preventDefault(); //Prevenir que me lleve a otra pagina
  verificar(inputText.value);
  console.log("Escuchaste")
});

buttonCopy.addEventListener("click", function (event) {
  event.preventDefault(); //Prevenir que me lleve a otra pagina
  outputText.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); //QUITAR EL COLOR DE SELECCION
});

buttonDecod.addEventListener("click", function (event) {
  event.preventDefault();
});


// EVENTOS DE TXTAREA
inputText.addEventListener("input", function() {
  setTimeout(function() {
    if (inputText.value.trim() === "") {
      // Restablecer mensaje de alerta
      p.innerHTML = "<i class='bi bi-exclamation-circle-fill icon-alert'></i>Solo letras minusculas y sin acentos"
      p.style.color ="gray";
    }
  }, 0);
});