//==========================================
// 変数宣言
//==========================================
var lineNum;
var columnNum;
var lineInputData = "";
var columnInputData = "";

//==========================================
// 更新時にテキストエリアを初期化
//==========================================
$(function() {
	var lineCountText = document.getElementById("inputLineCountId");
	var columnCountText = document.getElementById("inputColumnCountId");

	lineCountText.value = "";
	columnCountText.value = "";
});

function lineInputButton() {
	this.lineInputData = document.form1.lineInputTextArea.value; 
}

function lineDeleteButton() {
	this.lineInputData = "";
	document.form1.lineInputTextArea.value = "";
}

function columnInputButton() {
	this.columnInputData = document.form2.columnInputTextArea.value;
}

function columnDeleteButton() {
	this.columnInputData = "";
	document.form2.columnInputTextArea.value = "";
}

function showAnswerButton() {
	this.lineNum = document.inputForm.lineCount.value;
	this.columnNum = document.inputForm.columnCount.value;


	// 表を作成
	console.log("lineInputData = " + typeof(this.lineInputData));
	console.log("columnInputData = " + typeof(this.columnInputData));
	
	
	var tableArea = document.getElementById("showTable");
	var createTable = document.createElement('table');
	createTable.id = "showTableId";
	createTable.border = 1;

	var createTableBody = document.createElement('tbody');
	createTable.appendChild(createTableBody);
	if(this.lineNum != null 
		&& this.lineNum > 0
		&& this.columnNum != null
		&& this.columnNum > 0) {
		for (var i = 0; i < this.lineNum; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < this.columnNum; j++) {
				var td = document.createElement('td');
				td.appendChild(document.createTextNode(j));
				createTableBody.appendChild(td);
			}
			createTableBody.appendChild(tr);
		}
		tableArea.appendChild(createTable);
	}
}