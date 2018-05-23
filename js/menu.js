function showMenu () {
      var x = document.getElementById("smallmenu");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
	 }
function makeX(x) {
    x.classList.toggle("change"); 
}
