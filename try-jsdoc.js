

const {Thang, Bui} = require('./model/Thang.js');
let util = require('./util/util.js');

let result = util.doSth(new Thang(), 55.5);
console.log(result);

