<template>
  <div class="about-container">
    <div>
      <h3 class="about-title">About</h3>
      <table class="about-table">
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
          <td>~~~</td>
        </tr>
        <tr>
          <th>Qiita</th>
          <td>~~~</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
.about-container {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.5);
  background-color: #f3f9fb;
  height: 700px;
}

.about-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  padding: 50px;
}

.about-table {
  margin: auto;
  text-align: left;
}

.about-table th {
  padding-right: 80px;
}
</style>
