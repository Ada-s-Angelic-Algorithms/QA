const { Product } = require('../models');

module.exports = {
  getProduct: (req, res) => {
    const productID = req.params.productID
    Product.findByPk(productID)
    .then(prod => {
      if (prod) {
        res.status(200).json(prod);
      } else {
        res.status(404).send('Product not Found')
      }
    })
    .catch (err => {
      console.error(err);
      res.status(500).send('Error retrieving Product')
    })
  }
}