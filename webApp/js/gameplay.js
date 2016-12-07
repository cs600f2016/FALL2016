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
    var token = document.cookie;
    console.log(token);
    const mat1 = document.getElementById("mat1");
    const mat2 = document.getElementById("mat2");
    const mat3 = document.getElementById("mat3");
    const mat4 = document.getElementById("mat4");

    var Mat1Found, Mat2Found, Mat3Found, Mat4Found;
    
  var ref = firebase.database().ref('Materials/');
  var teamRef = firebase.database().ref('Teams');
  var matRef = firebase.database().ref('Teams/' + token);

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

        pushMasterMaterials(token, matSnapshot.Material1, matSnapshot.Material2,
            matSnapshot.Material3, matSnapshot.Material4);
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
  }
   
function pushMasterMaterials(token, mat1, mat2, mat3, mat4){
    
      
      firebase.database().ref("Teams/" + token).update({"Material1" : mat1,"Material2" : mat2,"Material3" : mat3,"Material4" : mat4});
      teamMaterialListener(token);

    }
  
function teamMaterialListener(token){
    teamRef.orderByChild("name").equalTo(token).on("value", function(snapshot) {
      var teamSnapshot = snapshot.val();

      Mat1Found = teamSnapshot[token].Material1Found;
      Mat2Found = teamSnapshot[token].Material2Found;
      Mat3Found = teamSnapshot[token].Material3Found;
      Mat4Found = teamSnapshot[token].Material4Found;

      if(Mat1Found == 1){
            mat1.style.textDecoration = "line-through";  
            }
            else{
              mat1.style.textDecoration = "none";
            }   

      if(Mat2Found == 1){
            mat2.style.textDecoration = "line-through";  
            }
      else{
              mat2.style.textDecoration = "none";
            }  

      if(Mat3Found == 1){
      mat3.style.textDecoration = "line-through";  
      }
      else{
           mat3.style.textDecoration = "none";
            }

      if(Mat4Found == 1){
        mat4.style.textDecoration = "line-through";  
          }
          else{
            mat4.style.textDecoration = "none";
          }                       

      parseData(teamSnapshot[token].Material1, teamSnapshot[token].Material2,
        teamSnapshot[token].Material3, teamSnapshot[token].Material4);
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

//checklist    
mat1.addEventListener('click', e=> {
        if(Mat1Found == 0){
            matRef.update({"Material1Found" : 1});
            
        }
        else {
            Mat1Found = 0;
            matRef.update({"Material1Found" : 0});
        } 
    });
    
mat2.addEventListener('click', e=> {
        if(Mat2Found == 0){
            mat2.style.textDecoration = "line-through";
            matRef.update({"Material2Found" : 1});
            
        }
        else {
            Mat2Found = 0;
            mat2.style.textDecoration = "none";
            matRef.update({"Material2Found" : 0});
        } 
    });

mat3.addEventListener('click', e=> {
      if(Mat3Found == 0){
            mat3.style.textDecoration = "line-through";
            matRef.update({"Material3Found" : 1});
            
        }
        else {
            Mat3Found = 0;
            mat3.style.textDecoration = "none";
            matRef.update({"Material3Found" : 0});
        } 
    });
    
mat4.addEventListener('click', e=> {
        if(Mat4Found == 0){
            mat4.style.textDecoration = "line-through";
            matRef.update({"Material4Found" : 1});
            
        }
        else {
            Mat4Found = 0;
            mat4.style.textDecoration = "none";
            matRef.update({"Material4Found" : 0});
        } 
    });
    

    

}());