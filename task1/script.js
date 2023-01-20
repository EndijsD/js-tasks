const text = document.getElementById('text')

function js_style() {
	!text.style.cssText
		? (text.style.cssText =
				'font-family: Courier New; font-size: 30px; color: red')
		: (text.style = '')
}
