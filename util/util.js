
const {Thang, Bui } = require('../model/Thang.js');
const {checkType} = require('./checkType.js');

/**
* @param {Thang} myDate - The date to pass with
* @param {string} myString - The string to pass to
*/
function doSth(myDate ,myString){

	// check param type

	checkType([{obj: myDate, type: Thang}, {obj: myString, type: 'string'}]);

	let x = 10;
	x = myDate.value + 1;
	myDate.getValueSelf2absd(sdf);

	return x;
}

module.exports = {
	doSth: doSth
};	