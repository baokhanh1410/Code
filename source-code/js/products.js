// Sticky nav bar
{
  let navbar = document.querySelector(".header__bottom__bottom");
  let sticky = navbar.offsetTop;
  let stickyNavbar = () => {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("nav--sticky");
    } else {
      navbar.classList.remove("nav--sticky");
    }
  };
  window.onscroll = () => {
    stickyNavbar();
  };
}
// Call API
fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => {
    let loading = document.querySelectorAll(".loading__container");
    for (let i = 0; i < loading.length; i++) {
      loading[i].style.display = "none";
    }
    // Product Quantity
    let currentQuantity = document.querySelectorAll(".body__content--box").length,
      currentQuantityDisplay = document.querySelector(".body__content--currentQuantity"),
      totalQuantity = data.length,
      totalQuantityDisplay = document.querySelector(".body__content--totalQuantity");
    currentQuantityDisplay.innerHTML = `${currentQuantity}`;
    totalQuantityDisplay.innerHTML = `${totalQuantity}`;
  });
// To Top Btn
let toTop = () => {
  window.scrollTo(top);
};
