function signup() {
    
    var usersTab=JSON.parse(localStorage.getItem("users") || "[]");
    var firstName=document.getElementById("fName").value;
    var isValidFirstName=checkLength(firstName,5);
    if (isValidFirstName==false) {
      
        document.getElementById("firstNameError").innerHTML="please check your first name"
    } else{
        document.getElementById("firstNameError").innerHTML=""
    }

    ////////////
    var lastName=document.getElementById("lName").value;
    var isValidLastName=checkLength(lastName,5);
    if (isValidLastName==false) {
      
        document.getElementById("lastNameError").innerHTML="please check your last name"
    } else{
        document.getElementById("lastNameError").innerHTML=""
    }

    var adresse=document.getElementById("adresse").value;
    var isValidAdresse=checkLength(adresse,5);
    if (isValidAdresse==false) {
      
        document.getElementById("adresseError").innerHTML="please check your adresse"
    } else{
        document.getElementById("adresseError").innerHTML=""
    }


    var email=document.getElementById("email").value;
    var isValidEmail=existEmail(usersTab, email);
  if (isValidEmail==true) {
    document.getElementById("emailError").innerHTML="email already exist";
  }
  else {document.getElementById("emailError").innerHTML="";}

    ///////////////
    var password=document.getElementById("pwd").value;
    var isValidPassword=checkLength(password,5);
    if (isValidPassword==false) {
        
        document.getElementById("passwordError").innerHTML="please check your password"
    } else{
        document.getElementById("passwordError").innerHTML=""
    }
    ///////////////
    var confirmPwd=document.getElementById("confirmPwd").value;
   var isValidPass=isEqual(password,confirmPwd)
   if (isValidPass==false) {
    document.getElementById("confirmError").innerHTML="please check your password"
   }else{
    document.getElementById("confirmError").innerHTML=""
   }


 
   if (isValidFirstName && isValidLastName && isValidPass && isValidPassword && !isValidEmail ) {
    

    var user={
        id:generateId(usersTab)+1,
        fName:firstName,
        lName:lastName,
        adresse:adresse,
        email:email,
        role:"client",
        pwd:password,
        confirmPwd:confirmPwd,
    }

    usersTab.push(user);
    localStorage.setItem("users",JSON.stringify(usersTab));
    
}
}


/////////////check if email exist 
 function existEmail(t,x) {
    var exist=false;
    for (let i = 0; i < t.length; i++) {
        if (t[i].email==x) {
            exist= true;
            break;
        }
        
    }
    return exist;
 }


///check first name, last name ....
function checkLength(ch,x) {
    
    return(ch.length>=x);
}

////check pwd == confirm pwd
function isEqual(ch1,ch2) {
    return(ch1==ch2);
}


function generateId(t) {

    if(t.length==0){
    return 1
   }
    else{
    var max=t[0].id;
    for (let i = 1; i < t.length; i++) {
       if (t[i].id>max) {
        max=t[i].id;
       } 
        
    }
    return max;
}
    

}


function signupOwner() {
    
    var usersTab=JSON.parse(localStorage.getItem("users") || "[]");
    var firstName=document.getElementById("fName").value;
    var isValidFirstName=checkLength(firstName,5);
    if (isValidFirstName==false) {
      
        document.getElementById("firstNameError").innerHTML="please check your first name"
    } else{
        document.getElementById("firstNameError").innerHTML=""
    }

    ////////////
    var lastName=document.getElementById("lName").value;
    var isValidLastName=checkLength(lastName,5);
    if (isValidLastName==false) {
      
        document.getElementById("lastNameError").innerHTML="please check your last name"
    } else{
        document.getElementById("lastNameError").innerHTML=""
    }

    var adresse=document.getElementById("adresse").value;
    var isValidAdresse=checkLength(adresse,5);
    if (isValidAdresse==false) {
      
        document.getElementById("adresseError").innerHTML="please check your adresse"
    } else{
        document.getElementById("adresseError").innerHTML=""
    }


    var email=document.getElementById("email").value;
    var isValidEmail=existEmail(usersTab, email);
  if (isValidEmail==true) {
    document.getElementById("emailError").innerHTML="email already exist";
  }
  else {document.getElementById("emailError").innerHTML="";}

    ///////////////
    var password=document.getElementById("pwd").value;
    var isValidPassword=checkLength(password,5);
    if (isValidPassword==false) {
        
        document.getElementById("passwordError").innerHTML="please check your password"
    } else{
        document.getElementById("passwordError").innerHTML=""
    }
    ///////////////
    var confirmPwd=document.getElementById("confirmPwd").value;
   var isValidPass=isEqual(password,confirmPwd)
   if (isValidPass==false) {
    document.getElementById("confirmError").innerHTML="please check your password"
   }else{
    document.getElementById("confirmError").innerHTML=""
   }


 
   if (isValidFirstName && isValidLastName && isValidPass && isValidPassword && !isValidEmail ) {
    

    var user={
        id:generateId(usersTab)+1,
        fName:firstName,
        lName:lastName,
        adresse:adresse,
        email:email,
        role:"owner",
        pwd:password,
        confirmPwd:confirmPwd,
    }

    usersTab.push(user);
    localStorage.setItem("users",JSON.stringify(usersTab));
    
}
}

function signupAdmin() {
    
    var usersTab=JSON.parse(localStorage.getItem("users") || "[]");
    var firstName=document.getElementById("fName").value;
    var isValidFirstName=checkLength(firstName,5);
    if (isValidFirstName==false) {
      
        document.getElementById("firstNameError").innerHTML="please check your first name"
    } else{
        document.getElementById("firstNameError").innerHTML=""
    }

    ////////////
    var lastName=document.getElementById("lName").value;
    var isValidLastName=checkLength(lastName,5);
    if (isValidLastName==false) {
      
        document.getElementById("lastNameError").innerHTML="please check your last name"
    } else{
        document.getElementById("lastNameError").innerHTML=""
    }

    var adresse=document.getElementById("adresse").value;
    var isValidAdresse=checkLength(adresse,5);
    if (isValidAdresse==false) {
      
        document.getElementById("adresseError").innerHTML="please check your adresse"
    } else{
        document.getElementById("adresseError").innerHTML=""
    }


    var email=document.getElementById("email").value;
    var isValidEmail=existEmail(usersTab, email);
  if (isValidEmail==true) {
    document.getElementById("emailError").innerHTML="email already exist";
  }
  else {document.getElementById("emailError").innerHTML="";}

    ///////////////
    var password=document.getElementById("pwd").value;
    var isValidPassword=checkLength(password,5);
    if (isValidPassword==false) {
        
        document.getElementById("passwordError").innerHTML="please check your password"
    } else{
        document.getElementById("passwordError").innerHTML=""
    }
    ///////////////
    var confirmPwd=document.getElementById("confirmPwd").value;
   var isValidPass=isEqual(password,confirmPwd)
   if (isValidPass==false) {
    document.getElementById("confirmError").innerHTML="please check your password"
   }else{
    document.getElementById("confirmError").innerHTML=""
   }


 
   if (isValidFirstName && isValidLastName && isValidPass && isValidPassword && !isValidEmail ) {
    

    var user={
        id:generateId(usersTab)+1,
        fName:firstName,
        lName:lastName,
        adresse:adresse,
        email:email,
        role:"admin",
        pwd:password,
        confirmPwd:confirmPwd,
    }

    usersTab.push(user);
    localStorage.setItem("users",JSON.stringify(usersTab));
    
}
}

function login() {
  var email = document.getElementById("logEmail").value;
  var pwd = document.getElementById("logPass").value;
  var findUser;

  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  
  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].email == email && usersTab[i].pwd == pwd) {
      findUser = usersTab[i];
      break;
    }
  }

  if (findUser) {
    if (findUser.role == "client") {
      localStorage.setItem("connectedUserId", findUser.id);
      location.replace("housesClient.html");
    } else if (findUser.role == "owner") {
      if (findUser.status == "nok") {
        document.getElementById("loginError").innerHTML = "En cours de validation";
      } else {
        localStorage.setItem("connectedUserId", findUser.id);
        location.replace("myHouses.html");
      }
    } else if (findUser.role == "admin") {
     
        localStorage.setItem("connectedUserId", findUser.id);
        location.replace("admin.html");
    
    }
  } else {
    document.getElementById("loginError").innerHTML = "Please check your password or email";
  }
}

///////////////////////////////////////////////////////////////////////////////
function addHouse() {
    var ownerId=localStorage.getItem("connectedUserId");
    var housesTab=JSON.parse(localStorage.getItem("houses") || "[]");
    var houseName=document.getElementById("hName").value;
    var isValidHouseName=checkLength(houseName,2);
    if (isValidHouseName==false) {
       
        document.getElementById("NameError").innerHTML="please check product name"
    } else{
        document.getElementById("NameError").innerHTML=""
    }

    var adresse=document.getElementById("adresse").value;
    var isValidAdresse=checkLength(adresse,2);
    if (isValidAdresse==false) {
       
        document.getElementById("adresseError").innerHTML="please check product name"
    } else{
        document.getElementById("adresseError").innerHTML=""
    }

    var description=document.getElementById("hDescription").value;
    var isValidDescription=checkLength(description,2);
    if (isValidDescription==false) {
       
        document.getElementById("descError").innerHTML="please check product name"
    } else{
        document.getElementById("descError").innerHTML=""
    }

    var ville=document.getElementById("ville").value;
    var isValidVille=checkLength(ville,2);
    if (isValidVille==false) {
       
        document.getElementById("villeError").innerHTML="please check product name"
    } else{
        document.getElementById("villeError").innerHTML=""
    }

    if (isValidHouseName && isValidAdresse && isValidDescription && isValidVille  ) {
    var house={
        id:generateId(housesTab)+1,
        hName:houseName,
        adresse:adresse,
        description:description,
        ville:ville,
        ownerId:ownerId,
        rooms: []
    
    }
  
    
    housesTab.push(house);
    
    localStorage.setItem("houses",JSON.stringify(housesTab));
}
}

function DisplayAllUsers() {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var content = "";
    var isDisplayed =false;
    for (let i = 0; i < usersTab.length; i++) {
        var isDisplayed = (usersTab[i].role == "owner" && usersTab[i].status == "nok");
        
        content += `
        <tr>
            <td>${usersTab[i].id}</td>
            <td>${usersTab[i].fName}</td>
            <td>${usersTab[i].lName}</td>
            <td>${usersTab[i].role}</td>
            <td>${usersTab[i].status}</td>
            <td>
                <button class="btn btn-danger" onClick="deleteUser(${i})">Delete</button>
    `;

        if (isDisplayed) {
            content += `<button class="btn btn-danger" onClick="validateOwner(${i})">Validate</button>`;
        }

       
    }

    document.getElementById("myAllUsers").innerHTML = content;
}

function validateOwner(index) {
    var usersTab=JSON.parse(localStorage.getItem("users"));
    usersTab[index].status="ok"
    localStorage.setItem("users",JSON.stringify(usersTab))
    location.reload();

}

function deleteUser(index) {
    var usersTab=JSON.parse(localStorage.getItem("users"))
    
            usersTab.splice(index,1);
            localStorage.setItem("users",JSON.stringify(usersTab));
            location.reload();
}

function signupOwner() {
    
    var usersTab=JSON.parse(localStorage.getItem("users") || "[]");
    var firstName=document.getElementById("fName").value;
    var isValidFirstName=checkLength(firstName,5);
    if (isValidFirstName==false) {
      
        document.getElementById("firstNameError").innerHTML="please check your first name"
    } else{
        document.getElementById("firstNameError").innerHTML=""
    }

    ////////////
    var lastName=document.getElementById("lName").value;
    var isValidLastName=checkLength(lastName,5);
    if (isValidLastName==false) {
      
        document.getElementById("lastNameError").innerHTML="please check your last name"
    } else{
        document.getElementById("lastNameError").innerHTML=""
    }

    var adresse=document.getElementById("adresse").value;
    var isValidAdresse=checkLength(adresse,5);
    if (isValidAdresse==false) {
      
        document.getElementById("adresseError").innerHTML="please check your adresse"
    } else{
        document.getElementById("adresseError").innerHTML=""
    }


    var email=document.getElementById("email").value;
    var isValidEmail=existEmail(usersTab, email);
  if (isValidEmail==true) {
    document.getElementById("emailError").innerHTML="email already exist";
  }
  else {document.getElementById("emailError").innerHTML="";}

    ///////////////
    var password=document.getElementById("pwd").value;
    var isValidPassword=checkLength(password,5);
    if (isValidPassword==false) {
        
        document.getElementById("passwordError").innerHTML="please check your password"
    } else{
        document.getElementById("passwordError").innerHTML=""
    }
    ///////////////
    var confirmPwd=document.getElementById("confirmPwd").value;
   var isValidPass=isEqual(password,confirmPwd)
   if (isValidPass==false) {
    document.getElementById("confirmError").innerHTML="please check your password"
   }else{
    document.getElementById("confirmError").innerHTML=""
   }


 
   if (isValidFirstName && isValidLastName && isValidPass && isValidPassword && !isValidEmail ) {
    

    var user={
        id:generateId(usersTab)+1,
        fName:firstName,
        lName:lastName,
        adresse:adresse,
        email:email,
        role:"owner",
        status:"nok",
        pwd:password,
        confirmPwd:confirmPwd,
    }

    usersTab.push(user);
    localStorage.setItem("users",JSON.stringify(usersTab));
    
}
}

function DisplayAllHouses() {
    var housesTab=JSON.parse(localStorage.getItem("houses")||"[]");
    var content="";
    for (let i = 0; i < housesTab.length; i++) {
        
        content=content+` <tr>
        <td>
           ${housesTab[i].id}
        </td>
        <td>
        ${housesTab[i].hName}
        </td>
        <td>
        ${housesTab[i].adresse}
        </td>
        <td>
        ${housesTab[i].description}
        </td>
        <td>
        ${housesTab[i].ville}
        </td>
       
        <td>
        <button class="btn btn-warning" onclick="selectedHouseAdmin(${housesTab[i].id})">Display </button>
        <button class="btn btn-danger" onClick="deleteHouse(${i})">Delete </button>
       
        </td>
    </tr>`
    }
    document.getElementById("allHouses").innerHTML=content;
    
}
function displayRoomsOfTheHouseAdmin() {
  var selectedHouseId = JSON.parse(localStorage.getItem("selectedHouse") || "[]");
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var content = "";

  for (var i = 0; i < housesTab.length; i++) {
    if (housesTab[i].id == selectedHouseId) {
      var selectedHouse = housesTab[i];

      for (var j = 0; j < selectedHouse.rooms.length; j++) {
      
        content += `
          <tr>
            <td>${selectedHouse.rooms[j].id}</td>
            <td>${selectedHouse.rooms[j].rName}</td>
            <td>${selectedHouse.rooms[j].capacity}</td>
            <td>${selectedHouse.rooms[j].rDescription}</td>
            <td>${selectedHouse.rooms[j].prix}</td>
            <td>
            <button class="btn btn-danger" onclick="deleteRoom(${selectedHouse.rooms[j].id})">Delete</button>
             
            </td>
          </tr>`;
      }
      break;
    }
  }

  document.getElementById("roomsOftheHouseAdmin").innerHTML = content;
}

function deleteHouse(index) {
    var housesTab=JSON.parse(localStorage.getItem("houses"))
   
            housesTab.splice(index,1);
            localStorage.setItem("houses",JSON.stringify(housesTab));
            location.reload();
}

function displayMyHouses() {
  var myHousesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var ownerId = localStorage.getItem("connectedUserId");
  var content = "";

  for (let i = 0; i < myHousesTab.length; i++) {
      if (myHousesTab[i].ownerId == ownerId) {
          content += `
              <tr>
                  <td>${myHousesTab[i].id}</td>
                  <td>${myHousesTab[i].hName}</td>
                  <td>${myHousesTab[i].adresse}</td>
                  <td>${myHousesTab[i].description}</td>
                  <td>${myHousesTab[i].ville}</td>
                  <td>
                      <div class="btn-group" >
                          <button class="btn btn-success" onclick="selectedHouse(${myHousesTab[i].id})"  style="margin-right: 10px; width: 100px; height: 60px;">Manage rooms</button>
                          <button class="btn btn-danger" onclick="deleteHouse(${i})"  style="margin-right: 10px; width: 100px; height: 60px;">Delete</button>
                          <button class="btn btn-warning" onClick="updateHouse(${myHousesTab[i].id})"  style="margin-right: 10px; width: 100px; height: 60px;">Update</button>
                      </div>
                  </td>
              </tr>`;
      }
  }

  document.getElementById("myHouses").innerHTML = content;
}


function selectedHouseAdmin(id) {
  localStorage.setItem("selectedHouseAdmin", id);
  location.replace("displayRoomsForAdmin.html");
}

function selectedHouse(id) {
    localStorage.setItem("selectedHouse", id);
    location.replace("roomsOfTheHouse.html");
  }
  
  function addRoom() {
    var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
    var selectedHouseId = JSON.parse(localStorage.getItem("selectedHouse") || "[]");
    for (var i = 0; i < housesTab.length; i++) {
        if (housesTab[i].id == selectedHouseId) {
          selectedHouse = housesTab[i];
          break;
        }
      }
  
      if (selectedHouse.rooms.length >= 5) {
        document.getElementById("addError").innerHTML=" you have reached max rooms"
    } else{
        document.getElementById("addError").innerHTML=""
    }
    var roomName = document.getElementById("rName").value;
    isValidRoomName=checkLength(roomName,2)
    if (isValidRoomName==false) {
      document.getElementById("roomNameError").innerHTML="please check the name"
  }else{
      document.getElementById("roomNameError").innerHTML=""  
  }
    var capacity = document.getElementById("capacity").value;
    isValidRoomCapacity=checkValue(capacity,1)
    if (isValidRoomCapacity==false) {
      document.getElementById("capacityError").innerHTML="please check capacity"
  }else{
      document.getElementById("capacityError").innerHTML=""  
  }
    var description = document.getElementById("rDescription").value;
    isValidRoomDescrition=checkLength(description,2)
    if (isValidRoomDescrition==false) {
      document.getElementById("rDescriptionError").innerHTML="please check the description"
  }else{
      document.getElementById("rDescriptionError").innerHTML=""  
  }
    var prix = document.getElementById("prix").value;
 isValidPrice=checkValue(prix,1)
 if (isValidPrice==false) {
  document.getElementById("priceError").innerHTML="please check the price"
}else{
  document.getElementById("priceError").innerHTML=""  
}


if (selectedHouse.rooms.length < 5 && isValidRoomName && isValidRoomCapacity && isValidRoomDescrition && isValidPrice) {
  

    var room = {
      id:generateId(selectedHouse.rooms)+1,
      rName: roomName,
      capacity: capacity,
      rDescription: description,
      prix: prix,
      houseId: selectedHouse.id 
    };
  
   
  
    selectedHouse.rooms.push(room);
  
    localStorage.setItem("houses", JSON.stringify(housesTab));
  }
}

  function checkValue(x,y) {
    return(x>=y);
}
  

function displayRoomsOfTheHouse() {
    var selectedHouseId = JSON.parse(localStorage.getItem("selectedHouse") || "[]");
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var ownerId = localStorage.getItem("connectedUserId");
  var content = "";
  for (var i = 0; i < housesTab.length; i++) {
    if (housesTab[i].ownerId == ownerId && housesTab[i].id == selectedHouseId) {
      var selectedHouse = housesTab[i];
      for (var j = 0; j < selectedHouse.rooms.length; j++) {
        
   
        content += `
        <tr>
          <td>${selectedHouse.rooms[j].id}</td>
          <td>${selectedHouse.rooms[j].rName}</td>
          <td>${selectedHouse.rooms[j].capacity}</td>
          <td>${selectedHouse.rooms[j].rDescription}</td>
          <td>${selectedHouse.rooms[j].prix}</td>
        
      
    
    <td>
    <button class="btn btn-danger" onclick="deleteRoom(${selectedHouse.rooms[j].id})">Delete </button>
    <button class="btn btn-warning" onClick="updateRoom(${selectedHouse.rooms[j].id})">update </button>
    </td>
</tr>`
} 
}
  }
document.getElementById("roomsOftheHouse").innerHTML=content;


}


function deleteRoom(roomId) {
    var selectedHouseId = JSON.parse(localStorage.getItem("selectedHouse") || "[]");
    var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  
    for (var i = 0; i < housesTab.length; i++) {
      if (housesTab[i].id == selectedHouseId) {
        var selectedHouse = housesTab[i];
       
          for (var j = 0; j < selectedHouse.rooms.length; j++) {
            if (selectedHouse.rooms[j].id == roomId) {
              selectedHouse.rooms.splice(j, 1); 
              break;
            }
          }
        
        housesTab[i] = selectedHouse; 
      break
      
      }
    }
    localStorage.setItem("houses", JSON.stringify(housesTab)); 
    location.reload();
}

function updateRoom(roomId) {
    var selectedHouseId = JSON.parse(localStorage.getItem("selectedHouse") || "[]");
    var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  
    for (var i = 0; i < housesTab.length; i++) {
      if (housesTab[i].id == selectedHouseId) {
        var selectedHouse = housesTab[i];
  
        if (selectedHouse) {
          for (var j = 0; j < selectedHouse.rooms.length; j++) {
            if (selectedHouse.rooms[j].id == roomId) {
              
  
              var content = `
                <form action="#" class="contact-form">
                  <h2 class="text-center my-3">Update Room</h2>
                  <div class="row">
                    <div class="col-lg-12">
                      <input type="text" placeholder="Name" id="upName"  value="${selectedHouse.rooms[j].rName}" style="border: 1px solid #dfa974; color: black !important;">
                    </div>
                    <span id="NameError"></span>
                    <div class="col-lg-12">
                      <input type="number" placeholder="Capacity" id="upCapacity"  value="${selectedHouse.rooms[j].capacity}" style="border: 1px solid #dfa974; color: black !important;">
                    </div>
                    <span id="capacityError"></span>
                    <div class="col-lg-12">
                      <input type="text" placeholder="Description" id="upDescription"  value="${selectedHouse.rooms[j].rDescription}" style="border: 1px solid #dfa974; color: black !important;">
                    </div>
                    <span id="descriptionError"></span>
                    <div class="col-lg-12">
                      <input type="text" placeholder="Price" id="upPrice" value="${selectedHouse.rooms[j].prix}" style="border: 1px solid #dfa974; color: black !important;" >
                    </div>
                    <span id="priceError"></span>
                    <div class="col-lg-12 text-center">
                      <button type="button" onClick="validateUpdate(${roomId})">Update</button>
                      <span id="updateError"></span>
                    </div>
                  </div>
                </form>
              `;
  
              document.getElementById("updateRoom").innerHTML = content;
              
            }
          }
        }
       
      }
    }
  }
  
  function validateUpdate(roomId) {
    var selectedHouseId = JSON.parse(localStorage.getItem("selectedHouse") || "[]");
    var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  
    for (var i = 0; i < housesTab.length; i++) {
      if (housesTab[i].id == selectedHouseId) {
        var selectedHouse = housesTab[i];
  
        if (selectedHouse.rooms) {
          for (var j = 0; j < selectedHouse.rooms.length; j++) {
            if (selectedHouse.rooms[j].id == roomId) {
              
  
              // Update the room properties
              selectedHouse.rooms[j].rName = document.getElementById("upName").value;
              selectedHouse.rooms[j].capacity = document.getElementById("upCapacity").value;
              selectedHouse.rooms[j].rDescription = document.getElementById("upDescription").value;
              selectedHouse.rooms[j].prix = document.getElementById("upPrice").value;
              
            }
          }
        }
  
        
      }
    }
  
    localStorage.setItem("houses", JSON.stringify(housesTab)); 
  
    location.reload();
  }


  function updateHouse(houseId) {
    var houseToUpdate = searchObjByidAndKey("houses", houseId);
  
    if (houseToUpdate) {
      var content = `<form action="#" class="contact-form">
        <h2 class="text-center my-3">Update House</h2>
        <div class="row">
            <div class="col-lg-12">
                <input type="text" placeholder="Name" id="upHName" style="border: 1px solid #dfa974; color: black !important;" value="${houseToUpdate.hName}">
            </div>
            <span id="NameError"></span>
            <div class="col-lg-12">
                <input type="text" placeholder="Adresse" id="upAdresse" style="border: 1px solid #dfa974; color: black !important;" value="${houseToUpdate.adresse}">
            </div>
            <span id="adresseError"></span>
            <div class="col-lg-12">
                <input type="text" placeholder="Description" id="upDescription" style="border: 1px solid #dfa974; color: black !important;" value="${houseToUpdate.description}">
            </div>
            <span id="descError"></span>
            <div class="col-lg-12">
                <input type="text" placeholder="Ville" id="upVille" style="border: 1px solid #dfa974; color: black !important;" value="${houseToUpdate.ville}">
            </div>
            <span id="villeError"></span>
            <div class="col-lg-12 text-center">
                <button type="submit" onClick="validateHouseUpdate(${houseId})">Update</button>
            </div>
        </div>
    </form>`;
  
      document.getElementById("updateHouse").innerHTML = content;
    }
  }
  
  
  function validateHouseUpdate(houseId) {
    var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  
    for (var i = 0; i < housesTab.length; i++) {
      if (housesTab[i].id == houseId) {
        var house = housesTab[i];
  
        // Update the house details
        house.hName = document.getElementById("upHName").value;
        house.adresse = document.getElementById("upAdresse").value;
        house.description = document.getElementById("upDescription").value;
        house.ville = document.getElementById("upVille").value;
      }
    }
  
    localStorage.setItem("houses", JSON.stringify(housesTab));
    location.reload();
  }
  function searchObjByidAndKey(key,id) {
    var t=JSON.parse(localStorage.getItem(key)||"[]");
    var findedObj;
    for (let i = 0; i < t.length; i++) {
        if (t[i].id==id) {
            findedObj=t[i];
            break;
        }
        
    }
    return findedObj;
}

//////////////// partie client
function displayHousesClient() {
  var housesTab=JSON.parse(localStorage.getItem("houses") || "[]");
  var content="";
  for (let i = 0; i < housesTab.length; i++) {
      content=content+` <div class="col-lg-4 col-md-6">
      <div class="room-item">
          <img src="img/room/room-1.jpg" alt="">
          <div class="ri-text">
              <h4>${housesTab[i].hName}</h4>
             
              <table>
                  <tbody>
                      <tr>
                          <td class="r-o">Adresee:</td>
                          <td>${housesTab[i].adresse} ft</td>
                      </tr>
                      <tr>
                          <td class="r-o">Ville:</td>
                          <td>${housesTab[i].ville}</td>
                      </tr>
                      <tr>
                          <td class="r-o">Description:</td>
                          <td>${housesTab[i].description}</td>
                      </tr>
                     
                  </tbody>
              </table>
              <a href="roomsClient.html" onclick="selectedHouseClient(${housesTab[i].id})" class="primary-btn">More Details</a>
          </div>
      </div>
  </div>`
  
      
  }


  
  document.getElementById("house").innerHTML=content;
}
function selectedHouseClient(id) {
  localStorage.setItem("selectedHouse", id);
 
}

function displayRoomsClient() {
  var selectedHouseId = localStorage.getItem("selectedHouse");
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  
  var findedHouse;
  for (let i = 0; i < housesTab.length; i++) {
      if (housesTab[i].id==selectedHouseId) {
        findedHouse=housesTab[i];
          break;
      }
      
  }
  
    var rooms = findedHouse.rooms;
    var content = "";
    for (let i = 0; i < rooms.length; i++) {
      content += ` <div class="col-lg-4 col-md-6">
      <div class="room-item">
          <img src="img/room/room-1.jpg" alt="">
          <div class="ri-text">
              <h4>${rooms[i].rName}</h4>
             
            
              <a href="roomsClientDetails.html" onclick="roomDetails(${rooms[i].id})" class="primary-btn">Room details</a>
          </div>
      </div>
  </div>`;
    

    document.getElementById("room").innerHTML = content;
  } 

}


function roomDetails(roomId) {
  localStorage.setItem("selectedRoom", roomId);
  location.replace("roomsClientDetails.html");
}



function displayRoomDetails() {
  var selectedHouseId = localStorage.getItem("selectedHouse");
  var selectedRoomId = localStorage.getItem("selectedRoom");
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");

  var selectedHouse;
  var selectedRoom;

  for (let i = 0; i < housesTab.length; i++) {
    if (housesTab[i].id == selectedHouseId) {
      selectedHouse = housesTab[i];
      break;
    }
  }

  
    var rooms = selectedHouse.rooms;

    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].id == selectedRoomId) {
        selectedRoom = rooms[i];
        break;
      }
    }
  

  
    var content = `
    <div class="col-lg-8">
    <div class="room-details-item">
        <img src="img/room/room-details.jpg" alt="">
        <div class="rd-text">
            <div class="rd-title">
                <h3>${selectedRoom.rName}</h3>
               
            </div>
           
            <table>
                <tbody>
                   
                    <tr>
                        <td class="r-o">Capacity:</td>
                        <td>${selectedRoom.capacity}</td>
                    </tr>
                    <tr>
                        <td class="r-o">Prix:</td>
                        <td>${selectedRoom.prix}</td>
                    </tr>
                    <tr>
                        <td class="r-o">Description:</td>
                        <td>${selectedRoom.rDescription}</td>
                    </tr>
                </tbody>
            </table>
           
        </div>
    </div>
 
</div>`;

    document.getElementById("roomDetails").innerHTML = content;
  }

  function reserve() {
    var reservationsTab = JSON.parse(localStorage.getItem("reservations") || "[]");
    var nbPlaces = document.getElementById("nbPlaces").value;
   
    var selectedHouseId = localStorage.getItem("selectedHouse");
    var selectedRoomId = localStorage.getItem("selectedRoom");
    var userId = localStorage.getItem("connectedUserId");
    var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  


    var dateIn = document.getElementById("dateIn").value;
    var dateOut = document.getElementById("dateOut").value;
    var isValidDate =checkDate (dateOut, dateIn);
    if (!isValidDate) {
      document.getElementById("validDate").innerHTML = "The check-in date must be before the check-out date.";
      return;
    } else {
      document.getElementById("validDate").innerHTML = "";
    }
//////////in and out not empty
if (dateIn == "" || dateOut == "") {
  document.getElementById("validDate").innerHTML = "Please select check-in and check-out dates.";
  return;
} else {
  document.getElementById("validDate").innerHTML = "";
}
//////nb places not empty
var isvalidNb=checkValue(nbPlaces,1)
if (!isvalidNb) {
  document.getElementById("nbPlacesError").innerHTML = "Please select nb places.";
 
} else {
  document.getElementById("nbPlacesError").innerHTML = "";
}
  
    // Find the selected house
    var selectedHouse;
    for (let i = 0; i < housesTab.length; i++) {
      if (housesTab[i].id == selectedHouseId) {
        selectedHouse = housesTab[i];
        break;
      }
    }
  
    // Find the selected room
    var selectedRoom;
    for (let i = 0; i < selectedHouse.rooms.length; i++) {
      if (selectedHouse.rooms[i].id == selectedRoomId) {
        selectedRoom = selectedHouse.rooms[i];
        break;
      }
    }
  
    // Check if the room is already reserved
    var isRoomReserved = false;
    for (let i = 0; i < reservationsTab.length; i++) {
      var reservation = reservationsTab[i];
      if (reservation.roomId == selectedRoomId) {
        if (dateIn < reservation.dateOut && dateOut > reservation.dateIn) {
          isRoomReserved = true;
          break;
        }
      }
    }
  
    if (isRoomReserved) {
      document.getElementById("reservError").innerHTML = "Room already reserved";
      return;
    } else {
      document.getElementById("reservError").innerHTML = "";
    }
  
    // Check if the number of places is within the room's capacity
    if (nbPlaces > selectedRoom.capacity) {
      document.getElementById("capacityError").innerHTML = "The number of rooms requested is more than the capacity";
      return;
    } else {
      document.getElementById("capacityError").innerHTML = "";
    }
  if (isValidDate && !isRoomReserved && nbPlaces <= selectedRoom.capacity && (dateIn != "" || dateOut != "") && isvalidNb) {
    
  
    // Perform reservation logic
    var newReservation = {
      id:generateId(reservationsTab)+1,
      userId: userId,
      houseId:selectedHouseId,
      roomId: selectedRoomId,
      roomName: selectedRoom.rName, 
      roomPrice: selectedRoom.prix,
      dateIn: dateIn,
      dateOut: dateOut,
      nbPlaces: nbPlaces
      
    };
  
    reservationsTab.push(newReservation);
    localStorage.setItem("reservations", JSON.stringify(reservationsTab));
  
  }
  }
  
  function checkDate(a, b) {
    return a >= b;
  }




  function displayReservations() {
    var reservationsTab = JSON.parse(localStorage.getItem("reservations") || "[]");
    var userId = localStorage.getItem("connectedUserId");
    var sum = 0;
  
    var content = "";
  
    for (let i = 0; i < reservationsTab.length; i++) {
      if (reservationsTab[i].userId == userId) {
        var house = searchObjByidAndKey("houses",reservationsTab[i].houseId);
        if (house) {
          sum += parseFloat(reservationsTab[i].roomPrice);
          content += `<tr>
            <td>${reservationsTab[i].id}</td>
            <td>${searchObjByidAndKey("users", userId).fName}  ${searchObjByidAndKey("users", userId).lName}</td>
            <td>${house.hName}</td>
            <td>${reservationsTab[i].roomName}</td>
            <td>${reservationsTab[i].dateIn}</td>
            <td>${reservationsTab[i].dateOut}</td>
            <td>${reservationsTab[i].nbPlaces}</td>
            <td>${reservationsTab[i].roomPrice}</td>
            <td>
              <button class="btn btn-danger" onClick="deleteReservation(${i})">Annuler</button>
            </td>
          </tr>`;
        }
      }
    }
  
    content += `<tr><td colspan="8">Total</td><td>${sum}</td></tr>`;
    
    document.getElementById("allReservations").innerHTML = content;
  
  }
  
  
  function findHouseById(houseId) {
    var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
    for (let i = 0; i < housesTab.length; i++) {
      if (housesTab[i].id == houseId) {
        return housesTab[i];
      }
    }
    return null;
  }
  
  
  function deleteReservation(reservationIndex) {
    var reservationsTab = JSON.parse(localStorage.getItem("reservations") || "[]");
     reservationsTab.splice(reservationIndex, 1);
    localStorage.setItem("reservations", JSON.stringify(reservationsTab));
  
    location.reload();
  }


  function generateHeader() {
    var connectedUserId=localStorage.getItem("connectedUserId");
    var connectedUser=searchObjByidAndKey("users",connectedUserId);
    var content="";
    if (connectedUserId) {
        ///////user connected
        if (connectedUser.role=="client") {
            content=content+` <li ><a href="index1.html">Home</a></li>
            <li ><a href="cart.html">Cart</a></li>
            <li ><a href="housesClient.html">Houses</a></li>
            <li ><a href="search.html">Search</a></li>
            <li ><a onClick="logout()">Logout</a></li>
            `
        } else if (connectedUser.role=="owner") {
            content=content+`<li ><a href="index1.html">Home</a></li>
            <li ><a href="myHouses.html">My houses</a></li>
            <li ><a href="addHouse.html">Add houses</a></li>
            <li ><a onClick="logout()">Logout</a></li>
            `
        } else {
            content=content+`<li ><a href="index1.html">Home</a></li>
            
            <li ><a href="admin.html">Administration</a></li>
            <li ><a onClick="logout()">Logout</a></li>
            `
        }

    } else{
        content=content+`  <li ><a href="index1.html">Home</a></li>
        <li >Are you a <a  href="signup.html"> client</a> Or an <a  href="signupOwner.html"> Owner</a> </li>
        <li><a href="login.html">Login</a></li>
        `

    }
    document.getElementById("displayHeader").innerHTML=content;
}


function logout() {
    localStorage.removeItem("connectedUserId");
    location.replace("index1.html");
}


function searchR() {
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var searchInput = document.getElementById("search").value;
  var searchResultsTab = [];

  for (let i = 0; i < housesTab.length; i++) {
    if (housesTab[i].hName == searchInput || housesTab[i].adresse == searchInput) {
      searchResultsTab.push(housesTab[i]);
    }
  }

  localStorage.setItem("searchResults", JSON.stringify(searchResultsTab));
  location.replace("searchResults.html");
}



function displaySearch() {
  var searchResultsTab = JSON.parse(localStorage.getItem("searchResults") || "[]");
  var content = "";

  for (var i = 0; i < searchResultsTab.length; i++) {
    content += `
      <div class="col-lg-4 col-md-6">
        <div class="room-item">
          <img src="img/room/room-1.jpg" alt="">
          <div class="ri-text">
            <h4>${searchResultsTab[i].hName}</h4>
            <table>
              <tbody>
                <tr>
                  <td class="r-o">Address:</td>
                  <td>${searchResultsTab[i].adresse} ft</td>
                </tr>
                <tr>
                  <td class="r-o">Ville:</td>
                  <td>${searchResultsTab[i].ville}</td>
                </tr>
                <tr>
                  <td class="r-o">Description:</td>
                  <td>${searchResultsTab[i].description}</td>
                </tr>
              </tbody>
            </table>
            <a href="roomsClient.html" onclick="selectedHouseClient(${searchResultsTab[i].id})" class="primary-btn">More Details</a>
          </div>
        </div>
      </div>`;
  }

  document.getElementById("searchResults").innerHTML = content;
}



function reservationsAdmin() {
  var reservationsTab = JSON.parse(localStorage.getItem("reservations") || "[]");
 
  var content = "";

  for (let i = 0; i < reservationsTab.length; i++) {
    var userId = reservationsTab[i].userId;
    var house = searchObjByidAndKey("houses",reservationsTab[i].houseId);
    if (house) {
     
      content += `<tr>
        <td>${reservationsTab[i].id}</td>
        <td>${searchObjByidAndKey("users", userId).fName}  ${searchObjByidAndKey("users", userId).lName}</td>
        <td>${house.hName}</td>
        <td>${reservationsTab[i].roomName}</td>
        <td>${reservationsTab[i].dateIn}</td>
        <td>${reservationsTab[i].dateOut}</td>
        <td>${reservationsTab[i].nbPlaces}</td>
        <td>${reservationsTab[i].roomPrice}</td>
        <td>
          <button class="btn btn-danger" onClick="deleteReservation(${i})">delete</button>
        </td>
      </tr>`;
    }
  }

 
  document.getElementById("reservationsAdmin").innerHTML = content;
}


function displayOwnerReservations() {
  var reservationsTab = JSON.parse(localStorage.getItem("reservations") || "[]");
  var userId = localStorage.getItem("connectedUserId");
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var sum = 0;

  var content = "";

  for (let i = 0; i < reservationsTab.length; i++) {
    var reservation = reservationsTab[i];
    var house = searchObjByidAndKey("houses",reservation.houseId);

    if (house && house.ownerId == userId) {
     
     
        sum += parseFloat(reservation.roomPrice);
        content += `<tr>
          <td>${reservation.id}</td>
          <td>${searchObjByidAndKey("users", reservation.userId).fName} ${searchObjByidAndKey("users", reservation.userId).lName}</td>
          <td>${house.hName}</td>
        <td>${reservationsTab[i].roomName}</td>
        <td>${reservationsTab[i].dateIn}</td>
        <td>${reservationsTab[i].dateOut}</td>
        <td>${reservationsTab[i].nbPlaces}</td>
        <td>${reservationsTab[i].roomPrice}</td>
          <td>
            <button class="btn btn-danger" onClick="deleteReservation(${i})">delete</button>
          </td>
        </tr>`;
      
    }
  }

  content += `<tr><td colspan="8">Total</td><td>${sum}</td></tr>`;
  document.getElementById("ownerReservations").innerHTML = content;
}


















 









  
  
  
  
  
  










