// Stop video playing after closing modal
$(document).ready(function () {
  var url = $(".video-iframe").attr("src");
  $(".modal").on("hide.bs.modal", function () {
    $(".video-iframe").attr("src", "");
  });
  $(".modal").on("show.bs.modal", function () {
    $(".video-iframe").attr("src", url);
  });
});
