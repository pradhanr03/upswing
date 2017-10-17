var Buyer = require('../models/buyer.js').Buyer;
var sendkey = process.env.SENDGRID_API;
var sendgrid = require('sendgrid')(sendkey);

module.exports.controller = function(app) {

            // this rest api creates buyer
      app.post('/homes/buyer', function(req, res) {
        var buyerInfo = req.body;
        console.log(buyerInfo);
        Buyer
            .createBuyer(buyerInfo, function(buyer) {
                console.log("creating a buyer >>");
                res.json(buyer);
            });
      });

                  // contact form
      app.post('/send-message', function(req, res) {
        var mssg = req.body;
        console.log(mssg);
        var sender = mssg.email;
        var messageCont = mssg.mssg;
        var sendemailCont = new sendgrid.Email({
        to: "info@upswinghomes.com",
        from: sender,
        subject: 'You Have a New Message from Website',
        text: messageCont+" "+" from "+mssg.name 
        });
          // this method uses the sendgrid api to make the email send request
          sendgrid.send(sendemailCont, function (err, json) {
            if (err) {
              console.log(err);
            } else {
              console.log('sent email');
              res.json(json);

            }
          });
      });

};
