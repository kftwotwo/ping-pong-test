var i;
var list = [];

var pingPong = function(num) {
  for (i = 1; i<= num; i++) {
    if (i % 15 == 0) {
      lsit[i] = "Ping Pong";
    } else if (i % 5 == 0) {
     list[i] = "Ping";
    } else if (i % 3== 0) {
     list[i] = "Pong";
    } else
     list[i];
  }
  return list;
}

$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();
    var input = $("userInput").val();
    var results = pingPong(input);
    $("#output").empty();
    results.forEach(function(result) {
      if (result == "Ping Pong") {
        $("#output").text("<li>" + result + "</li>");
      } else if (result = "pong") {
        $("#output").text("<li>" + result + "</li>");
      } else if (result = "ping") {
        $("#output").text("<li>" + result + "</li>");
      } else {
        $("#output").text("<li>" + result + "</li>");
      }
    })
  })
})



// var i;
//   for (i = 1; i<= 15; i++) {
//     if (i % 15 == 0) {
//       console.log("Ping Pong");
//     } else if (i % 5 == 0) {
//      console.log("Ping");
//     } else if (i % 3== 0) {
//      console.log("Pong");
//     } else
//      console.log(i)
//   }
