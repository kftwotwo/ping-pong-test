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
    var input = $("input").val();
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



// var pingPong = function(number) {
//   var numberCount = 0;
//   var numbersList = [];
//   for (var i = 1; i < number; i++) {
//     numberCount++;
//     numbersList.push(numberCount);
//   }
//
//   for (var i = 0; i < numbersList.length; i++) {
//     if (numbersList[i] % 15 == 0) {
//       numbersList[i] = "ping pong";
//     } else if (numbersList[i] % 5 == 0) {
//       numbersList[i] = "pong";
//     } else if (numbersList[i] % 3 == 0) {
//       numbersList[i] = "ping";
//     }
//   }
//   return numbersList;
// }
// // Front end
// $(function() {
//   $("#pingpong").submit(function(event){
//     event.preventDefault();
//     var input = $("input").val();
//     var results = pingPong(input);
//     $("#output").empty();
//     results.forEach(function(result) {
//       if (result === "ping pong") {
//         $("#output").prepend("<li class=\"pingPong\">" + result + "</li>");
//       } else if (result === "pong") {
//         $("#output").prepend("<li class=\"pong\">" + result + "</li>");
//       } else if (result === "ping") {
//         $("#output").prepend("<li class=\"ping\">" + result + "</li>");
//       } else {
//         $("#output").prepend("<li>" + result + "</li>");
//       }
//     })
//   })
// })
