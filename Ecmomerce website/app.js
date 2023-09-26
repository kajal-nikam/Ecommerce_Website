var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '200px';
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}

// let cartItem = document.querySelector('.cart-page');
// document.querySelector('.cart-btn').onclick = () => {
//     cartItem.classList.toggle('.active')}function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
function myFunction() {
    var x = document.getElementById("cart-btn");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }