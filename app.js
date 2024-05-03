const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "images/af1bw3.png",
            },
            {
                code: "darkblue",
                img: "images/af1gy.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 109,
        colors: [
            {
                code: "black",
                img: "images/af1bw3.png",
            },
            {
                code: "darkblue",
                img: "images/af1gy.png",
            },
        ],
    },
    {
        id: 3,
        title: "Adidas",
        price: 199,
        colors: [
            {
                code: "black",
                img: "images/af1bw3.png",
            },
            {
                code: "darkblue",
                img: "images/af1gy.png",
            },
        ],
    },
    {
        id: 4,
        title: "Slides",
        price: 99,
        colors: [
            {
                code: "black",
                img: "images/af1bw3.png",
            },
            {
                code: "darkblue",
                img: "images/af1gy.png",
            },
        ],
    },
    {
        id: 5,
        title: "Church shoes",
        price: 299,
        colors: [
            {
                code: "black",
                img: "images/af1gy.png",
            },
            {
                code: "darkblue",
                img: "images/af1gy.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) =>{
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the chosen product
        choosenProduct = products[index];

        // change texts of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })

    });
});