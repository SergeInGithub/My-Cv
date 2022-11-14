const navBar = document.querySelector('.given-name');

navBar.addEventListener('click', function (){

  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  let color = "rgb(" + a + "," + b + "," + c + ")"

  navBar.style.color = color;
})
