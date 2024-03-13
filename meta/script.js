document.addEventListener('DOMContentLoaded', function () {
  var head = document.head;

  // Crear el elemento meta para viewport
  var viewportMeta = document.createElement('meta');
  viewportMeta.name = 'viewport';
  viewportMeta.content = 'width=device-width, initial-scale=1.0';
  head.appendChild(viewportMeta);

  // Crear el elemento meta
  var metaCharset = document.createElement('meta');
  metaCharset.setAttribute('charset', 'utf-8');
  var headElement = document.head || document.getElementsByTagName('head')[0];
  headElement.appendChild(metaCharset);

  // Crear el elemento link para el stylesheet
  var stylesheetLink = document.createElement('link');
  stylesheetLink.rel = 'stylesheet';
  stylesheetLink.href = 'https://cdn.jsdelivr.net/gh/0-jsgh/format-text@main/meta/estilo.css';
  stylesheetLink.id = 'estilosCSS';
  head.appendChild(stylesheetLink);
});


document.addEventListener('DOMContentLoaded', function() {
  var hola = document.querySelectorAll('body');

  hola.forEach(function(div) {
    var texto = div.textContent;
    var lineas = texto.split('\n').filter(function(linea) {
      return linea.trim() !== '';
    });

    var lineasFormateadas = [];
    var lineaActual = '';
    const prefijos = ['#','img:','imgmax:','imgmin:','video:','ext:','linea:','link:', "***"];
    const sufijos = ['"','”','.',':','?','…','!','~',']']
    lineas.forEach(function(linea) {
      if(linea.startsWith('"')||linea.startsWith('“')){
        linea = ' — ' + linea.trim();
      }
      // Verificar si la línea comienza con '//'
      if (prefijos.some(prefijo => linea.trim().startsWith(prefijo))) {
        // Agregar la línea actual como elemento HTML sin cambios y con salto de línea
        lineasFormateadas.push(linea.trim());
        lineaActual = '';
      } else if (sufijos.some(sufijo => linea.trim().endsWith(sufijo))) {
        // Agregar la línea actual con un salto de línea
        lineaActual += ' ' + linea.trim();
        lineasFormateadas.push(lineaActual);
        lineaActual = '';
      } else {
        // Agregar la línea actual sin salto de línea
        lineaActual += ' ' + linea.trim();
      }
    });

    // Si queda alguna línea por agregar
    if (lineaActual.trim() !== '') {
      lineasFormateadas.push(lineaActual);
    }

    var contenidoFinal = lineasFormateadas.map(function(linea) {
      // Verificar si la línea comienza con '//'
      if (linea.startsWith('###')) {
        // Mantener la línea como elemento HTML sin cambios
        return '<h3>' + linea.substring(3) + '</h3>'; // Excluye las primeras dos barras '//'
      }
      else if (linea.startsWith('##')){
        return '<h2>' + linea.substring(2) + '</h2>';  
      }
      else if (linea.startsWith('#')){
        return '<h1>' + linea.substring(1) + '</h1>';  
      }
      else if (linea.startsWith('img:')){
        return '<img class="img" src="' + linea.substring(4) + '">';  
      }
      else if (linea.startsWith('imgmin:')){
        return '<img class="imin" src="' + linea.substring(7) + '">';  
      }
      else if (linea.startsWith('imgmax:')){
        return '<img class="imax" src="' + linea.substring(7) + '">';  
      }
      else if (linea.startsWith('video:')){
        return '<iframe class="youtube" allowfullscreen src="' + linea.substring(6) + '"></iframe>';  
      }
      else if (linea.startsWith('ext:')){
        return '<iframe class="ext" allowfullscreen src="' + linea.substring(4) + '"></iframe>';  
      }
      else if (linea.startsWith('link:')){
        return '<a href="' + linea.substring(5) + '">' + linea.substring(5) + '</a>';  
      }
      else if (linea.startsWith('linea:')){
        return '<hr />';  
      }
      else if (linea.startsWith('***')){
        return '<p><center>'+ linea +'</center><p>'
      }
      else {
        // Agregar etiquetas <p> al resto de las líneas
        return '<p>' + linea.trim() + '</p>';
      }
    }).join('');

    div.innerHTML = contenidoFinal; 
    
    // Añadir el enlace al final del div
    var enlaceModo = document.createElement('a');
    enlaceModo.href = 'javascript:void(0)';
    enlaceModo.textContent = 'T';
    enlaceModo.className = 'cambio';
    enlaceModo.onclick = cambiarEstilo;
    div.appendChild(enlaceModo);
    
    var enlace = document.createElement('a');
    enlace.href = 'javascript:void(0)';
    enlace.className = 'cerrar';
    enlace.textContent = 'X';
    enlace.onclick = cerrarbotones;
    div.appendChild(enlace);
  });
});

function cambiarEstilo() {
    var styleTag = document.getElementById('customStyle');

    // Verificar si la etiqueta <style> ya existe
    if (styleTag) {
      // Si existe, eliminarla
      styleTag.parentNode.removeChild(styleTag);
    } else {
      // Si no existe, crear una nueva etiqueta <style> y agregar estilos
      var style = document.createElement('style');
      style.id = 'customStyle';
          style.innerHTML = 'body{ background: #2b2922;} * {color:white;} .cambio{background:white;} .cerrar{background:white;} img{border: 2px solid white;} .ext{border: 2px solid white;} .youtube{border: 2px solid white;} hr{border: 0.1cm solid white; background: white;}';

      // Agregar la etiqueta <style> al <head>
      document.head.appendChild(style);
    }
  }

function cerrarbotones() {
    
    var style = document.createElement('style');
      style.id = 'customStyle';
          style.innerHTML = '.cambio{display:none;} .cerrar{display:none;}';

      // Agregar la etiqueta <style> al <head>
      document.head.appendChild(style);
}
