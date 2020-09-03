import { getParametricEquation } from '@/utils/tool.js'
export default {
  data() {
    return {
      three: {
        data: [],
        chart: ''
      }
    }
  },
  methods: {
    getPie3D(pieData, internalDiameterRatio) {
      const series = []
      let sumValue = 0
      let startValue = 0
      let endValue = 0
      const legendData = []
      const k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 6

      // 为每一个饼图数据，生成一个 series-surface 配置
      for (let i = 0; i < pieData.length; i++) {
        sumValue += pieData[i].value
        const seriesItem = {
          name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
          type: 'surface',
          parametric: true,
          wireframe: {
            show: false
          },
          pieData: pieData[i],
          pieStatus: {
            selected: false,
            hovered: false,
            k: k
          }
        }

        if (typeof pieData[i].itemStyle !== 'undefined') {
          const itemStyle = {}

          typeof pieData[i].itemStyle.color !== 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null
          typeof pieData[i].itemStyle.opacity !== 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null

          seriesItem.itemStyle = itemStyle
        }
        series.push(seriesItem)
      }

      // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
      // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
      for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value

        series[i].pieData.startRatio = startValue / sumValue
        series[i].pieData.endRatio = (endValue / sumValue)
        series[i].parametricEquation = getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, k)

        startValue = endValue

        legendData.push(series[i].name)
      }

      // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
      series.push({
        name: 'mouseoutSeries',
        type: 'surface',
        parametric: true,
        wireframe: {
          show: false
        },
        itemStyle: {
          opacity: 0
        },
        parametricEquation: {
          u: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20
          },
          v: {
            min: 0,
            max: Math.PI,
            step: Math.PI / 20
          },
          x: function(u, v) {
            return Math.sin(v) * Math.sin(u) + Math.sin(u)
          },
          y: function(u, v) {
            return Math.sin(v) * Math.cos(u) + Math.cos(u)
          },
          z: function(u, v) {
            return Math.cos(v) > 0 ? 0.1 : -0.1
          }
        }
      })

      // 准备待返回的配置项，把准备好的 legendData、series 传入。
      const option = {
        // animation: false,
        legend: {
          data: legendData,
          orient: 'vertical',
          icon: 'rect',
          x: '65%',
          y: 'center',
          itemWidth: 147,
          itemHeight: 46,
          align: 'right',
          itemGap: 80,
          textStyle: {
            fontSize: 40,
            color: '#fff',
            padding: [0, 70, 0, 0]
          }
        },
        // tooltip: {
        //   show: true,
        //   formatter: params => {
        //     if (params.seriesName !== 'mouseoutSeries') {
        //       return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${option.series[params.seriesIndex].pieData.value}`
        //     }
        //   }
        // },
        title: {
          text: '泰州',
          x: '26%',
          y: '49%',
          textStyle: {
            fontSize: 60,
            color: '#ffffff'
          }
        },
        xAxis3D: {
          min: -1,
          max: 1
        },
        yAxis3D: {
          min: -1,
          max: 1
        },
        zAxis3D: {
          min: -1,
          max: 1
        },
        grid3D: {
          show: false,
          boxHeight: 10,
          boxWidth: 130,
          boxDepth: -140,
          left: '-20%'
        },

        series: series
      }
      return option
    },
    drawThree() {
      this.three.chart = this.$echarts.init(document.getElementById('regionalHeat'))
      this.three.data = [
        {
          name: '海陵区',
          value: 11
        },

        {
          name: '高港区',
          value: 33
        }, {
          name: '姜堰区',
          value: 22
        },
        {
          name: '晋江区',
          value: 22
        },
        {
          name: '泰兴区',
          value: 22
        }
      ]
      const pieData = []
      const colorList = ['#F77B66', '#3EDCE0', '#F94E76', '#018EF1', '#9E60F9']
      this.three.data.forEach((f, i) => {
        pieData.push({
          ...f,
          itemStyle: {
            color: colorList[i]
          }
        })
      })
      const option = this.getPie3D(pieData)

      // 监听鼠标事件，实现饼图选中效果（单选），近似实现高亮（放大）效果。
      let selectedIndex = ''
      let hoveredIndex = ''

      // 监听点击事件，实现选中效果（单选）
      this.three.chart.on('click', (params) => {
        // 从 option.series 中读取重新渲染扇形所需的参数，将是否选中取反。
        if (!option.series[params.seriesIndex].pieStatus) {
          return
        }
        const isSelected = !option.series[params.seriesIndex].pieStatus.selected
        const isHovered = option.series[params.seriesIndex].pieStatus.hovered
        const k = option.series[params.seriesIndex].pieStatus.k
        const startRatio = option.series[params.seriesIndex].pieData.startRatio
        const endRatio = option.series[params.seriesIndex].pieData.endRatio

        // 如果之前选中过其他扇形，将其取消选中（对 option 更新）
        if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
          option.series[selectedIndex].parametricEquation = getParametricEquation(option.series[selectedIndex].pieData.startRatio, option.series[selectedIndex].pieData.endRatio, false, false, k)
          option.series[selectedIndex].pieStatus.selected = false
        }

        // 对当前点击的扇形，执行选中/取消选中操作（对 option 更新）
        option.series[params.seriesIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k)
        option.series[params.seriesIndex].pieStatus.selected = isSelected

        // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
        isSelected ? selectedIndex = params.seriesIndex : null

        // 使用更新后的 option，渲染图表
        this.three.chart.setOption(option)
      })

      // 监听 mouseover，近似实现高亮（放大）效果
      this.three.chart.on('mouseover', (params) => {
        // 准备重新渲染扇形所需的参数
        let isSelected
        let isHovered
        let startRatio
        let endRatio
        let k

        // 如果触发 mouseover 的扇形当前已高亮，则不做操作
        if (hoveredIndex === params.seriesIndex) {
          return

          // 否则进行高亮及必要的取消高亮操作
        } else {
        // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
          if (hoveredIndex !== '') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
            isSelected = option.series[hoveredIndex].pieStatus.selected
            isHovered = false
            startRatio = option.series[hoveredIndex].pieData.startRatio
            endRatio = option.series[hoveredIndex].pieData.endRatio
            k = option.series[hoveredIndex].pieStatus.k

            // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
            option.series[hoveredIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k)
            option.series[hoveredIndex].pieStatus.hovered = isHovered

            // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
            hoveredIndex = ''
          }

          // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
          if (params.seriesName !== 'mouseoutSeries') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
            isSelected = option.series[params.seriesIndex].pieStatus.selected
            isHovered = true
            startRatio = option.series[params.seriesIndex].pieData.startRatio
            endRatio = option.series[params.seriesIndex].pieData.endRatio
            k = option.series[params.seriesIndex].pieStatus.k

            // 对当前点击的扇形，执行高亮操作（对 option 更新）
            option.series[params.seriesIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k)
            option.series[params.seriesIndex].pieStatus.hovered = isHovered

            // 记录上次高亮的扇形对应的系列号 seriesIndex
            hoveredIndex = params.seriesIndex
          }

          // 使用更新后的 option，渲染图表
          this.three.chart.setOption(option)
        }
      })

      // 修正取消高亮失败的 bug
      this.three.chart.on('globalout', () => {
        if (hoveredIndex !== '') {
        // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
          const isSelected = option.series[hoveredIndex].pieStatus.selected
          const isHovered = false
          const k = option.series[hoveredIndex].pieStatus.k
          const startRatio = option.series[hoveredIndex].pieData.startRatio
          const endRatio = option.series[hoveredIndex].pieData.endRatio

          // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
          option.series[hoveredIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k)
          option.series[hoveredIndex].pieStatus.hovered = isHovered

          // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
          hoveredIndex = ''
        }

        // 使用更新后的 option，渲染图表
        this.three.chart.setOption(option)
      })

      this.three.chart.setOption(option)
    }
  }
}
