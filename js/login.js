// * 1. 进行表单校验配置
// *    校验要求:
// *        (1) 用户名不能为空, 长度为2-6位
// *        (2) 密码不能为空, 长度为6-12位

// 基于bootstrap的前端校验插件 bootstrap-validator
$(function(){
  
  // 1- 进行表单校验配置
  $('#form').bootstrapValidator({
  
    feedbackIcons: {            //指定校验图标
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
  
    fields: {            //指定校验字段
      username: {
        validators: {
          notEmpty: {
            message: '用户名不能为空'
          },
          stringLength: {
            min: 2,
            max: 6,
            message: '用户名长度必须在2-6位'
          },

          // 用以配置 ajax 回调的提示
          callback: {
            message:'用户名不存在'
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: '密码不能为空'
          },
          stringLength: {
            min: 6,
            max: 12,
            message: '密码长度必须在6-12位'
          },
          // 用以配置 ajax 回调的提示
          callback: {
            message: '密码错误'
          }
        }
      }
    }
  })

  // 2- 登录功能
  $('#form').on('success.form.bv',function(e){
    e.preventDefault();

    $.ajax({
      type:'post',
      url:'/employee/employeeLogin',
      data:$('#form').serialize(),
      dataType: 'json',

      success:function(info){
        
        if(info.success){
          location.href ='index.html';
        }
        if(info.error == 1000){
          // alert(info.message);
          $("#form").data('bootstrapValidator').updateStatus('username','INVALID','callback');
        }
        if(info.error == 1001){
          // alert(info.message);
          $("#form").data('bootstrapValidator').updateStatus('password','INVALID','callback');
        }
      
      }

    })
  })

  // 3- 重置表单
  $('[type="reset"]').click(function(){
    var validator = $("#form").data('bootstrapValidator'); 
    // validator.resetForm();
    validator.resetForm(true);
  })


})

