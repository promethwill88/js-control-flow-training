console.log("sing.js is loaded");
// Commented out `verse` - unable to get it working
//let verse = prompt('How many verses do you want to hear?');

// Store each line of song into seperate array elements
let bottlesOfBeer = ['bottles of beer on the wall,', 'bottles of beer!', 'Take one down and pass it around,', 'bottles of beer on the wall!'
];
// Set starting bottle number
let bottle = 10;
// Loop starting at starting bottle number, end when it reaches 1, subtracting each time by 1
for(bottle; bottle > 0; bottle--){
	// If statement to change song lines to singular when it gets to 1 bottle
	if(bottle <= 1){
		bottlesOfBeer[0] = 'bottle of beer on the wall,';
		bottlesOfBeer[1] = 'bottle of beer!';
		bottlesOfBeer[3] = 'bottle of beer on the wall!';
	}
	// Console prints individual line per each line in console
	console.log(bottle + " " + bottlesOfBeer[0]);
	console.log(bottle + " " + bottlesOfBeer[1]);
	console.log(bottlesOfBeer[2]);
	// Subtract 1 before starting loop over
	console.log((bottle - 1) + " " + bottlesOfBeer[3]);
}



