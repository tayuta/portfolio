<template>
  <div class="works">
    <div class="inner">
      <h3 class="title">Works</h3>
      <div class="works-contents">
        <div
          v-for="(work, key, index) in works"
          :key="index"
          v-scroll="handleScroll"
          class="fade-in work card mb-3"
          style="max-width: 500px;"
        >
          <div class="row no-gutters">
            <div class="col-lg-6">
              <img :src="work.img" class="card-img" alt="..." />
            </div>
            <div class="col-lg-6">
              <div class="card-body">
                <h4 class="card-title">{{ work.name }}</h4>
                <p class="card-text">{{ work.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  data: function() {
    return {
      works: [
        {
          name: 'Portfolio',
          detail: 'ポートフォリオ（このページ）です。',
          img: require('~/static/portfolio.png')
        },
        {
          name: 'etc...',
          detail: 'これから増やしていきたい所存。',
          img: require('~/static/fubuki2.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.works {
  -webkit-transform: rotate(-6deg) translate3d(0, 0, 0);
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff7e6;
  width: 160%;
  margin-left: -180px;
  padding-bottom: 150px;

  .inner {
    -webkit-transform: rotate(6deg) translate3d(0, 0, 0);
    max-width: 65%;
    margin-left: 185px;

    .title {
      font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
      font-weight: 600;
      font-size: 50px;
      color: #35495e;
      letter-spacing: 1px;
      padding: 100px 0px 40px;
    }
  }
}

.work {
  margin: auto;
}

.fade-in {
  opacity: 0;
}

.fade-in.isView {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 0.2s;
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
