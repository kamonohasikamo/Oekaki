//==========================================
// 変数宣言
//==========================================
var lineNum;
var columnNum;
// 2次元配列
var lineArray = [];
var columnArray = [];

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
	var lineDataString = document.form1.lineInputTextArea.value;

	// 2次元配列にするために必要
	var array = [];
	for (var k = 0; k < lineDataString.length; k++) {
		console.log("lineDataString[" + k + "]" + lineDataString[k]);
		if (lineDataString[k] != '\n') {
			// ，なら見逃し
			if (lineDataString[k] != ',') {
				// 2桁数字かどうか
				if ((k + 1) < lineDataString.length
				 && lineDataString[k+1] != ',') {
					var st = (lineDataString[k] + lineDataString[k+1]);
					array.push(st);
					k++;
				} else {
					array.push(lineDataString[k]);
				}
			}
		} else {
			console.log("OK");
			this.lineArray.push(array);
			array = [];
		}
		if (k == lineDataString.length - 1) {
			this.lineArray.push(array);
		}
	}
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 10; j++) {
			console.log("lineArray[" + i + "][" + j + "] = " + this.lineArray[i][j]);
		}
	}
}

function lineDeleteButton() {
	this.lineArray = [];
	document.form1.lineInputTextArea.value = "";
}

function columnInputButton() {
	var columnDataString = document.form2.columnInputTextArea.value;

	// 2次元配列にするために必要
	var array = [];
	for (var k = 0; k < columnDataString.length; k++) {
		if (columnDataString[k] != '\n') {
			// ，なら見逃し
			if (columnDataString[k] != ',') {
				// 2桁数字かどうか
				if ((k + 1) < columnDataString.length
				 && columnDataString[k+1] != ',') {
					var st = (columnDataString[k] + columnDataString[k+1]);
					array.push(st);
					k++;
				} else {
					array.push(columnDataString[k]);
				}
			}
		} else {
			this.columnArray.push(array);
			array = [];
		}
		if (k == columnDataString.length - 1) {
			this.columnArray.push(array);
		}
	}
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 10; j++) {
			console.log("columnArray[" + i + "][" + j + "] = " + this.columnArray[i][j]);
		}
	}
}

function columnDeleteButton() {
	this.columnArray = [];
	document.form2.columnInputTextArea.value = "";
}

function showAnswerButton() {
	this.lineNum = document.inputForm.lineCount.value;
	this.columnNum = document.inputForm.columnCount.value;


	// 表を作成
	
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