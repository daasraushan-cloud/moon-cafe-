function showMessage() {
    alert("Thank you for choosing Moon Cafe! ☕");
}

let quantity = 1;

function showQuantity() {
    document.getElementById("coldCoffeeOrder").style.display = "block";

    document.getElementById("coldCoffeeOrderButton").style.display = "none";
}

function changeQuantity(amount) {
    quantity = quantity + amount;

    if (quantity < 1) {
        quantity = 1;
    }

    document.getElementById("quantity").textContent = quantity;

    let total = quantity * 99;

    document.getElementById("totalPrice").textContent =
        "Total: ₹" + total;
}

function orderOnWhatsApp(itemName, price) {

    let phoneNumber = "918169847127";

    let total = quantity * price;

    let message =
        "Hello Moon Cafe! ☕\n\n" +
        "I want to order:\n" +
        "🍽️ " + itemName + "\n" +
        "🔢 Quantity: " + quantity + "\n" +
        "💰 Total: ₹" + total + "\n\n" +
        "Please confirm my order.";

    let url =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}
let blueLagoonQuantity = 1;

function showBlueLagoonQuantity() {
    document.getElementById("blueLagoonOrder").style.display = "block";

    document.getElementById("blueLagoonOrderButton").style.display = "none";
}

function changeBlueLagoonQuantity(amount) {
    blueLagoonQuantity = blueLagoonQuantity + amount;

    if (blueLagoonQuantity < 1) {
        blueLagoonQuantity = 1;
    }

    document.getElementById("blueLagoonQuantity").textContent =
        blueLagoonQuantity;

    let total = blueLagoonQuantity * 129;

    document.getElementById("blueLagoonTotal").textContent =
        "Total: ₹" + total;
}
let friesQuantity = 1;

function showFriesQuantity() {
    document.getElementById("friesOrder").style.display = "block";

    document.getElementById("friesOrderButton").style.display = "none";
}

function changeFriesQuantity(amount) {
    friesQuantity = friesQuantity + amount;

    if (friesQuantity < 1) {
        friesQuantity = 1;
    }

    document.getElementById("friesQuantity").textContent =
        friesQuantity;

    let total = friesQuantity * 99;

    document.getElementById("friesTotal").textContent =
        "Total: ₹" + total;
}
let cappuccinoQuantity = 1;

function showCappuccinoQuantity() {
    document.getElementById("cappuccinoOrder").style.display = "block";

    document.getElementById("cappuccinoOrderButton").style.display = "none";
}

function changeCappuccinoQuantity(amount) {
    cappuccinoQuantity = cappuccinoQuantity + amount;

    if (cappuccinoQuantity < 1) {
        cappuccinoQuantity = 1;
    }

    document.getElementById("cappuccinoQuantity").textContent =
        cappuccinoQuantity;

    let total = cappuccinoQuantity * 119;

    document.getElementById("cappuccinoTotal").textContent =
        "Total: ₹" + total;
}
let virginMojitoQuantity = 1;

function showVirginMojitoQuantity() {
    document.getElementById("virginMojitoOrder").style.display = "block";

    document.getElementById("virginMojitoOrderButton").style.display = "none";
}

function changeVirginMojitoQuantity(amount) {
    virginMojitoQuantity = virginMojitoQuantity + amount;

    if (virginMojitoQuantity < 1) {
        virginMojitoQuantity = 1;
    }

    document.getElementById("virginMojitoQuantity").textContent =
        virginMojitoQuantity;

    let total = virginMojitoQuantity * 119;

    document.getElementById("virginMojitoTotal").textContent =
        "Total: ₹" + total;
}
let strawberryMojitoQuantity = 1;

function showStrawberryMojitoQuantity() {
    document.getElementById("strawberryMojitoOrder").style.display = "block";

    document.getElementById("strawberryMojitoOrderButton").style.display = "none";
}

function changeStrawberryMojitoQuantity(amount) {
    strawberryMojitoQuantity = strawberryMojitoQuantity + amount;

    if (strawberryMojitoQuantity < 1) {
        strawberryMojitoQuantity = 1;
    }

    document.getElementById("strawberryMojitoQuantity").textContent =
        strawberryMojitoQuantity;

    let total = strawberryMojitoQuantity * 129;

    document.getElementById("strawberryMojitoTotal").textContent =
        "Total: ₹" + total;
}
let sandwichQuantity = 1;

function showSandwichQuantity() {
    document.getElementById("sandwichOrder").style.display = "block";

    document.getElementById("sandwichOrderButton").style.display = "none";
}

function changeSandwichQuantity(amount) {
    sandwichQuantity = sandwichQuantity + amount;

    if (sandwichQuantity < 1) {
        sandwichQuantity = 1;
    }

    document.getElementById("sandwichQuantity").textContent =
        sandwichQuantity;

    let total = sandwichQuantity * 129;

    document.getElementById("sandwichTotal").textContent =
        "Total: ₹" + total;
}
let paneerWrapQuantity = 1;

function showPaneerWrapQuantity() {
    document.getElementById("paneerWrapOrder").style.display = "block";

    document.getElementById("paneerWrapOrderButton").style.display = "none";
}

function changePaneerWrapQuantity(amount) {
    paneerWrapQuantity = paneerWrapQuantity + amount;

    if (paneerWrapQuantity < 1) {
        paneerWrapQuantity = 1;
    }

    document.getElementById("paneerWrapQuantity").textContent =
        paneerWrapQuantity;

    let total = paneerWrapQuantity * 149;

    document.getElementById("paneerWrapTotal").textContent =
        "Total: ₹" + total;
}
let brownieQuantity = 1;

function showBrownieQuantity() {
    document.getElementById("brownieOrder").style.display = "block";

    document.getElementById("brownieOrderButton").style.display = "none";
}

function changeBrownieQuantity(amount) {
    brownieQuantity = brownieQuantity + amount;

    if (brownieQuantity < 1) {
        brownieQuantity = 1;
    }

    document.getElementById("brownieQuantity").textContent =
        brownieQuantity;

    let total = brownieQuantity * 119;

    document.getElementById("brownieTotal").textContent =
        "Total: ₹" + total;
}
let cakeQuantity = 1;

function showCakeQuantity() {
    document.getElementById("cakeOrder").style.display = "block";

    document.getElementById("cakeOrderButton").style.display = "none";
}

function changeCakeQuantity(amount) {
    cakeQuantity = cakeQuantity + amount;

    if (cakeQuantity < 1) {
        cakeQuantity = 1;
    }

    document.getElementById("cakeQuantity").textContent =
        cakeQuantity;

    let total = cakeQuantity * 149;

    document.getElementById("cakeTotal").textContent =
        "Total: ₹" + total;
}
function bookTable() {

    let name = document.getElementById("bookingName").value;
    let phone = document.getElementById("bookingPhone").value;
    let date = document.getElementById("bookingDate").value;
    let time = document.getElementById("bookingTime").value;
    let guests = document.getElementById("bookingGuests").value;

    if (name === "" || phone === "" || date === "" || time === "" || guests === "") {
        alert("Please fill all booking details.");
        return;
    }

    let message =
        "Hello Moon Cafe! ☕\n\n" +
        "I want to book a table.\n\n" +
        "👤 Name: " + name + "\n" +
        "📞 Phone: " + phone + "\n" +
        "📅 Date: " + date + "\n" +
        "⏰ Time: " + time + "\n" +
        "👥 Guests: " + guests + "\n\n" +
        "Please confirm my reservation.";

    let phoneNumber = "918169847127";

    let url =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}
let cart = JSON.parse(localStorage.getItem("moonCafeCart")) || [];

function addToCart(itemName, price) {

    let existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: itemName,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("moonCafeCart", JSON.stringify(cart));

    updateCart();

    alert(itemName + " added to cart! 🛒");
}

function updateCart() {

    let cartItems = document.getElementById("cartItems");
    let cartTotal = document.getElementById("cartTotal");
    if (!cartItems || !cartTotal) {
    return;
}

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        let itemTotal = item.price * item.quantity;
        total = total + itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>₹${item.price} × ${item.quantity}</p>
                    <strong>₹${itemTotal}</strong>
                </div>

                <div class="cart-controls">
                    <button onclick="decreaseCartItem(${index})">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseCartItem(${index})">+</button>

                    <button class="remove-btn"
                        onclick="removeCartItem(${index})">
                        Remove
                    </button>
                </div>

            </div>
        `;
    });

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cartTotal.textContent = "Total: ₹" + total;
}
function increaseCartItem(index) {
    cart[index].quantity++;
    updateCart();
}

function decreaseCartItem(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    }

    updateCart();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCart();
}
if (document.getElementById("cartItems")) {
    updateCart();
}
function checkoutCart() {

    if (cart.length === 0) {
        alert("Your cart is empty! 🛒");
        return;
    }

    let message = "Hello Moon Cafe! ☕\n\n";
    message += "I want to place an order:\n\n";

    let total = 0;

    cart.forEach(function(item) {

        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        message += "🍽️ " + item.name + "\n";
        message += "Quantity: " + item.quantity + "\n";
        message += "Price: ₹" + itemTotal + "\n\n";
    });

    message += "💰 Total: ₹" + total + "\n\n";
    message += "Please confirm my order.";

    let phoneNumber = "918169847127";

    let url = "https://wa.me/" + phoneNumber +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
function toggleMenu() {

    let nav = document.getElementById("mobileNav");

    nav.classList.toggle("active");

}