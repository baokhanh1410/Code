// TAGGED TEMPLATE LITERAL

// let highlight = ([init, ...value], ...variables) => {
//     let output = variables.reduce(([init, ...value], variable) => {
//         output = [init, variable]
//     }, [init])
// }

// let myName = 'Khanh';
// let myAge = 16;

// let output = highlight`${myName} is ${myAge} years old.`;
// let outputDisplayBLock = document.querySelector('.displayBlock');
// outputDisplayBLock.innerHTML = output;

// spread dùng khi nào
// khi truyền đối số cho function

// phân biệt tham số và đối số

// let myInfo = {
//     name: 'Khanh',
//     age: 16,
//     getInfo: {
//         name: 1,
//         email: 'abc@gmail.com'
//     }
// }

// let {name, getInfo: {name: getInfoName, email}} = myInfo;
// console.log(name);
// console.log(getInfoName);
// console.log(email);

// default parameter value
// let writeLog = (lg = 'Please input') => {
//     console.log(lg);
// }

// writeLog();

// enheced object literal
// let myKey = document.querySelector('.key');
// let myValue = document.querySelector('.value');

// let myInfo = {
//     myKey: myValue,
// }
// console.log(myInfo)


// let myName = 'Chung';
// let myEmail = 'email';

// let myObject = {
//     myName,
//     [myEmail]: 'khanh@gmail.com'
// }
// console.log(myObject);

// rest đùng khi nòa?
// + truyền tham số cho funtciont
// dùng chung với détructuring

// rest -> nén thành 1 mảng
// spread -> bung ra

// let myArray = {
//     myName: 'Khanh',
//     myAge: 16,
//     mySchool: 'Kim Lien'
// }
// let writeLog = ({mySchool, ...rest}) => {
//     console.log(mySchool);
//     console.log(rest);
// }
// writeLog(myArray);

// TEMPLATE STRING LITERAL
// DESTRUCTURING = PHÂN RÃ
// REST, SPREAD
// ENHENCED OBJECT LITERAL
// TAGGED TEMPLATE LITERAL

// MODULE

// QUERY STRINGS
// LOCAL STORAGE / SESSTION STORAGE / COOKIE

// RESPONSIVE -> FLEX BOX // CSS GRID

// hoising -> đưa khai báo biến lên trên cùng

console.log(a);
var a = 1;
console.log(a);

// var a;
// console.log(a)
// a = 1

// arrow function -> giống và khác nhau giữa các kiểu khai báo hàm
// this context

// xử lý với mảng và object
// dom
// callback -> promise -> fetch -> async await
{
    let shoppingCartSection = document.querySelectorAll('.shopping-cart__section')
        // , shoppingCartSectionLength = shoppingCartSection.length
        , shoppingCartContainer = document.querySelector('.shopping-cart__section--container')
        , products = document.querySelectorAll('.body__products--box')
        , productsLength = products.length
        , productsName = document.querySelectorAll('.body__products--name')
        , productsPrice = document.querySelectorAll('.body__products--price')
        , productsPicture = document.querySelectorAll('.body__products--picture-content')
        , productsAddBtn = document.querySelectorAll('.body__products--hover-section:nth-child(1)')

    for (let i = 0; i < productsLength; i++) {
        let productsCartPicture = productsPicture[i].src
            , productsCartName = productsName[i].innerText
            , productsCartPrice = productsPrice[i].innerText
            , productsInfo = {
                productsName: `${productsCartName}`,
                productsPrice: `${productsCartPrice}`,
                productsPicture: `${productsCartPicture}`
            };
        productsAddBtn[i].addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.setItem(`${productsCartName}`, JSON.stringify(productsInfo));
            let products = JSON.parse(localStorage.getItem(`${productsCartName}`));
            console.log(products);
            shoppingCartContainer.innerHTML += `
                <li class="shopping-cart__section">
                                <div class="shopping-cart--picture">
                                    <img src="${products.productsPicture}" alt="">
                                </div>
                                <div class="shopping-cart--information">
                                    <div class="shopping-cart--name">${products.productsName}</div>
                                    <div class="shopping-cart__price">
                                        <div class="shopping-cart--quantity">1 x</div>
                                        <div class="shopping-cart--price">${products.productsPrice}</div>
                                    </div>
                                </div>
                                <i class="fa-solid fa-xmark"></i>
                            </li>`;
            let productsRemoveBtn = document.querySelectorAll('.shopping-cart__section i')
            for (let i = 0; i < productsRemoveBtn.length; i++) {
                let btn = productsRemoveBtn[i];
                btn.addEventListener('click', (event) => {
                    let btnClicked = event.target;
                    btnClicked.parentElement.remove()
                })
            }
        })
    }
    let localStorageLength = localStorage.length
}