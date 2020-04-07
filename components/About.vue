<template>
  <div class="about">
    <div>
      <h3 v-scroll="handleScroll" class="fade-in title">About</h3>
      <img v-scroll="handleScroll" class="fade-in img" :src="fubuki_img" />
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
      fubuki_img: require('~/static/fubuki.png')
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
  background-color: #efefef;
  height: 1100px;

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    font-weight: 600;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
    padding: 100px 0px 0px;
  }

  .img {
    width: 300px;
    border-radius: 50%;
    padding: 20px 0px 30px;
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
