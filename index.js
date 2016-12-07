/* eslint-disable */
var curry = require('lodash.curry')

module.exports = {
  refWith: curry(function(cxt, key, val) { cxt[key] = val }),
  refAs: curry(function(key, cxt, val) { cxt[key] = val }),
}
