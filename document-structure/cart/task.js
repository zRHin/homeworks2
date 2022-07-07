

const product = document.querySelector(".products");
const cartProducts = document.querySelector(".cart__products");
let arr = [];

product.onclick = function(e) {
    const target = e.target;
    if (target.classList.contains("product__quantity-control_dec")) {
        const productQuantity = target.closest(".product__quantity-controls");
        const productQuantityValue = productQuantity.querySelector(".product__quantity-value");
        if (productQuantityValue.innerHTML> 1) {
            productQuantityValue.innerHTML --;
        } else {
            productQuantityValue.innerHTML = 1;
        }
    }
    if (target.classList.contains("product__quantity-control_inc")) {
        const productQuantity = target.closest(".product__quantity-controls");
        const productQuantityValue = productQuantity.querySelector(".product__quantity-value");
        productQuantityValue.innerHTML ++;
    }
    if (target.classList.contains("product__add")) {
        const product = target.closest(".product");
        const cartImage = product.querySelector(".product__image");
        const productQuantity = target.closest(".product__quantity");
        const productQuantityValue = productQuantity.querySelector(".product__quantity-value");
        const cartProduct = cartProducts.querySelectorAll(".cart__product");

        if (arr.includes(product.dataset.id)) {
            cartProduct.forEach((el) => {
                if (product.dataset.id == el.dataset.id) {
                    let cartProductCount = el.querySelector(".cart__product-count");
                    let cartProductCountN = Number(cartProductCount.innerText);
                    const productQuantityValueN = Number(productQuantityValue.innerText);
                    cartProductCountN += productQuantityValueN;
                    cartProductCount.innerHTML = cartProductCountN;
                }
            });
        } else {
            cartProducts.insertAdjacentHTML("afterbegin", `
                <div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${cartImage.src}">
                <div class="cart__product-count">${productQuantityValue.innerHTML}</div>
                </div>
            `);
            arr.push(product.dataset.id);
        }
    }
};