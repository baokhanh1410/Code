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
