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
var faker = require("faker");
const jsf = require("json-schema-faker");
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
  tickets: getTickets,
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getTickets(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var museumNames = [
    "Royal Tombs Museum",
    "The National Art Museum",
    "National Gallery",
    "The National Palace Museum",
    "Museum of Modern Art",
    "The Vasa Museum",
    "The British Museum",
    "The Van Gogh Museum",
    "History Museum",
    "Museum of Second World War",
    "Museum of Space",
    "Museum of Keanu Reeves",
  ];
  var museumName1 = museumNames[Math.floor(Math.random() * museumNames.length)];
  var museumName2 = museumNames[Math.floor(Math.random() * museumNames.length)];
  var museumName3 = museumNames[Math.floor(Math.random() * museumNames.length)];

  // this sends back a JSON response which is a single string
  res.json([
    {
      museumName1: "" + museumName1,
      amount1: "" + faker.datatype.number({ min: 1, max: 100 }),
      date1: "" + faker.datatype.number({ min: 1, max: 29 }) + "." + faker.datatype.number({ min: 6, max: 12}) + ".21",
      price1: "" + faker.datatype.number({ min: 5, max: 40 }),

      museumName2: "" + museumName2,
      amount2: "" + faker.datatype.number({ min: 1, max: 100 }),
      date2: "" + faker.datatype.number({ min: 1, max: 29 }) + "." + faker.datatype.number({ min: 6, max: 12}) + ".21",
      price2: "" + faker.datatype.number({ min: 5, max: 40 }),

      museumName3: "" + museumName3,
      amount3: "" + faker.datatype.number({ min: 1, max: 100 }),
      date3: "" + faker.datatype.number({ min: 1, max: 29 }) + "." + faker.datatype.number({ min: 6, max: 12}) + ".21",
      price3: "" + faker.datatype.number({ min: 5, max: 40 }),
    },
  ]);
}
