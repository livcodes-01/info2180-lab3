//My Javascript doc

document.addEventListener("DOMContentLoaded", function() {
	const squares = document.querySelectorAll("#board div");

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
		});
	});
});
