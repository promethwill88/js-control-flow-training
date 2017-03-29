console.log("security_questions.js is loaded");
// Entered security questions and expected answers in array
let securityQuestions = [
{question: "Who was your childhood best friend?", expectedAnswer: "mark"}, 
{question: "What was the name of your first pet?", expectedAnswer: "snoopy"},
{question: "What was the brand of your first car?", expectedAnswer: "bmw"}
];
// Loop created lasting array length
for(let i = 0; i < securityQuestions.length; i++){
	// Store user input into `answer`
	let answer = prompt(securityQuestions[i].question);
	// Change input to lower case and store into `answerLower`
	let answerLower = answer.toLowerCase();
	// If answerLower matches the expected answer, move forward with loop / ask another question
	if(answerLower === securityQuestions[i].expectedAnswer){
	}
	// If false, alert
	else{
	alert("Answer does not match");
	// Stop loop
	break;
	}
};