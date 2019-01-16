$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("input#enter").val();
    var userInputCap = userInput.toUpperCase();
    $(".userinput").text(userInputCap);
    $("#reply").show();
    event.preventDefault();
  })
})
