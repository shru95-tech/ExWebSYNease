let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Product added to cart 🛒");
}
function openCart() {
    alert("Cart page not implemented yet");
}