var firebaseConfig = {
    apiKey: "AIzaSyCBzv_tvVn1OVvpA30Wt0mqwPjB2H-szp8",
    authDomain: "let-s-chat-app-3681e.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-3681e-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-3681e",
    storageBucket: "let-s-chat-app-3681e.appspot.com",
    messagingSenderId: "45552302269",
    appId: "1:45552302269:web:aeb6561be55efa7e4cdfd4",
    measurementId: "G-THW7W7JZTT"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
 
  function addroom(){
    
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });
 localStorage.setItem("room_name",room_name);
 window.location="Let'sChat_page.html";
 
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData()
function redirectToRoomName(name)
 { console.log(name); 
      localStorage.setItem("room_name", name);
       window.location = "Let'sChat_page.html"; }
       
function logout(){
        localStorage.removeItem("room_name");
        localStorage.removeItem("user_name");
        window.location="index.html";
  }