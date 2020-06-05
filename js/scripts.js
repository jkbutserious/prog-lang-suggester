// Business Logic

// User Interface Logic
$(document).ready(function() {
  $("#prog-quiz").submit(function(event) {
    const experience = parseInt($("#years-exp").val());
    const product = parseInt($("#objective").val());
    const sourceType = $("input:radio[name=open-closed]:checked").val();
    const appType = $("input:radio[name=app-type]:checked").val();
    const favMovie = $("input#favorite-movie").val();

    $("#output").fadeToggle();
    
    if (experience === 1) {
      $("#result").text("C++");
      $("#explanation").text("Many object-oriented programming languages are based on C++ and the knowledge you gain will provide a good foundation for your programming journey.");
    }
    else if (experience > 1) {
      if (product < 3 && sourceType === "open") {
        $("#result").text("JavaScript");
        $("#explanation").text("JavaScript will help you learn how to make web pages dynamic and interactive and has many elements in common with other programming languages. It's a solid choice for any programmer because of how widely it is used.");
      }
      else if (product < 3 && sourceType === "closed") {
        $("#result").text("C#");
        $("#explanation").text("C# is a programming language that is developed and controlled by Microsoft Corporation and is widely used in web-based applications as well as Windows desktop apps.");
      }
      else if (product === 3) {
        $("#result").text("Java");
        $("#explanation").text("Java is an extremely versatile language that is used in many of the most popular applications and games. Learning Java is a great place to start, even if you are considering learning more specialized languages for game development.");
      }
      // The answer to question 4 is ignored for the purposes of a result
    }

    if (favMovie) {
      $("#movie").text("Also, people who enjoy " + favMovie + " love learning this language!");
    }
    else {
      $("#movie").text("But, since you didn't tell me your favorite movie, we'll never know if you'll enjoy learning this language, or not...");
    }

    event.preventDefault();

  });
});