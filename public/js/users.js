$(document).ready(function() {

getUsers();

 // Function for retrieving user information
 function getUsers() {
    $.get("/api/users", function(data) {
      console.log(data);
    });
  }


});
