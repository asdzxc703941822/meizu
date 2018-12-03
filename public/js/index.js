$(function () {
  var $banner = $('.banner_list>ul');
  var $circle = $('.circle>ul');
  $banner.children().width($(window).width())
  $banner.width($(window).width() * $banner.children().length)
  var num = 0;
  var c_num = 0;
  //lunbo
  function move() {
    num -= $banner.children().eq(0).width();
    if (num <= -$banner.width() + $banner.children().width()) {
      c_num = 0;
      $circle.children().children().removeClass('active');
      $circle.children().eq(c_num).children().addClass('active');
    } else {
      c_num++;
      $circle.children().children().removeClass('active');
      $circle.children().eq(c_num).children().addClass('active');
    }
    if (num <= -$banner.width()) {
      $banner.animate({
        marginLeft: 0
      }, 0)
      num = 0;
    };
    $banner.animate({
      marginLeft: num
    });
    console.log(c_num)
  }
  //圆点
  $circle.on('click', 'a', function (e) {
    e.preventDefault();
    $circle.children().children().removeClass('active');
    $(this).addClass('active')
    $banner.animate({
      marginLeft: -$banner.children().width() * $(this).parent().index()
    })
    num = -$banner.children().width() * $(this).parent().index()
    c_num = $(this).parent().index()
  })
  var timer = null;
  timer = setInterval(move, 5000)
  //
  $.ajax({
    url: 'http://localhost:3000/index',
    type: 'get',
    success: function (result) {
      var html = `<div class="content_i">
      <h1 class="title">魅族手机</h1>
      <div class="i_img"></div>
      <div class="i_box">
        <ul class="g_clearfix">
          <li>
            <a href="#">
              <img src="${result[0].img}" alt="">
              <span>${result[0].i_name}</span>
              <p>${result[0].intrduce}</p>
              <em>￥${result[0].price}</em>
            </a>
          </li>
          <li>
          <a href="#">
            <img src="${result[1].img}" alt="">
            <span>${result[1].i_name}</span>
            <p>${result[1].intrduce}</p>
            <em>￥${result[1].price}</em>
          </a>
        </li>
        <li>
        <a href="#">
          <img src="${result[2].img}" alt="">
          <span>${result[2].i_name}</span>
          <p>${result[2].intrduce}</p>
          <em>￥${result[2].price}</em>
        </a>
      </li>
      <li>
      <a href="#">
        <img src="${result[3].img}" alt="">
        <span>${result[3].i_name}</span>
        <p>${result[3].intrduce}</p>
        <em>￥${result[3].price}</em>
      </a>
    </li>
        </ul>
        <ul class="g_clearfix">
        <li>
        <a href="#">
          <img src="${result[4].img}" alt="">
          <span>${result[4].i_name}</span>
          <p>${result[4].intrduce}</p>
          <em>￥${result[4].price}</em>
        </a>
      </li>
      <li>
      <a href="#">
        <img src="${result[5].img}" alt="">
        <span>${result[5].i_name}</span>
        <p>${result[5].intrduce}</p>
        <em>￥${result[5].price}</em>
      </a>
    </li>
    <li>
    <a href="#">
      <img src="${result[6].img}" alt="">
      <span>${result[6].i_name}</span>
      <p>${result[6].intrduce}</p>
      <em>￥${result[6].price}</em>
    </a>
  </li>
  <li>
  <a href="#">
    <img src="${result[7].img}" alt="">
    <span>${result[7].i_name}</span>
    <p>${result[7].intrduce}</p>
    <em>￥${result[7].price}</em>
  </a>
</li>
          </ul>
      </div>
    </div>`;
    $('.xu_index>.xu_main>.content').html(html);

    html = `<div class="content_i">
    <h1 class="title">魅族声学</h1>
    <div class="i_img" style='background:url("${result[8].img}") center center;'></div>
    <div class="i_box">
      <ul class="g_clearfix">
        <li>
          <a href="#">
            <img src="${result[9].img}" alt="">
            <!--<span>魅族X8</span>
            <p>准旗舰游戏拍照手机</p>
            <em>￥1598</em>-->
          </a>
        </li>
        <li>
          <a href="#">
              <img src="${result[10].img}" alt="">
              <span>${result[10].i_name}</span>
              <p>${result[10].intrduce}</p>
              <em>￥${result[10].price}</em>
          </a>
        </li>
        <li>
          <a href="#">
              <img src="${result[11].img}" alt="">
              <span>${result[11].i_name}</span>
              <p>${result[11].intrduce}</p>
              <em>￥${result[11].price}</em>
          </a>
        </li>
        <li>
          <a href="#">
              <img src="${result[12].img}" alt="">
              <span>${result[12].i_name}</span>
              <p>${result[12].intrduce}</p>
              <em>￥${result[12].price}</em>
          </a>
        </li>
      </ul>
      <ul class="g_clearfix">
          <li>
            <a href="#">
              <img src="${result[13].img}" alt="">
              <!--<span>魅族X8</span>
              <p>准旗舰游戏拍照手机</p>
              <em>￥1598</em>-->
            </a>
          </li>
          <li>
            <a href="#">
                <img src="${result[14].img}" alt="">
                <span>${result[14].i_name}</span>
                <p>${result[14].intrduce}</p>
                <em>￥${result[14].price}</em>
            </a>
          </li>
          <li>
            <a href="#">
                <img src="${result[15].img}" alt="">
                <span>${result[15].i_name}</span>
                <p>${result[15].intrduce}</p>
                <em>￥${result[15].price}</em>
            </a>
          </li>
          <li>
            <a href="#">
                <img src="${result[16].img}" alt="">
                <span>${result[16].i_name}</span>
                <p>${result[16].intrduce}</p>
                <em>￥${result[16].price}</em>
            </a>
          </li>
        </ul>
        <ul class="g_clearfix">
          <li>
            <a href="#">
              <img src="${result[17].img}" alt="">
              <!--<span>魅族X8</span>
              <p>准旗舰游戏拍照手机</p>
              <em>￥1598</em>-->
            </a>
          </li>
          <li>
            <a href="#">
                <img src="${result[18].img}" alt="">
                <span>${result[18].i_name}</span>
                <p>${result[18].intrduce}</p>
                <em>￥${result[18].price}</em>
            </a>
          </li>
          <li>
            <a href="#">
                <img src="${result[19].img}" alt="">
                <span>${result[19].i_name}</span>
                <p>${result[19].intrduce}</p>
                <em>￥${result[19].price}</em>
            </a>
          </li>
          <li>
            <a href="#">
                <img src="${result[20].img}" alt="">
                <span>${result[20].i_name}</span>
                <p>${result[20].intrduce}</p>
                <em>￥${result[20].price}</em>
            </a>
          </li>
        </ul>
    </div>
  </div>`;
  $('.xu_index>.xu_main>.content').append(html);
      console.log(result);
    }
  })
})