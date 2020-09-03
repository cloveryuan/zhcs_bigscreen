<template>
  <div class="wrap"><!--two -->
    <div class="wrap_item wrap_two_item">
      <div class="title-module">
        <span class="line" />
        <h5>安全故障排查</h5>
      </div>
      <div class="content">
        <div id="safeLinear" style="width:100%" />
      </div>
      <div class="coverLine" />
    </div>
    <div class="wrap_item wrap_two_item twochart">
      <div class="title-module">
        <span class="line" />
        <h5>风险提示</h5>
      </div>
      <div class="content">
        <div id="risk" style="width:100%" />
      </div>
      <div class="coverLine" />
    </div>
    <div class="wrap_item threechart">
      <div class="title-module">
        <span class="line" />
        <h5>本月客运量趋势</h5>
      </div>
      <div class="content">
        <div id="passengerNum" style="width:100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftTwoRow',
  components: {

  },
  data() {
    return {
      one: {
        data: [],
        chart: ''
      },
      two: {
        data1: [],
        data2: [],
        chart: ''
      },
      three: {
        data: [],
        chart: ''
      }
    }
  },
  mounted() {
    this.drawOne()
    this.drawTwo()
    this.drawThree()
  },
  methods: {
    drawOne() {
      this.one.chart = this.$echarts.init(document.getElementById('safeLinear'))
      const xAxisN = ['', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      this.one.data = [10.84, 12, 16, 20.97, 22.79, 18.55, 19.35, 24.02, 28, 22.5, 18, 12]
      const option = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}月安全故障排查: {c}',
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(0, 255, 233,0)'
              }, {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)'
              }, {
                offset: 1,
                color: 'rgba(0, 255, 233,0)'
              }],
              global: false
            }

          },
          textStyle: {
            fontSize: 30
          }
        },
        grid: {
          top: '15%',
          left: '5%',
          right: '1%',
          bottom: '15%'
          // containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0084FF'
            }
          },
          axisLabel: {
            color: '#fff',
            margin: 63,
            fontSize: 46
          },
          splitLine: {
            show: false
          },
          boundaryGap: false,
          data: xAxisN
        }],

        yAxis: [{
          type: 'value',
          min: 0,
          max: 40,
          splitNumber: 4,
          splitLine: { // 刻度线
            show: true,
            lineStyle: {
              color: '#0084FF'
            }
          },
          axisLine: { // X轴线
            show: false
          },
          axisLabel: {
            show: true,
            margin: 20,
            fontSize: 46,
            textStyle: {
              color: '#d1e6eb'
            },
            formatter: '{value}.000'
          },
          axisTick: {
            show: false
          }
        }],
        series: [
          {
            name: '安全故障排查',
            type: 'line',
            showSymbol: false,
            smooth: true, // 是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 30,
            lineStyle: {
              normal: {
                color: '#00b3f4',
                shadowColor: 'rgba(0, 0, 0, .3)'
              }
            },
            itemStyle: {
              normal: {
                color: '#fff',
                borderColor: 'rgba(54,224,255,0.3)',
                borderWidth: 20
              }
            },
            label: {
              show: false
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0,179,244,0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(0,179,244,0)'
                }
                ], false)
              }
            },
            data: this.one.data
          }
        ]
      }
      this.one.chart.setOption(option, true)
    },
    drawTwo() {
      this.two.chart = this.$echarts.init(document.getElementById('risk'))
      const xAxisN = ['7-09', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18', '7-19', '7-20']
      this.two.data1 = [2, 4, 5, 3.97, 4.79, 6, 7.35, 8, 6, 7, 8, 9]
      this.two.data2 = [3, 2, 6, 6.97, 5, 6, 8.05, 9, 7, 8, 7, 8]
      const option = {
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#fff',
          textStyle: {
            color: '#f40',
            fontSize: 30
          },
          padding: [20, 10],
          extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
        },
        grid: {
          top: '15%',
          left: '5%',
          right: '1%',
          bottom: '15%'
          // containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0084FF'
            }
          },
          axisLabel: {
            color: 'rgba(13,213,237,1)',
            margin: 33,
            fontSize: 35,
            rotate: 30// 角度顺时针计算的
          },
          splitLine: {
            show: false
          },
          boundaryGap: false,
          data: xAxisN
        }],

        yAxis: [{
          type: 'value',
          min: 0,
          max: 10,
          splitNumber: 5,
          splitLine: { // 刻度线
            show: false,
            lineStyle: {
              color: '#0084FF'
            }
          },
          axisLine: { // X轴线
            show: false
          },
          axisLabel: {
            show: true,
            margin: 20,
            fontSize: 35,
            textStyle: {
              color: 'rgba(13,213,237,1)'
            },
            formatter: '{value}.00'
          },
          axisTick: {
            show: false
          }
        }],
        series: [
          {
            name: '风险提示A',
            type: 'line',
            showSymbol: false,
            smooth: true, // 是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'roundRect',
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: '#00b3f4',
                shadowColor: 'rgba(0, 0, 0, .3)',
                width: 6
              }
            },
            itemStyle: {
              normal: {
                color: '#fff',
                borderColor: 'rgba(54,224,255,0.3)',
                borderWidth: 10
              }
            },
            label: {
              show: false
            },
            data: this.two.data1
          },
          {
            name: '风险提示B',
            type: 'line',
            showSymbol: false,
            smooth: true, // 是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'roundRect',
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: '#2E65D4',
                shadowColor: 'rgba(0, 0, 0, .3)',
                width: 6
              }
            },
            itemStyle: {
              normal: {
                color: '#fff',
                borderColor: 'rgba(46,101,212,0.6)',
                borderWidth: 10
              }
            },
            label: {
              show: false
            },
            data: this.two.data2
          }
        ]
      }
      this.two.chart.setOption(option, true)
    },
    drawThree() {
      this.three.chart = this.$echarts.init(document.getElementById('passengerNum'))
      const xAxisN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
      this.three.data = [73, 75, 82, 75, 79, 88, 92, 79, 73, 75, 82, 75, 79, 88, 92]
      const option = {
        // 'textStyle': {
        //   'color': '#c0c3cd',
        //   'fontSize': 14
        // },
        // 'toolbox': {
        //   'show': false,
        //   'feature': {
        //     'saveAsImage': {
        //       'backgroundColor': '#031245'
        //     },
        //     'restore': {}
        //   },
        //   'iconStyle': {
        //     'borderColor': '#c0c3cd'
        //   }
        // },
        'grid': {
          'containLabel': true,
          'left': 20,
          'right': 20,
          'bottom': 10,
          'top': 40
        },
        'xAxis': {
          'nameTextStyle': {
            'color': '#c0c3cd',
            'padding': [0, 0, -10, 0],
            'fontSize': 14
          },
          'axisLabel': {
            'color': '#c0c3cd',
            'fontSize': 30,
            'interval': 0
          },
          'axisTick': {
            'lineStyle': {
              'color': '#46EFBA',
              'width': 1
            },
            'show': true
          },
          'splitLine': {
            'show': false
          },
          'axisLine': {
            'lineStyle': {
              'color': '#46EFBA',
              'width': 1,
              'type': 'dashed'
            },
            'show': true
          },
          'data': xAxisN,
          'type': 'category'
        },
        'yAxis': {
          'nameTextStyle': {
            'color': '#c0c3cd',
            'padding': [0, 0, -10, 0],
            'fontSize': 14
          },
          'axisLabel': {
            'color': '#c0c3cd',
            'fontSize': 30
          },
          'axisTick': {
            'lineStyle': {
              'color': '#46EFBA',
              'width': 1
            },
            'show': true
          },
          'splitLine': {
            'show': false
          },
          'axisLine': {
            'lineStyle': {
              'color': '#46EFBA',
              'width': 1,
              'type': 'dashed'
            },
            'show': true
          },
          'name': ''
        },
        'series': [{
          'data': this.three.data,
          'type': 'bar',
          'barWidth': 29,
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                offset: 0,
                color: 'rgba(74,252,176,1)'
              }, {
                offset: 1,
                color: 'rgba(58,182,235,1)'
              }])
            }
          },
          'label': {
            'show': false
          }
        }
        ],
        'tooltip': {
          'trigger': 'axis',
          'show': true,
          textStyle: {
            fontSize: 40
          },
          formatter: '{b}号客运量: {c}'
        }
      }
      this.three.chart.setOption(option, true)
    }
  }
}
</script>

<style lang="scss">
#first .wrap{
  .wrap_two_item{
    width: calc(40% - 72px );
    background: rgba(85,110,215,0.23);
     position: relative;
    .content{
      width: 100%;
      height: calc(100% - 100px);
    }
    .coverLine{
      width: 72px;
      height: 100%;
      position: absolute;
      top:0;
      left:50%;
      margin-left:-36px;
      background:#0A142F;
    }
  }
  .twochart{
    background:rgba(85,110,215,0.4)
  }
  .threechart{
    flex:1 ;
    background:rgba(85,110,215,0.1);
    .content{
      width: 100%;
      height: calc(100% - 100px);
    }
  }
}
</style>
