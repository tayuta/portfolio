<template>
  <div class="home">
    <div class="title">
      <h1 class="main">portfolio</h1>
      <h2 class="sub">Welcome to my portfolio site</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  .title {
    position: fixed;
    z-index: -4;

    .main {
      font-weight: 500;
      font-size: 100px;
      color: #35495e;
      letter-spacing: 1px;
    }

    .sub {
      font-weight: 300;
      font-size: 40px;
      color: #526488;
      word-spacing: 5px;
    }
  }
}
</style>
