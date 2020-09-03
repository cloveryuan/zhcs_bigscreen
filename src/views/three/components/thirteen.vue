<template>
  <div class="wrap_item thirteen">
    <div class="title-module">
      <span class="line" />
      <h5>业务指标</h5>
    </div>
    <div class="content">
      <div id="thirteenmain" style="width:55%" />
      <div class="_right">
        <h5 class="title"><img src="../../../assets/image/yewu.png">业务量</h5>
        <span class="num">{{ totlaText }}</span>
        <h5 class="title"><img src="../../../assets/image/time.png">耗时</h5>
        <span class="num">{{ dataList.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thirteenth',
  data() {
    return {
      dataList: []
    }
  },
  computed: {
    totlaText() {
      return this.dataList.total > 10000 ? this.dataList.total / 10000 + '万单' : this.dataList.total + '单'
    }
  },
  mounted() {
    this.getData()
    this.drawChart()
  },
  methods: {
    getData() {
      this.dataList = { // 假数据
        total: 125000, // 业务量总量
        success: 100000, // 接口成功的业务量
        time: '1.8小时'
      }
    },
    drawChart() {
      const myChartthirteenth = this.$echarts.init(document.getElementById('thirteenmain'))
      const success = (this.dataList.success / this.dataList.total) * 100 + '%'

      const option = {
        graphic: [
          { // 环形图中间添加文字
            type: 'text', // 通过不同top值可以设置上下显示
            left: 'center',
            top: '40%',
            style: {
              text: success,
              textAlign: 'center',
              fill: '#C5AE55',
              width: 30,
              height: 30,
              fontSize: 70,
              fontWeight: 'bold',
              fontFamily: 'Microsoft YaHei'
            }
          }, {
            type: 'text',
            left: 'center',
            top: '53%',
            style: {
              text: '接口成功率',
              textAlign: 'center',
              fill: '#0BF6FF',
              width: 30,
              height: 30,
              fontSize: 36
            }
          }, {
            type: 'text',
            left: '60%',
            top: '10%',
            style: {
              text: 'ESB接口',
              textAlign: 'center',
              fill: '#0BF6FF',
              width: 30,
              height: 30,
              fontSize: 70
            }
          }
        ],
        tooltip: {
          show: false
        },
        series: [
          { // 夹层圆弧
            type: 'pie',
            radius: ['65%', '70%'],
            // 环的位置
            label: {
              show: false
            },
            data: [
              {
                value: 20, // 控制夹层圆弧的长短，四等分都给的一样的
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              },
              {
                value: 20,
                // 不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: '#00FFFF'
                  }
                }
              },
              {
                value: 20,
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              },
              {
                value: 20,
                // 不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: '#00FFFF'
                  }
                }
              }
            ]
          },
          { // 内圈圆
            name: '',
            type: 'pie',
            radius: ['38%', '50%'],
            label: {
              show: false
            },
            data: [
              {
                name: '',
                value: 0,
                itemStyle: {
                  normal: {
                    color: '#3275DF'
                  }
                }
              }
            ]
          },
          { // 视觉引导线小竖线
            name: '',
            type: 'pie',
            clockWise: false,
            startAngle: 270,
            radius: ['75%', '75%'],
            labelLine: {
              show: true,
              length: 90,
              length2: 0,
              lineStyle: {
                width: 20,
                color: '#69ADFF'
              }
            },
            data: [
              {
                name: '',
                value: 0
              }
            ]
          },
          { // 外围大圆弧 才是真实交互数据占比
            name: '',
            type: 'pie',
            clockWise: false,
            radius: ['85%', '90%'],
            z: 1,
            label: {
              show: false
            },
            data: [
              {
                name: '',
                value: this.dataList.success,
                itemStyle: {
                  normal: {
                    color: '#556ED7'
                  }
                }
              },
              {
                value: this.dataList.total - this.dataList.success,
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          }
        ]
      }
      myChartthirteenth.setOption(option, true)
    }
  }
}
</script>

<style lang="scss">
.thirteen{
  background:rgba(85,110,215,0.34);
  .content{
    width: 100%;
    margin-top:60px;
    height: calc(100% - 120px);
    ._right{
      margin-left:80px;
      margin-top:100px;
      font-size: 76px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      .title{
        font-weight: 400;
        color: #FFFFFF;
        margin-bottom:40px;
        img{
          margin-right:20px;
          vertical-align: middle;
        }
      }
      .num{
        display: inline-block;
        color: #609BEC;
        margin-bottom:60px;
      }
    }
  }
}

</style>
