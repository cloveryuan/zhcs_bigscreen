<template>
  <div class="wrap_item seven">
    <div class="seven_wrap">
      <div class="_left">
        大脑处理记录
      </div>
      <vue-seamless-scroll :data="rowsContent" class="_right">
        <ul class="item">
          <li v-for="(item,i) in rowsContent" :key="i">
            <span class="time" v-text="item.time" />
            <span class="tip" v-text="item.tip" />
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'ThreeColTwo',
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
      rowsContent: []
    }
  },
  computed: {
    optionLeft() {
      return {
        direction: 2
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.rowsContent = [
        { id: 1, time: '12:23:34', tip: '大脑处理记录A' },
        { id: 2, time: '12:23:34', tip: '大脑处理记录B' },
        { id: 3, time: '12:23:34', tip: '大脑处理记录C' },
        { id: 4, time: '12:23:34', tip: '大脑处理记录Dffrg都会回复' },
        { id: 5, time: '12:23:34', tip: '大脑处理记录E' },
        { id: 6, time: '12:23:34', tip: '大脑处理记录F' },
        { id: 7, time: '12:23:34', tip: '大脑处理记录G' },
        { id: 8, time: '12:23:34', tip: '大脑处理记录H' }
      ]
    }
  }
}
</script>

<style lang="scss">
.seven{
  background:rgba(85,110,215,0.17);
  .seven_wrap{
    width: 100%;
    height: calc(100% - 150px);
    display: flex;
    justify-content: space-between;
    margin-top:90px;
  }
  ._left{
    width: 90px;
    display: inline-block;
    margin-left:255px;
    font-size:86px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(74,255,253,1);
  }
  ._right{
    flex: 1;
    overflow: hidden;
    margin-left:170px;
    margin-right:155px;
    color:rgba(73,210,255,1);
    font-size:76px;
    font-family:Microsoft YaHei;
    .tip{
      margin-left:60px;
    }
    .item{
      li{
        display: flex;
        flex-wrap: nowrap;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
