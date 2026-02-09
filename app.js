function openCart() {
  const overlay = document.getElementById("overlay");
  const loader = document.getElementById("cartLoader");
  const cart = document.getElementById("slideCart");

  overlay.classList.add("is-open");
  loader.classList.add("is-open");

  setTimeout(() => {
    loader.classList.remove("is-open");
    cart.classList.add("is-open");
  }, 1000);
}

function closeFn() {
  document.getElementById("overlay").classList.remove("is-open");
  document.getElementById("cartLoader").classList.remove("is-open");
  document.getElementById("slideCart").classList.remove("is-open");
}
