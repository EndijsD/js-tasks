const input = document.getElementById('form1').childNodes

function getFormValue() {
	let name = ''
	input.forEach((item) => {
		if (item.type == 'text') name += item.value + ' '
	})
	alert(name)
}
