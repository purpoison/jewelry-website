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
  const subMenu = document.querySelector(".sub-menu");
  console.log(subMenu);
  const assortment = document.querySelector(".assortment-btn");
  console.log(assortment);
  assortment.addEventListener("click", (e) => {
    console.log("hello");
    if (subMenu.classList.contains("hide")) {
      subMenu.classList.remove("hide");
    } else {
      subMenu.classList.add("hide");
    }
  });
});
