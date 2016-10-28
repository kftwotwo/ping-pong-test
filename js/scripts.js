var list = [];

var pingPong = function(num) {
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
    //   if (result == "Ping Pong") {
        $("#output").append("<li>" + result + "</li>");
      // } else if (result = "pong") {
        // $("#output").append("<li>" + results + "</li>");
      // } else if (result = "ping") {
        // $("#output").append("<li>" + results + "</li>");
      // } else {
        // $("#output").append("<li>" + results + "</li>");
    })
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
