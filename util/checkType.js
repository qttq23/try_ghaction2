


function checkType(mapObjectType){

	for(let item of mapObjectType){
		
		// check if simple type
		if(typeof item.type == 'string') { 
			if(typeof item.obj != item.type){
				throw new Error(`typeof ${item.obj.constructor.name} is not a ${item.type}`);
			}
		}

		// check for custom object
		else {
			if(!(item.obj instanceof item.type)){
				throw new Error(`${item.obj.constructor.name} is not an instanceof ${item.type.name}`);
			}
		}
		
		
	}

	return true;
}

module.exports = {checkType};