// Business Logic

// User Interface Logic
$(document).ready(function() {
  $("#prog-quiz").submit(function(event) {
    event.preventDefault();
    const experience = parseInt($("input#years-exp").val());
    const product = parseInt($(#objective).val());
    const sourceType = $("input:radio[name=open-closed]:checked").val();
    const appType = $("input:radio[name=app-type]:checked").val();
    const favMovie = $("input#favorite-movie").val();
  })
})