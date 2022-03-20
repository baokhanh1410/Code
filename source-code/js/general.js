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
// Set And Get SearchValue
let searchForm = document.querySelector(".header--input-background")
    , searchFormInput = document.querySelector(".header--input-background input");
const urlSearchParams = new URLSearchParams(window.location.search)
    , params = Object.fromEntries(urlSearchParams.entries());
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let searchValue = searchFormInput.value;
    // localStorage.setItem(`${searchValue}`, `${searchValue}`);
    // location.href = '../html/products.html';
    // let productValue = localStorage.getItem(`${searchValue}`);
    // console.log(productValue)
    // searchArr.push(productValue) 
    location.href = `./products.html?s=${searchValue}`
})
// Sticky nav bar