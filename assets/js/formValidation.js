$(document).ready(function() {

  var form = $('#form'),
      name = $('#name'),
      email = $('#email'),
      subject = $('#subject'),
      message = $('#message'),
      submit = $("#submit");
  
  form.on('change', '#name', '#email, #subject, #message', function() {
    $(this).css('border-color', '');
  });
  
  submit.on('click', function(e) {
    e.preventDefault();
    if(validate()) {
      $.ajax({
        type: "POST",
        url: "mailer.php",
        data: form.serialize(),
        dataType: "json"
      }).done(function(data) {
        if(data.success) {
          email.val('');
          subject.val('');
          message.val('');
          info.html('Message sent!').css('color', 'green').slideDown();
        } else {
          info.html('Could not send mail! Sorry!').css('color', 'red').slideDown();
        }
      });
    }
  });
  
  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log(name.val());
    if($.trim(name.val()) === "") {
      name.css('border-color', 'red');
      valid = false;
    }
    if(!regex.test(email.val())) {
      email.css('border-color', 'red');
      valid = false;
    }
    if($.trim(subject.val()) === "") {
      subject.css('border-color', 'red');
      valid = false;
    }
    if($.trim(message.val()) === "") {
      message.css('border-color', 'red');
      valid = false;
    }
    
    return valid;
  }

});