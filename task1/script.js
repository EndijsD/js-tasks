const text = document.getElementById("text")

function js_style(){
    if(text.style.fontSize != "30px"){

        text.style.fontFamily = 'Courier New'
        text.style.fontSize = "30px"
        text.style.color = "red"
    }else{
        text.style.fontFamily = ""
        text.style.fontSize = ""
        text.style.color = ""
    }
}
