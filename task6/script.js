const myTable = document.getElementById("myTable")

function changeContent(){
    const rows = Number(prompt("Rows: "))
    const columns = Number(prompt("Columns: "))
    const text = prompt("Text: ")
    
    if(rows && columns && Number.isInteger(rows) && Number.isInteger(columns))
        myTable.rows[rows-1].cells[columns-1].textContent = text
}
