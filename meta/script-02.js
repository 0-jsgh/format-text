document.addEventListener('DOMContentLoaded', function () {
// Obtener todos los elementos con la clase 'cambio'
  var enlacesCambio = document.querySelectorAll('.cambio');
  // Eliminar los elementos obtenidos
  enlacesCambio.forEach(function(enlace) {
    enlace.parentNode.removeChild(enlace);
  });
});
