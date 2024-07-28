$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });

  $("#menu-click").click(function (e) {
    e.preventDefault();
    console.log($(this));
  });
  let subMenu = document.getElementsByClassName("sub-menu");
  console.log(subMenu);
});
