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
    
    
    const logoutLink = document.getElementById('logoutLink');
    const test = document.getElementById('test');
    
    const joinTeamBtn = document.getElementById('joinTeamBtn');
    const startTeamBtn = document.getElementById('startTeamBtn');
    
    
    logoutLink.addEventListener('click', e=> {
        
        firebase.auth().signOut().then(function() {
            //window.location='/';
            console.log('Signed Out');
            test.style.display = "none";
        }, function(error) {
            
            console.error('Sign Out Error', error);
        });
    
})
    
    //start team generates token
    startTeamBtn.addEventListener('click', e=> { 
        
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
    
    })
    
    
}());