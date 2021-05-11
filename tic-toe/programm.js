var fi = null;
var col = 0;

function randP(val) {
	if (col != 1) return;
	while (1 == 1) {
		var numb = Math.floor(Math.random() * 9) + 1;
		var elem = $("#box" + numb).text();
		if (elem == "") {
			if (fi == 1) $("#box" + numb).text("O");
			else $("#box" + numb).text("X");
			break;
		}
	}
}

function check() {
	var row = [1, 4, 7], st = [1, 2, 3];
	for (i = 0; i < 3; ++ i) {
		var cnt = 0, san = 0;
		for (j = row[i]; j <= row[i] + 2; ++ j) {
			var elem = $("#box" + j).text();
			if (fi == 1 && elem == "X") ++ cnt;
			if (fi == 2 && elem == "O") ++ cnt;
			if (fi == 1 && elem == "O") ++ san;
			if (fi == 2 && elem == "X") ++ san;
		}
		if (cnt == 3) {
			$("#turn").text("You WIN!");
			col = 2;
			if (col == 2) {
				replay();
			}
			return;
		} else if (san == 3) {
			$("#turn").text("You LOSE!");
			col = 2;
			if (col == 2) {
				replay();
			}
			return;
		}
	}

	for (i = 0; i < 3; ++ i) {
		var cnt = 0, san = 0;
		for (j = st[i]; j <= 9; j += 3) {
			var elem = $("#box" + j).text();
			if (fi == 1 && elem == "X") ++ cnt;
			if (fi == 2 && elem == "O") ++ cnt;
			if (fi == 1 && elem == "O") ++ san;
			if (fi == 2 && elem == "X") ++ san;
		}
		if (cnt == 3) {
			$("#turn").text("You WIN!");
			col = 2;
			if (col == 2) {
				replay();
			}
			return;
		} else if (san == 3) {
			$("#turn").text("You LOSE!");
			col = 2;
			if (col == 2) {
				replay();
			}
			return;
		}
	}

	var d1 = [1, 5, 9], d2 = [3, 5, 7];
	var cnt = 0, san = 0;
	for (i = 0; i < 3; ++ i) {
		var elem = $("#box" + d1[i]).text();
		if (fi == 1 && elem == "X") ++ cnt;
		if (fi == 2 && elem == "O") ++ cnt;
		if (fi == 1 && elem == "O") ++ san;
		if (fi == 2 && elem == "X") ++ san;
	}
	if (cnt == 3) {
		$("#turn").text("You WIN!");
		col = 2;
		if (col == 2) {
			replay();
		}
		return;
	} else if (san == 3) {
		$("#turn").text("You LOSE!");
		col = 2;
		if (col == 2) {
			replay();
		}
		return;
	}

	cnt = 0; san = 0;
	for (i = 0; i < 3; ++ i) {
		var elem = $("#box" + d2[i]).text();
		if (fi == 1 && elem == "X") ++ cnt;
		if (fi == 2 && elem == "O") ++ cnt;
		if (fi == 1 && elem == "O") ++ san;
		if (fi == 2 && elem == "X") ++ san;
	}
	if (cnt == 3) {
		$("#turn").text("You WIN!");
		col = 2;
		if (col == 2) {
			replay();
		}
		return;
	} else if (san == 3) {
		$("#turn").text("You LOSE!");
		col = 2;
		if (col == 2) {
			replay();
		}
		return;
	}

	var ok = 0;
	for (i = 1; i <= 9; ++ i) {
		var elem = $("#box" + i).text();
		if (elem != "") ++ ok;
	}
	if (ok == 9) {
		$("#turn").text("It is TIE!");
		col = 2;
		if (col == 2) {
			replay();
		}
		return;	
	}

}

function bot() {
	if (col != 1) return;
	for (i = 1; i <= 7; i += 3) {
		var cnt = 0;
		for (j = i; j <= i + 2; ++ j) {
			var elem = $("#box" + j).text();
			if (fi == 1 && elem == "X") ++ cnt;
			if (fi == 2 && elem == "O") ++ cnt;
		}
		if (cnt == 2) {
			var pos = -1;
			for (j = i; j <= i + 2; ++ j) {
				var elem = $("#box" + j).text();
				if (fi == 1 && elem == "") pos = j;
				else if (fi == 2 && elem == "") pos = j;
			}
			if (pos == -1) continue;
			if (fi == 2) $("#box" + pos).text("X");
			else $("#box" + pos).text("O");
			$("#turn").text("Now, it is your turn!");
			return;
		}
	}
	for (i = 1; i <= 3; ++ i) {
		var cnt = 0;
		for (j = i; j <= 9; j += 3) {
			var elem = $("#box" + j).text();
			if (fi == 1 && elem == "X") ++ cnt;
			if (fi == 2 && elem == "O") ++ cnt;
		}
		if (cnt == 2) {
			var pos = -1;
			for (j = i; j <= 9; j += 3) {
				var elem = $("#box" + j).text();
				if (fi == 1 && elem == "") pos = j;
				else if (fi == 2 && elem == "") pos = j;
			}
			if (pos == -1) continue;
			if (fi == 2) $("#box" + pos).text("X");
			else $("#box" + pos).text("O");
			$("#turn").text("Now, it is your turn!");
			return;
		}
	}
	var d1 = [1, 5, 9], d2 = [3, 5, 7];
	var cnt = 0;
	for (i = 0; i < 3; ++ i) {
		var elem = $("#box" + d1[i]).text();
		if (fi == 1 && elem == "X") ++ cnt;
		if (fi == 2 && elem == "O") ++ cnt;
	}
	if (cnt == 2) {
		var pos = -1;
		for (i = 0; i < 3; ++ i) {
			var elem = $("#box" + d1[i]).text();
			if (fi == 1 && elem == "") pos = d1[i];
			else if (fi == 2 && elem == "") pos = d1[i];
		}
		if (pos != -1) { 
			if (fi == 2) $("#box" + pos).text("X");
			else $("#box" + pos).text("O");
			return;
		}
	}
	cnt = 0;
	for (i = 0; i < 3; ++ i) {
		var elem = $("#box" + d2[i]).text();
		if (fi == 1 && elem == "X") ++ cnt;
		if (fi == 2 && elem == "O") ++ cnt;
	}
	if (cnt == 2) {
		var pos = -1;
		for (i = 0; i < 3; ++ i) {
			var elem = $("#box" + d2[i]).text();
			if (elem == "") pos = d2[i];
		}	
		if (pos != -1) { 
			if (fi == 2) $("#box" + pos).text("X");
			else $("#box" + pos).text("O");
			return;
		}
	}
	if (fi == 1) randP("O");
	else randP("X");
}

function makeT() {
	if (col != 1) return;
	var tu = Math.floor(Math.random() * 2) + 1;
	if (tu == 1) {
		fi = 2;
		randP("X");
		$("#turn").text("Now, it is your turn!");
	} else {
		$("#turn").text("Now, it is your turn!");
		fi = 1;
	}
}

function change(type) {
	if (col != 1) return;
	var num = "box" + type;
	if ($("#" + num).text() == "") {
		if (fi == 2) {
			$("#" + num).text("O");
		} else {
			$("#" + num).text("X");
		}
		check();
		bot();
		check();	
	}
}

function replay() {
	if (col == 0) {
		col = 1;
		$("#btn").text("");
		for (i = 1; i <= 9; ++ i) {
			$("#box" + i).text("");
		}
		makeT();
	} else if (col == 2) {
		$("#btn").text("Play again");
		col = 0;
	}
}