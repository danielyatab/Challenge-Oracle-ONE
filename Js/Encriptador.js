//Variables de DOM
let buttonCod = document.getElementById("btnEncriptar");
let buttonDecod = document.getElementById("btnDesencriptar");
let buttonCopy = document.getElementById("btnCopy");

let imageSobrePos = document.getElementById("outputContent");

let inputText = document.getElementById("textInput");
let outputText = document.getElementById("textOutput");
let p = document.getElementById("smsAlert");
let icon = document.getElementById("iconAlert");

let encrDesn = true;


const codificar = (text) => {
  const textCod = text.toLowerCase().split("").map((word) => {
      console.log("La palabra es: ", word);
      switch (word) {
        case "a":
          word = "ai";
          break;
        case "e":
          word = "enter";
          break;
        case "i":
          word = "imes";
          break;
        case "o":
          word = "ober";
          break;
        case "u":
          word = "ufat";
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
  let newDecod =text;
  let words = ["ai", "enter","imes","ober","ufat"];
  let replaceWords = ["a","e","i","o","u"];
  
  // Decodificacion
  words.forEach(element => {
    console.log("Elemetnos: ",element)
    if (newDecod.includes(element)){
      newDecod = newDecod.replace(new RegExp(element, "g"),replaceWords[words.indexOf(element)]);
    }
  });
  return newDecod;
};

const verificar = (textCap) => {
  let regex = /^[a-z\s]+$/;//Expresion regular para abecedario en minuscula y espaciados 
  
  if( textCap.trim() === "" || regex.test(textCap) === false){
    p.innerHTML = "<i class='bi bi-exclamation-triangle-fill'></i> El campo esta vacio o contiene mayuscula y tildes ";
    p.style.color = "red";
    return false;
  }else {
    //Context Desparece
    imageSobrePos.classList.add("outputOpacity");

    buttonCopy.classList.remove("copiar");
    buttonCopy.classList.add("revelationOpacity");
    //Validacion de Mensaje exitoso Encriptacion or Desencriptacion
    if(encrDesn){
      p.innerHTML ="<i class='bi bi-check-circle-fill'></i> Encriptacion con exito ";
    }else {
      p.innerHTML ="<i class='bi bi-check-circle-fill'></i> Desencriptacion con exito ";
    }
    // Sms Alert
    p.style.color = "rgb(114, 214, 110)";
    return true;
  }
};

const reset = ()=> {
  inputText.value ="";
  inputText.focus();
  inputText.placeholder = "";
}

/*******************EVENTOS DE BOTONES**********************/
buttonCod.addEventListener("click", function (event) {
  event.preventDefault(); //Prevenir que me lleve a otra pagina
  //Codificacion
  if(verificar(inputText.value) === true){
    encrDesn  = true;
    outputText.value = codificar(inputText.value);
    reset();
  }
  console.log("Escuchaste");
});

buttonDecod.addEventListener("click", function (event) {
  event.preventDefault();
  //Decodificacion
  if(verificar(inputText.value)){
    encrDesn  = false;
    outputText.value = decodificar(inputText.value);
    reset();
  }
});

buttonCopy.addEventListener("click", function (event) {
  event.preventDefault(); //Prevenir que me lleve a otra pagina
  outputText.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); //QUITAR EL COLOR DE SELECCION
});



/*******************EVENTOS DE TXTAREA**********************/
inputText.addEventListener("input", function () {
  setTimeout(function () {
    if (inputText.value.trim() === "") {
      // Restablecer mensaje de alerta
      p.innerHTML =
        "<i class='bi bi-exclamation-circle-fill icon-alert'></i>Solo letras minusculas y sin acentos";
      p.style.color = "gray";
    }
  }, 0);
});


