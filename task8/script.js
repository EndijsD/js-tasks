const colorSelect = document.getElementById("colorSelect")

function removecolor(){
    if (colorSelect.length)
        colorSelect.options[colorSelect.selectedIndex].remove()
}
