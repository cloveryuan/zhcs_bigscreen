<template>
  <div>
    <div class="wrap_item six">
      <div class="title-module">
        <span class="line" />
        <h5>交通事故报警</h5>
      </div>
      <ul class="center">
        <li>
          <span style="margin-left:43px;">已处理</span>
          <span class="num">100</span>
        </li>
        <li>
          <span style="margin-left:43px;">待处理</span>
          <span class="num">60</span>
        </li>
      </ul>
    </div>
    <div class="wrap_item ten">
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          prop="date"
          label="时间"
          show-overflow-tooltip
        />
        <el-table-column
          prop="address"
          label="地点"
          show-overflow-tooltip
        />
        <el-table-column
          prop="name"
          label="联系人"
          width="260"
        />
      </el-table>
      <div style="margin-top:-30px;background: #283872;height:40px;position: relative;z-index:99" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoCol',
  components: {

  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02 19:00',
          name: '王A虎',
          address: '大新地铁站B出口 1518 弄'
        }, {
          date: '2016-05-04 13:45',
          name: '王B虎',
          address: '大新地铁站B出口 1517 弄'
        }, {
          date: '2016-05-01 05:34',
          name: '王C虎',
          address: '大新地铁站B出口 1519 弄'
        }, {
          date: '2016-05-03 15:38',
          name: '王D虎',
          address: '大新地铁站B出口 1516 弄'
        },
        {
          date: '2016-05-02 19:00',
          name: '王E虎',
          address: '大新地铁站B出口 1518 弄'
        }
      ],
      timerTable: null,
      xiangmu: []
    }
  },
  computed: {

  },
  mounted() {
    this.changeTable()
  },
  destroyed() {
    this.timerTable = null
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'paddingBottom'
      } else if (rowIndex % 2 === 1) {
        return 'dartColorBg'
      }
      return ''
    },
    changeTable() {
      this.timerTable = setInterval(() => {
        const tempArr = this.tableData.splice(0, 1)
        // console.log(this.tableData.splice(0, 1))

        this.tableData = [...this.tableData, ...tempArr]
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
#three{
  .wrap{
    .six{
      background:rgba(85,110,215,0.4);
      .center{
        list-style: none;
        margin:auto 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top:193px;
        li{
          width:45%;
          height:220px;
          background:linear-gradient(0deg,rgba(1,129,222,1) 0%,rgba(103,224,227,1) 100%);
          font-size:79px;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:220px;
          display: inline-block;
          .num{
            float: right;
            margin-right:86px;
          }
        }
        li:last-child{
          background:linear-gradient(0deg,rgba(252,149,1,1) 0%,rgba(254,215,1,1) 99%);
        }
      }
    }
    .ten{
      background:rgba(85,110,215,0.4);
      .el-table{
        margin-top: -536px;
        background:transparent;

      }
      table{
        border:0;
      }
      .el-table__header{
        th{
          background:rgba(31,42,107,1);
        }
      }
      .el-table__header,.el-table__row{
        th,td{
          height:190px;
          color: #fff;
          font-size:50px;
          border-bottom: 0;
          .cell{
            line-height:190px;
            font-weight:400;
            box-sizing: border-box;
          }
          .cell:first-child{
             padding-left:50px;
          }
        }
      }
      .el-table__row{
        background: transparent;
      }
      .el-table__row.dartColorBg{
        background:rgba(31,42,107,1);
      }
      .paddingBottom{
        .cell{
          padding-bottom:34px;
        }
      }
      .el-table--enable-row-hover .el-table__body tr:hover>td {
        background-color: transparent;
      }
    }
  }
}

</style>
