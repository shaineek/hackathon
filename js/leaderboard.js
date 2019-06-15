var data = {}
$(document).ready(function () {
	$.ajax({
		type: 'GET',
		// data:JSON.stringify(data),
		contentType: 'application/json',
		url: 'http://localhost:3000/scorecard',
		success: function (res) {
			data = res

			processData(data)

		}
	})
})


function processData(ajaxData) {
	data = ajaxData
	var len = data.length
	generate_table(data)
}
console.log(len)
function generate_table(data) {
	// var scoredata=data;
	var len = data.length
	// get the reference for the body
	var body = document.getElementsByClassName("content")[0];

	// creates a <table> element and a <tbody> element
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");

	// creating all cells
	// var row2 = document.createElement("tr");
		
	// 	var cella = document.createElement("td")
	// 	var cellTexta = document.createTextNode(`Username`)
	// 	cella.appendChild(cellTexta)
	// 	row2.appendChild(cella)

	// 	var cellb = document.createElement("td")
	// 	var cellTextb = document.createTextNode(`Category`)
	// 	cellb.appendChild(cellTextb)
	// 	row2.appendChild(cellb)

	// 	var cellc = document.createElement("td")
	// 	var cellTextc = document.createTextNode(`Correct Answers`)
	// 	cellc.appendChild(cellTextc)
	// 	row2.appendChild(cellc)

	// 	var celld= document.createElement("td")
	// 	var cellTextd = document.createTextNode(`Incorrect Answers`)
	// 	celld.cppendChild(cellTextd)
	// 	row2.appendChild(celld)

	// 	var celle = document.createElement("td")
	// 	var cellTexte = document.createTextNode(`Score(%)`)
	// 	celle.appendChild(cellTexte)
	// 	row2.appendChild(celle)

	// 	tblBody.appendChild(row2);
		// tbl.appendChild(tblBody);
		// body.appendChild(tbl);
		// tbl.setAttribute("border", "2");

	for (var i = 0; i < len; i++) {
		// creates a table row
		var row = document.createElement("tr");
		// for (var j = 0; j < 3; j++) {
		// Create a <td> element and a text node, make the text
		// node the contents of the <td>, and put the <td> at
		// the end of the table row
		// var cell = document.createElement("td");
		// var cellText = document.createTextNode("cell in row " + i + ", column " + j);
		// cell.appendChild(cellText);
		// row.appendChild(cell);
		// }
		var cell1 = document.createElement("td")
		var cellText1 = document.createTextNode(`${data[i].username}`)
		cell1.appendChild(cellText1)
		row.appendChild(cell1)
		var cell2 = document.createElement("td")
		var cellText2 = document.createTextNode(`${data[i].category_name}`)
		cell2.appendChild(cellText2)
		row.appendChild(cell2)
		var cell3 = document.createElement("td")
		var cellText3 = document.createTextNode(`${data[i].correct}`)
		cell3.appendChild(cellText3)
		row.appendChild(cell3)
		var cell4 = document.createElement("td")
		var cellText4 = document.createTextNode(`${data[i].incorrect}`)
		cell4.appendChild(cellText4)
		row.appendChild(cell4)
		var cell5 = document.createElement("td")
		var cellText5 = document.createTextNode(`${data[i].score}%`)
		cell5.appendChild(cellText5)
		row.appendChild(cell5)
		// add the row to the end of the table body
		tblBody.appendChild(row);
	}

	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);
	// appends <table> into <body>
	body.appendChild(tbl);
	// sets the border attribute of tbl to 2;
	tbl.setAttribute("border", "2");
}