// Cargamos el JSON con los eventos
fetch('eventos.json')
.then(response => response.json())
.then(eventos => {
  // Ordenamos los eventos según la fecha
  eventos.sort((a, b) => a.date - b.date);

  // Creamos los elementos HTML para cada eventos
  const timeline = document.createElement('div');
  timeline.classList.add('timeline');

  eventos.forEach(evento => {
    const eventoElement = document.createElement('div');
    eventoElement.classList.add('evento');
    eventoElement.innerHTML = `
      <div class="fecha">${evento.date}</div>
      <div class="titulo">${evento.title}</div>
      <div class="imagen">
        <img src="${evento.image}" alt="${evento.title}" />
      </div>
      <div class="texto">${evento.text}</div>
    `;
    timeline.appendChild(eventoElement);
  });

  // Insertamos la timeline en el HTML
  document.body.appendChild(timeline);

  //ANIMACION
  var _items = document.querySelectorAll(".evento")
  _items.forEach(element => {
    if(element.offsetTop < 300)
      element.classList.add('_show')
  })

  window.addEventListener("scroll", e=>{
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    var items = document.querySelectorAll(".evento")
    items.forEach(elem => {
      if((elem.offsetTop - (window.innerHeight/2)) < scroll) {
        elem.classList.remove('_hide')
        elem.classList.add('_show')
      }else{
        elem.classList.remove('_show')
        elem.classList.add('_hide')
      }
    })
  })
});