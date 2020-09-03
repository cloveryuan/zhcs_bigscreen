<template>
  <div class="wrap_item sixteen">
    <div class="title-module">
      <span class="line" />
      <h5>数据分析</h5>
    </div>
    <div class="content">
      <div id="sixteenmain" style="width:100%" />
    </div>
  </div>
</template>

<script>
import { getArrByKey } from '@/utils/tool.js'
export default {
  name: 'Sixteenth',
  data() {
    return {
      dataList: []
    }
  },
  mounted() {
    this.getData()
    this.drawChart()
  },
  methods: {
    getData() {
      this.dataList = [
        {
          name: '城市',
          hege: 94.5,
          kekao: 86.5
        },
        {
          name: '农村',
          hege: 92.5,
          kekao: 88.5
        }
      ]
    },
    drawChart() {
      const chart = this.$echarts.init(document.getElementById('sixteenmain'))
      const names = getArrByKey(this.dataList, 'name')
      const hege = getArrByKey(this.dataList, 'hege')
      const kekao = getArrByKey(this.dataList, 'kekao')
      const option = {
        grid: {
          left: '0%',
          right: '0%',
          top: '25%',
          bottom: '7%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          textStyle: {
            fontSize: 50
          },
          formatter: (params) => {
            let result = params[0].name + '<br/>'
            params.forEach((item) => {
              const dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:20px;height:20px;background:${item.color}"></span>`
              result += dotHtml + item.seriesName + ':' + item.data + '<br/>'
            })
            return result
          }
        },
        legend: {
          show: true,
          x: 'center',
          y: '1%',
          itemWidth: 45,
          itemHeight: 18,
          textStyle: {
            color: '#fff',
            fontSize: 50
          },
          data: ['可靠率', '合格率']
        },
        xAxis: [{
          type: 'category',
          name: '',
          nameTextStyle: {
            fontSize: 50,
            color: '#fff',
            lineHeight: 90
          },
          axisLabel: {
            color: '#fff',
            fontSize: 50,
            margin: 20
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#406A92',
              width: 3
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#197584'
            }
          },
          data: names
        }],
        yAxis: [{
          type: 'value',
          name: '',
          nameTextStyle: {
            fontSize: 50,
            color: '#fff'
          },
          nameGap: 30,
          axisLabel: {
            show: false,
            formatter: '{value}',
            margin: 20,
            textStyle: {
              color: '#fff',
              fontSize: 50

            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#406A92',
              width: 3
            }
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: ['rgba(128,160,176,.1)', 'rgba(250,250,250,0)']
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#406A92'
            }
          }
        }],
        series: [{ // 合格率头部中心实心圆
          'name': '',
          type: 'pictorialBar',
          symbolSize: [50, 25],
          symbolOffset: [-75, -10],
          symbolPosition: 'end',
          z: 12,
          tooltip: {
            show: false
          },
          'label': {
            'normal': {
              'show': false,
              'position': 'top',
              fontSize: 50,
              color: '#fff'
            }
          },
          color: '#26B2E8',
          data: hege
        },
        { // 合格率第一层底部圆圈
          name: '',
          type: 'pictorialBar',
          tooltip: {
            show: false
          },
          symbolSize: [70, 30],
          symbolOffset: [-75, 15],
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#2EA9E5',
              borderType: 'solid',
              borderWidth: 3
            }
          },
          data: hege
        },
        { // 合格率第二层底部圆圈
          name: '',
          type: 'pictorialBar',
          tooltip: {
            show: false
          },
          symbolSize: [90, 40],
          symbolOffset: [-75, 20],
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#26B2E8',
              borderType: 'solid',
              borderWidth: 4
            }
          },
          data: hege
        },
        { // 合格率底部中心实心圆
          name: '',
          type: 'pictorialBar',
          symbolSize: [50, 25],
          tooltip: {
            show: false
          },
          symbolOffset: [-75, 10],
          z: 12,
          'color': '#26B2E8',
          'data': hege
        },
        {
          type: 'bar',
          name: '合格率',
          'barWidth': '50',
          barGap: '200%',
          barCateGoryGap: '10%',
          'label': {
            'normal': {
              'show': true,
              'position': 'top',
              fontSize: 40,
              color: '#fff',
              opacity: 1,
              formatter: '{c}%',
              offset: [0, -20]
            }
          },
          itemStyle: {
            normal: {
              color: '#1E93C6',
              opacity: 1
            }
          },
          data: hege
        },
        { // 可靠
          'name': '',
          type: 'pictorialBar',
          symbolSize: [50, 25],
          symbolOffset: [75, -10],
          symbolPosition: 'end',
          z: 12,
          tooltip: {
            show: false
          },
          'label': {
            'normal': {
              'show': false,
              'position': 'top',
              fontSize: 50,
              color: '#fff'
            }
          },
          color: '#20D3AB',
          data: kekao
        },
        {
          name: '',
          type: 'pictorialBar',
          tooltip: {
            show: false
          },
          symbolSize: [70, 30],
          symbolOffset: [75, 15],
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#20D3AB',
              borderType: 'solid',
              borderWidth: 3
            }
          },
          data: kekao
        },
        {
          name: '',
          type: 'pictorialBar',
          tooltip: {
            show: false
          },
          symbolSize: [90, 40],
          symbolOffset: [75, 20],
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#20D3AB',
              borderType: 'solid',
              borderWidth: 4
            }
          },
          data: kekao
        },
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [50, 25],
          tooltip: {
            show: false
          },
          symbolOffset: [75, 10],
          z: 12,
          'color': '#20D3AB',
          'data': kekao
        },
        {
          type: 'bar',
          name: '可靠率',
          'barWidth': '50',
          barGap: '200%',
          barCateGoryGap: '10%',
          'label': {
            'normal': {
              'show': true,
              'position': 'top',
              fontSize: 40,
              color: '#fff',
              formatter: '{c}%',
              offset: [0, -20]
            }
          },
          itemStyle: {
            normal: {
              color: '#1AAE96',
              opacity: 1
            }
          },
          data: kekao
        }
        ]
      }
      chart.setOption(option, true)
    }
  }
}
</script>

<style lang="scss">
.sixteen{
  background:rgba(85,110,215,0.17);
  .content{
    width:100%;
    height: calc(100% - 80px);
  }
}
</style>
