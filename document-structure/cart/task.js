const products = document.querySelectorAll(".product");
const cart = document.querySelector(".cart");
const cartProducts = cart.querySelector(".cart__products");
cart.style.display = "none";
let memory = [];

checkLocalStorage();

products.forEach((elem) => {

  elem.querySelector(".product__quantity-control_dec").addEventListener("click", () => {
    if (elem.querySelector(".product__quantity-value").textContent == 1) return;
    --elem.querySelector(".product__quantity-value").textContent;
  })

  elem.querySelector(".product__quantity-control_inc").addEventListener("click", () => {
    ++elem.querySelector(".product__quantity-value").textContent;
  })

  elem.querySelector(".product__add").addEventListener("click", e => {
    const cloneProduct = e.target.closest(".product").cloneNode(false);
    const cloneImage = e.target.closest(".product").querySelector(".product__image").cloneNode();
    const cloneQuantity = e.target.closest(".product__quantity").querySelector(".product__quantity-value").cloneNode(true);
    const id = e.target.closest(".product").dataset.id;
    const btnDelete = e.target.cloneNode(false);
    btnDelete.classList.add("product-delete");
    btnDelete.textContent = "Удалить";
    btnDelete.style.background = "red";
    btnDelete.style.margin = "0 5px";
    cloneProduct.className = "cart__product";
    cloneImage.className = "cart__product-image";
    cloneQuantity.className = "cart__product-count";
    const productByID = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);
    if (!productByID) {
      cloneProduct.append(cloneImage, cloneQuantity, btnDelete);
      cartProducts.append(cloneProduct);
      memory.push({
        id: cartProducts.querySelector(`.cart__product[data-id="${id}"]`).dataset.id,
        image: cartProducts.querySelector(`.cart__product[data-id="${id}"]`).querySelector(".cart__product-image").getAttribute("src"),
        quantity: cartProducts.querySelector(`.cart__product[data-id="${id}"]`).querySelector(".cart__product-count").textContent
      });
      cart.style.display = cartProducts.children.length > 0 ? "" : "none";

      btnDelete.addEventListener("click", e => {
        elem.querySelector(".product__quantity-value").textContent = 1;
        memory.forEach(elem => {
          if (elem.id == cloneProduct.dataset.id) {
            memory.splice(memory.indexOf(elem), 1);
          }
          const delFromStorage = JSON.parse(localStorage.getItem("cart"));
          delFromStorage.forEach(elem => {
            if (elem.id == cloneProduct.dataset.id) {
              delFromStorage.splice(delFromStorage.indexOf(elem), 1);
              console.log(delFromStorage);
            }
          })
          localStorage.setItem("cart", JSON.stringify(delFromStorage));
          cloneProduct.remove();
          cart.style.display = cartProducts.children.length > 0 ? "" : "none";
        })

      })
    } else {
      productByID.querySelector(".cart__product-count").textContent =
        e.target.closest(".product__quantity").querySelector(".product__quantity-value").textContent;
      memory.forEach(elem => {
        if (elem.id == e.target.closest(".product").dataset.id) {
          elem.quantity = e.target.closest(".product__quantity").querySelector(".product__quantity-value").textContent;
        }
      })
    }
    localStorage.setItem("cart", JSON.stringify(memory));
  })
})

function checkLocalStorage() {
  if (localStorage.getItem("cart")) {
    memory = JSON.parse(localStorage.getItem("cart"));
    showCart();
  }
}

function showCart() {
  
  memory.forEach(elem => {
    const cloneProduct = document.createElement("div");
    cloneProduct.className = "cart__product";
    cloneProduct.dataset.id = elem.id;
    cloneProduct.innerHTML = `<img class="cart__product-image" src=${elem.image}>
                              <div class="cart__product-count">${elem.quantity}</div>
                              <div class="product__add product-delete" style="background: red; margin: 0px 5px;">Удалить</div>`;
    cartProducts.append(cloneProduct);
    cart.style.display = cartProducts.children.length > 0 ? "" : "none";

    cloneProduct.querySelector(".product-delete").addEventListener("click", e => {
      products.forEach(elem => {
        if (e.target.closest(".cart__product").dataset.id == elem.dataset.id) {
          e.target.closest(".cart__product").remove();
        }
      })

      memory.forEach(elem => {
        if (elem.id == cloneProduct.dataset.id) {
          memory.splice(memory.indexOf(elem), 1);
        }
        const delFromStorage = JSON.parse(localStorage.getItem("cart"));
        delFromStorage.forEach(elem => {
          if (elem.id == cloneProduct.dataset.id) {
            delFromStorage.splice(delFromStorage.indexOf(elem), 1);
          }
        })
        localStorage.setItem("cart", JSON.stringify(delFromStorage));
        cloneProduct.remove();
        cart.style.display = cartProducts.children.length > 0 ? "" : "none";
      })

    })
  })
}
