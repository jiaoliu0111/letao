//发送ajax请求，显示进度条

  $(document).ajaxStart(function(){
    NProgress.start();
  });

  $(document).ajaxStop(function(){
    setTimeout(function(){
      NProgress.done();  
    },500)
  })


  $(function(){

    // 1- 二级菜单切换
    $('.category').click(function(){
      $(this).next().stop().slideToggle();
    })
  
    // 2- 左侧菜单的切换
    $('.lt_topbar .icon_menu').click(function(){
      $('.lt_aside').toggleClass('hidemenu');
      $('.lt_main').toggleClass('hidemenu');
      $('.lt_topbar').toggleClass('hidemenu');
    })

    // 3- 退出功能
    $('.lt_topbar .icon_logout').click(function(){
      $('#myModal').modal('show');
    })

    $('#logoutBtn').click(function(){
      // location.href='login.html';
      $.ajax({
        type:'get',
        url:'/employee/employeeLogout',
        dataType:'json',
        success:function(info){
          // console.log(info);
          if(info.success){
            location.href = 'login.html';
          }         
        }
      })
    })
  })































