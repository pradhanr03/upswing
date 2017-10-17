var Seller = require('../models/seller.js').Seller;

module.exports.controller = function(app) {

      // this rest api creates seller
      app.post('/homes/seller', function(req, res) {
        var sellerInfo = req.body;
        console.log(sellerInfo);
        Seller
            .createSeller(sellerInfo, function(seller) {
                console.log("creating a seller >>");
                res.json(seller);
            });
      });

            // this rest api creates seller
      app.post('/homes/top-seller', function(req, res) {
        var sellerInfo = req.body;
        console.log(sellerInfo);
        Seller
            .createSeller(sellerInfo, function(seller) {
                console.log("creating a seller >>");
                res.json(seller);
            });
      });

};
