$(document).ready(function () {
  $('.showNavbar').on('click', function (e) {
    e.preventDefault();
    $('.navbar').toggleClass('navbar-show');
    // console.log('點擊到');
  });
});