// Business Logic

// User Interface Logic
$(document).ready(function() {
  $("#prog-quiz").submit(function(event) {
    event.preventDefault();
    const experience = parseInt($("input#years-exp").val());
    const product = parseInt($("#objective").val());
    const sourceType = $("input:radio[name=open-closed]:checked").val();
    const appType = $("input:radio[name=app-type]:checked").val();
    const favMovie = $("input#favorite-movie").val();

    if (experience) {
      $("result").text("Please enter your programming experience as a number.");
    }
    else if (experience === 0) {
      $("#result").text("C++");
      $("#explanation").text("Many object-oriented programming languages are based on C++ and the knowledge you gain will provide a good foundation for your programming journey.")
    }
    // else {
    //   if (product)
    // }
  });
});