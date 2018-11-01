$(function(){

  var currentPage = 1;
  var pageSize = 5;

  var currentId;   //修改当前用户的id
  var isDelete;    //修改的状态

  // 一进入页码，就渲染一次,获取用户列表，模板引擎渲染
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
  
  
  // 点击启用禁用按钮，显示模态框
  $('tbody').on('click','.btn',function(){

    $('#userModal').modal('show');  
    
    currentId = $(this).parent().data('id');
    isDelete = $(this).hasClass('btn-danger')?0:1;
    console.log(currentId);
    console.log(isDelete);
    
  })

  // 点击模态框按钮，修改用户状态
  $('#submitBtn').click(function(){
    $.ajax({
      type:'post',
      url:"/user/updateUser",
      data:{
        id:currentId,
        isDelete:isDelete
      },
      dataType:'json',
      success:function(info){
        console.log(info);
        if(info.success){
          $('#userModal').modal('hide');  
          render();
        }
        
      }
    })
  })










})