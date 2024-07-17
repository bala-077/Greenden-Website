var sidenav = document.getElementById("sidenav");
var icons = document.getElementById("icons")
var moved = document.getElementById("moved")

icons.addEventListener("click", function(){
    sidenav.style.right = "0"
    sidenav.style.transition = "0.7s"
})
moved.addEventListener("click", function(){
    sidenav.style.right = "-60%"
    sidenav.style.transition = "0.7s"
})
