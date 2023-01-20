const colorSelect = document.getElementById('colorSelect')

function removeColor() {
	if (colorSelect.length)
		colorSelect.options[colorSelect.selectedIndex].remove()
}
