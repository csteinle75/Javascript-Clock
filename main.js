
const getTime = function(){
	const clock1 = $('#clockOne')
	const clock2 = $('#clockTwo')

	//moment
	const mTime = moment().format('h:mm:ss A')
	clock1.html(`<span>${mTime}</span>`)

	//new Date

	let ampm =""
	//prepends a number less than 10 with a zero
	const zeroPad = function(val){
		if(val >= 0 && val <= 9){
			return `0${val.toString()}`
		} return val
	}
	//
	const hourCalc = function(val){
		if(val < 12){
			ampm = 'AM'
			if(val === 0){
				return 12
			}
			return val
		}
		if(val >= 12){
			ampm = 'PM'
			return val - 12
		}
	}

	const dTime = new Date()
	const dS = zeroPad(dTime.getSeconds())
	const dM = zeroPad(dTime.getMinutes())
	const dH = hourCalc(dTime.getHours())
	clock2.html(`<span>${dH}:${dM}:${dS} ${ampm}</span>`)

}

getTime()
setInterval(getTime,1000)
