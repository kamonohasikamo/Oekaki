//==========================================
// 変数宣言
//==========================================


//==========================================
// 更新時にテキストエリアを初期化
//==========================================
$(function() {
	var lineCountText = document.getElementById("inputLineCountId");
	var columnCountText = document.getElementById("inputColumnCountId");

	lineCountText.value = "";
	columnCountText.value = "";
});

function clickButton() {
	var lineNum = document.getElementById("inputLineCountId").value;
	var columnNum = document.getElementById("inputColumnCountId").value;

	// 表を作成
	var tableArea = document.getElementById("showTable");
	var createTable = document.createElement('table');
	createTable.id = "showTableId";
	createTable.border = 1;

	var createTableBody = document.createElement('tbody');
	createTable.appendChild(createTableBody);
	if(lineNum != null 
		&& lineNum > 0
		&& columnNum != null
		&& columnNum > 0) {
		for (var i = 0; i < lineNum; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < columnNum; j++) {
				var td = document.createElement('td');
				td.appendChild(document.createTextNode(j));
				createTableBody.appendChild(td);
			}
			createTableBody.appendChild(tr);
		}
		tableArea.appendChild(createTable);
	}
}