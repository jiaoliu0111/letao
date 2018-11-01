$(function(){
  var currentPage=1;
  var pageSize = 5;

  render();

  function render(){
    $.ajax({
      type:'get',
      url:'/category/queryTopCategoryPaging',
      data:{
        page:currentPage,
        pageSize:pageSize
      },
      dataType:'json',
      success:function(info){
        console.log(info);
        var htmlStr = template('tmp',info);
        $('tbody').html(htmlStr);

        // 分页
        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion:3,
          currentPage:currentPage,
          totalPages:Math.ceil(info.total/info.size),
          onPageClicked:function(a, b, c,page){
            console.log(page);
            currentPage=page;
            render();
          } 
        })
      }


    })
  }







})