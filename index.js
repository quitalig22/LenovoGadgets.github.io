function addOrder() {
    var orders = "";
    var totalAmount = 0;

    if (parseFloat(qty1.value) > 0) {
        var order1 = qty1.value + " pc/s x " + price1.textContent + " - " + product1.textContent + " - Php " + (parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2) + "\n";
        orders += order1;
        totalAmount += parseFloat(qty1.value) * parseFloat(price1.textContent);
    }

    if (parseFloat(qty2.value) > 0) {
        var order2 = qty2.value + " pc/s x " + price2.textContent + " - " + product2.textContent + " - Php " + (parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2) + "\n";
        orders += order2;
        totalAmount += parseFloat(qty2.value) * parseFloat(price2.textContent);
    }

    if (parseFloat(qty3.value) > 0) {
        var order3 = qty3.value + " pc/s x " + price3.textContent + " - " + product3.textContent + " - Php " + (parseFloat(qty3.value) * parseFloat(price3.textContent)).toFixed(2) + "\n";
        orders += order3;
        totalAmount += parseFloat(qty3.value) * parseFloat(price3.textContent);
    }

    if (parseFloat(qty4.value) > 0) {
        var order4 = qty4.value + " pc/s x " + price4.textContent + " - " + product4.textContent + " - Php " + (parseFloat(qty4.value) * parseFloat(price4.textContent)).toFixed(2) + "\n";
        orders += order4;
        totalAmount += parseFloat(qty4.value) * parseFloat(price4.textContent);
    }

    if (parseFloat(qty5.value) > 0) {
        var order5 = qty5.value + " pc/s x " + price5.textContent + " - " + product5.textContent + " - Php " + (parseFloat(qty5.value) * parseFloat(price5.textContent)).toFixed(2) + "\n";
        orders += order5;
        totalAmount += parseFloat(qty5.value) * parseFloat(price5.textContent);
    }

    if (parseFloat(qty6.value) > 0) {
        var order6 = qty6.value + " pc/s x " + price6.textContent + " - " + product6.textContent + " - Php " + (parseFloat(qty6.value) * parseFloat(price6.textContent)).toFixed(2) + "\n";
        orders += order6;
        totalAmount += parseFloat(qty6.value) * parseFloat(price6.textContent);
    }

    carts.textContent = orders;
    total.value = "Php " + totalAmount.toFixed(2);
    calculateChange();
}

function calculateChange() {
    var totalAmount = parseFloat(total.value.replace("Php ", ""));
    var cashAmount = parseFloat(cash.value);
    if (cashAmount >= totalAmount) {
        change.value = "Php " + (cashAmount - totalAmount).toFixed(2);
    } else {
        change.value = "Insufficient Cash";
    }
}

function finishOrder() {
    var totalAmount = parseFloat(total.value.replace("Php ", ""));
    var cashAmount = parseFloat(cash.value);

    if (cashAmount >= totalAmount && totalAmount > 0) {
        alert("Order Successful!\n\n" + "Products Purchased:\n" + carts.textContent + "\nTHANK YOU !");
        carts.textContent = "";
        total.value = "";
        cash.value = "";
        change.value = "";
        qty1.value = "";
        qty2.value = "";
        qty3.value = "";
        qty4.value = "";
        qty5.value = "";
        qty6.value = "";
    } else if (totalAmount == 0) {
        alert("Please add items to your order.");
    } else {
        alert("Insufficient Cash.");
    }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);
cash.addEventListener("keyup", calculateChange);
