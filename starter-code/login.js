console.log("login.js is loaded");
let userLogin = {username:'promethwill88', password:'password123'};
let userPassword = prompt("Enter password for user promethwill88");
if(userPassword === userLogin.password){
	alert("Password Accepted - Welcome promethwill88");
}
else{
	let userPasswordWrong = prompt("Incorrect Password (Attempt 2/3) - Please try again.");
	if(userPasswordWrong === userLogin.password){
		alert("Password Accepted - Welcome promethwill88");
	}
	else{
		let userPasswordWrongFinal = prompt("Incorrect Password (Attempt 3/3) - Please try again.");
		if(userPasswordWrongFinal === userLogin.password){
			alert("Password Accepted - Welcome promethwill88");
		}
		else{
		alert("Account Locked");
		}
	}
}