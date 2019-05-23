const _ = require('lodash');

let pluck = _.pluck([{hello: "world"}, {hello: "world2"}], 'hello');

console.log(pluck); // ["world", "world2"]
