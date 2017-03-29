console.log("login.js is loaded");
// Store username and password as key value pairs in array
let userLogin = {username:'promethwill88', password:'password123'};
// Prompt user to enter password (Attempt 1)
let userPassword = prompt("Enter password for user promethwill88");
// If user input is true, alert user that its been accepted
if(userPassword === userLogin.password){
	alert("Password Accepted - Welcome promethwill88");
}
// If user input is false, prompt user to enter password again (Attempt 2)
else{
	let userPasswordWrong = prompt("Incorrect Password (Attempt 2/3) - Please try again.");
	// If user input is true, alert user that its been accepted
	if(userPasswordWrong === userLogin.password){
		alert("Password Accepted - Welcome promethwill88");
	}
	// If user input is false, prompt user to enter password again (Attempt 3)
	else{
		let userPasswordWrongFinal = prompt("Incorrect Password (Attempt 3/3) - Please try again.");
		// If user input is true, alert user that its been accepted
		if(userPasswordWrongFinal === userLogin.password){
			alert("Password Accepted - Welcome promethwill88");
		}
		// If user input is false, alert user account is locked. No further prompts
		else{
		alert("Account Locked");
		}
	}
}