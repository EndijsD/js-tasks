const p = document.getElementById("p")

window.onload = displayResolution()

window.onresize = () => displayResolution()

function displayResolution(){
    p.innerHTML = "Inner Height: " + window.innerHeight + "<br>Inner Width: " + window.innerWidth + "<br><br>Outer Height: " + window.outerHeight + "<br>Outer Width: " + window.outerWidth
}
