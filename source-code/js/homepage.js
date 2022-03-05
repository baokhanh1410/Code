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
        if (
          productsArr[i].newArrivals === "true" &&
          productsArr[i].discount === "false"
        ) {
          bodyProductsRow.innerHTML += `<a class="body__products--box" href="">
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
                                </a>`;
        } else if (
          productsArr[i].newArrivals === "true" &&
          productsArr[i].discount === "true"
        ) {
          bodyProductsRow.innerHTML += `<a class="body__products--box" href="">
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
                                </a>`;
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
      bodyFeaturedSmallSectionContainer = document.querySelector(
        ".body__featured--small--container"
      ),
      bodyFeaturedBigSectionContainer = document.querySelector(
        ".body__featured--big--container"
      );
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
                                    <h2>${discountProductsArr[0].product_name
      }</h2>
                                    <div class="body__featured--price--container">
                                        <div class="body__featured--discount body__featured--big--section--font">$${discountProductsArr[0].product_price
      }
                                        </div>
                                        <div class="body__featured--barrier body__featured--big--section--font">-</div>
                                        <div class="body__featured--price body__featured--big--section--font">$${Number(
        (Number(
          discountProductsArr[0].product_price.replaceAll(
            ",",
            ""
          )
        ) /
          100) *
        Number(
          discountProductsArr[0]
            .discount_content_number
        )
      ).toFixed()}.00
                                        </div>
                                    </div>
                                </div>
                                <div class="body__featured--picture">
                                    <img src="${discountProductsArr[0].product_picture
      }" alt="">
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
                        $${Number(
        (Number(
          discountProductsArr[1].product_price.replaceAll(
            ",",
            ""
          )
        ) /
          100) *
        Number(
          discountProductsArr[1].discount_content_number
        )
      ).toFixed()}.00</div>
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
  });
