<template>
  <div class="works">
    <div class="inner">
      <h3 class="title"><span>Works</span></h3>
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
h3 span {
  display: block;
  margin: 11px 0 17px 0;
  font-size: 80px;
  line-height: 80px;
  text-shadow: 0 13.36px 8.896px #c4b59d, 0 -2px 1px #c4b59d;
  letter-spacing: -2px;
}

.works {
  -webkit-transform: rotate(-6deg) translate3d(0, 0, 0);
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff7e6;
  width: 160%;
  margin-left: -180px;
  padding-bottom: 150px;
  color: #443319;

  .inner {
    -webkit-transform: rotate(6deg) translate3d(0, 0, 0);
    max-width: 65%;
    margin-left: 185px;

    .title {
      padding: 80px 0px 10px;
    }

    .work {
      margin: 20px auto;
      border: 3px dashed #443319;
      &:hover .col-lg-6:first-child img {
        filter: saturate(100%);
      }
      .col-lg-6:first-child img {
        transition: all 0.5s;
        filter: saturate(0);
      }
      @media screen and (max-width: 991px) {
        .col-lg-6:first-child {
          border-bottom: 3px dashed #443319;
        }
      }
      @media screen and (min-width: 992px) {
        .col-lg-6:first-child {
          border-right: 3px dashed #443319;
        }
      }
    }
  }
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
