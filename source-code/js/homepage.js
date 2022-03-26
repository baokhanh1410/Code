fetch("http://localhost:3000/products")
  .then((response) => response.json())
  // b1: parse dữ liệu từ json -> js data type (database)
  // return dữ liệu Promise, trong promise đó thì nó đã resolve cái database
  .then((data) => {
    let loading = document.querySelectorAll(".loading__container");
    for (let i = 0; i < loading.length; i++) {
      loading[i].style.display = "none";
    }
    let bodyProductsRow = document.querySelector(".body__products--row");
    let productsArr = data;
    let bodyProductsItem = document.querySelectorAll(".body__products--li");
    let bodyProductsItemLength = bodyProductsItem.length;
    // ------------------ Body Javascript ------------------
    //  Body Products
    // render homepage products
    let bodyNewArrivalsProducts = () => {
      bodyProductsRow.innerHTML = ``;
      for (let i in productsArr) {
        let productsDiscountNumber = (
          (Number(productsArr[i].product_price.replaceAll(",", "")) / 100) *
          Number(productsArr[i].discount_content_number)
        ).toFixed();
        let discountPriceComma = () => {
          if (productsDiscountNumber > 999) {
            productsDiscountNumber =
              String(productsDiscountNumber).slice(0, 1) +
              "," +
              String(productsDiscountNumber).slice(1);
          }
        };
        discountPriceComma();
        if (productsArr[i].newArrivals === "true" && productsArr[i].discount === "false") {
          bodyProductsRow.innerHTML += `<div class="body__products--box" href="">
                                    <div class="body__products--max-width">
                                        <span class="body__products--tag">
                                        <div class="body__products--tag--style tag--new-arrival">${productsArr[i].newArrivals_content}</div>
                                        <div class="body__products--tag--style tag--discount">${productsArr[i].discount_content}</div>
                                        </span>
                                        <div class="body__products--picture">
                                            <img class="body__products--picture-content" src="${productsArr[i].product_picture}"
                                                alt="">
                                        </div>
                                        <div class="body__products--content">
                                        <p class="body__products--categories">${productsArr[i].product_categories}</p>
                                        <p class="body__products--name">${productsArr[i].product_name}</p>
                                        <p class="body__products--price">$${productsArr[i].product_price}</p>
                                        </div>
                                        <div class="body__products--hover hover--animated">
                                            <div class="body__products--hover-section"><i
                                                    class="fa-solid fa-bag-shopping"></i></div>
                                            <div class="body__products--hover-section"><i class="fa-solid fa-heart"></i>
                                            </div>
                                            <div class="body__products--hover-section"><i class="fa-solid fa-eye"></i>
                                            </div>
                                            <div class="body__products--hover-section"><i
                                                    class="fa-solid fa-code-compare"></i></div>
                                        </div>
                                    </div>
                                </div>`;
        } else if (productsArr[i].newArrivals === "true" && productsArr[i].discount === "true") {
          bodyProductsRow.innerHTML += `<div class="body__products--box" href="">
                                    <div class="body__products--max-width">
                                        <span class="body__products--tag">
                                        <div class="body__products--tag--style tag--new-arrival">${productsArr[i].newArrivals_content}</div>
                                        <div class="body__products--tag--style tag--discount">${productsArr[i].discount_content}</div>
                                        </span>
                                        <div class="body__products--picture">
                                            <img class="body__products--picture-content" src="${productsArr[i].product_picture}"
                                                alt="">
                                        </div>
                                        <div class="body__products--content">
                                        <p class="body__products--categories">${productsArr[i].product_categories}</p>
                                        <p class="body__products--name">${productsArr[i].product_name}</p>
                                        <div class="body__products--price--container">
                                        <p class="body__products--discount">$${productsArr[i].product_price}</p>
                                        <p class="body__products--price--barrier">-</p>
                                        <p class="body__products--price">$${productsDiscountNumber}.00</p>
                                    </div>                                    </div>
                                        <div class="body__products--hover hover--animated">
                                            <div class="body__products--hover-section"><i
                                                    class="fa-solid fa-bag-shopping"></i></div>
                                            <div class="body__products--hover-section"><i class="fa-solid fa-heart"></i>
                                            </div>
                                            <div class="body__products--hover-section"><i class="fa-solid fa-eye"></i>
                                            </div>
                                            <div class="body__products--hover-section"><i
                                                    class="fa-solid fa-code-compare"></i></div>
                                        </div>
                                    </div>
                                </div>`;
        }
      }
      // Move to Single Product
      let allBodyProducts = document.querySelectorAll('.body__products--box')
        , allBodyProductsLength = allBodyProducts.length
        , allBodyProductsName = document.querySelectorAll('.body__products--name')
        , allBodyProductsPicture = document.querySelectorAll('.body__products--picture')
      for (let i in productsArr) {
        for (let j = 0; j < allBodyProductsLength; j++) {
          if (allBodyProductsName[j].innerText === productsArr[i].product_name) {
            // allBodyProducts[j].href = `../html/product-detail.html?id=${productsArr[i].id}`
            allBodyProductsName[j].addEventListener('click', () => {
              location.href = `../html/product-detail.html?id=${productsArr[i].id}`
            })
            allBodyProductsPicture[j].addEventListener('click', () => {
              location.href = `../html/product-detail.html?id=${productsArr[i].id}`
            })
          }
        }
      }
    };
    bodyNewArrivalsProducts();
    let bodyFeaturedProducts = () => {
      bodyProductsRow.innerHTML = ``;
      for (let i in productsArr) {
        let productsDiscountNumber = (
          (Number(productsArr[i].product_price.replaceAll(",", "")) / 100) *
          Number(productsArr[i].discount_content_number)
        ).toFixed();
        let discountPriceComma = () => {
          if (productsDiscountNumber > 999) {
            productsDiscountNumber =
              String(productsDiscountNumber).slice(0, 1) +
              "," +
              String(productsDiscountNumber).slice(1);
            console.log(productsDiscountNumber);
          }
        };
        discountPriceComma();
        if (productsArr[i].featured === "true") {
          bodyProductsRow.innerHTML += `<a class="body__products--box" href="#">
                                <div class="body__products--max-width">
                                    <span class="body__products--tag">
                                    <div class="body__products--tag--style tag--new-arrival">${productsArr[i].newArrivals_content}</div>
                                    <div class="body__products--tag--style tag--discount">${productsArr[i].discount_content}</div>
                                    </span>
                                    <div class="body__products--picture">
                                        <img class="body__products--picture-content" src="${productsArr[i].product_picture}"
                                            alt="">
                                    </div>
                                    <div class="body__products--content">
                                    <p class="body__products--categories">${productsArr[i].product_categories}</p>
                                    <p class="body__products--name">${productsArr[i].product_name}</p>
                                    <p class="body__products--price">$${productsArr[i].product_price}</p>
                                    </div>
                                    <div class="body__products--hover hover--animated">
                                        <div class="body__products--hover-section"><i class="fa-solid fa-bag-shopping"></i></div>
                                        <div class="body__products--hover-section"><i class="fa-solid fa-heart"></i>
                                        </div>
                                        <div class="body__products--hover-section"><i class="fa-solid fa-eye"></i>
                                        </div>
                                        <div class="body__products--hover-section"><i class="fa-solid fa-code-compare"></i></div>
                                    </div>
                                </div>
                            </a>`;
        }
      };
      // Move to Single Product
      let allBodyProducts = document.querySelectorAll('.body__products--box')
        , allBodyProductsLength = allBodyProducts.length
        , allBodyProductsName = document.querySelectorAll('.body__products--name')
      for (let i in productsArr) {
        for (let j = 0; j < allBodyProductsLength; j++) {
          // if(allBodyProductsName[j])
          if (allBodyProductsName[j].innerText === productsArr[i].product_name) {
            allBodyProducts[j].href = `../html/product-detail.html?id=${productsArr[i].id}`
          }
        }
      }
    };
    // Body Change Class Active
    let bodyProductsChangeClass = () => {
      for (let i = 0; i < bodyProductsItemLength; i++) {
        bodyProductsItem[i].addEventListener("click", () => {
          let currentActive = document.querySelector(".bodyActive");
          bodyProductsItem[i].classList.add("bodyActive");
          currentActive.classList.remove("bodyActive");
          if (bodyProductsItem[i].classList.contains("bodyActive") === false) {
            bodyProductsItem[i].classList.add("bodyActive");
          }
          if (
            bodyProductsItem[i].innerText === "New Arrivals" &&
            bodyProductsItem[i].classList.contains("bodyActive")
          ) {
            bodyNewArrivalsProducts();
          } else if (
            bodyProductsItem[i].innerText === "Featured" &&
            bodyProductsItem[i].classList.contains("bodyActive")
          ) {
            bodyFeaturedProducts();
          }
        });
      }
    };
    bodyProductsChangeClass();
    // Featured products
    let discountProductsArr = [],
      bodyFeaturedSmallSectionContainer = document.querySelector(".body__featured--small--container"),
      bodyFeaturedBigSectionContainer = document.querySelector(".body__featured--big--container");
    for (let i in productsArr) {
      // let discountProductsPrice = Number(productsArr[i].product_price.replaceAll(',', '')) / 100 * Number(productsArr[i].discount_content_number)
      if (productsArr[i].discount === "true") {
        discountProductsArr.push(productsArr[i]);
      }
    }
    let discountProductsArrLength = discountProductsArr.length;
    if (discountProductsArrLength > 3) {
      discountProductsArr.splice(-1, discountProductsArrLength - 3);
    }
    bodyFeaturedBigSectionContainer.innerHTML = `
                            <div class="body__featured--big-section" >
                                <div class="body__featured--text">
                                    <h2>${discountProductsArr[0].product_name}</h2>
                                    <div class="body__featured--price--container">
                                        <div class="body__featured--discount body__featured--big--section--font">$${discountProductsArr[0].product_price}</div>
                                        <div class="body__featured--barrier body__featured--big--section--font">-</div>
                                        <div class="body__featured--price body__featured--big--section--font">$${Number((Number(discountProductsArr[0].product_price.replaceAll(",", "")) / 100) * Number(discountProductsArr[0].discount_content_number)).toFixed()}.00
                                        </div>
                                    </div>
                                </div>
                                <div class="body__featured--picture">
                                    <img src="${discountProductsArr[0].product_picture}" alt="">
                                </div>
                                <div class="body__featured--content">
                                    <div class="body__featured--sale">
                                        <div class="body__featured--circle">
                                            <div class="body__featured--sale--circle">
                                                <div class="body__featured--circle--content">
                                                    <p>0</p>
                                                </div>
                                            </div>
                                            <div class="body__featured--circle--text">
                                                <p>hrs</p>
                                            </div>
                                        </div>
                                        <div class="body__featured--circle">
                                            <div class="body__featured--sale--circle">
                                                <div class="body__featured--circle--content">
                                                    <p>00</p>
                                                </div>
                                            </div>
                                            <div class="body__featured--circle--text">
                                                <p>min</p>
                                            </div>
                                        </div>
                                        <div class="body__featured--circle">
                                            <div class="body__featured--sale--circle">
                                                <div class="body__featured--circle--content">
                                                    <p>00</p>
                                                </div>
                                            </div>
                                            <div class="body__featured--circle--text">
                                                <p>sec</p>
                                            </div>
                                        </div>
                                </div>
                                <div class="body__featured--btn">
                                        <a href="#">
                                            <button>shop now</button>
                                        </a>
                                </div>
                            </div>`;
    bodyFeaturedSmallSectionContainer.innerHTML += `<div class="body__featured--small--section">
                                <div class="body__featured--small--picture">
                                    <img src="${discountProductsArr[1].product_picture
      }" alt="">
                                </div>
                                <div class="body__featured--small--content">
                                    <div class="body__featured--max-width">
                                        <div class="body__featured--small--top">
                                            <div class="body__featured--small--timer">
                                                <p>end in:</p>
                                                    0 : 00 : 00
                                            </div>
                                        <div class="body__featured--name">
                                            ${discountProductsArr[1]
        .product_name
      }
                                        </div>
                    <div class="body__featured--price--container">
                        <div class="body__featured--discount body__featured--small--section--font">
                            $${discountProductsArr[1].product_price}</div>
                        <div class="body__featured--barrier body__featured--small--section--font">-</div>
                        <div class="body__featured--price body__featured--small--section--font">
                        $${Number((Number(discountProductsArr[1].product_price.replaceAll(",", "")) / 100) * Number(discountProductsArr[1].discount_content_number)).toFixed()}.00</div>
                    </div>
                </div>
                <div class="body__featured--small--bottom">
                    <ul>
                        <li>
                            <p>Processor :</p>
                            <p>${discountProductsArr[1].product_cpu}</p>
                        </li>
                        <li>
                            <p>RAM :</p>
                            <p>${discountProductsArr[1].product_ram}</p>
                        </li>
                        <li>
                            <p>Monitor :</p>
                            <p>${discountProductsArr[1].product_monitor}</p>
                        </li>
                        <li>
                            <p>Categories :</p>
                            <p>${discountProductsArr[1].product_categories}</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
 `;
    bodyFeaturedSmallSectionContainer.innerHTML += `<div class="body__featured--small--section" >
        <div class="body__featured--small--picture">
            <img src="${discountProductsArr[2].product_picture}" alt="">
        </div>
        <div class="body__featured--small--content">
            <div class="body__featured--max-width">
                <div class="body__featured--small--top">
                    <div class="body__featured--small--timer">
                        <p>end in:</p>
                        0 : 00 : 00
                    </div>
                    <div class="body__featured--name">
                        ${discountProductsArr[2].product_name}
                    </div>
                    <div class="body__featured--price--container">
                        <div
                            class="body__featured--discount body__featured--small--section--font">
                            $${discountProductsArr[2].product_price}</div>
                        <div
                            class="body__featured--barrier body__featured--small--section--font">
                            -</div>
                        <div class="body__featured--price body__featured--small--section--font">
                        $${Number(
      (Number(
        discountProductsArr[2].product_price.replaceAll(
          ",",
          ""
        )
      ) /
        100) *
      Number(
        discountProductsArr[2].discount_content_number
      )
    ).toFixed()}.00</div>
                    </div>
                </div>
                <div class="body__featured--small--bottom">
                    <ul>
                        <li>
                            <p>Processor :</p>
                            <p>${discountProductsArr[2].product_cpu}</p>
                        </li>
                        <li>
                            <p>RAM :</p>
                            <p>${discountProductsArr[2].product_ram}</p>
                        </li>
                        <li>
                            <p>Monitor :</p>
                            <p>${discountProductsArr[2].product_monitor}</p>
                        </li>
                        <li>
                            <p>Categories :</p>
                            <p>${discountProductsArr[2].product_categories}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
 `;
    // Render Products Apple
    let bodyAppleSwiper = document.querySelector('#apple .swiper-wrapper');
    for (let i in productsArr) {
      if (productsArr[i].brand_id === 'apple') {
        let discountPrice = ((Number(productsArr[i].product_price.replaceAll(",", "")) / 100) * Number(productsArr[i].discount_content_number)).toFixed();
        let discountPriceComma = () => {
          if (discountPrice > 999) {
            discountPrice = String(discountPrice).slice(0, 1) + "," + String(discountPrice).slice(1);
          }
        };
        discountPriceComma()
        if (productsArr[i].discount === 'false') {
          bodyAppleSwiper.innerHTML += `
          <div class="swiper-slide">
                                <div class="swiper--box">
                                    <div class="swiper--maxWidth">
                                        <span class="body__products--tag">
                                            <div class="body__products--tag--style tag--new-arrival">${productsArr[i].newArrivals_content}</div>
                                            <div class="body__products--tag--style tag--discount">${productsArr[i].discount_content}</div>
                                        </span>
                                        <div class="swiper--picture">
                                            <img src="../../assets/Apple/${productsArr[i].product_picture}" alt="">
                                        </div>
                                        <div class="swiper--information">
                                            <div class="swiper--categories">${productsArr[i].product_categories}</div>
                                            <div class="swiper--name">${productsArr[i].product_name}</div>
                                            <div class="swiper--priceContainer">
                                                <div class="swiper--salePrice">$${productsArr[i].product_price}</div>
                                            </div>
                                            <div class="body__products--hover hover--animated">
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-bag-shopping"></i></div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-heart"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-eye"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-code-compare"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

          `
        } else if (productsArr[i].discount === 'true') {
          bodyAppleSwiper.innerHTML += `
          <div class="swiper-slide">
                                <div class="swiper--box">
                                    <div class="swiper--maxWidth">
                                        <span class="body__products--tag">
                                            <div class="body__products--tag--style tag--new-arrival">${productsArr[i].newArrivals_content}</div>
                                            <div class="body__products--tag--style tag--discount">${productsArr[i].discount_content}</div>
                                        </span>
                                        <div class="swiper--picture">
                                            <img src="../../assets/Apple/${productsArr[i].product_picture}" alt="">
                                        </div>
                                        <div class="swiper--information">
                                            <div class="swiper--categories">${productsArr[i].product_categories}</div>
                                            <div class="swiper--name">${productsArr[i].product_name}</div>
                                            <div class="swiper--priceContainer">
                                                <div class="swiper--saleDiscount">$${productsArr[i].product_price}</div>
                                                <div class="swiper--barrier">-</div>
                                                <div class="swiper--salePrice">$${discountPrice}.00</div>
                                            </div>
                                            <div class="body__products--hover hover--animated">
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-bag-shopping"></i></div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-heart"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-eye"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-code-compare"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

          `
        }
      }
    }
    // Render Products Samsung
    let bodySamsungSwiper = document.querySelector('#samsung .swiper-wrapper');
    for (let i in productsArr) {
      if (productsArr[i].brand_id === 'samsung') {
        let discountPrice = ((Number(productsArr[i].product_price.replaceAll(",", "")) / 100) * Number(productsArr[i].discount_content_number)).toFixed();
        let discountPriceComma = () => {
          if (discountPrice > 999) {
            discountPrice = String(discountPrice).slice(0, 1) + "," + String(discountPrice).slice(1);
          }
        };
        discountPriceComma()
        if (productsArr[i].discount === 'false') {
          bodySamsungSwiper.innerHTML += `
          <div class="swiper-slide">
                                <div class="swiper--box">
                                    <div class="swiper--maxWidth">
                                        <span class="body__products--tag">
                                            <div class="body__products--tag--style tag--new-arrival">${productsArr[i].newArrivals_content}</div>
                                            <div class="body__products--tag--style tag--discount">${productsArr[i].discount_content}</div>
                                        </span>
                                        <div class="swiper--picture">
                                            <img src="../../assets/Apple/${productsArr[i].product_picture}" alt="">
                                        </div>
                                        <div class="swiper--information">
                                            <div class="swiper--categories">${productsArr[i].product_categories}</div>
                                            <div class="swiper--name">${productsArr[i].product_name}</div>
                                            <div class="swiper--priceContainer">
                                                <div class="swiper--salePrice">$${productsArr[i].product_price}</div>
                                            </div>
                                            <div class="body__products--hover hover--animated">
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-bag-shopping"></i></div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-heart"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-eye"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-code-compare"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

          `
        } else if (productsArr[i].discount === 'true') {
          bodySamsungSwiper.innerHTML += `
          <div class="swiper-slide">
                                <div class="swiper--box">
                                    <div class="swiper--maxWidth">
                                        <span class="body__products--tag">
                                            <div class="body__products--tag--style tag--new-arrival">${productsArr[i].newArrivals_content}</div>
                                            <div class="body__products--tag--style tag--discount">${productsArr[i].discount_content}</div>
                                        </span>
                                        <div class="swiper--picture">
                                            <img src="../../assets/Apple/${productsArr[i].product_picture}" alt="">
                                        </div>
                                        <div class="swiper--information">
                                            <div class="swiper--categories">${productsArr[i].product_categories}</div>
                                            <div class="swiper--name">${productsArr[i].product_name}</div>
                                            <div class="swiper--priceContainer">
                                                <div class="swiper--saleDiscount">$${productsArr[i].product_price}</div>
                                                <div class="swiper--barrier">-</div>
                                                <div class="swiper--salePrice">$${discountPrice}.00</div>
                                            </div>
                                            <div class="body__products--hover hover--animated">
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-bag-shopping"></i></div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-heart"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-eye"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-code-compare"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

          `
        }
      }
    }
    // Render Products Gigabyte
    let bodyGigabyteSwiper = document.querySelector('#gigabyte .swiper-wrapper');
    for (let i in productsArr) {
      if (productsArr[i].brand_id === 'gigabyte') {
        let discountPrice = ((Number(productsArr[i].product_price.replaceAll(",", "")) / 100) * Number(productsArr[i].discount_content_number)).toFixed();
        let discountPriceComma = () => {
          if (discountPrice > 999) {
            discountPrice = String(discountPrice).slice(0, 1) + "," + String(discountPrice).slice(1);
          }
        };
        discountPriceComma()
        if (productsArr[i].discount === 'false') {
          bodyGigabyteSwiper.innerHTML += `
          <div class="swiper-slide">
                                <div class="swiper--box">
                                    <div class="swiper--maxWidth">
                                        <span class="body__products--tag">
                                            <div class="body__products--tag--style tag--new-arrival">${productsArr[i].newArrivals_content}</div>
                                            <div class="body__products--tag--style tag--discount">${productsArr[i].discount_content}</div>
                                        </span>
                                        <div class="swiper--picture">
                                            <img src="../../assets/Apple/${productsArr[i].product_picture}" alt="">
                                        </div>
                                        <div class="swiper--information">
                                            <div class="swiper--categories">${productsArr[i].product_categories}</div>
                                            <div class="swiper--name">${productsArr[i].product_name}</div>
                                            <div class="swiper--priceContainer">
                                                <div class="swiper--salePrice">$${productsArr[i].product_price}</div>
                                            </div>
                                            <div class="body__products--hover hover--animated">
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-bag-shopping"></i></div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-heart"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-eye"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-code-compare"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

          `
        } else if (productsArr[i].discount === 'true') {
          bodyGigabyteSwiper.innerHTML += `
          <div class="swiper-slide">
                                <div class="swiper--box">
                                    <div class="swiper--maxWidth">
                                        <span class="body__products--tag">
                                            <div class="body__products--tag--style tag--new-arrival">${productsArr[i].newArrivals_content}</div>
                                            <div class="body__products--tag--style tag--discount">${productsArr[i].discount_content}</div>
                                        </span>
                                        <div class="swiper--picture">
                                            <img src="../../assets/Apple/${productsArr[i].product_picture}" alt="">
                                        </div>
                                        <div class="swiper--information">
                                            <div class="swiper--categories">${productsArr[i].product_categories}</div>
                                            <div class="swiper--name">${productsArr[i].product_name}</div>
                                            <div class="swiper--priceContainer">
                                                <div class="swiper--saleDiscount">$${productsArr[i].product_price}</div>
                                                <div class="swiper--barrier">-</div>
                                                <div class="swiper--salePrice">$${discountPrice}.00</div>
                                            </div>
                                            <div class="body__products--hover hover--animated">
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-bag-shopping"></i></div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-heart"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-eye"></i>
                                                </div>
                                                <div class="body__products--hover-section"><i
                                                        class="fa-solid fa-code-compare"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

          `
        }
      }
    }
    let allSwiperBoxes = document.querySelectorAll(".swiper-slide")
      , swiperLength = allSwiperBoxes.length
      , allSwiperNames = document.querySelectorAll('.swiper--name')
    for (let i in productsArr) {
      for (let j = 0; j < swiperLength; j++) {
        if (allSwiperNames[j].innerText === productsArr[i].product_name) {
          allSwiperBoxes[j].addEventListener('click', () => {
            location.href = `../html/product-detail.html?id=${data[i].id}`
          })
        }
      }
    }
    // Body Section
    var countDownDate = new Date("March 28, 2022 20:59:59").getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let smallTimer = document.querySelectorAll('.body__featured--small--timer')
        , smallTimerLength = smallTimer.length;
      for (let i = 0; i < smallTimerLength; i++) {
        smallTimer[i].innerHTML = `
        <p>end in:</p>
        ${hours} : ${minutes} : ${seconds}
        `
      }
    }, 1000);
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let bigTimer = document.querySelector('.body__featured--sale')
      bigTimer.innerHTML = `<div class="body__featured--circle">
      <div class="body__featured--sale--circle">
          <div class="body__featured--circle--content">
              <p>${hours}</p>
          </div>
      </div>
      <div class="body__featured--circle--text">
          <p>hrs</p>
      </div>
  </div>
  <div class="body__featured--circle">
      <div class="body__featured--sale--circle">
          <div class="body__featured--circle--content">
              <p>${minutes}</p>
          </div>
      </div>
      <div class="body__featured--circle--text">
          <p>min</p>
      </div>
  </div>
  <div class="body__featured--circle">
      <div class="body__featured--sale--circle">
          <div class="body__featured--circle--content">
              <p>${seconds}</p>
          </div>
      </div>
      <div class="body__featured--circle--text">
          <p>sec</p>
      </div>
  </div>`
    }, 1000);
  });
// Brands
let moveToApple = () => {
  location.href = `../html/products.html?s=Apple`
}
let moveToSamsung = () => {
  location.href = `../html/products.html?s=Samsung`
}
let moveToGigabyte = () => {
  location.href = `../html/products.html?s=Gigabyte`
}