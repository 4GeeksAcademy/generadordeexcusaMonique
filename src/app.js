window.onload = function() {
  //write your code here
  let quien = ["Mi tia", "Mi hermana", "Mi gato", "El vecino"];
  let accion = ["robo", "perdio", "rompio", "tiro"];
  let que = ["mi llave", "mi telefono", "mi ordenador"];
  let cuando = ["ayer", "hoy por la mañana", "por la tarde", "el mes pasado"];

  function generarExcusa() {
    let quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
    let accionAleatoria = accion[Math.floor(Math.random() * accion.length)];
    let queAleatorio = que[Math.floor(Math.random() * que.length)];
    let cuandoAleatorio = cuando[Math.floor(Math.random() * cuando.length)];

    return `${quienAleatorio} ${accionAleatoria} ${queAleatorio} ${cuandoAleatorio}.`;
  }
  document.getElementById("excuse").innerText = generarExcusa();
};

document.getElementById("refreshButton").addEventListener("click", function() {
  location.reload();
});
