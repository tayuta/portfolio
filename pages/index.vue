<template>
  <section class="container">
    <canvas id="bubbly"></canvas>
    <div class="body">
      <div class="menu-area"><hMenu /></div>
      <div id="home-area"><home /></div>
      <div id="about-area"><about /></div>
      <div id="skills-top"></div>
      <div class="skills-naname"></div>
      <div id="skills-area" v-prlx.mobile="{ reverse: true }"><skills /></div>
      <div id="works-area"><works /></div>
      <div class="dogs-naname"></div>
      <div id="dogs-area" v-prlx.mobile="{ reverse: true }"><dogs /></div>
    </div>
  </section>
</template>

<script>
import hMenu from '~/components/Menu.vue'
import home from '~/components/Home.vue'
import about from '~/components/About.vue'
import skills from '~/components/Skills.vue'
import works from '~/components/Works.vue'
import dogs from '~/components/Dogs.vue'
import mixin from '~/components/mixin.js'

export default {
  components: {
    hMenu,
    home,
    about,
    skills,
    works,
    dogs
  },
  mixins: [mixin],
  mounted() {
    const canvas = document.getElementById('bubbly')
    const width = (canvas.width = window.innerWidth)
    const height = (canvas.height = window.innerHeight)
    const context = canvas.getContext('2d')
    context.shadowColor = '#c9ffbf'
    context.shadowBlur = 4
    const gradient = this.setGradient(context, width, height)
    const bubbles = this.setBubbles(width, height)

    const draw = () => {
      requestAnimationFrame(draw)
      this.anim(context, gradient, bubbles, width, height)
    }
    draw()
  }
}
</script>

<style lang="scss">
#skills-top {
  height: 140px;
  background: linear-gradient(90deg, #ccc5c3 0%, #ccc5c3 30%, #efefef 30%);
}
.skills-naname {
  background: linear-gradient(-15deg, #ff7560 60%, #ffe4df);
  height: 500px;
  width: 120%;
  transform: rotate(-15deg);
  opacity: 0.5;
  margin-bottom: -490px;
}
@media screen and (max-width: 767px) {
  .skills-naname {
    margin-top: -100px;
  }
  #works-area {
    margin-top: -270px;
  }
}
@media screen and (min-width: 768px) {
  .skills-naname {
    margin-top: -20px;
  }
  #works-area {
    margin-top: -460px;
  }
}
.dogs-naname {
  background: linear-gradient(10deg, #ffca61 40%, #ffa467);
  height: 300px;
  width: 100%;
  transform: rotate(10deg);
  margin-left: -100px;
  margin-top: -200px;
  opacity: 0.5;
}
#dogs-area {
  margin-top: -280px;
  margin-bottom: -250px;
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  #dogs-area {
    margin-bottom: -160px;
  }
}
@media screen and (min-width: 992px) {
  #dogs-area {
    margin-bottom: -50px;
  }
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
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
  height: 70px;
  width: 100vw;
  left: 0;
  top: 0;
}
@media screen and (min-width: 768px) {
  /*下*/
  .body:after {
    height: 70px;
    width: 100vw;
    left: 0;
    bottom: 0;
  }
  .container:before,
  .container:after {
    width: 70px;
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

.menu-area {
  position: fixed;
  z-index: 10;
}

#bubbly {
  position: fixed;
  z-index: -5;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
