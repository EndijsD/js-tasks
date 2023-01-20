const mySelect = document.getElementById('mySelect')

function getOptions() {
	let options = ''
	mySelect.childNodes.forEach((item) => {
		if (item.nodeName == 'OPTION') options += '\n\t' + item.value
	})
	alert('Options: ' + mySelect.length + options)
}
