const isNum = (val) => {
	return /^\d+$/.test(val);
} 

class arrayActions {
	constructor(arr) {
		this.arr = arr
	}

	pushUniqueObj(elem) {
		let thisLen = this.arr.length,
			notExist = true;

		if (thisLen === 0) {
			this.arr.push(elem)
		} else {
			for (let i = 0; i < thisLen; i++) { 
				if ( JSON.stringify( this.arr[i] ) === JSON.stringify( elem ) ) {
					notExist = false
				}
			}

			if (notExist) this.arr.push(elem)
		}

		return this.arr
	}
}


export { isNum, arrayActions }