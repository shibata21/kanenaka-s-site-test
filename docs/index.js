$(document).ready(function () {
  //お問い合わせフォーム処理
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/5/d/e/1FAIpQLSd78_QOCOJVhgG4u4ODoIDr2XH1r71JeADlDKWCBzBXoTMIBA/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $("#end-message").slideDown();
          $("#form").fadeOut();
        },
        200: function () {
          $("#false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

  //topへボタン
  let mybutton = document.getElementById("btn-back-to-top");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  $('#open').on('click', function(){
    $('.menu').toggleClass('is-active');
  });


  $('.jump').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
});