// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos un array vacío donde se almacenarán los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
  // Obtenemos el input donde el usuario escribe el nombre del amigo
  const inputAmigo = document.getElementById("amigo");
  // Extraemos y limpiamos el valor del input (eliminando espacios en blanco al inicio y final)
  const nombreAmigo = inputAmigo.value.trim();

  // Si el input está vacío, mostramos una alerta y salimos de la función
  if (nombreAmigo === "") {
    alert("Por favor, inserte un Nombre");
    return;
  }

  // Agregamos el nombre al array "amigos"
  amigos.push(nombreAmigo);

  // Llamamos a la función para actualizar la lista en la interfaz
  actualizarLista();

  // Limpiamos el campo de entrada y enfocamos nuevamente para que el usuario pueda escribir otro nombre
  inputAmigo.value = "";
  inputAmigo.focus();
}

/**
 * Función para actualizar la lista de amigos en el HTML
 */
function actualizarLista() {
  // Obtenemos el elemento <ul> donde se mostrará la lista de amigos
  const listaAmigosUl = document.getElementById("listaAmigos");
  // Limpiamos su contenido antes de agregar nuevos elementos
  listaAmigosUl.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li"); // Creamos un elemento <li>
    li.textContent = amigo; // Asignamos el nombre del amigo como contenido del <li
    listaAmigosUl.appendChild(li); // Agregamos el <li> al <ul>
  });
}

/**
 * Función para sortear un amigo al azar
 */
function sortearAmigo() {
  // Si la lista de amigos está vacía, mostramos una alerta y salimos de la función
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. agrega nombres primero.");
    return;
  }
  // Generamos un índice aleatorio basado en la cantidad de amigos en la lista
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtenemos el nombre del amigo sorteado usando el índice generado
  const amigoSorteado = amigos[indiceAleatorio];

  // Obtenemos el elemento <ul> donde se mostrará el resultado del sorteo
  const resultadoUl = document.getElementById("resultado");
  // Mostramos el amigo sorteado en la lista de resultados
  resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}

/**
 * Esperamos a que el DOM esté completamente cargado antes de asignar eventos a los botones
 */
document.addEventListener("DOMContentLoaded", () => {
  // Asignamos la función 'agregarAmigo' al botón con id "button-add"
  document.getElementById("button-add").addEventListener("click", agregarAmigo);
  // Asignamos la función 'sortearAmigo' al botón con id "button-draw"
  document.getElementById("button-draw").addEventListener("click", sortearAmigo);
});
