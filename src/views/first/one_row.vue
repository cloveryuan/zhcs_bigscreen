<template>
  <div class="wrap"><!--one -->
    <div class="wrap_item one_first">
      <div class="title-module">
        <span class="line" />
        <h5>安全故障排查</h5>
      </div>
      <div class="content">
        <ul class="_left">
          <li>
            <span class="label">检查总数:</span>
            <span class="bot_info">
              <span class="blue">214</span>
              <span>项</span>
            </span>
          </li>
          <li>
            <span class="label">合格数:</span>
            <span class="bot_info">
              <span class="blue">198</span>
              <span>项</span>
            </span>
          </li>
          <li>
            <span class="label"><i class="el-icon-s-help" style="color:#36E5FF;font-size:32px;margin-right:2px;" />已整改:</span>
            <span class="bot_info">
              <span class="blue">13</span>
              <span>项</span>
            </span>
          </li>
          <li>
            <span class="label"><i class="el-icon-s-help" style="color:#FFAE5C;font-size:32px;margin-right:2px;" />未整改:</span>
            <span class="bot_info">
              <span class="blue">3</span>
              <span>项</span>
            </span>
          </li>
        </ul>
        <div id="safe" />
      </div>
    </div>
    <ul class="wrap_item one_two">
      <li>
        <p class="tit">
          <img src="../../assets/image/sbType.png">
          <span>设备总数</span>
        </p>
        <p style="color:#7ADC78" class="text">
          <countTo :start-val="0" :end-val="one_two_data.shebeiSum" :duration="3000" />
          <span>/个</span>
        </p>
      </li>
      <li>
        <p class="tit">
          <img src="../../assets/image/gzStatus.png">
          <span>故障设备</span>
        </p>
        <p style="color:#FF524F" class="text">
          <countTo :start-val="0" :end-val="one_two_data.guzhangshebei" :duration="3000" />
          <span>/个</span>
        </p>
      </li>
      <li style="margin-top:126px">
        <p class="tit">
          <img src="../../assets/image/add.png">
          <span>新增设备</span>
        </p>
        <p style="color:#E9EC3D" class="text">
          <countTo :start-val="0" :end-val="one_two_data.xinzengshebei" :duration="3000" />
          <span>/个</span>
        </p>
      </li>
    </ul>
    <div class="wrap_item one_three">
      <div class="title-module">
        <span class="line" />
        <h5>风险提示</h5>
      </div>
      <div class="content">
        <div id="contaminated" style="width:100%" />
      </div>
    </div>
    <div class="wrap_item one_four">
      <div class="title-module">
        <span class="line" />
        <h5>经营分析</h5>
      </div>
      <div class="content">
        <div id="management_1" style="width:629px;margin-right:259px" />
        <div id="management_2" style="width:629px" />
      </div>
    </div>
    <div class="wrap_item one_five">
      <div class="content">
        <div id="water" style="width:100%" />
      </div>
      <div class="rightInfo">
        <span>当前动力达{{ one_five.data*100 }}%</span>
        <span class="circleBtn">正常</span>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'LeftOneRow',
  components: { countTo },
  data() {
    return {
      one_one: {
        data: {},
        chart: ''
      },
      one_two_data: {
        shebeiSum: 150000,
        guzhangshebei: 140000,
        xinzengshebei: 120000
      },
      one_three: {
        data: {},
        chart: ''
      },
      one_four: {
        data: {},
        chart1: '',
        chart2: ''
      },
      one_five: {
        data: {},
        chart: ''
      }
    }
  },
  mounted() {
    this.drawOne_one()
    this.drawOne_three()
    this.drawOne_four()
    this.drawOne_five()
  },
  methods: {
    drawOne_one() {
      // 基于准备好的dom，初始化echarts实例
      this.one_one.chart = this.$echarts.init(document.getElementById('safe'))
      // 绘制图表 这个构思是两圆镶嵌做成的
      const option = {
        graphic: [
          { // 环形图中间添加文字
            type: 'text', // 通过不同top值可以设置上下显示
            left: 'center',
            top: '40%',
            style: {
              text: '81.3%',
              textAlign: 'center',
              fill: '#34E4FE',
              width: 30,
              height: 30,
              fontSize: 98,
              fontFamily: 'Microsoft YaHei'
            }
          }, {
            type: 'text',
            left: 'center',
            top: '60%',
            style: {
              text: '整改通过率',
              textAlign: 'center',
              fill: '#9B9EB5',
              width: 30,
              height: 30,
              fontSize: 52
            }
          }
        ],
        series: [
          {
            type: 'pie',
            label: {
              show: false
            },
            avoidLabelOverlap: false, // 避免标注重叠
            hoverAnimation: false, // 移入放大
            center: ['50%', '50%'], // 饼图的圆心坐标
            radius: ['98%', '100%'],
            color: ['rgba(85,110,215,0.4)'],
            data: [
              { value: 3333333, name: 'ff' }
            ]
          },
          {
            type: 'pie',
            label: {
              show: false
            },
            startAngle: 90, // 设置起始角度
            avoidLabelOverlap: false, // 避免标注重叠
            hoverAnimation: false, // 移入放大
            center: ['50%', '50%'], // 饼图的圆心坐标
            radius: ['80%', '90%'],
            color: ['transparent', '#34E4FE'],
            data: [
              { value: 30, name: 'no' },
              { value: 214, name: '通过' }
            ]
          },
          {
            type: 'pie',
            label: {
              show: false
            },
            startAngle: 90, // 设置起始角度
            avoidLabelOverlap: false, // 避免标注重叠
            hoverAnimation: false, // 移入放大
            center: ['50%', '50%'], // 饼图的圆心坐标
            radius: ['75%', '80%'],
            color: ['#FDAD5C', 'transparent'],
            data: [
              { value: 30, name: '没通过' },
              { value: 214, name: 'yes' }
            ]
          }
        ]
      }
      this.one_one.chart.setOption(option, true)
    },
    drawOne_three() {
      this.one_three.chart = this.$echarts.init(document.getElementById('contaminated'))
      this.one_three.data = [{ name: '污染区域', value: 300 }, { name: '污染程度', value: 200 }]
      const option = {
        series: [
          {
            name: '背景圈',
            type: 'gauge',
            radius: '90%',
            center: ['20%', '50%'],
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 500,
            splitNumber: 1,
            splitLine: { // 分隔线样式
              show: false
            },
            axisLabel: { // 刻度标签数字
              show: false
            },
            pointer: {
              show: false
            },
            axisTick: { // 刻度样式
              show: false
            },
            detail: {
              show: true,
              offsetCenter: [0, '50%'],
              textStyle: {
                fontSize: 52,
                color: '#6276B3'
              },
              formatter: () => {
                return this.one_three.data[0].name
              }
            }
          },
          // 最外层含中间数据
          {
            name: '',
            type: 'gauge',
            radius: '90%',
            center: ['20%', '50%'],
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 500,
            splitNumber: 1,
            axisLine: {
              show: true,
              lineStyle: {
                width: 100,
                color: [
                  [
                    this.one_three.data[0].value / 500, new this.$echarts.graphic.LinearGradient(
                      0, 1, 1, 0, [{
                        offset: 0,
                        color: '#2783CD'
                      },
                      {
                        offset: 0.55,
                        color: '#1998BF'
                      },
                      {
                        offset: 1,
                        color: '#0EFCFF'
                      }
                      ]
                    )
                  ],
                  [
                    1, '#0E122D'
                  ]
                ]
              }
            },
            axisTick: { // 小刻度线
              show: 0
            },
            splitLine: { // 大刻度线
              show: 0
            },
            axisLabel: { // 刻度标签数字
              show: true,
              color: '#fff',
              fontSize: 20,
              lineHeight: 100,
              distance: -25
            },
            pointer: {
              show: false
            },
            detail: {
              show: true,
              offsetCenter: [0, 10],
              textStyle: {
                fontSize: 114,
                color: '#fff'
              }
            },
            itemStyle: {
              color: 'rgba(255, 36, 74,.3)'
            },
            data: [{
              value: this.one_three.data[0].value
            }]
          },
          {
            name: '背景圈',
            type: 'gauge',
            radius: '90%',
            center: ['75%', '50%'],
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 500,
            splitNumber: 1,
            splitLine: { // 分隔线样式
              show: false
            },
            axisLabel: { // 刻度标签数字
              show: false
            },
            pointer: {
              show: false
            },
            axisTick: { // 刻度样式
              show: false
            },
            detail: {
              show: true,
              offsetCenter: [0, '50%'],
              textStyle: {
                fontSize: 52,
                color: '#6276B3'
              },
              formatter: () => {
                return this.one_three.data[1].name
              }
            }
          },
          // 最外层含中间数据
          {
            name: '',
            type: 'gauge',
            radius: '90%',
            center: ['75%', '50%'],
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 500,
            splitNumber: 1,
            axisLine: {
              show: true,
              lineStyle: {
                width: 100,
                color: [
                  [
                    this.one_three.data[1].value / 500, new this.$echarts.graphic.LinearGradient(
                      0, 1, 1, 0, [{
                        offset: 0,
                        color: '#FE8B1A'
                      },
                      {
                        offset: 0.55,
                        color: '#FEB00D'
                      },
                      {
                        offset: 1,
                        color: '#FED501'
                      }
                      ]
                    )
                  ],
                  [
                    1, '#0E122D'
                  ]
                ]
              }
            },
            axisTick: { // 小刻度线
              show: 0
            },
            splitLine: { // 大刻度线
              show: 0
            },
            axisLabel: { // 刻度标签数字
              show: true,
              color: '#fff',
              fontSize: 20,
              lineHeight: 100,
              distance: -25
            },
            pointer: {
              show: false
            },
            detail: {
              show: true,
              offsetCenter: [0, 10],
              textStyle: {
                fontSize: 114,
                color: '#fff'
              }
            },
            itemStyle: {
              color: 'rgba(255, 36, 74,.3)'
            },
            data: [{
              value: this.one_three.data[1].value
            }]
          }
        ]
      }
      this.one_three.chart.setOption(option, true)
    },
    drawOne_four() {
      this.one_four.chart1 = this.$echarts.init(document.getElementById('management_1'))
      this.one_four.chart2 = this.$echarts.init(document.getElementById('management_2'))
      this.one_four.data = [
        {
          name: 'CO2',
          value: 23000
        },
        {
          name: 'CO1',
          value: 12000
        },
        {
          name: 'NO1',
          value: 11000
        }
      ]
      const sumValue = 30000
      const optionData = {
        series: [],
        yAxis: []
      }
      for (let i = 0; i < this.one_four.data.length; i++) {
        optionData.series.push({
          name: '污染',
          type: 'pie',
          clockWise: true,
          z: 2,
          hoverAnimation: false,
          radius: [93 - i * 15 + '%', 87 - i * 15 + '%'],
          center: ['50%', '55%'],
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          data: [{
            value: this.one_four.data[i].value,
            name: this.one_four.data[i].name
          },
          {
            value: sumValue - this.one_four.data[i].value,
            name: '',
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            },
            tooltip: {
              show: false
            },
            label: {
              show: false
            },
            hoverAnimation: false
          }]
        })
        optionData.yAxis.push(this.one_four.data[i].value)
      }
      const option1 = {
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(39,130,205,1)'
            }, {
              offset: 1,
              color: 'rgba(7,226,205,1)'
            }],
            global: false
          }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(252,161,0,1)'
            }, {
              offset: 1,
              color: 'rgba(255,235,97,1)'
            }],
            global: false
          }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(253,63,25,1)'
            }, {
              offset: 1,
              color: 'rgba(255,166,26,1)'
            }],
            global: false
          }
        ],
        grid: {
          top: '10%',
          bottom: '70%',
          left: '45%',
          containLabel: false
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          z: 3,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            inside: false,
            textStyle: {
              color: 'RGB(78,184,252)',
              fontSize: 25
            },
            formatter: (value, index) => {
              const name = this.one_four.data[index].name
              return '{a|' + name + '}' + ' ' + value + 'T'
            },
            rich: {
              a: {
                color: '#fff',
                lineHeight: 10,
                fontSize: 25
              }
            },
            show: true
          },
          data: optionData.yAxis
        }],
        xAxis: [{
          show: false
        }],
        tooltip: {
          trigger: 'item',
          textStyle: {
            color: '#fff', // 文字颜色
            fontSize: 40
          },
          formatter: (value) => {
            return value.name + ': ' + value.value
          }
        },
        graphic: [
          { // 环形图中间添加文字
            type: 'text', // 通过不同top值可以设置上下显示
            left: 'center',
            top: '55%',
            style: {
              text: '污染指标',
              textAlign: 'center',
              fill: 'rgba(112,138,204,1)',
              width: 30,
              height: 30,
              fontSize: 28,
              fontFamily: 'Microsoft YaHei'
            }
          }
        ],
        series: optionData.series
      }
      const option2 = {
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(39,130,205,1)'
            }, {
              offset: 1,
              color: 'rgba(7,226,205,1)'
            }],
            global: false
          }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(252,161,0,1)'
            }, {
              offset: 1,
              color: 'rgba(255,235,97,1)'
            }],
            global: false
          }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(253,63,25,1)'
            }, {
              offset: 1,
              color: 'rgba(255,166,26,1)'
            }],
            global: false
          }
        ],
        grid: {
          top: '10%',
          bottom: '70%',
          left: '45%',
          containLabel: false
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          z: 3,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            inside: false,
            textStyle: {
              color: 'RGB(78,184,252)',
              fontSize: 25
            },
            formatter: (value, index) => {
              const name = this.one_four.data[index].name
              return '{a|' + name + '}' + ' ' + value + 'T'
            },
            rich: {
              a: {
                color: '#fff',
                lineHeight: 10,
                fontSize: 25
              }
            },
            show: true
          },
          data: optionData.yAxis
        }],
        xAxis: [{
          show: false
        }],
        tooltip: {
          trigger: 'item',
          textStyle: {
            color: '#fff', // 文字颜色
            fontSize: 40
          },
          formatter: (value) => {
            return value.name + ': ' + value.value
          }
        },
        graphic: [
          { // 环形图中间添加文字
            type: 'text', // 通过不同top值可以设置上下显示
            left: 'center',
            top: '55%',
            style: {
              text: '总污染',
              textAlign: 'center',
              fill: 'rgba(112,138,204,1)',
              width: 30,
              height: 30,
              fontSize: 28,
              fontFamily: 'Microsoft YaHei'
            }
          }
        ],
        series: optionData.series
      }
      this.one_four.chart1.setOption(option1, true)
      this.one_four.chart2.setOption(option2, true)
    },
    drawOne_five() {
      this.one_five.chart = this.$echarts.init(document.getElementById('water'))
      this.one_five.data = 0.4
      const data = [this.one_five.data, this.one_five.data, this.one_five.data]
      const option = {
        // 提示框组件
        tooltip: {
          trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
          textStyle: {
            color: '#fff', // 文字颜色
            fontSize: 40
          },
          // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
          // 水球图: {a}（系列名称），{b}（无），{c}（数值）
          // 使用函数模板   传入的数据值 -> value: number|Array,
          formatter: (value) => {
            return value.seriesName + ': ' + value.data * 100 + '%'
          }
        },
        series: [{
          type: 'liquidFill',
          name: '当前动力达', // 系列名称，用于tooltip的显示，legend 的图例筛选
          radius: '80%', // 水球图的半径
          center: ['50%', '60%'], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
          // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形
          // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
          shape: 'circle',
          phase: 0, // 波的相位弧度 不设置  默认自动
          direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
          outline: {
            show: false,
            borderDistance: 0, // 边框线与图表的距离 数字
            itemStyle: {
              opacity: 1, // 边框的透明度   默认为 1
              borderWidth: 1, // 边框的宽度
              shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
              shadowColor: '#fff', // 边框的阴影颜色,
              borderColor: '#41dcd8' // 边框颜色
            }
          },
          // 图形样式
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 0.9, [{
              offset: 0,
              color: 'rgba(68,234,174,1)'
            }, {
              offset: 1,
              color: 'rgba(59,185,232,1)'
            }]), // 水球显示的背景颜色
            opacity: 0.6 // 波浪的透明度
            // shadowBlur: 10 // 波浪的阴影范围
          },
          backgroundStyle: {
            color: 'rgba(14,85,85,1)'// 水球未到的背景颜色
          },
          // 图形的高亮样式
          emphasis: {
            itemStyle: {
              opacity: 0.3 // 鼠标经过波浪颜色的透明度
            }
          },
          // 图形上的文本标签
          label: {
            fontSize: 134,
            fontWeight: 400,
            color: '#fff'
          },
          data: data // 系列中的数据内容数组
        }]
      }

      this.one_five.chart.setOption(option, true)
    }
  }
}
</script>

<style lang="scss">
#first{
  .wrap{
    .content{
      ._left{
        width: 33%;
      }
      li{
        margin-bottom:88px;
        width: 100%;
        display: flex;
        align-items: center;
        .label{
          display: inline-block;
          font-size:50px;
           width: 232px;
          font-family:Source Han Sans CN;
          font-weight:400;
          text-align: right;
          letter-spacing: 2px;
        }
        .bot_info{
          display: inline-block;
          width: calc(100% - 232px);
          text-align: right;
          font-size:50px;
        }
        .blue{
          margin: 0 4px;
          letter-spacing: 0px;
        }
      }
      #safe{
        width: calc(100% - 120px);
      }
    }
    .one_first{
      .content{
        margin-top:142px;
      }
    }
    .one_two{
      li{
        display: inline-block;
        width: 50%;
        font-size:60px;
        font-family:Microsoft YaHei;
        .tit{
          color: #D3D6DF;
          margin-bottom: 84px;
          display: flex;
          align-items: center;
          img{
            margin-right:20px;
          }
        }
        .text{
          font-size:142px;
          display: flex;
          align-items: center;
          >span{
             font-family:Quartz!important;
          }
          span{
            font-size:77px;
            font-family:Microsoft YaHei;
            margin-left:37px;
          }
        }
      }
    }
    .one_three{
      background:rgba(86,110,216,0.27);
      .content{
        margin-top:157px;
        height: calc(100% - 232px);
      }
    }
    .one_four{
      background:rgba(86,110,216,0.27);
      .content{
        margin-top:115px;
        height: calc(100% - 192px);
      }
    }
    .one_five{
      display: flex;
      align-items: center;
      background:rgba(85,110,215,0.1);
      .content{
        height: 100%;
        width: 50%;
      }
      .rightInfo{
        margin-left:40px;
        color: #fff;
        font-size:58px;
        font-family:Source Han Sans CN;
        .circleBtn{
          text-align: center;
          display: inline-block;
          width:189px;
          height:101px;
          line-height: 101px;
          background:rgba(67,229,178,1);
          border-radius:51px;
          margin-left: 140px;
        }
      }
    }
  }
}
</style>
