//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0gZWwpg4VVi4SIIrB0xJUF_hKzuS9d3g",
  authDomain: "kwitter-f9785.firebaseapp.com",
  databaseURL: "https://kwitter-f9785-default-rtdb.firebaseio.com",
  projectId: "kwitter-f9785",
  storageBucket: "kwitter-f9785.appspot.com",
  messagingSenderId: "431046908261",
  appId: "1:431046908261:web:b659e3ee7857d41f7e298c"
};


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!";
 function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
            {
                  purpose: "adding Room Name"
            }
      );
      localStorage.setItem("room_name", room_name);
      window.location = kwitter_page.html;
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name -" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)'># " + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
  getData();

  function redirectToRoomname(name)
  {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = kwitter_page.html;
  }

  function logout() 
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }