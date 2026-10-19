//My Javascript doc

document.addEventListener("DOMContentLoaded", function() {
	const squares = document.querySelectorAll("#board div");
	console.log("Squares: ", squares.length);

	squares.forEach(function(square) {
		//creates the 9 square boxes
        	square.classList.add("square");

		// adding the hover functionality
		square.addEventListener("mouseenter", function() {
                	square.classList.add("hover");
        	});
		square.addEventListener("mouseleave", function() {
			square.classList.remove("hover");
		});
	});

	//creating an array to store state of the board
	const boardState = ["", "", "", "", "", "", "", "", ""];
	let currentPlay = "X"; //first play is X

	//adds ability to click and it places X and O alternatively
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
			checkWinner();
		});
	});

	// checks if someone got 3 in a row
	const status = document.getElementById("status");
	const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
	];

	function checkWinner() {
		for (const combo of winCombos) {
			const a = combo[0];
			const b = combo[1];
			const c = combo[2];

			if (boardState[a] !== "" &&
			boardState[a] === boardState[b] &&
			boardState[b] === boardState[c] ) {
				const winner = boardState[a];
				status.classList.add("you-won");
				status.textContent = "Congratulations! " + winner + " is the winner!"
			}
		}
	}

	//New Game button functionality
	newGameBtn = document.querySelector(".btn");
	newGameBtn.addEventListener("click", function() {
		console.log("New Game button clicked!");

		squares.forEach(function(square, index) {
			boardState[index] = "";
			square.textContent = "";
			square.classList.remove("X", "O");
		});

		currentPlay = "X";
		status.textContent = "Move your mouse over a square and click to play an X or an O.";
		status.classList.remove("you-won");

	});
});
