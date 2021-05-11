const products = document.querySelectorAll(".product");
const cart = document.querySelector(".cart");
const cartProducts = cart.querySelector(".cart__products");
cart.style.display = "none";

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
    btnDelete.textContent = "Удалить";
    btnDelete.style.background = "red";
    btnDelete.style.margin = "0 5px";

    cloneProduct.className = "cart__product";
    cloneImage.className = "cart__product-image";
    cloneQuantity.className = "cart__product-count";

    if (!cartProducts.querySelector(`.cart__product[data-id="${id}"]`)) {

      cloneProduct.append(cloneImage, cloneQuantity, btnDelete);
      cartProducts.append(cloneProduct);
      cart.style.display = cartProducts.children.length > 0 ? "" : "none";

      btnDelete.addEventListener("click", e => {
        elem.querySelector(".product__quantity-value").textContent = 1;
        cloneProduct.remove();
        cart.style.display = cartProducts.children.length > 0 ? "" : "none";
      })
    } else {
      cartProducts.querySelector(`.cart__product[data-id="${id}"]`).querySelector(".cart__product-count").textContent =
        e.target.closest(".product__quantity").querySelector(".product__quantity-value").textContent;
    }
  })
})

