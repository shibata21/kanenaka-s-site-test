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

  });