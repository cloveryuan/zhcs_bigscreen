<template>
  <div class="wrap_item twelev">
    <ul class="_left">
      <li><img src="../../../assets/image/women.png" alt=""></li>
      <li><img src="../../../assets/image/man.png" alt=""></li>
    </ul>
    <div class="_right">
      <div id="chart" style="width:100%;height:100%" />
    </div>
  </div>
</template>

<script>
import { getArrByKey } from '@/utils/tool.js'
export default {
  name: 'FourColThree',
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
    this.drawChart()
  },
  methods: {
    getData() {
      this.dataList = [
        { id: 1, name: '女', value: '198' },
        { id: 2, name: '男', value: '169' }
      ]
    },
    drawChart() {
      const chart = this.$echarts.init(document.getElementById('chart'))
      const vals = (getArrByKey(this.dataList, 'value').sort((a, b) => b - a))
      const names = getArrByKey(this.dataList, 'name')
      const newVal = this.dataList.map(m => m.name + ':' + m.value)
      const maxVal = []// 背景按最大值
      for (let i = 0; i < vals.length; i++) {
        maxVal.push(Number(vals[0]) + 50)
      }
      const colorList = [
        new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: 'rgba(245,98,166,1)'
        }, {
          offset: 1,
          color: 'rgba(157,16,210,1)'
        }]),
        new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: 'rgba(116,146,243,1)'
        }, {
          offset: 1,
          color: 'rgba(25,54,183,1)'
        }])]

      const option = {
        grid: {
          left: '2%',
          right: '2%',
          bottom: '2%',
          top: '2%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          textStyle: {
            fontSize: 40
          },
          formatter: (params) => {
            return params[0].name + ' : ' + params[0].value
          }
        },
        xAxis: {
          show: true,
          type: 'value',
          splitNumber: 4,
          axisLine: {
            show: false // 隐藏x轴线段
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: '#707AA2'

            }
          },
          axisLabel: {
            color: 'transparent',
            margin: -10,
            fontSize: 40,
            backgroundColor: '#A9AFC7',
            width: 80,
            height: 80,
            formatter: (data) => {
              return '□□'
            }
          }
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: '86'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false // 隐藏Y轴线段
          },
          data: names
        },
        {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: true,
          axisLabel: {
            fontSize: 128,
            rich: {
              man: {
                color: '#ffffff',
                fontFamily: 'Source Han Sans CN',
                align: 'center',
                padding: [0, 0, 20, 0],
                fontSize: 78,
                width: 219,
                height: 97,
                backgroundColor: '#3451C9'
              },
              women: {
                color: '#ffffff',
                fontFamily: 'Source Han Sans CN',
                align: 'center',
                padding: [0, 0, 20, 0],
                fontSize: 78,
                width: 219,
                height: 97,
                backgroundColor: 'rgba(245,98,166,1)'
              }
            },
            formatter: (params) => {
              const value = params.split(':')[1]
              const name = params.split(':')[0]
              return name === '男' ? '{man|' + value + '}' : '{women|' + value + '}'
            }
          },
          data: newVal
        }
        ],
        series: [
          {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                color: (params) => {
                  const index = params.dataIndex
                  return colorList[index]
                }
              }
            },
            barWidth: 78,
            data: vals
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 78,
            barGap: '-100%',
            data: maxVal,
            itemStyle: {
              normal: {
                color: '#39446A'
              }
            }
          }
        ]
      }
      chart.setOption(option, true)
    }
  }
}
</script>

<style lang="scss">
.twelev{
  background:rgba(85,110,215,0.4);
  ._left{
    float: left;
    margin-top:100px;
    width:200px;
    height:calc(100% - 200px);
    li:last-child{
      margin-top:75px;
    }
  }
  ._right{
    display: inline-block;
    width:calc(100% - 300px);
     height:calc(100% - 100px);
    margin-left:100px;
  }
}
</style>
