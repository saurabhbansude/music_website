// Get the modal
var modal = document.querySelector('.modal');

// Get the button that opens the modal
var btn = document.querySelector('#openModalButton'); // Change this selector to match your button

// Get the <span> element that closes the modal
var closeBtn = document.querySelector('.close-btn');

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



