var express = require( 'express' );
var router = express.Router();
var pg = require( 'pg' );
var bodyParser = require( 'body-parser' );

//middleware
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );

//connect to database
var connString = require( '../modules/connection' );

// get all items in the inventory
router.get( '/:code?', function( req, res ){
  var codeIn = req.params.code;
  var response = [];
  // get all items in the table and return them to client
  pg.connect(connString, function(err, client, done) {
    if (err) {
      //if there was an error, log it
      console.log(err);
    } else {
      var query = client.query('SELECT * FROM codes WHERE code = $1', [codeIn]);
      query.on('row', function(row) {
        response.push(row);
      }); // end query.on
      query.on( 'end', function() {
        //disconnect from database
        done();
        res.send({response: response});
      }); // end query end
    } // end else
  }); // end pg connect
}); // end addItem route

module.exports = router;
