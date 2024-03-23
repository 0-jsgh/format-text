document.addEventListener('DOMContentLoaded', function () {
  // Obtener todos los elementos con la clase 'cerrar'
  var enlacesCerrar = document.querySelectorAll('.menu');
  // Eliminar los elementos obtenidos
  enlacesCerrar.forEach(function(enlace) {
    enlace.parentNode.removeChild(enlace);
  });
});
