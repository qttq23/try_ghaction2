
class Thang {
	constructor(){
		this.value = 5;
		this.age = 10;
	}

	/**
	* @param {number} value - The date to pass with
	* @return {string} string to return
	*/
	getValueSelf2absd(value){
		return this.value;
	}

	static fromJson(jsonString){

		let thang = new Thang();
		let obj = JSON.parse(jsonString);
		thang.value = obj.value;
		thang.age = obj.age;

		return thang;
	}

}

class Bui {
	constructor(){
		this.name = 'bui';
	}
}

if (typeof module === "object" && module && typeof module.exports === "object") {
	module.exports = {
		Thang, Bui
	};

}
else{
	// browser
}
