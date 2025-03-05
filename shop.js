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


// Product Size Picking Section
let sizeOutput = document.querySelector(".product-size .size-output");
let smallSize = document.querySelector(".product-size .small-size");
let mediumSize = document.querySelector(".product-size .medium-size");
let largeSize = document.querySelector(".product-size .large-size");
let extraLargeSize = document.querySelector(".product-size .extra-large-size");

smallSize.addEventListener("click", () => {
    sizeOutput.textContent = "Small";
    smallSize.classList.add("focused-size");
    mediumSize.classList.remove("focused-size");
    largeSize.classList.remove("focused-size");
    extraLargeSize.classList.remove("focused-size");
})

mediumSize.addEventListener("click", () => {
    sizeOutput.textContent = "Medium";
    smallSize.classList.remove("focused-size");
    mediumSize.classList.add("focused-size");
    largeSize.classList.remove("focused-size");
    extraLargeSize.classList.remove("focused-size");
})

largeSize.addEventListener("click", () => {
    sizeOutput.textContent = "Large";
    smallSize.classList.remove("focused-size");
    mediumSize.classList.remove("focused-size");
    largeSize.classList.add("focused-size");
    extraLargeSize.classList.remove("focused-size");
})

extraLargeSize.addEventListener("click", () => {
    sizeOutput.textContent = "Extra Large";
    smallSize.classList.remove("focused-size");
    mediumSize.classList.remove("focused-size");
    largeSize.classList.remove("focused-size");
    extraLargeSize.classList.add("focused-size");
})


// Product Quantity and Summery Section
let increament = document.querySelector(".product-quantity .increament");
let decreament = document.querySelector(".product-quantity .decreament");
let quantityValue1 = document.querySelector(".quantity-value1");
let quantityValue2 = document.querySelector(".quantity-value2");
let shippingCostValue  = document.querySelector(".shipping-cost span.value");
let productCostValue  = document.querySelector(".product-cost span.value");
let totalCostValue  = document.querySelector(".total-cost span.value");
let quantity1 = Number(quantityValue1.textContent);
let shippingCost = Number(shippingCostValue.textContent);
let productCost = Number(productCostValue.textContent);
let totalCost = Number(totalCostValue.textContent);
    increament.addEventListener("click", () => {
    quantity1++;
    quantityValue1.textContent = quantity1;
    quantityValue2.textContent = quantity1;
    totalCost = productCost * quantity1 + shippingCost;
    totalCostValue.textContent = totalCost;
})

decreament.addEventListener("click", () => {
    if (quantity1 === 1) {
        quantity1 = 1
    } else {
        quantity1--;
        quantityValue1.textContent = quantity1;
        quantityValue2.textContent = quantity1;
        totalCost = productCost * quantity1 + shippingCost;
        totalCostValue.textContent = totalCost;
    }
})


// Display Ordering While Submitting
let ordering = document.querySelector(".ordering");
function whileSubmitting(){
    ordering.style.display = "block";
}