<template>
  <div id="first">
    <oneRow />
    <twoRow />
    <threeRow />
    <fourRow />
  </div>
</template>

<script>
export default {
  name: 'FirstIndex',
  components: {
    oneRow: () => import('./one_row'),
    twoRow: () => import('./two_row'),
    threeRow: () => import('./three_row'),
    fourRow: () => import('./four_row')
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
#first{
  height:4320px;
  background:#0A142F;
  width: 9600px;
  overflow: hidden;
  .wrap{
    width: 100%;
    display: flex;
    justify-items: center;
    height: 1080px;
    .wrap_item{
      width:20%;
      height: 1006px;
      display: inline-block;
      margin: 37px 36px;
      background:rgba(86,110,216,0.4);
      padding: 74px 138px;
      box-sizing: border-box;
    }
    // .wrap_item:first-child{
    //   margin-left:10px;
    // }
    // .wrap_item:last-child{
    //   margin-right:10px;
    // }
    .content{
      color:#fff;
      display: flex;
      justify-items: center;
    }
  }
}
</style>
