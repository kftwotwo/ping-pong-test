
var pingPong = function(num) {
  var list = [];
  for (i = 1; i<= num; i++) {
    if (i % 15 == 0) {
      list.push("Ping-Pong");
    } else if (i % 5 == 0) {
     list.push("Pong");
    } else if (i % 3 == 0) {
     list.push("Ping");
    } else
     list.push(i);
  }
  return list;
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input = $("#userInput").val();
    var results = pingPong(input);
    $("#output").empty();
    results.forEach(function(result) {
      $("#output").append("<li class='result'>" + result + "</li>");
    });
  })
})


// original console and works
// var i;
  // for (i = 1; i<= 30; i++) {
  //   if (i % 15 == 0) {
  //     console.log("Ping Pong");
  //   } else if (i % 5 == 0) {
  //    console.log("Ping");
  //   } else if (i % 3== 0) {
  //    console.log("Pong");
  //   } else
  //    console.log(i)
  // }
