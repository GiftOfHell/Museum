"use strict";
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.
  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require("util");
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
  paints: getPaints,
};

/*
  Functions in a127 controllers used for operations should take two parameters:
  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getPaints(req, res) {
  var arts = [
    "<div class='art1'></div>",
    "<div class='art2'></div>",
    "<div class='art3'></div>",
  ];
  var arts1 = arts[Math.floor(Math.random() * arts.length)];

  // this sends back a JSON response which is a single string
  res.json([
    {
      name1: "" + faker.name.title(),
      year1: "" + faker.datatype.number({ min: 1500, max: 2020 }),
      art1: "" + arts1,

      name2: "" + faker.name.title(),
      year2: "" + faker.datatype.number({ min: 1500, max: 2020 }),
      art2: "" + arts1,

      name3: "" + faker.name.title(),
      year3: "" + faker.datatype.number({ min: 1500, max: 2020 }),
      art3: "" + arts1,
    },
  ]);
}
