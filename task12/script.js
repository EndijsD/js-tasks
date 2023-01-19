const p = document.getElementById("p")

p.addEventListener('mouseenter', function(){
    Array.from(p.children).forEach(item => item.style.cssText = "background: darkred; color: white; border-radius: 5px; padding: 2px")
})

p.addEventListener('mouseleave', function(){
    Array.from(p.children).forEach(item => {item.style = ""})
})
