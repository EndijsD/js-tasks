const myTable = document.getElementById('myTable')

function createTable() {
	myTable.innerHTML = ''

	const rows = Number(prompt('Rows: '))
	const columns = Number(prompt('Columns: '))

	if (rows && columns && Number.isInteger(rows) && Number.isInteger(columns)) {
		for (let i = 0; i < rows; i++) {
			myTable.insertRow(i)
			for (let j = 0; j < columns; j++) {
				let cell = myTable.rows[i].insertCell(j)
				cell.innerHTML = `Rows-${i + 1} Columns-${j + 1}`
			}
		}
	}
}
