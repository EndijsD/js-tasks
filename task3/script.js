const par = document.getElementById("par")
const btn = document.getElementById("btn")

btn.addEventListener('click', function() {
    if(par.style.background != "red")
        par.style.background = "red"
    else
        par.style.background = ""
})
