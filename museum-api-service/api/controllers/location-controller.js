'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.
  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');
var faker = require('faker');
const jsf = require('json-schema-faker');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.
 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.
 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  locations: getLocations
};

/*
  Functions in a127 controllers used for operations should take two parameters:
  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getLocations(req, res) {
  // this sends back a JSON response which is a single string
  res.json([{

    
    "country1": "" + faker.address.country(),
    "city1":"" + faker.address.city(),
    "street1":"" + faker.address.streetName(),
    "address1":"" + faker.address.streetAddress(),
    "image1": "" + faker.image.city(),

    "country2": "" + faker.address.country(),
    "city2":"" + faker.address.city(),
    "street2":"" + faker.address.streetName(),
    "address2":"" + faker.address.streetAddress(),
    "image2": "" + faker.image.city(),

    "country3": "" + faker.address.country(),
    "city3":"" + faker.address.city(),
    "street3":"" + faker.address.streetName(),
    "address3":"" + faker.address.streetAddress(),
    "image3": "" + faker.image.city(),
  }]);
}