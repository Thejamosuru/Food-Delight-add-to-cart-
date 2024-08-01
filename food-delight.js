//------ cart items code-----
const product = [
    { image: "./images/97.jpg", title: "Plain", price: 40 },
    { image: "./images/98.jpg", title: "Paper Roast", price: 65 },
    { image: "./images/99.jpg", title: "Onion Roast", price: 80 },
    { image: "./images/100.jpg", title: "Egg Parota", price: 55 },
    { image: "./images/101.jpg", title: "Plain Omelette", price: 25 },
    { image: "./images/102.jpg", title: "Chicken Fry", price: 150 },
    { image: "./images/103.jpg", title: "Egg Veechu", price: 65 },
    { image: "./images/104.jpg", title: "Egg Roast", price: 65 }
];
// let duplicate = [...new Set(product.map((items)=>
// {return items}))]
let i = 0;
document.getElementById("cartitems").innerHTML = product.map((item) => {
    var { image, title, price } = item;
    return (
        `<figure>
            <img src="${image}" alt="">
            <figcaption>${title}</figcaption>
            <div class="figslide">
            <h3>Rs ${price}.00</h3>` +
        "<i class='fa-solid fa-cart-shopping bodycart' onclick='addtocart(" + (i++) + ")'></i>" +
        `</div>
        </figure>`
    )
}).join("")

//-----cart code-----

let cart = [];

function addtocart(a) {
    console.log(a);
    cart.push({ ...product[a] });
    added();
}
function delElement(a) {
    console.log(a);
    cart.splice(a, 1);
    added();
}


function added(a) {
    let j = 0;
    let total = 0;

    if (cart.length == 0) {
        document.getElementById("slidedata").innerHTML = "Your cart is empty"
        document.getElementById("count").innerHTML = `0`;
        document.getElementById("total").innerHTML = `Rs 0.00`;
    }
    else {
        document.getElementById("count").innerHTML = cart.length;
        document.getElementById("slidedata").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total += price;
            document.getElementById("total").innerHTML = `Rs ${total}.00`;
            return (
                `<div class="figure">
            <img class="cartfigure" src="${image}">
            <div class="figcaption">${title}</div>
            <h3>Rs ${price}.00</h3>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            )
        }).join("")

    }
}

//------Cart visible-----
function visible() {
    document.getElementById("slide").style.display = "inline-block"
}

//-----Cart hidden-----
function disapperance() {
    alert("are you sure to close the cart");
    document.getElementById("slide").style.display = "none"
}