const menu = {
    1: "Alcatra"
}

let orderItems = [];

function addToOrder() {
    const selectedItem = document.getElementById('menu').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (isNaN(quantity) || quantity <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    const itemTotal = quantity * selectedItem;
    const itemName = menu[selectedItem];

    orderItems.push({ name: itemName, quantity, total: itemTotal });

    updateOrder();
}

function updateOrder() {
    const orderList = document.getElementById('orderList');
    const totalElement = document.getElementById('total');

    orderList.innerHTML = "";
    let total = 0;

    orderItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.quantity}x ${item.name} - $${item.total.toFixed(2)}`;
        orderList.appendChild(listItem);

        total += item.total;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
