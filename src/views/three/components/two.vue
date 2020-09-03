<template>
  <div class="wrap_item">
    <div class="title-module">
      <span class="line" />
      <h5>环境监控</h5>
    </div>
    <div class="tb">
      <div class="h xx">
        <span class="qs">风速：</span>
        <div class="fpq" />
        <div class="fph" />
        <span class="hs">0.4km/h</span>
      </div>
      <div class="h">
        <span class="qs">风向：</span>
        <div class="spq" />
        <div class="sph" />
        <span class="hs">东北偏北</span>
      </div>
      <div class="h">
        <span class="qs">PM2.5：</span>
        <div class="tpq" />
        <div class="tph" />
        <span class="hs fy">35</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frist',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.wrap_item{
  background:rgba(85,110,215,0.22);
}
div.tb{
  margin-top:109px;
}
.h{
    width: 1846px;
    height: 90px;
    padding: 70px 20px;
    display: flex;
}
div.fpq,div.fph,div.spq,div.sph,div.tpq,div.tph{
    height: 85px;
	text-align: center;
	line-height: 50px;
	transform: skew(-15deg);
	-webkit-transform: skew(-15deg);
	-moz-transform: skew(-15deg);
	-o-transform: skew(-15deg);
	-ms-transform: skew(-15deg);
}
div.fph,div.sph,div.tph{
    margin-left: -6px;
    z-index: 1000;
}
div.fph{
    width: 500px;
    background: #734F2B;
}
div.fpq{
    width: 500px;
    background: #FDB628;
}
div.sph{
    width: 500px;
    background: #EB6F49;
}
div.spq{
    width: 500px;
    background: #EB6F49;
}
div.tph{
    width: 390px;
    background: #117B8B;
}
div.tpq{
    width: 500px;
    background: #36E5FF;
}
span.qs,span.hs{
    display: inline-block;
    font-family: 'MicrosoftYaHei';
    font-size: 68px;
    color: #fff;
    line-height: 68px;
}
span.hs{
    margin-left:28px;
}
span.hs.fy{
    margin-left:70px
}
</style>
