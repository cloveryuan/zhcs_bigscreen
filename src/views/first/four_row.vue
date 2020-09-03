<template>
  <div class="wrap">
    <div class="wrap_item normal_four fourOne">
      <div class="title-module">
        <span class="line" />
        <h5>站点排放量排行</h5>
      </div>
      <div class="content">
        <div id="site" style="width:100%" />
      </div>
    </div>
    <div class="wrap_item normal_four fourTwo">
      <div class="title-module">
        <span class="line" />
        <h5>数据汇总分析</h5>
      </div>
      <div class="content">
        <div id="SummaryData" style="width:100%" />
      </div>
    </div>
    <div class="wrap_item normal_four fourThree">
      <div class="title-module">
        <span class="line" />
        <h5>区域热度</h5>
      </div>
      <div class="content">
        <div id="regionalHeat" style="width:100%" />
      </div>
    </div>
    <div class="wrap_item normal_four fourFour">
      <div class="title-module">
        <span class="line" />
        <h5>年度平均单价</h5>
      </div>
      <div class="content">
        <div id="yearAverage" style="width:100%" />
      </div>
    </div>
    <div class="wrap_item normal_four fourFive">
      <div class="title-module">
        <span class="line" />
        <h5>污染指标</h5>
      </div>
      <div class="content">
        <div id="pollutionIndex" style="width:100%" />
      </div>
    </div>
  </div>
</template>

<script>
import { getArrByKey, formatNumber } from '@/utils/tool.js'
import threeChart from './3D'
export default {
  name: 'LeftFourRow',
  mixins: [threeChart],
  data() {
    return {
      one: {
        data: [],
        chart: ''
      },
      two: {
        data: [],
        chart: ''
      },
      four: {
        data: [],
        chart: ''
      },
      five: {
        data: [],
        chart: ''
      }
    }
  },
  computed: {

  },
  mounted() {
    this.drawOne()
    this.drawTwo()
    this.drawThree()
    this.darwFour()
    this.drawFive()
  },
  methods: {
    drawOne() {
      this.one.chart = this.$echarts.init(document.getElementById('site'))
      this.one.data = [
        {
          name: '清湖',
          value: 10000,
          sum: 20000
        },
        {
          name: '上塘',
          value: 4000,
          sum: 20000
        },
        {
          name: '龙华',
          value: 8300,
          sum: 20000
        },
        {
          name: '民乐',
          value: 14000,
          sum: 20000
        }, {
          name: '大新',
          value: 6000,
          sum: 20000
        },
        {
          name: '坂田',
          value: 12000,
          sum: 20000
        }
      ]
      const yAxisN1 = getArrByKey(this.one.data, 'name')
      const yAxisN2 = getArrByKey(this.one.data, 'sum')
      const allValue = getArrByKey(this.one.data, 'value')

      const option = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '10%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 40,
            padding: [10]
          },
          axisPointer: {
            type: 'none'
          },
          formatter: (params) => {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万<br/>'
          }
        },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 50
            },
            margin: 140
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: yAxisN1
        }, {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: true,
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: 50
            },
            formatter: function(value) {
              if (value >= 10000) {
                return (value / 10000).toLocaleString() + '万'
              } else {
                return value.toLocaleString()
              }
            }
          },
          data: yAxisN2
        }],
        series: [{
          name: '站点排放量',
          type: 'bar',
          zlevel: 1,
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(74,252,176,1)'
              }, {
                offset: 1,
                color: 'rgba(58,182,235,1)'
              }])
            }
          },
          barWidth: 28,
          data: allValue
        }
        ]
      }
      this.one.chart.setOption(option, true)
    },
    drawTwo() {
      this.two.chart = this.$echarts.init(document.getElementById('SummaryData'))
      this.two.data = [
        {
          name: '全部输入量',
          value: '3720'
        },
        {
          name: '全部输出量',
          value: '2920'
        },
        {
          name: '全部完成量',
          value: '2200'
        }
      ]
      const total = this.two.data.reduce((a, b) => {
        return a + b.value * 1
      }, 0)
      const colorList = [
        new this.$echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
          offset: 0,
          color: 'rgba(243,53,115,1)'
        }, {
          offset: 1,
          color: 'rgba(255,192,102,1)'
        }]), new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(255,70,244,1)'
        },
        {
          offset: 1,
          color: 'rgba(69,0,211,1)'
        }
        ], false),
        new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: 'rgba(121,86,236,1)'
        }, {
          offset: 1,
          color: 'rgba(47,185,248,1)'
        }])
      ]
      const option = {
        color: colorList,
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 40
          },
          formatter: '{b}: {c}'
        },
        title: [{
          text: '{name|' + '总量' + '}\n{val|' + formatNumber(total) + '}',
          top: 'center',
          left: '20%',
          textAlign: 'center',
          textStyle: {
            rich: {
              name: {
                fontSize: 40,
                fontWeight: 'normal',
                color: '#fff',
                padding: [30, 0]

              },
              val: {
                fontSize: 60,
                fontWeight: 'bold',
                color: '#fff'
              }
            }
          }
        }],
        legend: {
          orient: 'vertical',
          icon: 'rect',
          x: '55%',
          y: 'center',
          itemWidth: 54,
          itemHeight: 54,
          align: 'left',
          itemGap: 80,
          textStyle: {
            rich: {
              name: {
                fontSize: 48,
                padding: [0, 80, 0, 20],
                color: '#fff'
              },
              value: {
                fontSize: 48,
                color: '#98A7B9'
              },
              unit: {
                fontSize: 48,
                color: '#fff'
              }
            }
          },
          selectedMode: false,
          formatter: (name) => {
            let res = this.two.data.filter(v => v.name === name)
            res = res[0] || {}
            const unit = res.unit || ''
            return '{name|' + name + '}  {value|' + res.value + '}{unit|' + unit + '}'
          }
        },
        series: [{
          type: 'pie',
          radius: ['55%', '70%'],
          center: ['20%', '50%'],
          data: this.two.data,
          hoverAnimation: false,
          itemStyle: {
            normal: {
              borderWidth: 2
            }
          },
          label: {
            show: false
          }
        }]
      }
      this.two.chart.setOption(option, true)
    },
    darwFour() {
      this.four.chart = this.$echarts.init(document.getElementById('yearAverage'))
      this.four.data = [
        {
          value: 120,
          name: 'CO2'
        }, {
          value: 200,
          name: 'CO'
        }, {
          value: 150,
          name: 'NO'
        }, {
          value: 200,
          name: 'SO2'
        }
      ]
      const values = this.four.data.map(m => m.value)
      const names = this.four.data.map(m => m.name)

      const option = {
        tooltip: {
          show: true,
          trigger: 'item',
          backgroundColor: 'rgba(0,0,0,0.5)',
          textStyle: {
            fontSize: 40
          },
          formatter: '{b}: {c}'
        },
        grid: {
          top: '15%',
          right: '1%',
          bottom: '15%'
          // containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['某地固废', '某地固废', '某地固废', '某地固废'],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#6076AD',
              width: 3
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'rgba(112, 138, 204, 1)',
            fontSize: 46,
            margin: 40,
            'interval': 0
          }
        },
        yAxis: {
          min: 0,
          max: 250,
          axisLine: {
            show: false // 隐藏Y轴线段
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(112, 138, 204, 1)',
            fontSize: 46,
            margin: 20,
            'interval': 0
          }
        },
        series: [
          { // 为了显示底部字所以这里data为空数组
            type: 'bar',
            barWidth: 137,
            z: 2,
            data: [0, 0, 0, 0],
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            label: {
              normal: {
                color: '#fff',
                show: true,
                fontSize: 50,
                // position: ['60%', '30%'],
                // label 的position位置可以是top bottom left,right,也可以是固定值
                // 在这里需要上下统一对齐,所以用固定值
                position: 'top',
                formatter: (data) => {
                  return names[data.dataIndex] ? names[data.dataIndex] : ''
                }
              }
            }
          },
          {
            type: 'bar',
            barWidth: 137,
            barGap: '-100%',
            z: 1,
            data: values,
            itemStyle: {
              normal: {
                color: (params) => {
                  const colorList = [
                    ['rgba(63,40,208,1)', 'rgba(2,130,222,1)'],
                    ['rgba(252,149,1,1)', 'rgba(254,215,1,1)'],
                    ['rgba(1,129,222,1)', 'rgba(103,224,227,1)'],
                    ['rgba(254,65,27,1)', 'rgba(254,155,26,1)']
                  ]
                  let index = params.dataIndex
                  if (params.dataIndex >= colorList.length) {
                    index = params.dataIndex - colorList.length
                  }
                  return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                    [
                      { offset: 0, color: colorList[index][0] },
                      { offset: 1, color: colorList[index][1] }
                    ])
                }
              }
            },
            label: {
              show: true,
              fontSize: 50,
              position: 'top',
              color: '#0EFCFF',
              formatter: (params) => {
                return params.value
              }
            }
          }
        ]
      }
      this.four.chart.setOption(option, true)
    },
    drawFive() {
      this.five.chart = this.$echarts.init(document.getElementById('pollutionIndex'))
      this.four.data = [
        {
          value: 550,
          name: 'NO'
        }, {
          value: 320,
          name: 'CO2'
        }, {
          value: 200,
          name: 'CO'
        }
      ]
      const values = this.four.data.map(m => m.value)
      const xAxisN = this.four.data.map(m => m.name)
      const option = {
        tooltip: {
          show: true,
          trigger: 'item',
          backgroundColor: 'rgba(0,0,0,0.5)',
          textStyle: {
            fontSize: 40
          },
          formatter: '{b}: {c}'
        },
        grid: {
          top: '15%',
          right: '1%',
          bottom: '15%'
          // containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xAxisN,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#6076AD',
              width: 3
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'rgba(112, 138, 204, 1)',
            fontSize: 46,
            margin: 50,
            'interval': 0
          }
        },
        yAxis: {
          min: 0,
          max: 600,
          splitNumber: 4,
          axisLine: {
            show: false // 隐藏Y轴线段
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(112, 138, 204, 1)',
            fontSize: 46,
            margin: 20,
            'interval': 0
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 137,
            data: values,
            itemStyle: {
              normal: {
                color: (params) => {
                  const colorList = [
                    ['rgba(63,40,208,1)', 'rgba(2,130,222,1)'],
                    ['rgba(252,149,1,1)', 'rgba(254,215,1,1)'],
                    ['rgba(1,129,222,1)', 'rgba(103,224,227,1)']
                  ]
                  let index = params.dataIndex
                  if (params.dataIndex >= colorList.length) {
                    index = params.dataIndex - colorList.length
                  }
                  return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                    [
                      { offset: 0, color: colorList[index][0] },
                      { offset: 1, color: colorList[index][1] }
                    ])
                }
              }
            },
            label: {
              show: true,
              fontSize: 50,
              position: 'top',
              color: '#0EFCFF',
              formatter: (params) => {
                return params.value
              }
            }
          }
        ]
      }
      this.five.chart.setOption(option, true)
    }
  }
}
</script>

<style lang="scss">
#first{
  .wrap{
    .normal_four{
      .content{
        height: calc(100% - 80px);
      }
    }
    .fourOne{
      background:rgba(85,110,215,0.23);
    }
    .fourTwo{
      background:rgba(85,110,215,0.4);
    }
    .fourThree{
      background:rgba(85,110,215,0.25);
    }
    .fourFour{
      background:rgba(85,110,215,0.2);
      .content{
        margin-top:126px;
        height: calc(100% - 210px);
      }
    }
    .fourFive{
      background:rgba(85,110,215,0.1);
      .content{
        margin-top:106px;
        height: calc(100% - 210px);
      }
    }
  }
}
</style>
