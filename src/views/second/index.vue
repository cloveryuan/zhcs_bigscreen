<template>
  <main id="second">
    <header class="head">
      <div class="title">
        <img src="../../assets/image/logo.png" alt="泰州海陵区">
        <span class="text">海陵区智慧城市运营管理中心</span>
      </div>
      <div class="subtitle">
        <span>{{ currentDate.date }}</span>
        <span style="margin-left:80px">{{ currentDate.week }}</span>
        <span class="location">
          <img src="../../assets/image/location.png" alt="">
          <span>{{ currentDate.location }}区</span>
        </span>
        <span class="location">
          <img src="../../assets/image/weather1.png" alt="">
          <span>{{ currentDate.weather }}</span>
        </span>
      </div>
    </header>
    <section class="section" :class="{smallLeft:!bigLeft,smallRight:!bigRight}">
      <div class="left">
        <i class="icon_lf" :class="bigLeft?'el-icon-s-fold':'el-icon-s-unfold'" @click="bigLeft = !bigLeft" />
        <div v-if="bigLeft" style="width:100%;height:100%">
          <div slot="button-prev" class="swiper-button-prev" @click="prev" />
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(item,i) in slideData" :key="item.id" class="swiper-slide">
              <img :src="item.img" alt="" :class="{img_active:img_activeIntext===i}" :data-url="item.src" :data-index="i" :data-isMap="item.isMap">
            </swiper-slide>
          </swiper>
          <div slot="button-next" class="swiper-button-next" @click="next" />
        </div>
      </div>
      <div v-if="rightInfoShow" class="right">
        <i class="icon_rf" :class="bigRight?'el-icon-s-fold':'el-icon-s-unfold'" @click="bigRight = !bigRight" />
        <ul v-if="bigRight" class="info">
          <li v-for="item in rightData" :key="item.id">
            <img :src="item.icon" alt="">
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </section>
    <!-- 左侧大右侧大main，左侧小右侧大smallLeftMain，左侧小右侧小allSamll，左侧大右侧小smallRightMain，如果左侧点击不带地图的内嵌页面则right不出现，此时为onlyleft -->
    <div class="main" :class="{smallLeftMain:!bigLeft&&bigRight,allSamll:!bigLeft&&!bigRight,smallRightMain:bigLeft&&!bigRight,onlyleft:!rightInfoShow}">
      <iframe :src="currentSrc" frameborder="0" />
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SecondIndex',
  data() {
    return {
      weather: '',
      currentDate: {
        date: '',
        week: '',
        weather: ''
      },
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 6,
        spaceBetween: 56,
        slidesPerGroup: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        observer: true, // 动态检查器,自动初始化swiper,默认为false
        observerParents: true,
        on: {
          click: (swiper, e) => {
            const dataset = e.target.dataset
            if (Number(dataset.index) === this.img_activeIntext || !dataset.url) {
              return
            }
            this.goToLink(dataset)
          }
        }
      },
      slideData: [
        {
          id: 1,
          img: require('../../assets/image/left1.jpg'),
          src: 'http://106.14.170.48:82/web/index.html#/static',
          isMap: true
        },
        {
          id: 2,
          img: require('../../assets/image/left2.jpg'),
          src: 'http://www.tzhl.gov.cn/',
          isMap: false
        },
        {
          id: 3,
          img: require('../../assets/image/left3.jpg'),
          src: 'https://baike.baidu.com/item/%E6%B7%B1%E5%9C%B3%E6%A1%91%E8%BE%BE%E7%94%B5%E5%AD%90%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/2499354?fr=aladdin',
          isMap: true
        },
        {
          id: 4,
          img: require('../../assets/image/left4.jpg'),
          src: 'http://18452678.guangdong.12580.tv/',
          isMap: false
        },
        {
          id: 5,
          img: require('../../assets/image/left5.jpg'),
          src: 'https://www.toutiao.com/',
          isMap: true
        },
        {
          id: 6,
          img: require('../../assets/image/left6.jpg'),
          src: 'https://news.163.com/',
          isMap: false
        },
        {
          id: 7,
          img: require('../../assets/image/left7.jpg'),
          src: 'https://fanyi.baidu.com/?aldtype=16047#',
          isMap: true
        },
        {
          id: 8,
          img: require('../../assets/image/left8.jpg'),
          src: 'http://www.weather.com.cn/weather/101190101.shtml',
          isMap: false
        },
        {
          id: 9,
          img: require('../../assets/image/left9.jpg'),
          src: 'https://www.toutiao.com/',
          isMap: true
        },
        {
          id: 10,
          img: require('../../assets/image/left10.jpg'),
          src: 'https://news.163.com/',
          isMap: false
        }
      ],
      img_activeIntext: 0,
      currentSrc: '',
      bigLeft: true,
      bigRight: true,
      rightInfoShow: false, // 只有左侧点击带地图才能出现
      rightData: [
        {
          id: 1,
          icon: require('../../assets/image/jinggai.png'),
          name: '井盖'
        },
        {
          id: 2,
          icon: require('../../assets/image/ludeng.png'),
          name: '路灯'
        },
        {
          id: 3,
          icon: require('../../assets/image/wendu.png'),
          name: '温度'
        },
        {
          id: 4,
          icon: require('../../assets/image/shidu.png'),
          name: '湿度'
        },
        {
          id: 5,
          icon: require('../../assets/image/liuliangji.png'),
          name: '流量计'
        },
        {
          id: 6,
          icon: require('../../assets/image/yaliji.png'),
          name: '压力计'
        },
        {
          id: 7,
          icon: require('../../assets/image/yeweiji.png'),
          name: '液位计'
        },
        {
          id: 8,
          icon: require('../../assets/image/PM2.5.png'),
          name: 'PM2.5'
        },
        {
          id: 9,
          icon: require('../../assets/image/wushuikou.png'),
          name: '污水口'
        },
        {
          id: 10,
          icon: require('../../assets/image/fengsu.png'),
          name: '风速'
        },
        {
          id: 11,
          icon: require('../../assets/image/shexiangtou.png'),
          name: '摄像头'
        }
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.getDateWeatherAir()
    this.runSwiper()
    this.currentSrc = this.slideData[0].src
    this.rightInfoShow = this.slideData[0].isMap
  },
  methods: {
    getDateWeatherAir() {
      // 完整天气预报接口  https://www.tianqiapi.com/api/?version=v6&cityid=XXX&appid=XXX&appsecret=XXX
      // axios.get('https://www.tianqiapi.com/api', {
      axios.get('/weather/api', {
        params: {
          version: 'v6',
          cityid: '101191206', // 海陵区
          appid: '69221435',
          appsecret: 'gOHO3aT8'
        }
      })
        .then(data => {
          const info = data.data
          this.currentDate.location = info.city
          this.currentDate.week = info.week
          this.currentDate.weather = info.wea
          this.currentDate.date = info.date.replace(/\-/g, '.')
        })
    },
    runSwiper() {
      // this.swiper.slideTo(0, 1000, false)// swiper插件的slide的索引;切换速度;设置为false时不会触发transition回调函数
    },
    goToLink(item) {
      console.log(item.index)
      this.currentSrc = item.url
      this.img_activeIntext = Number(item.index)
      this.rightInfoShow = item.ismap
    },
    prev() {
      this.swiper.slidePrev()
    },
    next() {
      this.swiper.slideNext()
    }
  }
}
</script>

<style lang="scss">
#second{
  width:11520px;
  height:4320px;
  background:rgba(9,19,47,1);
   overflow: hidden;
   position: relative;
   .head{
     width: 100%;
     height: 450px;
     background: url('../../assets/image/bt_bg.png') no-repeat center;
     text-align: center;
     position: relative;
     .title{
        line-height: 450px;
       img{
         width:302px;
         height:242px;
         vertical-align: middle;
       }
       .text{
          font-size:164px;
          font-family:Microsoft YaHei;
          vertical-align: middle;
          color:rgba(255,255,255,1);
          margin-left:76px;
       }
     }
     .subtitle{
        position: absolute;
        top: 262px;
        left: 678px;
        span{
         color:#fff;
         font-size:116px;
          font-family:Microsoft YaHei;
       }
       .location{
         margin-left:250px;
         img{
           vertical-align: middle;
         }
         span{
           margin-left:50px;
           vertical-align: middle;
         }
       }
     }
   }
   .section{
     margin-top:51px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     height: calc(100% - 500px);
     margin-left: 105px;
     .left{
        width:2054px;
        height:3820px;
        background: url('../../assets/image/leftBg.png') no-repeat top left;
        position: relative;
        z-index: 10;
        transition: width .2s;
        .icon_lf{
          color:#fff;
          font-size:180px;
          position: absolute;
          top:0px;
          cursor: pointer;
          left:850px;
        }
     }
     .right{
        width:1519px;
        height:3820px;
        background: url('../../assets/image/rightBg.png') no-repeat top left;
        padding-right:52px;
        position: relative;
        z-index: 10;
        transition: width .2s;
        .icon_rf{
          color:#fff;
          font-size:180px;
          position: absolute;
          top:0px;
          cursor: pointer;
          left:438px;
        }
        .info{
          position: absolute;
          right: 235px;
          top: 221px;
          li{
            font-size:121px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(197,234,255,1);
            line-height: 302px;
            img,span{
              vertical-align: middle;
            }
            img{
              margin-right:112px;
            }
          }
        }
     }
     .swiper-container {
      width: 100%;
      height: calc(100% - 840px);
      margin-top:283px;
    }
    .swiper-slide {
      text-align: center;
      width: 787px;
      height: 479px;
      margin-left:90px;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 48px;
      overflow: hidden;
      img{
        width: calc(100% - 83px);
        margin:0 auto;
        height: calc(100% - 32px);
        border-radius: 48px;
        cursor: pointer;
        &:hover{
          box-shadow: 0px 0px 20px #6AB2DE;
        }
        box-sizing: border-box;
        transition: all 0.5s;
      }
      img.img_active{
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        box-shadow: 0px 0px 20px #6AB2DE;
      }
    }
    .swiper-button-prev{
      position: absolute;
      bottom:231px;
      left: 382px;
      cursor:pointer;
      background-image:url(../../assets/image/prevArrow.png);
      width: 212px;
      height: 159px;
      top:auto;
      &::after{
        content:''
      }
    }
    .swiper-button-next{
      position: absolute;
      top:68px;
      left: 382px;
      cursor:pointer;
      background-image:url(../../assets/image/nextArrow.png);
      width: 212px;
      height: 159px;
      &::after{
        content:''
      }
    }
   }
   .main{
      position: absolute;
      top:501px;
      left:1113px;
      background:rgba(85,110,215,0.3);
      width: calc(100% - 2226px);
      height: calc(100% - 500px);
      border: 1px solid #f40;
      iframe{
       width: 100%;
       height: 100%;
     }
   }
  //  左右两侧缩起后样式
   .section.smallLeft{
     .left{
       width:200px;
     }
    .icon_lf{
      left:10px;
    }
   }
  .section.smallRight{
    .right{
       width:200px;
    }
    .icon_rf{
      left:40px;
    }
   }
  //<!-- 左侧大右侧大main，左侧小右侧大smallLeftMain，左侧小右侧小allSamll，左侧大右侧小smallRightMain -->
  .smallLeftMain{
      border: 1px solid #f40;
      left:305px;
      width: calc(100% - 1418px);//左侧缩起右侧没缩起情况=》左侧305（面板宽200+105margin） + 右侧区域的1113px = 1418px
   }
   .smallRightMain{
      border: 1px solid #f40;
      width: calc(100% - 1313px);//左侧没缩起情况右侧缩起 =》左侧区域的1113px + 右侧200 =1313px
   }
   .allSamll{
      left:305px;
      border: 1px solid #f40;
      width: calc(100% - 505px);//左侧右侧都缩起情况 =》左侧区域的305px + 右侧200 =505px
   }
   .onlyleft.main{
      width: calc(100% - 1237px);//右侧不存在左侧没有缩起的时候=》左侧1113px+105
   }
   .onlyleft.smallLeftMain{
      width: calc(100% - 305px);//右侧不存在左侧缩起的时候
    }
}
</style>
