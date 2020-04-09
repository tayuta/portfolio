<template>
  <div class="home">
    <div class="title">
      <h1 class="main"><span>portfolio</span></h1>
      <h2 class="sub">Welcome to my portfolio site</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 span {
  display: block;
  margin: 11px 0 17px 0;
  line-height: 80px;
  text-shadow: 0 13.36px 8.896px #c4b59d, 0 -2px 1px #c4b59d;
}

.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #443319;

  .title {
    position: fixed;
    z-index: -4;

    .main {
      font-weight: 500;
      font-size: 100px;
      letter-spacing: -1px;
    }

    .sub {
      font-weight: 300;
      font-size: 40px;
      word-spacing: 5px;
    }
  }
}
</style>
