$(document).ready(function () {
    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-Vgq0jL1BWyXUMUEH02DYWNri1dI1_jKNgeyWFCP7HKFE3Q/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
        console.log("aaaa");
            $("#end-message").slideDown();
            $("#form").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
        console.log("cccc");
            $("#false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });
// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
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
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  });