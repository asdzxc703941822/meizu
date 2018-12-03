$.ajax({
  url:'http://localhost:3000/footer.html',
  success: function(result) {
    $('.xu_index').append(result);
    var str = '<link rel="stylesheet" href="css/footer.css">';
    $('head').append(str);
  }
})