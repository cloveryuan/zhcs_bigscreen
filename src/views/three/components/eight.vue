<template>
  <div class="wrap_item eight">
    <div class="title-module">
      <span class="line" />
      <h5>管理团队</h5>
    </div>
    <ul class="content">
      <li v-for="(item,i) in dataList" :key="i">
        <span class="react" />
        <canvas class="myCanvas" width="130px" height="163px" style="position:absolute;left:0;top:50px">
          您的浏览器不支持canvas标签。
        </canvas>
        <p class="pos">{{ item.position }}</p>
        <p class="name">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FourColTwo',
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
    this.$nextTick(() => this.drawLine())
  },
  methods: {
    getData() {
      this.dataList = [
        { position: '总经理', name: '王茂林' },
        { position: '项目经理', name: '陈思明' },
        { position: '技术负责人', name: '马国' },
        { position: '生产负责人', name: '邵晓光' }
      ]
    },
    drawLine() {
      const canvasList = document.getElementsByClassName('myCanvas')
      Array.from(canvasList).forEach(canvas => {
        if (canvas.getContext) {
          // 获取对应的CanvasRenderingContext2D对象(画笔)
          var ctx = canvas.getContext('2d')
          ctx.globalAlpha = 0.3
          ctx.lineWidth = 10
          ctx.beginPath()
          ctx.strokeStyle = '#36E5FF'
          // 设置路径起点坐标
          ctx.moveTo(60, 0)
          // 定义中间点坐标1
          ctx.lineTo(0, 0)
          // 定义中间点坐标2
          ctx.lineTo(0, 163)
          // 定义中间点坐标3(这是最后一个中间点，也就是终点)
          ctx.lineTo(200, 163)
          // 按照绘制路径顺序连接各个坐标点
          ctx.stroke()
          // 关闭绘制路径
          ctx.closePath()
        }
      })
    }
  }
}
</script>

<style lang="scss">
.eight{
  background:rgba(85,110,215,0.4);
 .content{
  flex-wrap: wrap;
  padding: 60px 160px;
  box-sizing: border-box;
  li{
      width: 50%;
      position: relative;
      .react{
        float: left;
        width:14px;
        height:14px;
        border:5px solid rgba(54,229,255,0.3);
        margin-left: 68px;
        margin-top:40px;
      }
      p{
        margin: 0 auto;
        text-align: center;
        font-family:Source Han Sans CN;
      }
      .pos{
        background: url('../../../assets/image/pos.png') no-repeat;
        width: 339px;
        height: 120px;
        line-height: 120px;
        font-size:57px;
        color:rgba(255,174,92,1);
      }
      .name{
        margin-top: 18px;
        background: url('../../../assets/image/name.png') no-repeat;
        width: 392px;
        height: 145px;
        line-height: 145px;
        font-size:71px;
        color:rgba(17,28,63,1);
      }
    }
    li:nth-child(1),li:nth-child(2){
      margin-bottom: 130px;
    }
 }
}
</style>
