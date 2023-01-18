const form = document.getElementById("form1")

function getFormvalue(){
    for (const child of form.children) {
        if(child.tagName != "BR" && child.value != "Submit")
            alert(child.value);
    }
}
