// Page ShopDetail Quantity
function increment() {
    document.getElementById('quantity').stepUp();
}

function decrement() {
    document.getElementById('quantity').stepDown();
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}