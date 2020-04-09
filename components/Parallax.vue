<template>
  <div class="parallax">
    <div class="inner">
      <h3 class="title"><span>Parallax</span></h3>
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
.parallax {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.3) inset;
  position: relative;
  margin-top: -50px;
  background-image: url('~@/static/sakuraTree.jpg');
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .inner {
    // position: fixed;
    text-align: center;
    width: 100%;
    top: 20%;
    .title {
      padding: 80px 0px 10px;
    }
  }
}
</style>
