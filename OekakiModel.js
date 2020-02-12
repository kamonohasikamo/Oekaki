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
	var lineCountText = document.getElementById("inputLineCountId");
	var columnCountText = document.getElementById("inputColumnCountId");

	// 表を作成
	var showTableArea = document.getElementById("showTable");
	if(lineCountText.value != null 
		&& columnCountText.value != null) {
		
	}
}