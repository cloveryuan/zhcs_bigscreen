<template>
  <div id="three">
    <!-- 一列 1 5 9 13 -->
    <div class="wrap">
      <One />
      <Five />
      <Ninth />
      <Thirteen />
    </div>
    <!-- 二列 2 6 10 14 -->
    <div class="wrap">
      <Two />
      <sixAndTen />
      <Fourteen />
    </div>
    <!-- 三列 3 7 11 15 -->
    <div class="wrap">
      <Three />
      <Seven />
      <Eleven />
      <Fifteen />
    </div>
    <!-- 四列 4 8 12 16 -->
    <div class="wrap">
      <Fourth />
      <Eight />
      <Twelve />
      <Sixteen />
    </div>
  </div>
</template>

<script>
import One from './components/one'
import Two from './components/two'
import Three from './components/three'
import Fourth from './components/fourth'
import Five from './components/five'
import sixAndTen from './components/six_ten'
import Seven from './components/seven'
import Eight from './components/eight'
import Ninth from './components/ninth'
import Eleven from './components/eleven'
import Twelve from './components/twelve'
import Thirteen from './components/thirteen'
import Fourteen from './components/fourteen'
import Fifteen from './components/fifteen'
import Sixteen from './components/sixteen'

export default {
  name: '',
  components: {
    One,
    Two,
    Three,
    Fourth,
    Five,
    sixAndTen,
    Seven,
    Eight,
    Ninth,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen
  },
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss">
#three{
  height:4320px;
  background:#0A142F;
  width: 7680px;
  overflow: hidden;
  .wrap{
    height: 100%;
    width: 25%;
    display: inline-block;
    vertical-align: top;
    .wrap_item{
      height: 1006px;
      margin: 37px 36px;
      padding: 74px 138px;
      box-sizing: border-box;
      display: inline-block;
      width: calc(100% - 72px);
    }
    .content{
      color:#fff;
      display: flex;
      justify-items: center;
    }
  }
}
</style>

