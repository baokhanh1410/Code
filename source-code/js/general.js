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
// Xử lí lại với api
let productsApi = fetch("http://localhost:3000/products").then(response => response.json())
    , brandsApi = fetch("http://localhost:3000/brands").then(response => response.json())
    , categoriesApi = fetch("http://localhost:3000/categories").then(response => response.json())
Promise.all([productsApi, brandsApi, categoriesApi])
    .then(([products, brands, categories]) => {
        // Categories Search
        let navSection = document.querySelectorAll('.nav--item:nth-child(3) .nav--dropdown--section a')
            , navSectionLength = navSection.length
        for (let i in brands) {
            for (let j = 0; j < navSectionLength; j++) {
                for (let k = 0; k < 4; k++) {
                    if (categories[i].cat_list[k] === navSection[j].innerText.trim()) {
                        navSection[j].addEventListener('click', () => {
                            location.href = `./products.html?s=${navSection[j].innerText.trim()}`
                        })
                    }
                }
            }
        }
    })