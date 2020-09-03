<template>
  <div class="wrap_item one">
    <div class="title-module">
      <span class="line" />
      <h5>污染数据统计</h5>
    </div>
    <div class="content">
      <div id="ffmain" style="width:45%" />
      <div id="fsmain" style="width:45%" />
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
function foption(data) {
  const foption = {
    tooltip: {
      show: false,
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      show: false
    },
    grid: {
      x: 50,
      y: 50,
      x2: 50,
      y2: 50,
      borderWidth: 10
    },
    graphic: {
      type: 'text',
      left: 'center',
      top: 'center',
      style: {
        text: '64%\n\n污染总数',
        textAlign: 'center',
        fill: 'rgb(149,162,255)',
        width: 30,
        height: 30,
        fontSize: 50
      }
    },
    color: ['#36E5FF', '#EB6F49', '#FDB628', '#e6923e', '#357aae', '#45bcf2'],
    series: [
      {
        hoverAnimation: false,
        type: 'pie',
        radius: ['50%', '60%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'outside',
          formatter: '{c} \n\n {b}',
          fontWeight: 700,
          color: '#fff',
          fontSize: '50',
          borderWidth: 20,
          borderRadius: 4,
          padding: [40, -170, 0, -170]
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'lighter',
            color: '#fff'
          }
        },
        labelLine: {
          show: true,
          length: 50,
          length2: 200,
          lineStyle: {
            width: 5
          }
        },
        data: data,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 0.4
            }
          }
        }
      }
    ]
  }
  return foption
}
export default {
  name: 'Frist',
  data() {
    return {
      data: data,
      foption: foption
    }
  },
  mounted() {
    this.getEchartData()
  },
  methods: {
    getEchartData() {
      const myChartff = this.$echarts.init(document.getElementById('ffmain'))
      myChartff.setOption(this.foption(this.data[0]))
      const myChartfs = this.$echarts.init(document.getElementById('fsmain'))
      myChartfs.setOption(this.foption(this.data[1]))
    }
  }
}
</script>

<style lang="scss">
.wrap_item.one{
  background:rgba(85,110,215,0.2);
  .content{
    height: calc(100% - 80px);
    width: 100%;
    justify-content: space-between;
  }
}
/* .content{
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
#ffmain{
  display: inline-block;
  width: 45%;
  height: 800px;
}
#fsmain{
  display: inline-block;
  width: 45%;
  height: 800px;
} */
</style>
