
// let progress = document.getElementById('scrollbar');
// let heightprogressbar = document.body.scrollHeight - window.innerHeight;
// window.onscroll = function(){
// let progressHeight = (window.scrollY / heightprogressbar) * 100;
//   progress.style.height = progressHeight + "%";
// }

const btnToggle = document.querySelector('.toggle');

btnToggle.addEventListener('click', function (){
  document.getElementById('menu').classList.toggle('active');})

  onload = inicia;
  onscroll = desplaza;
  
  let desplazamiento, contenedor;
  
  function inicia() {
    contenedor = document.querySelector("main");
    document.body.style.height = contenedor.offsetHeight + "px";
  }
  
  function desplaza() {
    contenedor.style.top = -pageYOffset + "px" ;
    
    
  }
  
 