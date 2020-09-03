<template>
  <div class="wrap_item fourteen">
    <div class="title-module">
      <span class="line" />
      <h5>项目曲线图分析</h5>
    </div>
    <div class="content">
      <div id="xiangmu" style="width:100%" />
    </div>
  </div>
</template>

<script>
import { getArrByKey } from '@/utils/tool.js'
export default {
  name: 'TwoColFour',
  components: {

  },
  data() {
    return {
      dataList: []
    }
  },
  computed: {

  },
  mounted() {
    this.getData()
    this.darwChart()
  },
  methods: {
    getData() {
      this.dataList = [
        { name: '项目一', data: [32, 38, 32, 22, 34, 54, 33, 29, 43, 33, 27, 46, 42, 35] },
        { name: '项目二', data: [40, 50, 32, 22, 34, 54, 33, 29, 43, 33, 27, 46, 42, 35] },
        { name: '项目三', data: [27, 44, 32, 22, 34, 54, 33, 29, 43, 33, 27, 46, 42, 35] },
        { name: '项目四', data: [30, 33, 32, 22, 34, 54, 33, 29, 43, 33, 27, 46, 42, 35] },
        { name: '项目五', data: [39, 40, 32, 22, 34, 54, 33, 29, 43, 33, 27, 46, 42, 35] },
        { name: '曲线图', data: [0] }
      ]
    },
    darwChart() {
      const chart = this.$echarts.init(document.getElementById('xiangmu'))
      const xAxisN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      const colorList = ['#2A93FA', '#1B73CA', '#1BCEE9', '#15A199', '#1D39B1', '#FFDC73']

      // 画每个x轴bar
      const series = []
      this.dataList.forEach((f, i) => {
        series.push({
          name: f.name,
          type: 'bar',
          stack: '总量',
          barWidth: '60%',
          itemStyle: {
            normal: {
              color: (params) => {
                const index = params.componentIndex
                return colorList[index]
              }
            }
          },
          label: {
            show: true
          },
          data: f.data
        })
      })

      // 画总数曲线
      let total = []
      const vals = getArrByKey(this.dataList, 'data')
      vals.forEach((f, i) => { // 求总数，利用索引来接着连加每天的各个项目的value值
        if (i === 0) {
          total = [...f]
        } else {
          f.map((m, k) => {
            total[k] += m
          })
        }
      })
      series.push({
        'name': '总数',
        'type': 'line',
        symbolSize: 20,
        symbol: 'circle',
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
        lineStyle: {
          normal: {
            width: 10,
            color: '#FFDC73'
          }
        },
        'data': total
      })

      const option = {
        color: colorList,
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            color: '#fff', // 文字颜色
            fontSize: 30
          },
          formatter: (params) => {
            let result = ''
            params.forEach((item) => {
              if (item.seriesName !== '曲线图') {
                const dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:20px;height:20px;background:${item.color}"></span>`
                result += dotHtml + item.seriesName + ':' + item.data + '<br/>'
              }
            })
            return result
          }
        },
        legend: {
          // data: getArrByKey(this.dataList, 'name'),
          align: 'right',
          y: '80%',
          x: '-20',
          itemWidth: 111,
          itemHeight: 63,
          itemGap: 20,
          textStyle: {
            color: '#fff',
            fontSize: 40,
            padding: [0, 30, 0, 120]
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '22%',
          containLabel: true
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
          axisLabel: {
            color: 'rgba(112, 138, 204, 1)',
            fontSize: 46,
            margin: 10,
            'interval': 0
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: series
      }
      chart.setOption(option, true)
    }
  }
}
</script>

<style lang="scss">
.fourteen{
  background:rgba(85,110,215,0.22);
  .content{
    height: calc(100% - 80px);
    padding:0 60px;
    box-sizing: border-box;
  }
}

</style>
