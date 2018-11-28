// Get the modal
//var redModal = document.getElementById("redModal");
//var blueModal = document.getElementById("blueModal");

// When the user clicks on the button, open the modal 
function youWin() {
    document.getElementById("youWinModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function youWinClose() {
    document.getElementById("youWinModal").style.display = "none";
}

// When the user clicks on the button, open the modal 
function aiWin() {
    document.getElementById("aiWinModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function aiWinClose() {
    document.getElementById("aiWinModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == redModal || event.target == blueModal || event.target == grayModal) {
        blueModal.style.display = "none";
        redModal.style.display = "none";
        grayModal.style.display = "none";
    }
}