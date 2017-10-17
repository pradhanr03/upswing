var db = require('../db.js');

module.exports.Seller = {

  createSeller : function(obj, callback){
    db.create('sellers', obj, function (data) {
      callback( data );
    });
  },
   findSeller : function(id, callback){
    db.find('sellers', id, function (data) {
      callback( data[0] );
    });
  },
   deleteSeller : function(id, callback){
      db.delete('sellers', id, function (data) {
        console.log(data);
       //  console.log(data[0]);
        callback( data);
      });
    }
}
