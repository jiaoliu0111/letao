$(function(){

  var currentPage = 1;
  var pageSize = 5;
  // 一进入页码，就渲染一次
  render();


  function render(){
    $.ajax({
      type:'get',
      url:'/user/queryUser',
      data:{
        page:currentPage,
        pageSize:pageSize
      },
      dataType:'json',
      success:function(info){
        console.log(info);
        var htmlStr = template('tmp',info);
        // console.log(htmlStr);
        $('tbody').html(htmlStr);
        
        // 请求到后台数据后，配置分页
        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion:3,
          currentPage:info.page,
          totalPages:Math.ceil(info.total/info.size),
          // 页码点击事件
          onPageClicked:function(a,b,c,page){
            //console.log(page);      //点第几页，就输出几
            currentPage = page;
            render();
          }
        })
      }

    })
  }
  
  
  










})