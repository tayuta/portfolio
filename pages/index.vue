<template>
  <section class="container">
    <canvas id="bubbly"></canvas>
    <div class="body">
      <div class="title-container">
        <h1 class="title">
          <logo />
          portfolio
        </h1>
        <h2 class="subtitle">
          My astonishing Nuxt.js project
        </h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green"
            >Documentation</a
          >
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
            >GitHub</a
          >
        </div>
      </div>
      <div>
        <div class="about-area"><about /></div>
        <div class="skills-area"><skills /></div>
        <div class="fade-in"><about /></div>
        <div class="fade-in"><about /></div>
        <div class="fade-in"><about /></div>
        <div v-scroll="handleScroll" class="fade-in"><about /></div>
        <div v-scroll="handleScroll" class="fade-in"><about /></div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import about from '~/components/About.vue'
import skills from '~/components/Skills.vue'

export default {
  components: {
    Logo,
    about,
    skills
  },
  mounted() {
    const c = {}
    const r = () => Math.random()
    const canvas = document.getElementById('bubbly')
    const width = (canvas.width = window.innerWidth)
    const height = (canvas.height = window.innerHeight)
    const context = canvas.getContext('2d')
    context.shadowColor = c.shadowColor || '#c9ffbf'
    context.shadowBlur = c.blur || 4
    const gradient = context.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#5D9FFF')
    gradient.addColorStop(0.4, '#6BBBFF')
    gradient.addColorStop(0.7, '#C5C1FF')
    gradient.addColorStop(1, '#FFBAC3')
    const nrBubbles = c.bubbles || Math.floor((width + height) * 0.015)
    const bubbles = []
    for (let i = 0; i < nrBubbles; i++) {
      bubbles.push({
        f: (
          c.bubbleFunc || (() => `hsla(${r() * 360}, 100%, 50%, ${r() * 0.2})`)
        ).call(), // fillStyle
        x: r() * width, // x-position
        y: r() * height, // y-position
        r: (c.radiusFunc || (() => 4 + (r() * width) / 22)).call(), // radius
        a: (c.angleFunc || (() => r() * Math.PI * 2)).call(), // angle
        v: (c.velocityFunc || (() => 0.1 + r() * 0.1)).call() // velocity
      })
    }

    const draw = function() {
      if (canvas.parentNode === null) {
        return cancelAnimationFrame(draw)
      }
      if (c.animate !== false) {
        requestAnimationFrame(draw)
      }
      context.globalCompositeOperation = 'source-over'
      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)
      context.globalCompositeOperation = c.compose || 'lighter'
      bubbles.forEach(bubble => {
        context.beginPath()
        context.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2)
        context.fillStyle = bubble.f
        context.fill()
        // update positions for next draw
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
      })
    }
    draw()
  },
  methods: {
    handleScroll: (evt, el) => {
      const top = el.getBoundingClientRect().top
      if (window.scrollY > top + window.pageYOffset - 600) {
        el.classList.add('isView')
        return true
      }
      return false
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  padding-right: 0px;
  padding-left: 0px;
}

.body:before,
.body:after,
.container:before,
.container:after {
  content: '';
  background: #ffffff;
  position: fixed;
  display: block;
  z-index: 5;
}
/*上*/
.body:before {
  height: 60px;
  width: 100vw;
  left: 0;
  top: 0;
}
@media screen and (min-width: 768px) {
  /*下*/
  .body:after {
    height: 60px;
    width: 100vw;
    left: 0;
    bottom: 0;
  }
  .container:before,
  .container:after {
    width: 60px;
    height: 100vh;
    top: 0;
  }
  /*左*/
  .container:before {
    left: 0;
  }
  /*右*/
  .container:after {
    right: 0;
  }
}
.title-container {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: flex;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  position: fixed;
  z-index: -4;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  position: fixed;
  top: 330px;
  z-index: -4;
}

.links {
  padding-top: 15px;
  position: fixed;
  top: 370px;
  z-index: -4;
}

#bubbly {
  position: fixed;
  z-index: -5;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
}

/* .about-area {
  overflow-x: hidden;
} */

.skills-area {
  /* min-width: 100vw;
  overflow-x: hidden; */
}

.fade-in {
  opacity: 0;
  /* width: 100vw; */
}

.fade-in.isView {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
