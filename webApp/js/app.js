(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCb-H56n8dDa_F1LJmP3JpQ2W-P5DFPFAE",
    authDomain: "finn-50df6.firebaseapp.com",
    databaseURL: "https://finn-50df6.firebaseio.com",
    storageBucket: "finn-50df6.appspot.com",
    messagingSenderId: "817227771799"
  };
  firebase.initializeApp(config);


const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
//const btnLogout = document.getElementById('btnLogout');
const loginDiv = document.getElementById('loginForm');
const logoutDiv = document.getElementById('logoutForm');
    
const logoutLink = document.getElementById('logoutLink');

btnLogin.addEventListener('click', e=>{
	//get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	//sign in
	const promise = auth.signInWithEmailAndPassword(email,pass);
	promise.catch(e=>console.log(e.message));
});


btnSignUp.addEventListener('click', e=>{
	//get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	//sign in
	const promise = auth.createUserWithEmailAndPassword(email,pass);
	promise.catch(e=>console.log(e.message));
});


firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser);
		loginDiv.classList.add('hide');
		logoutDiv.classList.remove('hide');
		window.location='/loggedIn.html';

	}
	else {
		console.log('not logged in');
        window.location='/';
		loginDiv.classList.remove('hide');
		logoutDiv.classList.add('hide');
	}
})





	// set the length of the string
	var stringLength = 5;

	// list containing characters for the random string
	var stringArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','?'];


		var rndString = "";
	
		// build a string with random characters
		for (var i = 1; i < stringLength; i++) { 
			var rndNum = Math.ceil(Math.random() * stringArray.length) - 1;
			rndString = rndString + stringArray[rndNum];
		};
		console.log(rndString);
	
var team = {[rndString] : {
			"Member 1" : "",
			"Member 2" : "",
			"Member 3" : "",
			"Member 4" : "",
			"name" : rndString
}};

var theTeam = firebase.database().ref('/Teams');
theTeam.update(team);

// theTeam.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);

// });




}());





