let signUp = document.getElementById('signUp');
let signIn = document.getElementById('signIn');
const container = document.getElementById('container');

signUp.addEventListener('click' , ()=>{
  container.classList.add("right-panel-active");
})

signIn.addEventListener('click' , ()=>{
  container.classList.remove("right-panel-active");
})
