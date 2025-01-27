// Identifiers to switch between tops
const viewMoreTShirts = document.querySelector(".view-more-t-shirts");
const viewMoreShirts = document.querySelector(".view-more-shirts");
const tShirtHeading = document.querySelector(".t-shirt-heading");
const shirtHeading = document.querySelector(".shirt-heading");
const tShirts = document.querySelector(".t-shirts");
const shirts = document.querySelector(".shirts");

// Identifiers to switch between bottoms
const viewMoreShorts = document.querySelector(".view-more-shorts");
const viewMoreTrousers = document.querySelector(".view-more-trousers");
const shortHeading = document.querySelector(".short-heading");
const trouserHeading = document.querySelector(".trouser-heading");
const shorts = document.querySelector(".shorts");
const trousers = document.querySelector(".trousers");


// Switch to T-Shirt
tShirtHeading.addEventListener("click", () => {
    tShirts.style.display = "grid";
    viewMoreTShirts.style.display = "block";
    shirts.style.display = "none";
    viewMoreShirts.style.display = "none";
    shirtHeading.style.borderBottom = "none";
    tShirtHeading.style.borderBottom = "2px solid var(--lightbrown)";
})


// Switch To Shirt
shirtHeading.addEventListener("click", () => {
    shirts.style.display = "grid";
    viewMoreShirts.style.display = "block";
    tShirts.style.display = "none";
    viewMoreTShirts.style.display = "none";
    tShirtHeading.style.borderBottom = "none";
    shirtHeading.style.borderBottom = "2px solid var(--lightbrown)";
})


// Switch to Short
shortHeading.addEventListener("click", () => {
    shorts.style.display = "grid";
    viewMoreShorts.style.display = "block";
    trousers.style.display = "none";
    viewMoreTrousers.style.display = "none";
    trouserHeading.style.borderBottom = "none";
    shortHeading.style.borderBottom = "2px solid var(--lightbrown)";
})


// Switch to Trouser
trouserHeading.addEventListener("click", () => {
    trousers.style.display = "grid";
    viewMoreTrousers.style.display = "block";
    shorts.style.display = "none";
    viewMoreShorts.style.display = "none";
    shortHeading.style.borderBottom = "none";
    trouserHeading.style.borderBottom = "2px solid var(--lightbrown)";
})


// Footer About-Us Hide And Show Section
const auHideSection = document.querySelector(".about-us > .hide");
const auToHideOrShow = document.querySelectorAll(".about-us > .show > p");
const auIcon = document.querySelector(".about-us > .show > p:last-child i");
auToHideOrShow.forEach((textOrIcon) => {
    textOrIcon.addEventListener("click", () => {
        if (auHideSection.style.height === "auto") {
            auHideSection.style.height = "0px";
            auIcon.classList.toggle("fa-arrow-up");
            auIcon.classList.toggle("fa-arrow-down");
        }
        else{
            auHideSection.style.height = "auto";
            auIcon.classList.toggle("fa-arrow-down");
            auIcon.classList.toggle("fa-arrow-up");
        }
    })
})


// Footer Categories Hide And Show Section
const catHideSection = document.querySelector(".categories > .hide");
const catToHideOrShow = document.querySelectorAll(".categories > .show > p");
const catIcon = document.querySelector(".categories > .show > p:last-child i");
catToHideOrShow.forEach((textOrIcon) => {
    textOrIcon.addEventListener("click", () => {
        if (catHideSection.style.height === "auto") {
            catHideSection.style.height = "0px";
            catIcon.classList.toggle("fa-arrow-up");
            catIcon.classList.toggle("fa-arrow-down");
        }
        else{
            catHideSection.style.height = "auto";
            catIcon.classList.toggle("fa-arrow-down");
            catIcon.classList.toggle("fa-arrow-up");
        }
    })
})


// Footer Help Hide And Show Section
const helpHideSection = document.querySelector(".help > .hide");
const helpToHideOrShow = document.querySelectorAll(".help > .show > p");
const helpIcon = document.querySelector(".help > .show > p:last-child i");
helpToHideOrShow.forEach((textOrIcon) => {
    textOrIcon.addEventListener("click", () => {
        if (helpHideSection.style.height === "auto") {
            helpHideSection.style.height = "0px";
            helpIcon.classList.toggle("fa-arrow-up");
            helpIcon.classList.toggle("fa-arrow-down");
        }
        else{
            helpHideSection.style.height = "auto";
            helpIcon.classList.toggle("fa-arrow-down");
            helpIcon.classList.toggle("fa-arrow-up");
        }
    })
})

// Hamburger And Nav Programming
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const firstHam = document.querySelector(".hamburger div:first-child");
const secondHam = document.querySelector(".hamburger div:nth-child(2)");
const thirdHam = document.querySelector(".hamburger div:last-child");
const listItem = document.querySelectorAll("nav ul li");

hamburger.addEventListener("click", () => {
    if (nav.style.left !== "0px") {
        nav.style.left = "0px";
        secondHam.style.width = "22px";
        secondHam.style.height = "3px";
        firstHam.style.width = "10px";
        thirdHam.style.width = "10px";
        firstHam.style.height = "3px";
        thirdHam.style.height = "3px";
        firstHam.style.transform = "translateY(5px) rotate(-30deg)";
        secondHam.style.transform = "rotate(360deg)";
        thirdHam.style.transform = "translateY(-5px) rotate(30deg)";
    } else {
        nav.style.left = "-100%";
        secondHam.style.width = "20px";
        secondHam.style.height = "2px";
        firstHam.style.width = "20px";
        thirdHam.style.width = "20px";
        firstHam.style.height = "2px";
        thirdHam.style.height = "2px";
        firstHam.style.transform = "translateY(0px) rotate(0deg)";
        secondHam.style.transform = "rotate(0deg)";
        thirdHam.style.transform = "translateY(0px) rotate(0deg)";
    } 
})

listItem.forEach((eachListItem) => {
    eachListItem.addEventListener("click", () => {
        secondHam.style.width = "20px";
        secondHam.style.height = "2px";
        firstHam.style.width = "20px";
        thirdHam.style.width = "20px";
        firstHam.style.height = "2px";
        thirdHam.style.height = "2px";
        firstHam.style.transform = "translateY(0px) rotate(0deg)";
        secondHam.style.transform = "rotate(0deg)";
        thirdHam.style.transform = "translateY(0px) rotate(0deg)";
        if (window.innerWidth >= 700) {
            nav.style.left = "0px";
        } else {
            nav.style.left = "-100%";     
        }
    })
})