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
fetch("https://622ee3905c86fd315eb74758.mockapi.io/products")
  .then((response) => response.json())
  .then((data) => {
    let loading = document.querySelectorAll(".loading__container");
    for (let i = 0; i < loading.length; i++) {
      loading[i].style.display = "none";
    }
    // Product Content
    let result = document.querySelector('.body__content--quantity p')
    result.innerHTML = `Result for "${searchValue}"`
  });
// To Top Btn
let toTop = () => {
  window.scrollTo(top);
};
let searchValue = Object.keys(params)[0];
for (param of urlSearchParams) {
  searchValue = param[1];
};
let bodyBoxContainer = document.querySelector('.body__content--boxContainer');
let bodyRowContainer = document.querySelector(".body__content--rowContainer");
let noResult = document.querySelector('.empty__container')
// Call API 
fetch(" ")
  .then(response => response.json())
  .then((data) => {
    for (let i in data) {
      let result = document.querySelector('.body__content--quantity p')
      if (searchValue === undefined) {
        // Product Content
        result.innerHTML = `Result for ""`
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
                        <div class="body__content--box"">
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
        bodyRow()
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
                bodyBoxContainer.style.display = 'flex'
                bodyRowContainer.style.display = 'none'
              } else if (navItem[i].innerHTML === `<i class="fa-solid fa-list"></i>`) {
                bodyBoxContainer.style.display = 'none'
                bodyRowContainer.style.display = 'flex'
              }
            });
          }
        }
        navChangeClass();
      } else if (data[i].product_name.toLowerCase().includes(searchValue.toLowerCase())) {
        noResult.style.display = 'none'
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
        bodyRow()
        fetch("https://622ee3905c86fd315eb74758.mockapi.io/descriptions")
          .then(response => response.json())
          .then((dataDescription) => {
            let productDescription = document.querySelectorAll('.body__content--description')
            for (let j in dataDescription) {
              if (data[i].id === dataDescription[j].id) {
                productDescription[j].innerText = dataDescription[j].description
              }
            }

          })
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
                bodyBoxContainer.style.display = 'flex'
                bodyRowContainer.style.display = 'none'
              } else if (navItem[i].innerHTML === `<i class="fa-solid fa-list"></i>`) {
                bodyBoxContainer.style.display = 'none'
                bodyRowContainer.style.display = 'flex'
              }
            });
          }
        }
        navChangeClass();

      }
      let allProducts = document.querySelectorAll('.body__content--box')
        , allProductsRow = document.querySelectorAll('.body__content--row')
        , allProductsRowName = document.querySelectorAll('.body__content--row .body__content--name')
        , allProductsLength = allProducts.length
        , allProductsName = document.querySelectorAll('.body__content--name')
      for (let i = 0; i < allProductsLength; i++) {
        for (let j in data) {
          if (data[j].product_name === allProductsName[i].innerText) {
            allProducts[i].addEventListener('click', () => {
              location.href = `../html/product-detail.html?id=${data[j].id}`
            })
          }
          if (data[j].product_name === allProductsRowName[i].innerText.trim()) {
            allProductsRow[i].addEventListener('click', () => {
              location.href = `../html/product-detail.html?id=${data[j].id}`
            })
          }
        }
      }
    }
  })
// Xử lí lại với API
Promise.all([productsApi, brandsApi, categoriesApi])
  .then(([products, brands, categories]) => {
    for (let i in products) {
      for (let j in categories) {
        for (let k = 0; k < 3; k++) {
          if (products[i].cat_id === categories[j].cat_id && categories[j].cat_list[k] === searchValue) {
            let bodyBox = () => {
              let discountPrice = ((Number(products[i].product_price.replaceAll(",", "")) / 100) * Number(products[i].discount_content_number)).toFixed();
              let discountPriceComma = () => {
                if (discountPrice > 999) {
                  discountPrice = String(discountPrice).slice(0, 1) + "," + String(discountPrice).slice(1);
                }
              };
              discountPriceComma();
              if (products[i].discount === "false") {
                bodyBoxContainer.innerHTML += `
                            <div class="body__content--box"">
                                                      <a href="#">
                                                          <div class="max-width">
                                                              <div class="body__content--tagContainer">
                                                                  <div class="body__content--tag newArrivalsTag">${products[i].newArrivals_content}</div>
                                                              </div>
                                                              <div class="body__content--picture">
                                                                  <img src="${products[i].product_picture}" alt="">
                                                              </div>
                                                              <div class="body__content--information">
                                                                  <div class="body__content--categories">
                                                                        ${products[i].product_categories}
                                                                  </div>
                                                                  <div class="body__content--name">
                                                                        ${products[i].product_name}
                                                                  </div>
                                                                  <div class="body__content--priceContainer">
                                                                      <div class="body__content--price">$${products[i].product_price}</div>
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
              } else if (products[i].discount === "true") {
                bodyBoxContainer.innerHTML += `
                            <div class="body__content--box">
                                                        <a href="#">
                                                            <div class="max-width">
                                                                <div class="body__content--tagContainer">
                                                                    <div class="body__content--tag newArrivalsTag">${products[i].newArrivals_content}</div>
                                                                    <div class="body__content--tag discountTag">${products[i].discount_content}</div>
                                                                </div>
                                                                <div class="body__content--picture">
                                                                    <img src="${products[i].product_picture}" alt="">
                                                                </div>
                                                                <div class="body__content--information">
                                                                    <div class="body__content--categories">
                                                                          ${products[i].product_categories}
                                                                    </div>
                                                                    <div class="body__content--name">
                                                                          ${products[i].product_name}
                                                                    </div>
                                                                    <div class="body__content--priceContainer">
                                                                        <div class="body__content--discount">$${products[i].product_price}</div>
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
              let discountPrice = ((Number(products[i].product_price.replaceAll(",", "")) / 100) * Number(products[i].discount_content_number)).toFixed();
              let discountPriceComma = () => {
                if (discountPrice > 999) {
                  discountPrice = String(discountPrice).slice(0, 1) + "," + String(discountPrice).slice(1);
                }
              };
              discountPriceComma();
              if (products[i].discount === "false") {
                bodyRowContainer.innerHTML += `
                            <div class="body__content--row">
                                                        <a href="#">
                                                            <div class="max-width">
                                                                <div class="body__content--tagContainer">
                                                                    <div class="body__content--tag newArrivalsTag">${products[i].newArrivals_content}</div>
                                                                </div>
                                                                <div class="body__content--rowPicture">
                                                                    <img src="${products[i].product_picture}" alt="">
                                                                </div>
                                                                <div class="body__content--rowContent">
                                                                    <div class="body__content--categories">
                                                                    ${products[i].product_categories}
                                                                    </div>
                                                                    <div class="body__content--name">
                                                                    ${products[i].product_name}
                                                                    </div>
                                                                    <div class="body__content--description">
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
                                                                        possimus excepturi quisquam, voluptatem quibusdam harum dolorum,
                                                                        reiciendis minus repellat consectetur ratione commodi, est quae
                                                                        saepe consequatur culpa! Impedit, reiciendis.
                                                                    </div>
                                                                    <div class="body__content--priceContainer">
                                                                        <div class="body__content--price">$${products[i].product_price}</div>
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
              } else if (products[i].discount === "true") {
                bodyRowContainer.innerHTML += `
                            <div class="body__content--row">
                                                      <a href="#">
                                                          <div class="max-width">
                                                              <div class="body__content--tagContainer">
                                                                  <div class="body__content--tag newArrivalsTag">${products[i].newArrivals_content}</div>
                                                                  <div class="body__content--tag discountTag">${products[i].discount_content}</div>
                                                              </div>
                                                              <div class="body__content--rowPicture">
                                                                  <img src="${products[i].product_picture}" alt="">
                                                              </div>
                                                              <div class="body__content--rowContent">
                                                                  <div class="body__content--categories">
                                                                  ${products[i].product_categories}
    
                                                                  </div>
                                                                  <div class="body__content--name">
                                                                  ${products[i].product_name}
                                                                  </div>
                                                                  <div class="body__content--description">
                                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
                                                                      possimus excepturi quisquam, voluptatem quibusdam harum dolorum,
                                                                      reiciendis minus repellat consectetur ratione commodi, est quae
                                                                      saepe consequatur culpa! Impedit, reiciendis.
                                                                  </div>
                                                                  <div class="body__content--priceContainer">
                                                                      <div class="body__content--discount">$${products[i].product_price}</div>
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
            bodyRow()
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
                    bodyBoxContainer.style.display = 'flex'
                    bodyRowContainer.style.display = 'none'
                  } else if (navItem[i].innerHTML === `<i class="fa-solid fa-list"></i>`) {
                    bodyBoxContainer.style.display = 'none'
                    bodyRowContainer.style.display = 'flex'
                  }
                });
              }
            }
            navChangeClass();
          }
        }
      }
    }
  })
