// Interaccion del menu de escritorio con el usuario para que se muestre o no el menu

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const producDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const iconCarrito = document.querySelector(".navbar-shopping-cart");
const listCarrito = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const producDatailContainer = document.querySelector("#productDetail");

navEmail.addEventListener("click", toggleDesktopMenu);
iconMenu.addEventListener("click", toggleMobileMenu);
iconCarrito.addEventListener("click", toggleListCarrito);
producDetailCloseIcon.addEventListener("click", closeProducDetailAside);

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
  closeProducDetailAside();
}
function toggleListCarrito() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  listCarrito.classList.toggle("inactive");

  const isProducDetailClosed =
    producDatailContainer.classList.contains("inactive");

  if (!isProducDetailClosed) {
    producDatailContainer.classList.add("inactive");
  }
}
function openProducDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  producDatailContainer.classList.remove("inactive");
}
function closeProducDetailAside() {
  producDatailContainer.classList.add("inactive");
}

//Productos

const producArray = [];
producArray.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
producArray.push({
  name: "Pantalla",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
producArray.push({
  name: "Computadora",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
producArray.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
producArray.push({
  name: "Pantalla",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
producArray.push({
  name: "Computadora",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
producArray.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
producArray.push({
  name: "Pantalla",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

// Funcion que recorre el array para mostrar los productos

function renderProducts(arr) {
  for (produc of arr) {
    const producCard = document.createElement("div");
    producCard.classList.add("product-card");

    const producImg = document.createElement("img");
    producImg.setAttribute("src", produc.image);
    producImg.addEventListener("click", openProducDetailAside);

    const producInfo = document.createElement("div");
    producInfo.classList.add("product-info");

    const producInfoDiv = document.createElement("div");

    const producPrice = document.createElement("p");
    producPrice.innerHTML = "$" + produc.price;

    const producName = document.createElement("p");
    producName.innerHTML = produc.name;

    producInfoDiv.appendChild(producPrice);
    producInfoDiv.appendChild(producName);

    const producInfoFigure = document.createElement("figure");

    const producImgCart = document.createElement("img");
    producImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    producInfoFigure.appendChild(producImgCart);

    producInfo.appendChild(producInfoDiv);

    producInfo.appendChild(producInfoFigure);

    producCard.appendChild(producImg);

    producCard.appendChild(producInfo);

    cardsContainer.appendChild(producCard);
  }
}

renderProducts(producArray);
