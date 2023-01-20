const btn = document.getElementById('btn')
const form = document.getElementById('form')

btn.addEventListener('click', function () {
	let answer
	form.childNodes.forEach((item) =>
		item.name == 'radius'
			? (answer = ((4 / 3) * Math.PI * Math.pow(item.value, 3)).toFixed(4))
			: item.name == 'volume'
			? (item.value = answer)
			: false
	)
})
