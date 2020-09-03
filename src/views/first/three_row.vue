<template>
  <div class="wrap">
    <ul v-for="item in allData" :key="item.name" class="threeWrap">
      <li class="part">
        <h4 class="title">{{ item.name }}</h4>
        <countTo class="num" :start-val="0" :end-val="item.value" :duration="3000" />
        <p class="rate">
          <span style="margin-right:50px">故障率</span>
          {{ item.gzl }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
// import { formatNumber } from '@/utils/tool.js'
import countTo from 'vue-count-to'
export default {
  name: 'LeftThreeRow',
  components: { countTo },
  data() {
    return {
      allData: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.allData = [
        { name: '井盖', value: 896750, gzl: '33%' },
        { name: '路灯', value: 896750, gzl: '33%' },
        { name: '摄像头', value: 896750, gzl: '33%' },
        { name: '排水量统计', value: 896750, gzl: '33%' },
        { name: '液位计', value: 896750, gzl: '33%' }
      ]
    }
  }
}
</script>

<style lang="scss">
#first{
  .wrap{
    .threeWrap{
      width:20%;
      height: 1006px;
      box-sizing: border-box;
      margin: 37px 36px;
      padding:67px 34px 52px 33px;
      background:rgba(85,110,215,0.23);
      color:rgba(255,255,255,1);
      .title{
        font-size:115px;
        font-family:Adobe Heiti Std;
        font-weight:normal;
        margin-top:62px;
        margin-left:99px;
      }
      .num{
        font-size:243px;
        font-family:SourceHanSansSC;
        font-weight:400;
        text-align: right;
        margin-top:82px;
        margin-right:95px;
        display: block;
      }
      .rate{
        font-size:112px;
        font-family:Source Han Sans CN;
        font-weight:400;
        text-align: right;
        margin-top:30px;
        margin-right:120px;

      }
      .part{
        height: 100%;
        overflow: hidden;
        border-radius:50px;
      }
    }
    .threeWrap:nth-child(1){
      .part{
        background: rgba(85,110,215,0.23) url('../../assets/image/jg.png') no-repeat;
      }
    }
    .threeWrap:nth-child(2){
      .part{
        background: rgba(85,110,215,0.23) url('../../assets/image/ld.png') no-repeat;
      }
    }
    .threeWrap:nth-child(3){
      .part{
        background: rgba(85,110,215,0.23) url('../../assets/image/sxt.png') no-repeat;
      }
    }
    .threeWrap:nth-child(4){
      background:rgba(85,110,215,0.14);
      .part{
        background: rgba(85,110,215,0.23) url('../../assets/image/psl.png') no-repeat;
      }
    }
    .threeWrap:nth-child(5){
      background:rgba(85,110,215,0.06);
      .part{
        background: rgba(85,110,215,0.23) url('../../assets/image/ywj.png') no-repeat;
      }
    }
  }
}
</style>
