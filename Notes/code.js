var cnt = 2;

function ad() {
	$(".inp").css("display", "block");
}

function comit() {
	var hed = $("#hed").val();
	var txt = $("#tx").val();
	$("#notes").prepend(
		'<div class="notenum"> <p class="hedr"></p> <p class="taxt"></p> </div>'
	);
	$(".notenum").first().attr('id', 'num' + cnt);
	var ip = "#num" + cnt;
	$(".hedr").first().text(hed);
	$(".taxt").first().text(txt);
	$("#hed").val("");
	$("#tx").val("");

	++ cnt;
	$(".inp").css("display", "none");
}

function eras() {
	$(".header").css("display", "none");
}