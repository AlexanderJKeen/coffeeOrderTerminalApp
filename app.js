const yargs = require ('yargs')
const {addOrder,listOrder,removeOrder} = require ('./orders')
const fs = require('fs')

if(process.argv[2] == "add"){
    console.log("order added")
    addOrder(yargs.argv.order)
}else if(process.argv[2] == "list"){
    console.log("listing all orders")
    listOrder()

}else if(process.argv[2] == "remove"){
    console.log("removing order")
    removeOrder(yargs.argv.order);
}