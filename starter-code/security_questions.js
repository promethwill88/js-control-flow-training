console.log("security_questions.js is loaded");
let securityQuestions = [
{question: "Who was your childhood best friend?", expectedAnswer: "mark"}, 
{question: "What was the name of your first pet?", expectedAnswer: "snoopy"},
{question: "What was the brand of your first car?", expectedAnswer: "bmw"}
];

for(var i = 0; i < securityQuestions.length; i++){
	var answer = prompt(securityQuestions[i].question);
	var answerLower = answer.toLowerCase();
	if(answerLower === securityQuestions[i].expectedAnswer){
	}
	else{
	alert("Answer does not match");
	break;
	}
};