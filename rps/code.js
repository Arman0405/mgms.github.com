var user_cnt = 0;
var comp_cnt = 0;
var win = new Audio('./sounds/jean-pierre-polnareff-bravo-ooooh-bravo.mp3');
var tie = new Audio('./sounds/engineer_no01_1.mp3');
var lose = new Audio('./sounds/ooohhhshit1.mp3');

function rock() {
	var bot_choice = Math.floor(Math.random() * 3) + 1;
	if (bot_choice == 1) {
		++ comp_cnt;
		$(".result").text("Bot chose paper, so you lose.");
		$("#comp_score").text(comp_cnt);
		lose.play();
	} else if (bot_choice == 2) {
		$(".result").text("Bot chose rock, so there is tie.");
		tie.play();
	} else {
		++ user_cnt;
		$(".result").text("Bot chose scissors, so you win!");
		$("#user_score").text(user_cnt);
		win.play();
	}
}

function paper() {
	var bot_choice = Math.floor(Math.random() * 3) + 1;
	if (bot_choice == 3) {
		++ comp_cnt;
		$(".result").text("Bot chose scissors, so you lose.");
		$("#comp_score").text(comp_cnt);
		lose.play();
	} else if (bot_choice == 1) {
		$(".result").text("Bot chose paper, so there is tie.");
		tie.play();
	} else {
		++ user_cnt;
		$(".result").text("Bot chose rock, so you win!");
		$("#user_score").text(user_cnt);
		win.play();
	}
}

function scis() {
	var bot_choice = Math.floor(Math.random() * 3) + 1;
	if (bot_choice == 2) {
		++ comp_cnt;
		$(".result").text("Bot chose rock, so you lose.");
		$("#comp_score").text(comp_cnt);
		lose.play();
	} else if (bot_choice == 3) {
		$(".result").text("Bot chose scissors, so there is tie.");
		tie.play();
	} else {
		++ user_cnt;
		$(".result").text("Bot chose paper, so you win!");
		$("#user_score").text(user_cnt);
		win.play();
	}
}

function show() {
	if ($(".info").css("display") == "none") {
		$(".info").css("display", "block");
	} else {
		$(".info").css("display", "none");
	}
}