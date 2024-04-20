const fs = require('fs');
const path = require('path');

class Sale {
    constructor(productName, quantity, totalPrice, userName) {
        this.productName = productName;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.userName = userName;
        this.date = new Date();
    }

    save() {
        const sale = {
            productName: this.productName,
            quantity: this.quantity,
            totalPrice: this.totalPrice,
            userName: this.userName,
            date: this.date
        }
        fs.appendFile(path.join(__dirname, '../data/sales.txt'), JSON.stringify(this) + '\n', (error) => {
            if (error) {
                console.log(error);
            }
        })
    }

     static findAll() {
        const sales = fs.readFileSync(path.join(__dirname, '../data/sales.txt'), 'utf-8').split('\n');
        if(sales.length === 0) return [];
        if(sales[sales.length - 1] === '') sales.pop();
        return sales.map(sale => JSON.parse(sale));
    }
}


module.exports = Sale;