const mySelect = document.getElementById("mySelect")

function getOptions(){
    let options = ""
    mySelect.childNodes.forEach(item => item.nodeName == "OPTION" ? options += "\n\t" + item.value : false)
    alert("Options: " + mySelect.length + options)
}
