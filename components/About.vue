<template>
  <div class="about">
    <div>
      <h3 v-scroll="handleScroll" class="fade-in title"><span>About</span></h3>
      <img v-scroll="handleScroll" class="fade-in img" :src="about_img" />
      <table v-scroll="handleScroll" class="fade-in about-table">
        <tr>
          <th>Name</th>
          <td>Yuka</td>
        </tr>
        <tr>
          <th>Sex</th>
          <td>Woman</td>
        </tr>
        <tr>
          <th>Birthday</th>
          <td>1993/9/23</td>
        </tr>
        <tr>
          <th>GitHub</th>
          <td><a href="https://github.com/tayuta">tayuta</a></td>
        </tr>
        <tr>
          <th>Qiita</th>
          <td><a href="https://qiita.com/tayu">@tayu</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  data: function() {
    return {
      about_img: require('~/static/about.jpg')
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

.about {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
  background: linear-gradient(90deg, #ccc5c3 0%, #ccc5c3 30%, #efefef 30%);
  height: 850px;
  color: #443319;

  .title {
    padding: 80px 0px 0px;
  }

  .img {
    width: 300px;
    border-radius: 50%;
    margin: 20px 0px 30px;
    border: 3px dashed #443319;
  }
}

.about-table {
  margin: auto;
  text-align: left;
  font-size: 24px;

  th {
    padding-right: 80px;
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
