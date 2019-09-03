<template>
  <div class="skills-container">
    <div class="inner">
      <h3 class="skills-title">Skills</h3>
      <div class="skills-contents">
        <div class="diamond">
          <div class="diamond-inner">Java</div>
        </div>
        <div class="diamond">
          <div class="diamond-inner">Vue.js / Nuxt.js</div>
        </div>
        <div class="diamond">
          <div class="diamond-inner">JavaScript</div>
        </div>
        <div class="diamond">
          <div class="diamond-inner">C#</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.skills-container {
  -webkit-transform: rotate(-10deg) translate3d(0, 0, 0);
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.5);
  background-color: #f3f9fb;
  height: 100vh;
  width: 120%;
  margin-top: -200px;
  margin-left: -60px;
}

.skills-container .inner {
  -webkit-transform: rotate(10deg) translate3d(0, 0, 0);
}

.skills-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  padding: 50px;
}

.skills-contents {
  margin: auto;
}

@media screen and (max-width: 576px) {
  .skills-contents {
    max-width: 400px;
  }
}
@media screen and (min-width: 577px) and (max-width: 767px) {
  .skills-contents {
    max-width: 500px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .skills-contents {
    max-width: 700px;
  }
}
@media screen and (min-width: 992px) {
  .skills-contents {
    max-width: 800px;
  }
}

.diamond {
  width: 140px;
  height: 140px;
  background: #72b4ff;
  transform: rotate(45deg);
  margin: 55px 25px auto;
  display: inline-block;
}

.diamond-inner {
  font-size: 20px;
  line-height: 45px;
  color: #fff;
  background: transparent;
  transform: rotate(-45deg);
  text-align: center;
  margin-top: 50px;
}
</style>
