$(document).ready(function () {
  let screenWidth = screen.width;
  let slidesNumber = screenWidth > 900 ? 3 : 1;

  $(".slider").slick({
    infinite: true,
    slidesToShow: slidesNumber,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });

  $("#menu-click").click(function (e) {
    e.preventDefault();
    console.log($(this));
  });
  const subMenu = document.querySelector(".sub-menu");
  const assortment = document.querySelector(".assortment-btn");
  assortment.addEventListener("click", (e) => {
    if (subMenu.classList.contains("hide")) {
      subMenu.classList.remove("hide");
    } else {
      subMenu.classList.add("hide");
    }
  });
});
