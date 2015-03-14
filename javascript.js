$(document).ready(function () {
	
	// Create the default grid
	generateGrid(256);
	
	// On the mouseover of a square, color it blue
	$("#container").on("mouseover", ".square", function() {
		$(this).css("background-color", "blue");
	});
	
	// Grid Size button was clicked
	$( "#cmdGridSize" ).click(function() {
	  numBlocks = Math.pow(prompt( "Enter the grid side length." ), 2);
	  generateGrid(numBlocks);
	});	
});

function generateGrid(numBlocks) {
	
	// Delete all existing squares from the grid
	$(".square").remove();
	
	// Get the area of each square. This will be sqrt(total grid area / number of blocks)
	i = 0;
	maxArea = $("#container").width() * $("#container").height();
	squareSideLength = Math.sqrt(maxArea / numBlocks) - 2; // -2 to account for the border around the squares

	// Add the squares to the container
	while(i < numBlocks)
	{
		$("#container").append("<div class='square'></div>");
		i++;
	}
	
	// Set the square dimensions
	$(".square").width(squareSideLength);
	$(".square").height(squareSideLength);
	
}