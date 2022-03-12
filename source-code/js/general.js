// Set And Get SearchValue
let searchForm = document.querySelector(".header--input-background")
    , searchFormInput = document.querySelector(".header--input-background input")
    , searchArr = [];
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let searchValue = searchFormInput.value.toLowerCase();
    localStorage.setItem(`${searchValue}`, `${searchValue}`);
    location.href = '../html/products.html';
    let productValue = localStorage.getItem(`${searchValue}`);
    console.log(productValue)
    // searchArr.push(productValue)
})
// Get all localStorageItems 
let getLocalStorageItems = () => {

    let keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        searchArr.push(localStorage.getItem(keys[i]));
    }

}
getLocalStorageItems();
// Call API 
fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then((data) => {
        let bodyBoxContainer = document.querySelector('.body__content--boxContainer');
        let bodyRowContainer = document.querySelector(".body__content--rowContainer");
        for (let i in data) {
            // Render Product after searching
            if (data[i].product_name.toLowerCase().includes(`${searchArr[0]}`)) {
                let loading = document.querySelectorAll(".loading__container");
                for (let i = 0; i < loading.length; i++) {
                    loading[i].style.display = "none";
                }
                let bodyBox = () => {
                    let discountPrice = ((Number(data[i].product_price.replaceAll(",", "")) / 100) * Number(data[i].discount_content_number)).toFixed();
                    let discountPriceComma = () => {
                        if (discountPrice > 999) {
                            discountPrice = String(discountPrice).slice(0, 1) + "," + String(discountPrice).slice(1);
                        }
                    };
                    discountPriceComma();
                    if (data[i].discount === "false") {
                        bodyBoxContainer.innerHTML += `
                        <div class="body__content--box">
                                                  <a href="#">
                                                      <div class="max-width">
                                                          <div class="body__content--tagContainer">
                                                              <div class="body__content--tag newArrivalsTag">${data[i].newArrivals_content}</div>
                                                          </div>
                                                          <div class="body__content--picture">
                                                              <img src="${data[i].product_picture}" alt="">
                                                          </div>
                                                          <div class="body__content--information">
                                                              <div class="body__content--categories">
                                                                    ${data[i].product_categories}
                                                              </div>
                                                              <div class="body__content--name">
                                                                    ${data[i].product_name}
                                                              </div>
                                                              <div class="body__content--priceContainer">
                                                                  <div class="body__content--price">$${data[i].product_price}</div>
                                                              </div>
                                                              <div class="body__content--btnContainer">
                                                                  <div class="body__content--btn"><i
                                                                          class="fa-solid fa-bag-shopping"></i></div>
                                                                  <div class="body__content--btn"><i class="fa-solid fa-heart"></i>
                                                                  </div>
                                                                  <div class="body__content--btn"><i class="fa-solid fa-eye"></i>
                                                                  </div>
                                                                  <div class="body__content--btn"><i
                                                                          class="fa-solid fa-code-compare"></i></div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </a>
                                              </div>
                        `;
                    } else if (data[i].discount === "true") {
                        bodyBoxContainer.innerHTML += `
                        <div class="body__content--box">
                                                    <a href="#">
                                                        <div class="max-width">
                                                            <div class="body__content--tagContainer">
                                                                <div class="body__content--tag newArrivalsTag">${data[i].newArrivals_content}</div>
                                                                <div class="body__content--tag discountTag">${data[i].discount_content}</div>
                                                            </div>
                                                            <div class="body__content--picture">
                                                                <img src="${data[i].product_picture}" alt="">
                                                            </div>
                                                            <div class="body__content--information">
                                                                <div class="body__content--categories">
                                                                      ${data[i].product_categories}
                                                                </div>
                                                                <div class="body__content--name">
                                                                      ${data[i].product_name}
                                                                </div>
                                                                <div class="body__content--priceContainer">
                                                                    <div class="body__content--discount">$${data[i].product_price}</div>
                                                                    <div class="body__content--barrier">-</div>
                                                                    <div class="body__content--price">$${discountPrice}.00</div>
                                                                </div>
                                                                <div class="body__content--btnContainer">
                                                                    <div class="body__content--btn"><i
                                                                            class="fa-solid fa-bag-shopping"></i></div>
                                                                    <div class="body__content--btn"><i class="fa-solid fa-heart"></i>
                                                                    </div>
                                                                    <div class="body__content--btn"><i class="fa-solid fa-eye"></i>
                                                                    </div>
                                                                    <div class="body__content--btn"><i
                                                                            class="fa-solid fa-code-compare"></i></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                        `;
                    }

                };
                bodyBox()
                let bodyRow = () => {
                    let discountPrice = ((Number(data[i].product_price.replaceAll(",", "")) / 100) * Number(data[i].discount_content_number)).toFixed();
                    let discountPriceComma = () => {
                        if (discountPrice > 999) {
                            discountPrice = String(discountPrice).slice(0, 1) + "," + String(discountPrice).slice(1);
                        }
                    };
                    discountPriceComma();
                    if (data[i].discount === "false") {
                        bodyRowContainer.innerHTML += `
                        <div class="body__content--row">
                                                    <a href="#">
                                                        <div class="max-width">
                                                            <div class="body__content--tagContainer">
                                                                <div class="body__content--tag newArrivalsTag">${data[i].newArrivals_content}</div>
                                                            </div>
                                                            <div class="body__content--rowPicture">
                                                                <img src="${data[i].product_picture}" alt="">
                                                            </div>
                                                            <div class="body__content--rowContent">
                                                                <div class="body__content--categories">
                                                                ${data[i].product_categories}
                                                                </div>
                                                                <div class="body__content--name">
                                                                ${data[i].product_name}
                                                                </div>
                                                                <div class="body__content--description">
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
                                                                    possimus excepturi quisquam, voluptatem quibusdam harum dolorum,
                                                                    reiciendis minus repellat consectetur ratione commodi, est quae
                                                                    saepe consequatur culpa! Impedit, reiciendis.
                                                                </div>
                                                                <div class="body__content--priceContainer">
                                                                    <div class="body__content--price">$${data[i].product_price}</div>
                                                                </div>
                                                                <div class="body__content--btnContainer">
                                                                    <div class="body__content--btn"><i
                                                                            class="fa-solid fa-bag-shopping"></i></div>
                                                                    <div class="body__content--btn"><i class="fa-solid fa-heart"></i>
                                                                    </div>
                                                                    <div class="body__content--btn"><i class="fa-solid fa-eye"></i>
                                                                    </div>
                                                                    <div class="body__content--btn"><i
                                                                            class="fa-solid fa-code-compare"></i></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                        `;
                    } else if (data[i].discount === "true") {
                        bodyRowContainer.innerHTML += `
                        <div class="body__content--row">
                                                  <a href="#">
                                                      <div class="max-width">
                                                          <div class="body__content--tagContainer">
                                                              <div class="body__content--tag newArrivalsTag">${data[i].newArrivals_content}</div>
                                                              <div class="body__content--tag discountTag">${data[i].discount_content}</div>
                                                          </div>
                                                          <div class="body__content--rowPicture">
                                                              <img src="${data[i].product_picture}" alt="">
                                                          </div>
                                                          <div class="body__content--rowContent">
                                                              <div class="body__content--categories">
                                                              ${data[i].product_categories}
              
                                                              </div>
                                                              <div class="body__content--name">
                                                              ${data[i].product_name}
                                                              </div>
                                                              <div class="body__content--description">
                                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
                                                                  possimus excepturi quisquam, voluptatem quibusdam harum dolorum,
                                                                  reiciendis minus repellat consectetur ratione commodi, est quae
                                                                  saepe consequatur culpa! Impedit, reiciendis.
                                                              </div>
                                                              <div class="body__content--priceContainer">
                                                                  <div class="body__content--discount">$${data[i].product_price}</div>
                                                                  <div class="body__content--barrier">-</div>
                                                                  <div class="body__content--price">$${discountPrice}.00</div>
                                                              </div>
                                                              <div class="body__content--btnContainer">
                                                                  <div class="body__content--btn"><i
                                                                          class="fa-solid fa-bag-shopping"></i></div>
                                                                  <div class="body__content--btn"><i class="fa-solid fa-heart"></i>
                                                                  </div>
                                                                  <div class="body__content--btn"><i class="fa-solid fa-eye"></i>
                                                                  </div>
                                                                  <div class="body__content--btn"><i
                                                                          class="fa-solid fa-code-compare"></i></div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </a>
                                              </div>
                        `;
                    }
                };
                // Products Change Class
                let navItem = document.querySelectorAll(".body__content--navBtn"),
                    navItemLength = navItem.length;
                let navChangeClass = () => {
                    for (let i = 0; i < navItemLength; i++) {
                        navItem[i].addEventListener("click", () => {
                            let currentActive = document.querySelector(".body__content--active");
                            navItem[i].classList.add("body__content--active");
                            currentActive.classList.remove("body__content--active");
                            if (navItem[i].classList.contains("body__content--active") === false) {
                                navItem[i].classList.add("body__content--active");
                            }
                            if (navItem[i].innerHTML === `<i class="fa fa-th"></i>`) {
                                bodyBox();
                            } else if (navItem[i].innerHTML === `<i class="fa-solid fa-list"></i>`) {
                                bodyRow();
                            }
                        });
                    }
                }
                navChangeClass();
            }
        }
        // Render Product 
        if (localStorage.length === 0) {
            // Render Products
            // Product Show type 1
            let bodyBoxContainer = document.querySelector(".body__content--boxContainer");
            let bodyRowContainer = document.querySelector(".body__content--rowContainer");
            let bodyBox = () => {
                bodyBoxContainer.innerHTML = ``;
                bodyRowContainer.innerHTML = ``;
                for (let i in data) {
                    let discountPrice = (
                        (Number(data[i].product_price.replaceAll(",", "")) / 100) *
                        Number(data[i].discount_content_number)
                    ).toFixed();
                    let discountPriceComma = () => {
                        if (discountPrice > 999) {
                            discountPrice =
                                String(discountPrice).slice(0, 1) +
                                "," +
                                String(discountPrice).slice(1);
                        }
                    };
                    discountPriceComma();
                    if (data[i].discount === "false") {
                        bodyBoxContainer.innerHTML += `
      <div class="body__content--box">
                                <a href="#">
                                    <div class="max-width">
                                        <div class="body__content--tagContainer">
                                            <div class="body__content--tag newArrivalsTag">${data[i].newArrivals_content}</div>
                                        </div>
                                        <div class="body__content--picture">
                                            <img src="${data[i].product_picture}" alt="">
                                        </div>
                                        <div class="body__content--information">
                                            <div class="body__content--categories">
                                                  ${data[i].product_categories}
                                            </div>
                                            <div class="body__content--name">
                                                  ${data[i].product_name}
                                            </div>
                                            <div class="body__content--priceContainer">
                                                <div class="body__content--price">$${data[i].product_price}</div>
                                            </div>
                                            <div class="body__content--btnContainer">
                                                <div class="body__content--btn"><i
                                                        class="fa-solid fa-bag-shopping"></i></div>
                                                <div class="body__content--btn"><i class="fa-solid fa-heart"></i>
                                                </div>
                                                <div class="body__content--btn"><i class="fa-solid fa-eye"></i>
                                                </div>
                                                <div class="body__content--btn"><i
                                                        class="fa-solid fa-code-compare"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
      `;
                    } else if (data[i].discount === "true") {
                        bodyBoxContainer.innerHTML += `
      <div class="body__content--box">
                                  <a href="#">
                                      <div class="max-width">
                                          <div class="body__content--tagContainer">
                                              <div class="body__content--tag newArrivalsTag">${data[i].newArrivals_content}</div>
                                              <div class="body__content--tag discountTag">${data[i].discount_content}</div>
                                          </div>
                                          <div class="body__content--picture">
                                              <img src="${data[i].product_picture}" alt="">
                                          </div>
                                          <div class="body__content--information">
                                              <div class="body__content--categories">
                                                    ${data[i].product_categories}
                                              </div>
                                              <div class="body__content--name">
                                                    ${data[i].product_name}
                                              </div>
                                              <div class="body__content--priceContainer">
                                                  <div class="body__content--discount">$${data[i].product_price}</div>
                                                  <div class="body__content--barrier">-</div>
                                                  <div class="body__content--price">$${discountPrice}.00</div>
                                              </div>
                                              <div class="body__content--btnContainer">
                                                  <div class="body__content--btn"><i
                                                          class="fa-solid fa-bag-shopping"></i></div>
                                                  <div class="body__content--btn"><i class="fa-solid fa-heart"></i>
                                                  </div>
                                                  <div class="body__content--btn"><i class="fa-solid fa-eye"></i>
                                                  </div>
                                                  <div class="body__content--btn"><i
                                                          class="fa-solid fa-code-compare"></i></div>
                                              </div>
                                          </div>
                                      </div>
                                  </a>
                              </div>
      `;

                    }
                }
            };
            bodyBox();
            // Product Show type 2
            let bodyRow = () => {
                bodyBoxContainer.innerHTML = ``;
                bodyRowContainer.innerHTML = ``;
                for (let i in data) {
                    let discountPrice = (
                        (Number(data[i].product_price.replaceAll(",", "")) / 100) *
                        Number(data[i].discount_content_number)
                    ).toFixed();
                    let discountPriceComma = () => {
                        if (discountPrice > 999) {
                            discountPrice =
                                String(discountPrice).slice(0, 1) +
                                "," +
                                String(discountPrice).slice(1);
                        }
                    };
                    discountPriceComma();
                    if (data[i].discount === "false") {
                        bodyRowContainer.innerHTML += `
                                <div class="body__content--row">
                                  <a href="#">
                                      <div class="max-width">
                                          <div class="body__content--tagContainer">
                                              <div class="body__content--tag newArrivalsTag">${data[i].newArrivals_content}</div>
                                          </div>
                                          <div class="body__content--rowPicture">
                                              <img src="${data[i].product_picture}" alt="">
                                          </div>
                                          <div class="body__content--rowContent">
                                              <div class="body__content--categories">
                                              ${data[i].product_categories}
                                              </div>
                                              <div class="body__content--name">
                                              ${data[i].product_name}
                                              </div>
                                              <div class="body__content--description">
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
                                                  possimus excepturi quisquam, voluptatem quibusdam harum dolorum,
                                                  reiciendis minus repellat consectetur ratione commodi, est quae
                                                  saepe consequatur culpa! Impedit, reiciendis.
                                              </div>
                                              <div class="body__content--priceContainer">
                                                  <div class="body__content--price">$${data[i].product_price}</div>
                                              </div>
                                              <div class="body__content--btnContainer">
                                                  <div class="body__content--btn"><i
                                                          class="fa-solid fa-bag-shopping"></i></div>
                                                  <div class="body__content--btn"><i class="fa-solid fa-heart"></i>
                                                  </div>
                                                  <div class="body__content--btn"><i class="fa-solid fa-eye"></i>
                                                  </div>
                                                  <div class="body__content--btn"><i
                                                          class="fa-solid fa-code-compare"></i></div>
                                              </div>
                                          </div>
                                      </div>
                                  </a>
                              </div>
      `;
                    } else if (data[i].discount === "true") {
                        bodyRowContainer.innerHTML += `
      <div class="body__content--row">
                                <a href="#">
                                    <div class="max-width">
                                        <div class="body__content--tagContainer">
                                            <div class="body__content--tag newArrivalsTag">${data[i].newArrivals_content}</div>
                                            <div class="body__content--tag discountTag">${data[i].discount_content}</div>
                                        </div>
                                        <div class="body__content--rowPicture">
                                            <img src="${data[i].product_picture}" alt="">
                                        </div>
                                        <div class="body__content--rowContent">
                                            <div class="body__content--categories">
                                            ${data[i].product_categories}

                                            </div>
                                            <div class="body__content--name">
                                            ${data[i].product_name}
                                            </div>
                                            <div class="body__content--description">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
                                                possimus excepturi quisquam, voluptatem quibusdam harum dolorum,
                                                reiciendis minus repellat consectetur ratione commodi, est quae
                                                saepe consequatur culpa! Impedit, reiciendis.
                                            </div>
                                            <div class="body__content--priceContainer">
                                                <div class="body__content--discount">$${data[i].product_price}</div>
                                                <div class="body__content--barrier">-</div>
                                                <div class="body__content--price">$${discountPrice}.00</div>
                                            </div>
                                            <div class="body__content--btnContainer">
                                                <div class="body__content--btn"><i
                                                        class="fa-solid fa-bag-shopping"></i></div>
                                                <div class="body__content--btn"><i class="fa-solid fa-heart"></i>
                                                </div>
                                                <div class="body__content--btn"><i class="fa-solid fa-eye"></i>
                                                </div>
                                                <div class="body__content--btn"><i
                                                        class="fa-solid fa-code-compare"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
      `;
                    }
                }
            };
            // Products Change Class
            let navItem = document.querySelectorAll(".body__content--navBtn"),
                navItemLength = navItem.length;
            let navChangeClass = () => {
                for (let i = 0; i < navItemLength; i++) {
                    navItem[i].addEventListener("click", () => {
                        let currentActive = document.querySelector(".body__content--active");
                        navItem[i].classList.add("body__content--active");
                        currentActive.classList.remove("body__content--active");
                        if (navItem[i].classList.contains("body__content--active") === false) {
                            navItem[i].classList.add("body__content--active");
                        }
                        if (navItem[i].innerHTML === `<i class="fa fa-th"></i>`) {
                            bodyBox();
                        } else if (navItem[i].innerHTML === `<i class="fa-solid fa-list"></i>`) {
                            bodyRow();
                        }
                    });
                }
            }
            navChangeClass();
        }
        localStorage.clear()

    })