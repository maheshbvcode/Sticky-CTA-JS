$(document).ready(function() {
  var addToCartBtn = $('#add-to-cart');
  var stickyCart = $('.sticky-cart');

  $(window).scroll(function() {
    if (!isElementInViewport(addToCartBtn)) {
      stickyCart.css('visibility', 'visible');
    } else {
      stickyCart.css('visibility', 'hidden');
    }
  });

  function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});



$(document).ready(function() {
  var cartCount = 0;
  $('#cart-count').text(cartCount);

  // Add a click event listener to the #add-to-cart button
  $('#add-to-cart').click(function() {
    // Increment the cart count
    cartCount++;
    $('#cart-count').text(cartCount);
  });
});


const addtocartButton = document.getElementById("add-to-cart");
const stickyCart = document.querySelector(".sticky-cart");

// Check if the add to cart button exists
if (addtocartButton) {
  // Add an event listener to the add to cart button
  addtocartButton.addEventListener("onscroll", () => {
    // Check if the add to cart button has scrolled out of the viewport
    if (window.scrollY > addtocartButton.getBoundingClientRect().top) {
      // If it has, then show the sticky cart
      stickyCart.classList.add("show");
    } else {
      // If it has not, then hide the sticky cart
      stickyCart.classList.remove("show");
    }
  });

  // Add an event listener to the add to cart button
  addtocartButton.addEventListener("click", () => {
    // Add the product to the cart
    // ...
    // Update the cart count
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = ++cartCount.textContent;
  });
}