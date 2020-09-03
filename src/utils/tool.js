export const getArrByKey = (data, k) => {
  const key = k || 'value'
  const res = []// 得到所有key
  if (Array.isArray(data)) {
    data.forEach(function(t) {
      res.push(t[key])
    })
  }
  return res
}

export const getSymbolData = (data) => {
  const arr = []
  for (var i = 0; i < data.length; i++) {
    arr.push({
      value: data[i].value,
      symbolPosition: 'end'
    })
  }
  return arr
}

export const formatNumber = (num) => {
  const reg = /(?=(\B)(\d{3})+$)/g
  return num.toString().replace(reg, ',')
}

// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
export const getParametricEquation = (startRatio, endRatio, isSelected, isHovered, k) => {
  // 计算
  const midRatio = (startRatio + endRatio) / 2

  const startRadian = startRatio * Math.PI * 2
  const endRadian = endRatio * Math.PI * 2
  const midRadian = midRatio * Math.PI * 2

  // 如果只有一个扇形，则不实现选中效果。
  if (startRatio === 0 && endRatio === 1) {
    isSelected = false
  }

  // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
  k = typeof k !== 'undefined' ? k : 1 / 3

  // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
  const offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0
  const offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0

  // 计算高亮效果的放大比例（未高亮，则比例为 1）
  const hoverRate = isHovered ? 1.05 : 1

  // 返回曲面参数方程
  return {

    u: {
      min: -Math.PI,
      max: Math.PI * 3,
      step: Math.PI / 32
    },

    v: {
      min: 0,
      max: Math.PI * 2,
      step: Math.PI / 20
    },

    x: function(u, v) {
      if (u < startRadian) {
        return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      if (u > endRadian) {
        return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
    },

    y: function(u, v) {
      if (u < startRadian) {
        return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      if (u > endRadian) {
        return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
    },

    z: function(u, v) {
      if (u < -Math.PI * 0.5) {
        return Math.sin(u)
      }
      if (u > Math.PI * 2.5) {
        return Math.sin(u)
      }
      return Math.sin(v) > 0 ? 1 : -1
    }
  }
}
