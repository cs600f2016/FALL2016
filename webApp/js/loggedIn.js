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
            window.location='/';
        }, function(error) {
            
            console.error('Sign Out Error', error);
    });
    
});
    
    //start team generates token
    startTeamBtn.addEventListener('click', e=> { 
        window.location='startTeam.html';
    
    })

        joinTeamBtn.addEventListener('click', e=> { 
            console.log('clicked');
        window.location='joinTeam.html';
    
    })
    
}());