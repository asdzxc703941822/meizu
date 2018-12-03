$(function(){
  $.ajax({
    url:'http://localhost:3000/nav.html',
    success: function(result) {
      $('.xu_index').prepend(result);
      if($('.xu_nav').siblings().length < 3){
        $('.nav_main').addClass('active')
      }
      var link = '<link rel="stylesheet" href="css/nav.css">';
      $("head").append(link);
      //
      var $Navlist = $('.xu_nav>.nav_main>ul>li>a');
      var $login_btn = $('.xu_nav>.nav_main>a.login');
      var timer = null;
      //图标
      var c1 = document.getElementById('search_icon')
      var cxh = c1.getContext('2d');
      cxh.strokeStyle='#000';
      cxh.lineWidth=2;
      cxh.beginPath();
      cxh.arc(8,8,7,0,2*Math.PI);
      cxh.stroke();
      //
      cxh.beginPath();
      cxh.moveTo(14,14);
      cxh.lineTo(19,19);
      cxh.stroke();
      //登陆按钮
      $login_btn.hover(function(){
        clearInterval(timer);
        timer = null;
        $('.xu_nav>.nav_main>div.login_list').show();
      },function(){
        timer = setInterval(function(){
          $('.xu_nav>.nav_main>div.login_list').hide();
          clearInterval(timer);
        },1000)
      })
      $('.xu_nav>.nav_main>div.login_list').hover(function(){
        $(this).show();
        clearInterval(timer);
        timer = null;
      },function(){
        $(this).hide();
      })
      //下拉图片
      $Navlist.hover(function(){
        $('.nav_main').addClass('active');
        $('.nav_mask').addClass('active');
      })
      $('.nav_mask').mouseleave(function(){
        $(this).removeClass('active');
        if($('.xu_nav').siblings().length >= 3){
          $('.nav_main').removeClass('active');  
        }
      })
      //登陆跳转
      var login_btn = $('.login_list>ul>li:first-child>a');
      login_btn.click(function(e){
        e.preventDefault();
        var url = location.href;
        location.href = 'http://localhost:3000/login.html?back='+url;
      })
      console.log(login_btn) 
      //登陆验证
      $.ajax({
        url:'http://localhost:3000/user/islogin',
        type:'get',
        success:function(result){
          if(result.ok == 1){
            $('.login_list>ul>li:first-child>a').html(result.msg)
          }
        }
      })
    }
  })
})