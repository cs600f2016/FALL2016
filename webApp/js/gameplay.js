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
    console.log("initialize");
    
    const mat1 = document.getElementById("mat1");
    const mat2 = document.getElementById("mat2");
    const mat3 = document.getElementById("mat3");
    const mat4 = document.getElementById("mat4");
    
  var ref = firebase.database().ref('/Materials');

  var materials = { 
    "Material1" : "8 Sticks",
    "Material2" : "3 Soda Cans",
    "Material3" : "1 Fabian",
    "Material4" : "2 pieces of litter"
  };
    
    ref.update(materials);
    pullMaterials();
    
    function parseData(Material1, Material2, Material3, Material4){
        console.log("here");
        mat1.innerHTML=Material1;
        mat2.innerHTML=Material2;
        mat3.innerHTML=Material3;
        mat4.innerHTML=Material4;
    }
    
    function pullMaterials(){
        ref.orderByChild("name").on("value", function(snapshot) {

          var matSnapshot = snapshot.val();
          console.log(matSnapshot);
            
        parseData(matSnapshot.Material1, matSnapshot.Material2,
            matSnapshot.Material3, matSnapshot.Material4);
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
  }


}());