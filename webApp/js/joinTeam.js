// (function(){
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCb-H56n8dDa_F1LJmP3JpQ2W-P5DFPFAE",
//     authDomain: "finn-50df6.firebaseapp.com",
//     databaseURL: "https://finn-50df6.firebaseio.com",
//     storageBucket: "finn-50df6.appspot.com",
//     messagingSenderId: "817227771799"
//   };
//   firebase.initializeApp(config);
//   var rndString = "";
//   theTeam = firebase.database().ref('Teams/');

//  //  function readyForFB(token){
//  //   theTeam.orderByChild("name").equalTo(token).on("value", function(snapshot) {
//  //   var teamSnapshot = snapshot.val();
//  //    console.log(teamSnapshot[token].Member1);
//  //    parseData(teamSnapshot[token].Member1, teamSnapshot[token].Member2,
//  //     teamSnapshot[token].Member3, teamSnapshot[token].Member4);
//  //  }, function (errorObject) {
//  //    console.log("The read failed: " + errorObject.code);
//  //  });
//  // }

//  //                    // set the length of the string
//  //                    var stringLength = 5;
                    
//  //                    // list containing characters for the random string
//  //                    var stringArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','?'];
                    
//  //                    rndString = "";
                    
                    
//  //                    // build a string with random characters
//  //                    for (var i = 1; i < stringLength; i++) { 
//  //                      var rndNum = Math.ceil(Math.random() * stringArray.length) - 1;
//  //                      rndString = rndString + stringArray[rndNum];
//  //                    };
                    
//  //                    var newString = rndString;
                    
//  //                    console.log(rndString);

//  //                    var team = {[rndString] : {
//  //                      "Member1" : "FinTheFox",
//  //                      "Member2" : "RogerTheRabbit",
//  //                      "Member3" : "EllenTheElephant",
//  //                      "Member4" : "JessTheJaguar",
//  //                      "name" : rndString
//  //                    }};
                    
                    
//  //                    theTeam.update(team);
                 
//  //                   console.log('you generated a token');

//  //                   readyForFB(rndString);




// // if (rndString.length == 4){
// //  theTeam.orderByChild("name").equalTo('!YDV').on("value", function(snapshot) {

// //   console.log(snapshot.val());
// // }, function (errorObject) {
// //   console.log("The read failed: " + errorObject.code);
// // });
// // }
// // else{
// //     console.log("too quick");
// // }

// function parseData(member1, member2, member3, member4) {

//   Member1.innerHTML=member1;
//   Member2.innerHTML=member2;
//   Member3.innerHTML=member3;
//   Member4.innerHTML=member4;

// }

// const Member1 = document.getElementById('Member1');
// const Member2 = document.getElementById('Member2');
// const Member3 = document.getElementById('Member3');
// const Member4 = document.getElementById('Member4');


// const logoutLink = document.getElementById('logoutLink');
// const test = document.getElementById('test');

// const joinTeamBtn = document.getElementById('joinTeamBtn');
// const startTeamBtn = document.getElementById('startTeamBtn');

// const tokenChild = document.getElementById('tokenGen');
// const tokenParent = document.getElementById('parentToken');
// const holdToken = document.getElementById('holdtoken');
//(function() {

  console.log("I'm running");
  const tokenForm = document.getElementById('enterTokenForm');

  tokenForm.setAttribute('size', tokenForm.getAttribute('placeholder').length - 2);

//});

// tokenChild.innerHTML=rndString;

// logoutLink.addEventListener('click', e=> {

//   firebase.auth().signOut().then(function() {
//             //window.location='/';
//             console.log('Signed Out');
//             //test.style.display = "none";
//             window.location='/';
//           }, function(error) {

//             console.error('Sign Out Error', error);
//           });

// })



// }());