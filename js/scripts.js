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

    if (experience === 1) {
      $("#result").text("C++");
      $("#explanation").text("Many object-oriented programming languages are based on C++ and the knowledge you gain will provide a good foundation for your programming journey.");
    }
    else if (experience > 1) {
      if (product === 1 || product === 2 && sourceType === "open") {
        $("#result").text("JavaScript");
        $("#explanation").text("JavaScript will help you learn how to make web pages dynamic and interactive and has many elements in common with other programming languages. It's a solid choice for any programmer because of how widely it is used.");
      }
      else if (product ===1 || product === 2 && sourceType === "closed") {
        $("#result").text("C#");
        $("#explanation").text("C# is a programming language that is developed and controlled by Microsoft Corporation and is widely used in web-based applications as well as Windows desktop apps.");
      }
    }
  }
});