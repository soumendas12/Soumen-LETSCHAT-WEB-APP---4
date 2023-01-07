
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGnOJfa0lY2BS6GBuG2UDCgMJ_AOTNIys",
    authDomain: "social-website-2fec7.firebaseapp.com",
    databaseURL: "https://social-website-2fec7-default-rtdb.firebaseio.com",
    projectId: "social-website-2fec7",
    storageBucket: "social-website-2fec7.appspot.com",
    messagingSenderId: "828451297660",
    appId: "1:828451297660:web:3ff0819bca60e81b8c6cf9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name").innerHTML="WELCOME"+user_name+"!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_name +"</div><hr>";
document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").chid(room_name).update({
          purpose : "adding room name"
    });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("User_name");
    localStorage.removeItem("room_name");
    window.location="index.html";

}