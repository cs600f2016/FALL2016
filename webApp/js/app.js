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
const btnLogout = document.getElementById('btnLogout');
const loginDiv = document.getElementById('loginForm');
const logoutDiv = document.getElementById('logoutForm');

btnLogin.addEventListener('click', e=>{
	//get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	//sign in
	auth.signInWithEmailAndPassword(email,pass);
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


	}
	else {
		console.log('not logged in');
		loginDiv.classList.remove('hide');
		logoutDiv.classList.add('hide');
	}
})

btnLogout.addEventListener('click', e=> {
	firebase.auth().signOut();

})

}());





