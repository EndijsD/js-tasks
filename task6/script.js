const myTable = document.getElementById("myTable")

function changeContent(){
    let row = prompt("Row: ")
    let column = prompt("Column: ")
    let text = prompt("Text: ")

    if(row && column && Number.isInteger(Number(row)) && Number.isInteger(Number(column)))
        myTable.rows[row-1].cells[column-1].textContent = text
    else
        alert("Something went wrong!")
}
