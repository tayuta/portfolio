<template>
  <div class="menu" href="#">
    <div
      class="menu-trigger"
      :class="{ active: isActive, closed: isClose }"
      @click="
        isActive = !isActive
        isClose = !isActive
      "
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="menu-contents" :class="{ active: isActive, closed: isClose }">
      <div class="inner">
        <li><nuxt-link v-scroll-to="'#home-area'" to>Home</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#about-area'" to>About</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#skills-area'" to>Skills</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#works-area'" to>Works</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#dogs-area'" to>Dogs</nuxt-link></li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      isClose: false
    }
  }
}
</script>

<style scoped lang="scss">
.menu-contents.closed {
  transition: all 0.75s 0.15s;
  opacity: 0;
  visibility: hidden;
}
.menu-contents.active {
  transition: all 0.75s 0.15s;
  opacity: 0.85;
  visibility: visible;
}

.menu-contents {
  background: #ffffff;
  position: fixed;
  top: 0px;
  right: -250px;
  width: 650px;
  height: 300px;
  transform: rotate(50deg);
  z-index: -1;
  opacity: 0;

  .inner {
    position: relative;
    top: 25px;
    right: -300px;
    width: 130px;
    transform: rotate(-50deg);
    text-align: right;
  }

  li {
    list-style-type: none;
    margin: 15px;
    font-size: 30px;

    a {
      color: #536170;
      position: relative;

      &:hover {
        color: #aaa;
        text-decoration: none;

        &::after,
        &::before {
          width: 100%;
          left: 0;
        }
      }

      &::after,
      &::before {
        content: '';
        position: absolute;
        top: calc(100% + 5px);
        width: 0;
        right: 0;
        height: 3px;
      }
      &::before {
        transition: width 0.4s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
        background: #ffbac3;
      }

      &::after {
        transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
        background: #f44336;
      }
    }
  }
}

.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
}
.menu-trigger {
  cursor: pointer;
  position: fixed;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 34px;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #35495e;
    border-radius: 4px;
  }
  span:nth-of-type(1) {
    top: 0;
  }
  span:nth-of-type(2) {
    top: 15px;
  }
  span:nth-of-type(3) {
    bottom: 0;
  }
}

.menu-trigger.closed {
  span:nth-of-type(1) {
    -webkit-animation: menu-bar01 0.75s forwards;
    animation: menu-bar01 0.75s forwards;
  }
  span:nth-of-type(2) {
    transition: all 0.25s 0.25s;
    opacity: 1;
  }
  span:nth-of-type(3) {
    -webkit-animation: menu-bar02 0.75s forwards;
    animation: menu-bar02 0.75s forwards;
  }
}

.menu-trigger.active {
  span:nth-of-type(1) {
    -webkit-animation: active-menu-bar01 0.75s forwards;
    animation: active-menu-bar01 0.75s forwards;
  }
  span:nth-of-type(2) {
    opacity: 0;
  }
  span:nth-of-type(3) {
    -webkit-animation: active-menu-bar03 0.75s forwards;
    animation: active-menu-bar03 0.75s forwards;
  }
}

@-webkit-keyframes menu-bar01 {
  0% {
    -webkit-transform: translateY(15px) rotate(45deg);
  }
  50% {
    -webkit-transform: translateY(15px) rotate(0);
  }
  100% {
    -webkit-transform: translateY(0) rotate(0);
  }
}
@keyframes menu-bar01 {
  0% {
    transform: translateY(15px) rotate(45deg);
  }
  50% {
    transform: translateY(15px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
@-webkit-keyframes menu-bar02 {
  0% {
    -webkit-transform: translateY(-15px) rotate(-45deg);
  }
  50% {
    -webkit-transform: translateY(-15px) rotate(0);
  }
  100% {
    -webkit-transform: translateY(0) rotate(0);
  }
}
@keyframes menu-bar02 {
  0% {
    transform: translateY(-15px) rotate(-45deg);
  }
  50% {
    transform: translateY(-15px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
@-webkit-keyframes active-menu-bar01 {
  0% {
    -webkit-transform: translateY(0) rotate(0);
  }
  50% {
    -webkit-transform: translateY(15px) rotate(0);
  }
  100% {
    -webkit-transform: translateY(15px) rotate(45deg);
  }
}
@keyframes active-menu-bar01 {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(15px) rotate(0);
  }
  100% {
    transform: translateY(15px) rotate(45deg);
  }
}
@-webkit-keyframes active-menu-bar03 {
  0% {
    -webkit-transform: translateY(0) rotate(0);
  }
  50% {
    -webkit-transform: translateY(-15px) rotate(0);
  }
  100% {
    -webkit-transform: translateY(-15px) rotate(-45deg);
  }
}
@keyframes active-menu-bar03 {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-15px) rotate(0);
  }
  100% {
    transform: translateY(-15px) rotate(-45deg);
  }
}
</style>
