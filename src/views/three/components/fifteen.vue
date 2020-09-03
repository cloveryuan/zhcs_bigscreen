<template>
  <div class="wrap_item fifteen">
    <div class="title-module">
      <span class="line" />
      <h5>分值统计</h5>
    </div>
    <div class="content">
      <div id="fifteen" style="width:100%" />
    </div>
  </div>
</template>

<script>
import { getArrByKey } from '@/utils/tool.js'
export default {
  name: 'ThreeColFour',
  components: {},
  data() {
    return {
      dataList: [],
      total: '1000'
    }
  },
  computed: {},
  mounted() {
    this.getData()
    this.drawChart()
  },
  methods: {
    getData() {
      this.dataList = [
        {
          name: 'BD-06652',
          value: 548.7
        },
        {
          name: 'BD-07752',
          value: 300.2
        },
        {
          name: 'BD-08852',
          value: 600
        }
      ]
    },
    drawChart() {
      const chart = this.$echarts.init(document.getElementById('fifteen'))
      const option = {
        xAxis: {
          max: this.total,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 220,
          top: 20, // 设置条形图的边距
          right: 140,
          bottom: 20
        },
        yAxis: [
          {
            type: 'category',
            inverse: false,
            data: this.dataList,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ],
        series: [
          {
            // 内
            type: 'bar',
            barWidth: 40,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
              normal: {
                color: (params) => {
                  let color
                  if (params.dataIndex === 0) {
                    color = {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [{
                        offset: 0,
                        color: 'rgba(241,241,241,0.2)' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(255,220,58,1)' // 100% 处的颜色
                      }
                      ]
                    }
                  } else if (params.dataIndex === 1) {
                    color = {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [{
                        offset: 0,
                        color: 'rgba(241,241,241,0.2)' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(1,228,242,1)' // 100% 处的颜色
                      }
                      ]
                    }
                  } else if (params.dataIndex === 2) {
                    color = {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,

                      colorStops: [{
                        offset: 0,
                        color: 'rgba(241,241,241,0.2)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(66,254,125,1)'
                      }
                      ]
                    }
                  } else {
                    color = {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [{
                        offset: 0,
                        color: '#f40' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#42FE7D' // 100% 处的颜色
                      }
                      ]
                    }
                  }
                  return color
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: 'left',
                formatter: (params) => {
                  let text
                  const { name } = params.data
                  if (params.dataIndex === 0) {
                    text = '{a|  ' + name + '}'
                  } else if (params.dataIndex === 1) {
                    text = '{b|  ' + name + '}'
                  } else if (params.dataIndex === 2) {
                    text = '{c|  ' + name + '}'
                  }
                  return text
                },
                rich: {
                  a: {
                    color: '#FFDC3A',
                    fontSize: 40
                  },
                  b: {
                    color: '#01E4F2',
                    fontSize: 40
                  },
                  c: {
                    color: '#42FE7D',
                    fontSize: 40
                  }
                }
              }
            },
            data: this.dataList,
            z: 0,
            animationEasing: 'elasticOut'
          },
          {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: '#202E62'
              }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 30,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [20, 42],
            symbolPosition: 'start',
            symbolOffset: [1, -15],
            symbolBoundingData: this.total,
            data: this.dataList,
            z: 2,
            animationEasing: 'elasticOut'
          },
          {
            // 外边框
            type: 'pictorialBar',
            symbol: 'rect',
            symbolBoundingData: this.total,
            itemStyle: {
              normal: {
                color: 'none'
              }
            },
            label: {
              normal: {
                formatter: (params) => {
                  let text
                  const { data } = params
                  if (params.dataIndex === 0) {
                    text = '{a|  ' + data + '}'
                  } else if (params.dataIndex === 1) {
                    text = '{b|  ' + data + '}'
                  } else if (params.dataIndex === 2) {
                    text = '{c|  ' + data + '}'
                  }
                  return text
                },
                rich: {
                  a: {
                    color: '#FFDC3A',
                    fontSize: 40
                  },
                  b: {
                    color: '#01E4F2',
                    fontSize: 40
                  },
                  c: {
                    color: '#42FE7D',
                    fontSize: 40
                  }
                },
                position: 'right',
                distance: 0, // 向右偏移位置
                show: true
              }
            },
            data: getArrByKey(this.dataList, 'value'),
            z: 0,
            animationEasing: 'elasticOut'
          },
          {
            name: '外框',
            type: 'bar',
            barGap: '-165%', // 设置外框粗细
            data: Array(20).fill(this.total),
            barWidth: 95,
            itemStyle: {
              normal: {
                color: 'transparent', // 填充色
                barBorderColor: '#1C4B8E', // 边框色
                barBorderWidth: 1, // 边框宽度
                // barBorderRadius: 0, //圆角半径
                label: {
                  // 标签显示位置
                  show: false,
                  position: 'top' // insideTop 或者横向的 insideLeft
                }
              }
            },
            z: 2
          }
        ]
      }
      chart.setOption(option, true)
    }
  }
}
</script>

<style lang="scss">
.fifteen {
  background: rgba(85, 110, 215, 0.3);
  .content {
    height: calc(100% - 80px);
  }
}
</style>
