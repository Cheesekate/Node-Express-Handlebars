// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("testing");
$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).attr("id");

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT"
    }).then(function () {
      location.reload();
    });
  });

  // Add burger
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burgers_name: $("#name").val().trim(),
      eaten: 0,
    };

    if (!newBurger.burgers_name) return;

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).attr("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      location.reload();
    });
  });
});
