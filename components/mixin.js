export default {
  methods: {
    setGradient: function(context, width, height) {
      const gradient = context.createLinearGradient(0, 0, width, height)
      // gradient.addColorStop(0, '#5D9FFF')
      // gradient.addColorStop(0.4, '#6BBBFF')
      // gradient.addColorStop(0.7, '#C5C1FF')
      // gradient.addColorStop(1, '#FFBAC3')
      gradient.addColorStop(0, '#EEEEEE')
      gradient.addColorStop(0.3, '#EEEEEE')
      // gradient.addColorStop(0.5, '#FFBAC3')
      gradient.addColorStop(1, '#FFBAC3')
      return gradient
    },
    setBubbles: function(width, height) {
      const r = () => Math.random()
      const nrBubbles = Math.floor((width + height) * 0.015)
      const bubbles = []
      for (let i = 0; i < nrBubbles; i++) {
        bubbles.push({
          f: (() => `hsla(${r() * 360}, 100%, 50%, ${r() * 0.2})`).call(), // fillStyle
          x: r() * width, // x-position
          y: r() * height, // y-position
          r: (() => 4 + (r() * width) / 23).call(), // radius
          a: (() => r() * Math.PI * 2).call(), // angle
          v: (() => 0.1 + r() * 0.1).call() // velocity
        })
      }
      return bubbles
    },
    anim: function(context, gradient, bubbles, width, height) {
      context.globalCompositeOperation = 'source-over'
      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)
      context.globalCompositeOperation = 'lighter'
      bubbles.forEach(bubble => {
        context.beginPath()
        context.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2)
        context.fillStyle = bubble.f
        context.fill()
        // update positions for next draw
        this.updateBubblePositions(bubble, width, height)
      })
    },
    updateBubblePositions: function(bubble, width, height) {
      bubble.x += Math.cos(bubble.a) * bubble.v
      bubble.y += Math.sin(bubble.a) * bubble.v
      if (bubble.x - bubble.r > width) {
        bubble.x = -bubble.r
      }
      if (bubble.x + bubble.r < 0) {
        bubble.x = width + bubble.r
      }
      if (bubble.y - bubble.r > height) {
        bubble.y = -bubble.r
      }
      if (bubble.y + bubble.r < 0) {
        bubble.y = height + bubble.r
      }
    },
    handleScroll: (evt, el) => {
      const top = el.getBoundingClientRect().top
      if (window.scrollY > top + window.pageYOffset - 700) {
        el.classList.add('isView')
        return true
      }
      return false
    }
  }
}
