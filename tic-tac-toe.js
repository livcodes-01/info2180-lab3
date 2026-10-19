//My Javascript doc

document.addEventListener("DOMContentLoaded", function() {
	const squares = document.querySelectorAll("#board div");

	squares.forEach(function(square) {
        	square.classList.add("square");
    	});

	const boardState = ["", "", "", "", "", "", "", "", ""];
	let currentPlay = "X";

	squares.forEach(function(square, index) {
		square.addEventListener("click", function() {
			if (boardState[index] !== ""){
				return;
			}

			square.textContent = currentPlay;
			square.classList.add(currentPlay);

			boardState[index] = currentPlay;

			if (currentPlay === "X"){
				currentPlay = "O";
			} else {
				currentPlay = "X"
			}
		});
	});

});

