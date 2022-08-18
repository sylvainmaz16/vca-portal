

//back to top button code pen
var btn = $('#top_button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$("#send_email").submit(function(e){
  e.preventDefault();
  var subject = $('#nameInput').val();
  var email = $('#emailInput').val();
  var message = $('#messageArea').val();
  var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + message;
  win = window.open(mailto_link, 'emailWindow');
  if (win && win.open && !win.closed) win.close();
});
