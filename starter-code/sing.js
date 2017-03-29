console.log("sing.js is loaded");
let bottlesOfBeer = ['bottles of beer on the wall,', 'bottles of beer!', 'Take one down and pass it around,', 'bottles of beer on the wall!'
];
let bottle = 5;

for(let i = 0; i <= bottlesOfBeer.length; i++){
	console.log(bottle + " " + bottlesOfBeer[0]);
	console.log(bottle + " " + bottlesOfBeer[1]);
	console.log(bottlesOfBeer[2]);
	bottle--;
	console.log(bottle + " " + bottlesOfBeer[3]);

};
if(bottle = 1){
		bottlesOfBeer[3] = 'bottles of beer on the wall!';
	}
