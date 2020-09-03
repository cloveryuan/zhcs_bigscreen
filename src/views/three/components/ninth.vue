<template>
  <div class="wrap_item ninth">
    <div id="ninmain" />
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
function fifthoption() {
  const fifthoption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(params) {
        return params[0].name + '<br>2020.5：' + params[0].value + '<br>2019.10：' + -params[1].value
      }
    },
    legend: {
      data: ['2019.10', '2020.5'],
      right: 100,
      top: 40,
      textStyle: { color: '#888CAD', fontSize: 50, fontWeight: 700 },
      itemWidth: 40,
      itemHeight: 5,
      itemGap: 40
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        splitLine: {
          show: false
        },
        splitArea: {
          show: false
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
            fontSize: 40,
            color: '#FFFFFF'
          },
          formatter: (value) => {
            if (value < 0) {
              return -value
            } else {
              return value
            }
          }
        }
      }
    ],
    series: [
      {
        name: '2020.5',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        barCategoryGap: '10%',
        label: {
          normal: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#FF7E00',
            barBorderRadius: [15, 15, 0, 0]
          }
        },
        data: [400, 241, 360, 320, 302, 341, 374, 390, 450, 420]
      },
      {
        name: '2019.10',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        barCategoryGap: '10%',
        label: {
          normal: {
            show: true,
            formatter: function(params) { return -params.value }
          }
        },
        itemStyle: {
          normal: {
            color: '#24C768',
            barBorderRadius: [0, 0, 15, 15]
          }
        },
        data: [-120, -180, -120, -120, -132, -101, -134, -190, -230, -210]
      }
    ]
  }
  return fifthoption
}
export default {
  name: 'Ninth',
  data() {
    return {
      data: data,
      fifthoption: fifthoption
    }
  },
  mounted() {
    this.getEchartFData()
  },
  methods: {
    getEchartFData() {
      const myChartfifth = this.$echarts.init(document.getElementById('ninmain'))
      myChartfifth.setOption(this.fifthoption())
    }
  }
}
</script>

<style lang="scss">
.ninth{
  background:rgba(85,110,215,0.1);
  div#ninmain{
    width: 100%;
    height: 100%;

  }
}

</style>
