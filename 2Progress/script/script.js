// Page brandProduct Quantity
function increment() {
    document.getElementById('quantity').stepUp(1);
}

function decrement() {
    document.getElementById('quantity').stepDown(1);
}

// Navbar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}