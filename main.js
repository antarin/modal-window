//get modal element
var modal = document.getElementById('simple-modal');
//Get modal button
var modalBtn = document.getElementById('modal-btn');
//Get close button
var closeBtn = document.getElementsByClassName('close-btn')[0];

//Lisen for click open
modalBtn.addEventListener('click', openModal);
//Listen for close button
closeBtn.addEventListener('click', closeModal);
//Listen close outside the box-shadow
window.addEventListener('click', outsideClick)

//finction for open modalBtn
function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target ==  modal) {
    modal.style.display = 'none';
  }
}
