
const basicElements = document.getElementsByClassName("basic");
const standardElements = document.getElementsByClassName('standard');
const premiumElements = document.getElementsByClassName("premium");

const basicAdd = document.querySelectorAll(".basic");
const standardAdd = document.querySelectorAll('.standard');
const premiumAdd = document.querySelectorAll(".premium");

const basic = document.getElementById("basic");
const standard = document.getElementById("standard");
const premium = document.getElementById("premium");

var subscription = 0;

function selectStandard() {
    for (let i = 0; i < basicElements.length; i++) {
        if (basicElements[i].classList.contains("selected")) {
            basicElements[i].classList.remove("selected");
        }
    }

    for (let i = 0; i < premiumElements.length; i++) {
        if (premiumElements[i].classList.contains("selected")) {
            premiumElements[i].classList.remove("selected");
        }
    }

    standardAdd.forEach(element => {
        element.classList.add('selected');
    });
    subscription = 2;
}

standard.addEventListener("click", selectStandard);

//

function selectBasic() {
    for (let i = 0; i < standardElements.length; i++) {
        if (standardElements[i].classList.contains("selected")) {
            standardElements[i].classList.remove("selected");
        }
    }

    for (let i = 0; i < premiumElements.length; i++) {
        if (premiumElements[i].classList.contains("selected")) {
            premiumElements[i].classList.remove("selected");
        }
    }

    basicAdd.forEach(element => {
        element.classList.add('selected');
    });
    subscription = 1;
}

basic.addEventListener("click", selectBasic);

//

function selectPremium() {
    for (let i = 0; i < basicElements.length; i++) {
        if (basicElements[i].classList.contains("selected")) {
            basicElements[i].classList.remove("selected");
        }
    }

    for (let i = 0; i < standardElements.length; i++) {
        if (standardElements[i].classList.contains("selected")) {
            standardElements[i].classList.remove("selected");
        }
    }

    premiumAdd.forEach(element => {
        element.classList.add('selected');
    });
    subscription = 3;
}

premium.addEventListener("click", selectPremium);

////////////////////////////////

const reedem = document.getElementById("reedem");
const code = document.getElementById("giftcode");
const email = document.getElementById("email");

function buy() {

}