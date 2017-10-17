var db = require('../db.js');

module.exports.Buyer = {

  createBuyer : function(obj, callback){
    db.create('buyers', obj, function (data) {
      callback( data );
    });
  },
   findBuyer : function(id, callback){
    db.find('buyers', id, function (data) {
      callback( data[0] );
    });
  },
   deleteBuyer : function(id, callback){
      db.delete('buyers', id, function (data) {
        console.log(data);
       //  console.log(data[0]);
        callback( data);
      });
    }
}
