const fs = require('fs');
const path = require('path');
const dirPath = require('../util/path');

const p = path.join(dirPath, 'data', 'products.json');

const getAllProductsFromFile = cb => {
    fs.readFile(p, (err, data) => {
        if (err) {
            cb([]);
        } else {
            let products = [];
            products = JSON.parse(data);
            cb(products);
        }
    });
};

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getAllProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getAllProductsFromFile(cb);
    }
};