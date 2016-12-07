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

    const item1 = document.getElementById("item1");
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3");
    const item4 = document.getElementById("item4");

    const submitBtn = document.getElementById("submit");
    
  var ref = firebase.database().ref('Materials/');
    

    pullMaterials();
    
    function parseData(Material1, Material2, Material3, Material4){
        mat1.innerHTML=Material1;
        mat2.innerHTML=Material2;
        mat3.innerHTML=Material3;
        mat4.innerHTML=Material4;
    }
    
    function pullMaterials(){
        ref.orderByChild("name").on("value", function(snapshot) {

          var matSnapshot = snapshot.val();

        parseData(matSnapshot.Material1, matSnapshot.Material2,
            matSnapshot.Material3, matSnapshot.Material4);
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
  }

submitBtn.addEventListener('click', e=>{
        const material1 = item1.value;
        const material2 = item2.value;
        const material3 = item3.value;
        const material4 = item4.value;

        updateMaterials(material1, material2, material3, material4);
    }
);

function updateMaterials(first, second, third, fourth){
      var materials = { 
      
    "Material1" : first,
      "Material1Found":0,
    "Material2" : second,
      "Material2Found":0,
    "Material3" : third,
      "Material3Found":0,
    "Material4" : fourth,
      "Material4Found":0
  };

  ref.update(materials);

}

}());