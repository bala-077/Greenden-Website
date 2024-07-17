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
// ---product functionality-
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")
console.log(productList)

search.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count = 0; count < productList.length; count++)
    {
        var productName = productList[count].querySelector("h2").textContent
        if(productName.toUpperCase().indexOf(enteredValue)<0)
        {
            productList[count].style.display = "none"
        }
        else{
            productList[count].style.display = "block"
        }
    }
})