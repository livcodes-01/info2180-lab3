//My Javascript doc

/*document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(function(square) {
        square.classList.add("square");
    });
});*/

window.addEventListener("load", function () {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(function (square) {
        square.classList.add("square");
    });

    console.log("Squares found:", squares.length);
});
