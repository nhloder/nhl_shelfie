module.exports = {
    getInventory(req, res) {
        const db = req.app.get('db')
        db.get_inventory()
            .then(result => {
                res.status(200).send(result)
            }).catch(err => {
                res.status(500).send({ errorMessage: "we done goofed, try again later" })
                console.log(err)
            });
    },
    // getOne(req, res) {
    //     const db = req.app.get('db');
    //     const { id } = req.params;
    //     db.read_product()
    //         .then(result => {
    //             res.status(200).send(result)
    //         }).catch(err => {
    //             res.status(500).send({ errorMessage: "we done goofed, try again later" })
    //             console.log(err)
    //         });
    // },
    addProduct(req, res) {
        const db = req.app.get('db');
        const { name, price, img } = req.body;
        db.add_to_inventory({
            name: name,
            price: price,
            img:img
        })
            .then(result => {
                res.status(200).send(result)
            }).catch(err => {
                res.status(500).send({ errorMessage: "we done goofed, try again later" })
                console.log(err)
            });
    },
    // update(req, res) {
    //     const db = req.app.get('db')
    //     const {params, query}= req.body
    //     db.update_product([query.description, params.id])
    //         .then(result => {
    //             res.status(200).send(result)
    //         }).catch(err => {
    //             res.status(500).send({ errorMessage: "we done goofed, try again later" })
    //             console.log(err)
    //         })
    // },
    delete(req, res) {
        const db = req.app.get('db');
        db.delete_from_inventory(req.params.id)
            .then(result => {
                res.status(200).send(result)
            }).catch(err => {
                res.status(500).send({ errorMessage: "we done goofed, try again later" })
                console.log(err)
            });
    }
}
