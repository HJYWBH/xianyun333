<template>
  <div class="container">
    <div class="mai">
      <!-- logo部分 -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt="">
        </nuxt-link>
      </div>
      <!-- 首页顶部导航 -->
      <div class="nav">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/post">旅游攻略</nuxt-link>
          <nuxt-link to="/hotel">酒店</nuxt-link>
          <nuxt-link to="/air">国内机票</nuxt-link>
      </div>
      <!-- 登录信息 -->
      <div class="login">
          <!-- 登录前 -->
          <nuxt-link to="/user/login">登录/注册</nuxt-link>
          <!-- 登录后 -->
          <div v-if="false"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>