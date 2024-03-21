document.addEventListener('DOMContentLoaded', function () {
  var head = document.head;

  var style = document.createElement('style');
      style.id = 'customStyle';
          style.innerHTML = '.cerrar{display:none;} .cambio{display:none;}';

      // Agregar la etiqueta <style> al <head>
  document.head.appendChild(style);
});
