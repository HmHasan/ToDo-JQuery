$(document).ready(function () {

  $("form").submit(function (e) {
    e.preventDefault();
    let task = $(".form-control").val();
    if (task.length < 5) {
      $("#error").text("Minimum Required 5 characters");
    } else {
      let date = new Date().getDate();
      let month = new Date().getMonth();
      let year = new Date().getFullYear();
      $("#error").text("");
      let html =
        '<li class="list-group-item">' +
        task +
        '<span class="close">x</span> </li>';
      $(".list-group").prepend(html);
      if ($(".list-group").children().length > 0) {
        $("#status").hide();
      } else {
        $("#status").show();
      }
      $(".form-control").val("");
    }
  });
  $(".list-group").on("click", ".close", function () {
    $(this).parents("li").remove();
    const x = $(".list-group").find("li");
    if (x.length < 1) {
      $("#status").show();
    } else {
      $("#status").hide();
    }
  });

  $(".list-group-item").sortable();
});
