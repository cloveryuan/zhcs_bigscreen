<template>
  <div class="wrap_item">
    <div class="title-module">
      <span class="line" />
      <h5>各区房价排名</h5>
    </div>
    <div class="tb">
      <div id="fifthmain" />
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
function fifthoption() {
  const fifthoption = {
    tooltip: {},
    legend: {
      show: false,
      data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          fontWeight: 700,
          borderRadius: 3,
          padding: [3, 5],
          fontSize: 50
        }
      },
      indicator: [
        { name: '高港区', max: 6500 },
        { name: '海陵区', max: 16000 },
        { name: '靖江市', max: 30000 },
        { name: '兴化市', max: 38000 },
        { name: '泰兴市', max: 52000 },
        { name: '姜堰区', max: 25000 }
      ],
      startAngle: 0,
      splitArea: {
        areaStyle: {
          type: 'default',
          color: '#60698D'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#FFFFFF',
          width: 3
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#FFFFFF',
          width: 3
        }
      }
    },
    series: [
      {
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预算分配（Allocated Budget）',
            areaStyle: {
              type: 'default',
              opacity: 0.6,
              color: '#3F3FE6'
            }
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销（Actual Spending）',
            areaStyle: {
              type: 'default',
              opacity: 0.6,
              color: '#EA68A2'
            }
          }
        ]
      }
    ]
  }
  return fifthoption
}
export default {
  name: 'Fifth',
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
      const myChartfifth = this.$echarts.init(document.getElementById('fifthmain'))
      myChartfifth.setOption(this.fifthoption())
    }
  }
}
</script>

<style scoped>
.wrap_item{
  background:rgba(85,110,215,0.2);
}
div#fifthmain{
    width: 100%;
    height: 800px;
}
</style>
