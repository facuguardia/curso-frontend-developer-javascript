// Interaccion del menu de escritorio con el usuario para que se muestre o no el menu

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconCarrito = document.querySelector(".navbar-shopping-cart");
const listCarrito = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
iconMenu.addEventListener("click", toggleMobileMenu);
iconCarrito.addEventListener("click", toggleListCarrito);

function toggleDesktopMenu() {
  const isListCarritoClosed = listCarrito.classList.contains("inactive");

  if (!isListCarritoClosed) {
    listCarrito.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isListCarritoClosed = listCarrito.classList.contains("inactive");

  if (!isListCarritoClosed) {
    listCarrito.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}
function toggleListCarrito() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  listCarrito.classList.toggle("inactive");
}

const producArray = [];
producArray.push({
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
producArray.push({
    name: "Pantalla",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
producArray.push({
    name: "Computadora",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>
</div>*/

for (produc of producArray) {
    const producCard = document.createElement("div");
    producCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', produc.img);

    const producInfo = document.createElement("div");
    producInfo.classList.add('product-info');

    const producInfoDiv = document.createElement("div");

    const producPrice = document.createElement("p");
    producPrice.innerHTML = '${produc.price}';

    const producName = document.createElement("p");
    producName.innerHTML = produc.name;

    const producInfoFigure = document.createElement("figure");

    const producImgCart = document.createElement("img");
    img.setAttribute('src', './icons/bt_add_to_cart.svg');
}