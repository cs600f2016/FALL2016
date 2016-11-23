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
  var token = "";
  theTeam = firebase.database().ref('Teams/');
  const tokenForm = document.getElementById('enterTokenForm');

  var updateFlag = false;
  var teamMem2, teamMem3, teamMem4;

  tokenForm.setAttribute('size', tokenForm.getAttribute('placeholder').length - 2);

  function joinTeam(token){
   theTeam.orderByChild("name").equalTo(token).on("value", function(snapshot) {
   var teamSnapshot = snapshot.val();
    //console.log(teamSnapshot[token].Member1);
    teamMem2 = teamSnapshot[token].Member2;
    teamMem3 = teamSnapshot[token].Member3;
    teamMem4 = teamSnapshot[token].Member4;
    

    firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log("running inside");
      var user = firebase.auth().currentUser;
      console.log(user.email);
     

      while (updateFlag == false){
        if (teamMem2 == ""){

          firebase.database().ref('Teams/' + token).update({
          Member2 : user.email
          
        });   
          updateFlag = true;
        }

       else if (teamMem3 == ""){

          firebase.database().ref('Teams/' + token).update({
          Member3 : user.email
          
        });   
          updateFlag = true;
        }

        else if(teamMem4 == ""){

          firebase.database().ref('Teams/' + token).update({
          Member4 : user.email
          
        });   
          updateFlag = true;
        }

        else{
          console.log('team full');
          updateFlag = true;
        }

      }
    }
    else{
      console.log("logged Out");
    }
});



    parseData(teamSnapshot[token].Member1, teamSnapshot[token].Member2,
     teamSnapshot[token].Member3, teamSnapshot[token].Member4);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
 }


function parseData(member1, member2, member3, member4) {

  Member1.innerHTML=member1;
  Member2.innerHTML=member2;
  Member3.innerHTML=member3;
  Member4.innerHTML=member4;

}

const Member1 = document.getElementById('Member1');
const Member2 = document.getElementById('Member2');
const Member3 = document.getElementById('Member3');
const Member4 = document.getElementById('Member4');

const submitButton = document.getElementById("submitToken");

submitButton.addEventListener('click', e => {
  token = tokenForm.value;
  //console.log("I'm running")
  //console.log(token);
  joinTeam(token);
  addToTeam(token);
},

  function(error) {
    console.error('submit error', error);

});

function addToTeam(token){
   firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log("running inside");
      var user = firebase.auth().currentUser;
      console.log(user.email);
     
    }
    else{
      console.log("logged Out");
    }
});


}


logoutLink.addEventListener('click', e=> {

  firebase.auth().signOut().then(function() {
            //window.location='/';
            console.log('Signed Out');
            //test.style.display = "none";
            window.location='/';
          }, function(error) {

            console.error('Sign Out Error', error);
          });

})



}());