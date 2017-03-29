console.log("sing.js is loaded");

let bottlesOfBeer = ['bottles of beer on the wall,', 'bottles of beer!', 'Take one down and pass it around,', 'bottles of beer on the wall!'
];
let bottle;
for(bottle = 20; bottle > 0; bottle--){
	console.log(bottle + " " + bottlesOfBeer[0]);
	console.log(bottle + " " + bottlesOfBeer[1]);
	console.log(bottlesOfBeer[2]);
	console.log((bottle - 1) + " " + bottlesOfBeer[3]);
	}

/*	if(bottle < 1){
		break;
	}
	else if(bottle = 1){
		bottlesOfBeer[3] = "bottle of beer on the wall!";
	}
*/	
//let verses = prompt('How many verses do you want to hear?');
