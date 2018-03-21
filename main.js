
const getTime = function(){
	const clock1 = $('#clockOne')
	const clock2 = $('#clockTwo')
	const clock3 = $('#clockThree')

	//moment
	const mTime = moment().format('h:mm:ss A')
	clock1.html(`<span>${mTime}</span>`)

	//new Date
	let ampm =""
	//prepends a number less than 10 with a zero
	const zeroPad = function(val){
		if(val.toString().length === 1){
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

	//hex Clock
	const hexTime = zeroPad(dTime.getHours().toString(16)) + zeroPad(dTime.getMinutes().toString(16))  + zeroPad(dTime.getSeconds().toString(16))
	const hexTimesFour = zeroPad((dTime.getHours()*4).toString(16)) + zeroPad((dTime.getMinutes()*4).toString(16))  + zeroPad((dTime.getSeconds()*4).toString(16))

	clock3.css("background-color", `#${hexTimesFour}`)
	$('#hexClock').css('color', `#${hexTime}`)
	clock3.html(`
		<span>#${hexTime}</span>
		<span id="bgLabel">background-color:#${hexTimesFour} | color: #${hexTime}</span>
		`)
}




getTime()
setInterval(getTime,1000)
