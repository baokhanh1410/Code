let navTop = document.querySelectorAll('.body__information--nav li')
    , navTopLength = navTop.length
    , navInformation = document.querySelector('.body__information--navInformation')
    , navDescription = document.querySelector('.body__information--navDescription')
    , navRate = document.querySelector('.body__information--navRate')
let navChangeClass = () => {
    for (let i = 0; i < navTopLength; i++) {
        navTop[i].addEventListener("click", () => {
            let currentActive = document.querySelector(".body__information--navActive");
            navTop[i].classList.add("body__information--navActive");
            currentActive.classList.remove("body__information--navActive");
            if (navTop[i].classList.contains("body__information--navActive") === false) {
                navTop[i].classList.add("body__information--navActive");
            }
            if (navTop[i].innerHTML === 'Information') {
                navInformation.style.display = 'flex';
                navDescription.style.display = 'none'
                navRate.style.display = 'none'
            } else if (navTop[i].innerHTML === 'Description') {
                navInformation.style.display = 'none';
                navDescription.style.display = 'flex'
                navRate.style.display = 'none'
            } else if (navTop[i].innerHTML === 'Review (02)') {
                navInformation.style.display = 'none';
                navDescription.style.display = 'none'
                navRate.style.display = 'block'
            }
        });
    }
}
navChangeClass();
// Quantity Button
// Get query string value
const productUrl = new URLSearchParams(window.location.search)
    , productParams = Object.fromEntries(productUrl.entries());
console.log(productUrl.getAll(''))
let productParam = Object.keys(productParams)[0];
for (param of productUrl) {
    productParam = param[1];
};
// Call Api
let productApi = fetch("https://622ee3905c86fd315eb74758.mockapi.io/products")
    .then(response => response.json())
let categoryApi = fetch('https://622ee3905c86fd315eb74758.mockapi.io/categories')
    .then(response => response.json())
let brandApi = fetch('https://622ee3905c86fd315eb74758.mockapi.io/brands')
    .then(response => response.json())
let descriptionApi = fetch('https://622ee3905c86fd315eb74758.mockapi.io/descriptions')
    .then(response => response.json())
Promise.all([productApi, categoryApi, brandApi, descriptionApi])
    .then(([dataProduct, dataCategory, dataBrand, dataDescription]) => {
        // Render Products Speccification
        let picture = document.querySelector('.body__bigPicture')
            , name = document.querySelector('.body__information--name')
            , price = document.querySelector('.body__information--priceContainer')
            , specifications = document.querySelector('.body__information--navInformation')
            , bigDescription = document.querySelector('.body__information--text')
            , smallDescription = document.querySelector('.body__information--navDescription')
        for (let i in dataProduct) {
            if (dataProduct[i].id === productParam) {
                let discountPrice = ((Number(dataProduct[i].product_price.replaceAll(",", "")) / 100) * Number(dataProduct[i].discount_content_number)).toFixed();
                let discountPriceComma = () => {
                    if (discountPrice > 999) {
                        discountPrice = String(discountPrice).slice(0, 1) + "," + String(discountPrice).slice(1);
                    }
                };
                discountPriceComma();
                picture.innerHTML = `<img src="${dataProduct[i].product_picture}" alt="">`
                name.innerHTML = `${dataProduct[i].product_name}`
                if (dataProduct[i].discount === 'true') {
                    price.innerHTML = `
            <div class="body__information--discount">$${dataProduct[i].product_price}</div>
            <div class="body__information--barrier">-</div>
            <div class="body__information--price">$${discountPrice}.00</div>`
                } else if (dataProduct[i].discount === 'false') {
                    price.innerHTML =
                        `<div class="body__information--price">$${dataProduct[i].product_price}</div>`
                }
                specifications.innerHTML =
                    `
                        <div class="body__information--navInformation">
                            <div class="body__information--navRow">
                                <p>Processor:</p>
                                <p>${dataProduct[i].product_cpu}</p>
                            </div>
                            <div class="body__information--navRow">
                                <p>RAM</p>
                                <p>${dataProduct[i].product_ram}</p>
                            </div>
                            <div class="body__information--navRow">
                                <p>Memory:</p>
                                <p>${dataProduct[i].product_memory}</p>
                            </div>
                            <div class="body__information--navRow">
                                <p>Monitor:</p>
                                <p>${dataProduct[i].product_monitor}</p>
                            </div>
                        </div>
        `
                // Render Products Type
                let category = document.querySelector('.body__information--type:nth-child(2) p:nth-child(2)')
                    , brand = document.querySelector('.body__information--type:nth-child(1) p:nth-child(2)');
                for (let j in dataCategory) {
                    if (dataProduct[i].cat_id === dataCategory[j].cat_id) {
                        category.innerHTML = `${dataCategory[j].cat_name}`
                    }
                }
                for (let j in dataBrand) {
                    if (dataProduct[i].brand_id === dataBrand[j].brand_id) {
                        brand.innerHTML = `${dataBrand[j].brand_name}`
                    }
                }
                for (let j in dataDescription) {
                    if (dataProduct[i].id === dataDescription[j].id) {
                        bigDescription.innerHTML = `${dataDescription[j].description}`
                        smallDescription.innerHTML = `${dataDescription[j].description}`
                    }
                }
            }

        }

    })