$(function(){
  var pno = 0;
  $.ajax({
    url:'http://localhost:3000/products?',
    data:{pno},
    type:'get',
    success: function(result) {
      var list = result.products;
      for(var item of list){
        var {i_name,img,intrduce,price} = item
        var html =`<div class="p_item">
        <a href="#">
          <div class=" p_pic">
            <img src="${img}" alt="">
          </div>
          <div class="p_b"></div>
          <h1>${i_name}</h1>
          <h2>${intrduce}</h2>
          <h3>￥ ${price}起</h3>
        </a>
      </div>`;
      $('.p_content').append(html);
      };
      html ='';
      for(var i = 1 ;i <= result.pageCount;i++){
        html += `<li><a href="#">${i}</a></li>`
      }
      
      console.log(list);
    }
  })
})