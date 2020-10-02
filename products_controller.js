const axios = require('axios');

module.exports = {
    create: (req, res, next) => {
        const {name} = req.body;
        const {description} = req.body;
        const {price} = req.body;
        const {image_url} = req.body;
        const db = req.app.get('db');
        db.create_product([name, description, price, image_url])
        .then(() => res.status(200)).catch((err) => {
            res.status(500).send({errorMessage: "ERROR"}); console.log(err)
        });
    },

    getOne: (req, res, next) => {
        const {id} = req.params;
        const db = req.app.get('db');
        db.read_product(id)
        .then((product) => {
            res.status(200).send(product);
        }).catch((err) => {
            res.status(500).send({errorMessage: "ERROR"}); console.log(err)
        });
    },

    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.read_products()
        .then((products) => {
            res.status(200).send(products);
        }).catch((err) => {
            res.status(500).send({errorMessage: "ERROR"}); console.log(err)
        });
    },

    update: (req, res, next) => {
        const {id} = req.params;
        const {desc} = req.query;
        const db = req.app.get('db');
        db.update_product([id, desc])
        .then(() => {
            res.status(200)
        }).catch((err) => {
            res.status(500).send({errorMessage: "ERROR"}); console.log(err)
        });
    },

    delete: (req, res, next) => {
        const {id} = req.params;
        const db = req.app.get('db');
        db.delete_product(id)
        .then(() =>  res.status(200)).catch((err) => {
            res.status(500).send({errorMessage: "ERROR"}); console.log(err)
        });
    }
}