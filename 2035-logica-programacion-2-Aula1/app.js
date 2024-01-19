let numero_secreto = 0;
let intentos = 1;
let numero_max = 10

let lista_numeros_usados=[];

function asignar_texto_elemento(elemento, texto) {
  let elemento_html = document.querySelector(elemento);
  elemento_html.innerHTML = texto;
}

function limpiar_caja() {
  document.querySelector("#valor_usuario").value = "";
}

function verificar_numero() {
  let numero_usuario = parseInt(document.getElementById("valor_usuario").value);
  if (numero_usuario === numero_secreto) {
    asignar_texto_elemento(
      "p",
      `Acertaste el numero en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numero_usuario > numero_secreto) {
    asignar_texto_elemento("p", "El numero secreto es menor");
  } else {
    asignar_texto_elemento("p", "El numero secreto es mayor");
  }
  intentos++;
  limpiar_caja();
}

function reiniciar_juego() {
  condiciones_iniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

function generar_num_secreto() {
  let num = Math.floor(Math.random() * numero_max) + 1;

  if (lista_numeros_usados.length === numero_max) {
    asignar_texto_elemento("p", "Sorteados todos los numeros posibles");
    //reiniciar_juego();
  } else {
    if (lista_numeros_usados.includes(num)) {
        return generar_num_secreto();
      } else {
        lista_numeros_usados.push(num);
        return num;
      }
  }

  
}

function condiciones_iniciales() {
  numero_secreto = generar_num_secreto();
  limpiar_caja();
  asignar_texto_elemento("h1", "Juego del Numero Secreto");
  asignar_texto_elemento("p", `Indica un numero del 1 al ${numero_max}`);
}

condiciones_iniciales();