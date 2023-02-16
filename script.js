$(function () {
  const sliderIntervel = setInterval(swapImages, 1000);
  function swapImages() {
    let active = $(".active");
    var next =
      $(".active").next().length > 0
        ? $(".active").next()
        : $(".slider div:first");
    next.addClass("active");
    active.removeClass("active");
  }
  $(".btn-stop").on("click", (e) => {
    clearInterval(sliderIntervel);
  });
  $(".card").on("click", (e) => {
    $(e.target).next(".content").slideToggle("slow");
  });
});
