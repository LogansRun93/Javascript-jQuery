currentMode = "Default";

$(document).ready(function () {
	
	// Create the default grid
	generateGrid(256);
	
	// On the mouseover of a square, color the square based on the current mode
	$("#container").on("mouseover", ".square", function() {
		switch(currentMode) {
			case "Default":
				$(this).css("background-color", "white");
				break;
			case "Random":
				$(this).css("background-color", "#" + (Math.random() * 0xFFFFFF << 0).toString(16));
				break;
			case "Gradient":
				currentOpacity = $(this).css("opacity");
				if (currentOpacity > 0) {
					$(this).css("opacity", currentOpacity - 0.1);
				}
				break;
			case "Trail":
				$(this).fadeTo(100, 0);
				$(this).on("mouseleave", function () {
					$(this).fadeTo(400, 1);
				});
				break;
		}
	});
	
	// Grid Size button was clicked
	$( "#cmdGridSize" ).click(function() {
	  numBlocks = Math.pow(prompt( "Enter the grid side length." ), 2);
	  generateGrid(numBlocks);
	});	
	
	// Clear grid button was clicked
	$( "#cmdClearGrid" ).click(function() {
		clearGrid();
	});	
	
	// Default Mode button was clicked
	$( "#cmdDefaultMode" ).click(function() {
		currentMode = "Default";
		clearGrid();
	});	
	
	// Random Color button was clicked
	$( "#cmdRandomMode" ).click(function() {
		currentMode = "Random";
		clearGrid();
	});	
	
	// Gradient Mode button was clicked
	$( "#cmdGradientMode" ).click(function() {
		currentMode = "Gradient";
		clearGrid();
	});	
	
	// Trail Mode button was clicked
	$( "#cmdTrailMode" ).click(function() {
		currentMode = "Trail";
		clearGrid();
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

function clearGrid() {
	// Set all squares back to normal
	$(".square").css("background-color", "black");
	$(".square").css("opacity", "1");	
}