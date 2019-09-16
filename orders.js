const fs = require("fs")

const loadOrders = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const notesJSON = dataBuffer.toString();
        return JSON.parse(notesJSON)
    } catch (e){
        return [];
    }

}
const addOrder = (myOrder) => {
    const allOrders = loadOrders();
    allOrders.push({Reminder: myOrder})
    saveOrder(allOrders);
}

const saveOrder = (Order) => {
    const OrdersJSON = JSON.stringify(Order)
    fs.writeFileSync('notes.json', OrdersJSON)
}
const listOrder = () => {
    const allOrders = loadOrders();
    allOrders.map((order) => {
        console.log(order.Reminder)
    })
}

const removeOrder = (deletedOrder) => {
    const allOrders = loadOrders();
    const ordersToKeep = allOrders.filter((order) => {
        return order.Reminder !== deletedOrder
    })
    saveNotes(ordersToKeep);
}
//  const readNote = () => {
//      loadNotes();
//  }

module.exports = {
    addOrder,
    listOrder,
    removeOrder
}