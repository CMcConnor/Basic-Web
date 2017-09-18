$(function() {
  $("#cat-button").click(function(){
    console.log("Cat");
    $("#all-button").removeClass("is-active");
    $("#cat-button").addClass("is-active");
    $("#dog-button").removeClass("is-active");
    $("#giraffe-button").removeClass("is-active");
    $( ".columns" ).find(".has-dog").hide();
    $( ".columns" ).find(".has-giraffe").hide();
    $( ".columns" ).find(".has-cat").show();
  })

  $("#dog-button").click(function(){
    console.log("Dog");
    $("#all-button").removeClass("is-active");
    $("#cat-button").removeClass("is-active");
    $("#dog-button").addClass("is-active");
    $("#giraffe-button").removeClass("is-active");
    $( ".columns" ).find(".has-cat").hide();
    $( ".columns" ).find(".has-giraffe").hide();
    $( ".columns" ).find(".has-dog").show();
  })

  $("#giraffe-button").click(function(){
    console.log("Giraffe");
    $("#all-button").removeClass("is-active");
    $("#cat-button").removeClass("is-active");
    $("#dog-button").removeClass("is-active");
    $("#giraffe-button").addClass("is-active");
    $( ".columns" ).find(".has-cat").hide();
    $( ".columns" ).find(".has-dog").hide();
    $( ".columns" ).find(".has-giraffe").show();
  })

  $("#all-button").click(function(){
    console.log("All");
    $("#all-button").addClass("is-active");
    $("#cat-button").removeClass("is-active");
    $("#dog-button").removeClass("is-active");
    $("#giraffe-button").removeClass("is-active");
    $(".columns").find(".column").show();
  })
});
