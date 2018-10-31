$(function(){
  var leftChart =  echarts.init(document.querySelector('.echarts_left'))
  var option1 = {
    title: {
        text: '2017年注册人数'
    },
    tooltip: {},
    legend: {
        data:['人数','销量']
    },
    xAxis: {
        data: ["1月","2月","3月","4月","5月","6月"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [500, 200, 360, 100, 108, 209]
    },
    {
      name: '销量',
      type: 'bar',
      data: [1500, 1200, 1360, 1100, 600, 309]
  }]
  };

  // 使用刚指定的配置项和数据显示图表。
  leftChart.setOption(option1);


// 右侧图表
  var rightChart = echarts.init(document.querySelector('.echarts_right'));
  var option2 = {
    title : {
        text: '热门品牌销售',
        subtext: '2017-06',
        x:'center',
        textStyle:{
          color: '#A94442',
          fontSize:20

        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['耐克','阿迪','新百伦','阿迪王','李宁']
    },
    series : [
        {
            name: '数据显示',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:355, name:'耐克'},
                {value:310, name:'阿迪'},
                {value:234, name:'新百伦'},
                {value:135, name:'阿迪王'},
                {value:1250, name:'李宁'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 20,
                    shadowOffsetX: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
  };

 rightChart.setOption(option2);

})