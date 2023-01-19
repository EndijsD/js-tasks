const children = document.getElementById("form1").childNodes

function getFormvalue(){
    children.forEach(child => child.type == "text" ? alert(child.value) : false)
}
