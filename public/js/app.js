$(document).ready(function() {

  $('.seller-submit').on('click', function() {
    var data = {
      name: $('.seller-name').val(),
      email: $('.seller-email').val(),
      zip_code: $('.seller-zip').val(),
      phone: $('.seller-phone').val()
    }

    $.ajax({
      url: '/homes/seller',
      type: 'POST',
      data: data,
    }).done(function(data) {
      if (data) {
        console.log("sell home");
        $('.seller-name').val(''),
        $('.seller-email').val(''),
        $('.seller-zip').val(''),
        $('.seller-phone').val('')
        swal(
          'You’re Awesome!',
          'Thanks so much for sending us your information.  Your free report on how to sell your home fast is being delivered to the email address you entered right now.  In fact, it’s probably already there!',
          'success'
        )
      }
    });
    return false;
  });

  $('.top-seller-submit').on('click', function() {
    var data = {
      name: $('.top-seller-name').val(),
      email: $('.top-seller-email').val(),
      zip_code: $('.top-seller-zip').val(),
      phone: $('.top-seller-phone').val()
    }

    $.ajax({
      url: '/homes/top-seller',
      type: 'POST',
      data: data,
    }).done(function(data) {
      if (data) {
        console.log("sell home");
        $('.top-seller-name').val(''),
        $('.top-seller-email').val(''),
        $('.top-seller-zip').val(''),
        $('.top-seller-phone').val('')
        swal(
          'You’re Awesome!',
          'Thanks so much for sending us your information.  Your free report on how to sell your home fast is being delivered to the email address you entered right now.  In fact, it’s probably already there!',
          'success'
        )
      }
    });
    return false;
  });

  $('.buyer-submit').on('click', function() {
    var data = {
      name: $('.buyer-name').val(),
      email: $('.buyer-email').val(),
      zip_code: $('.buyer-zip').val(),
      phone: $('.buyer-phone').val()
    }

    $.ajax({
      url: '/homes/buyer',
      type: 'POST',
      data: data,
    }).done(function(data) {
      if (data) {
        console.log("sell home");
        $('.buyer-name').val('');
        $('.buyer-email').val('');
        $('.buyer-zip').val('');
        $('.buyer-phone').val('');
        swal(
          'You’re Awesome!',
          'Thanks so much for sending us your information.  We will get in touch with you shortly!',
          'success'
        )
      }
    });
    return false;
  });

  $('.sender-submit').on('click', function() {
    var data = {
      name: $('.sender-name').val(),
      email: $('.sender-email').val(),
      mssg: $('.sender-mssg').val()
    }

    $.ajax({
      url: '/send-message',
      type: 'POST',
      data: data,
    }).done(function(data) {
      if (data) {
        console.log("sell home");
        $('.sender-name').val('');
        $('.sender-email').val('');
        $('.sender-mssg').val('');
        swal(
          'Thank You',
          'We will respond to your message shortly',
          'success'
        )
      }
    });
    return false;
  });
  
});