const par = document.getElementById('par')
const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
	!par.style.cssText
		? (par.style.background = 'red')
		: (par.style.background = '')
})
