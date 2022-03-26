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
// Cart Display
function disable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,

        // if scroll happens, set it to the previous value
        window.onscroll = function () {
            window.scrollTo(LeftScroll, TopScroll);
        };
}
function enable() {
    window.onscroll = function () { };
}
let cartContainer = document.querySelector('.cart-container')
let shoppingCartOpen = () => {
    cartContainer.style.display = `flex`
    disable();
}
let shoppingCartClose = () => {
    cartContainer.style.display = `none`;
    enable();
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
let productsApi = fetch("https://622ee3905c86fd315eb74758.mockapi.io/products").then(response => response.json())
    , brandsApi = fetch("https://622ee3905c86fd315eb74758.mockapi.io/brands").then(response => response.json())
    , categoriesApi = fetch("https://622ee3905c86fd315eb74758.mockapi.io/categories").then(response => response.json())
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
        // Render Product Cart
        let shoppingCartSection = document.querySelector('.shopping-cart__section--container')
            , localStorageArr = []
        if (localStorage.length > 0) {
            function allStorage() {

                keys = Object.keys(localStorage),
                    i = keys.length;

                while (i--) {
                    localStorageArr.push(localStorage.getItem(keys[i]));
                }

                return localStorageArr;
            }
            allStorage()
        }
        for (let j in localStorageArr) {
            for (let i in products) {
                if (localStorageArr[j] === products[i].id) {
                    let discountPrice = ((Number(products[i].product_price.replaceAll(",", "")) / 100) * Number(products[i].discount_content_number)).toFixed();
                    let discountPriceComma = () => {
                        if (discountPrice > 999) {
                            discountPrice = String(discountPrice).slice(0, 1) + "," + String(discountPrice).slice(1);
                        }
                    };
                    discountPriceComma()
                    if (products[i].discount === 'true') {
                        shoppingCartSection.innerHTML +=
                            `
                        <li class="shopping-cart__section">
                        <div class="shopping-cart--picture">
                            <img src="${products[i].product_picture}" alt="">
                        </div>
                        <div class="shopping-cart--information">
                            <div class="shopping-cart--name">${products[i].product_name}</div>
                            <div class="shopping-cart--display">
                                <div class="shopping-cart--quantity">1 x</div>
                                <div class="shopping-cart--priceContainer">
                                    <div class="shopping-cart--discount">$${products[i].product_price}</div>
                                    <div class="shopping-cart--barrier">-</div>
                                    <div class="shopping-cart--price">$${discountPrice}.00</div>
                                </div>
                            </div>
                        </div>
                        <i class="fa-solid fa-xmark"></i>
                    </li>
                    `} else if (products[i].discount === 'false') {
                        shoppingCartSection.innerHTML +=
                            `
                        <li class="shopping-cart__section">
                        <div class="shopping-cart--picture">
                            <img src="${products[i].product_picture}" alt="">
                        </div>
                        <div class="shopping-cart--information">
                            <div class="shopping-cart--name">${products[i].product_name}</div>
                            <div class="shopping-cart--display">
                                <div class="shopping-cart--quantity">1 x</div>
                                <div class="shopping-cart--priceContainer">
                                    <div class="shopping-cart--price">$${products[i].product_price}</div>

                                </div>
                            </div>
                        </div>
                        <i class="fa-solid fa-xmark"></i>
                    </li>
                    `
                    }
                }
            }
            let removeBtn = document.querySelectorAll('.shopping-cart__section .fa-xmark')
                , removeBtnLength = removeBtn.length;
            for (let z = 0; z < removeBtnLength; z++) {
                removeBtn[z].addEventListener('click', (event) => {
                    let btnClicked = event.target;
                    btnClicked.parentElement.remove()
                    localStorage.removeItem(`${localStorageArr[z]}`)
                })
            }

        }
    })