$(function(){
  $('input[type=submit]').on('click',function(e){
    e.preventDefault();
    var uname = $('input[type=text]').val();
    var upwd = $('input[type=password]').val();
    $.ajax({
      url:'http://localhost:3000/user/',
      data:{uname,upwd},
      type:'post',
      success:function(result){
        console.log(result)
        console.log(uname)
        if(result.ok == 1){
          if(location.search !=''){
            var url = location.search.slice(6);
            location.href = url;
          }else{
            location.href = 'http://localhost:3000/';
          }
        }
      }
    })
  })
})