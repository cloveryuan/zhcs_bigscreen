<template>
  <div class="wrap_item four">
    <div class="title-module">
      <span class="line" />
      <h5>交通流量统计</h5>
    </div>
    <div class="tb">
      <div id="fourmain" />
    </div>
  </div>
</template>

<script>
const data = [
  [
    { value: 12, name: '氧气' },
    { value: 20, name: '二氧化碳' },
    { value: 15, name: '氮气' }
  ],
  [
    { value: 12, name: '氧气' },
    { value: 20, name: '二氧化碳' },
    { value: 15, name: '氮气' }
  ]
]
function fourthoption() {
  const fourthoption = {
    tooltip: {
      trigger: 'axis',
      show: true,
      axisPointer: {
        type: 'none',
        lineStyle: {
          width: 15,
          color: 'rgba(240,240,240,0.5)'
        }
      }
    },
    legend: {
      show: false
    },
    // toolbox: {
    //   show: true,
    //   feature: {
    //     mark: {
    //       show: true
    //     },
    //     dataView: {
    //       show: true,
    //       readOnly: true
    //     },
    //     magicType: {
    //       show: false,
    //       type: ['line', 'bar', 'stack', 'tiled']
    //     },
    //     restore: {
    //       show: true
    //     },
    //     saveAsImage: {
    //       show: true
    //     }
    //   }
    // },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        boundaryGap: ['100%', '100%'],
        data: ['7点', '8点', '9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点'],
        splitLine: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#00A0E9',
            width: 4
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 46,
            color: '#0DD5ED'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#00A0E9',
            width: 4
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 46,
            color: '#0DD5ED'
          }
        }
      }
    ],
    series: [
      {
        name: '-',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default',
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#19B1FF'
                },
                {
                  offset: 1,
                  color: '#2F6AFF'
                }
              ])
            }
          }
        },
        data: [10, 12, 21, 54, 26, 83, 71, 12, 45, 75, 60]
      },
      {
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default',
              color: 'rgb(0, 127, 255)'
            }
          }
        },
        name: '-',
        data: [24, 32, 43, 65, 65, 76, 76, 65, 97, 87, 56]
      }
    ]
  }
  return fourthoption
}
export default {
  name: 'Fourth',
  data() {
    return {
      data: data,
      fourthoption: fourthoption
    }
  },
  mounted() {
    this.getEchartFData()
  },
  methods: {
    getEchartFData() {
      const myChartfourth = this.$echarts.init(document.getElementById('fourmain'))
      myChartfourth.setOption(this.fourthoption())
    }
  }
}
</script>

<style lang="scss">
.four{
  background:rgba(85,110,215,0.2);
}
div.tb{
    width: 100%;
    height: 100%;
}
div#fourmain{
  width: 100%;
  margin-top:100px;
  height:calc(100% - 240px);
}
</style>
