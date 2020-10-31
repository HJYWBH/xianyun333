<template>
  <div class="container">
    <el-row type="flex" justify="space-between" class="main">
      <!-- logo部分 -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt="" />
        </nuxt-link>
      </div>
      <!-- 首页顶部导航 -->
      <div class="nav">
        <nuxt-link class="nvas" to="/">首页</nuxt-link>
        <nuxt-link class="nvas" to="/post">旅游攻略</nuxt-link>
        <nuxt-link class="nvas" to="/hotel">酒店</nuxt-link>
        <nuxt-link class="nvas" to="/air">国内机票</nuxt-link>
      </div>
      <!-- 登录信息 -->
      <div class="login">
        <!-- 登录前 -->
        <div v-if="!$store.state.user.userInFo.token">
          <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
        </div>

        <div v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              <!-- 头像 -->
              <img
                :src="
                  $axios.defaults.baseURL +
                  $store.state.user.userInFo.user.defaultAvatar
                "
                alt=""
              />
              <!-- 昵称 -->
              {{ $store.state.user.userInFo.user.nickname }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="handleloginout">
                退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleloginout() {
      this.$store.commit("user/loginout");
      this.$message({
        message: "退出成功",
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 60px;
  line-height: 60px;
  box-shadow: 0 0 3px #ccc;
  // position: relative;
  .main {
    width: 1000px;
    margin: 0 auto;
    .logo {
      width: 156px;
      height: 60px;
      margin-right: 20px;
      img {
        width: 100%;
        padding-top: 8px;
      }
    }
    .nav {
      display: flex;
      flex: 1;
      .nvas {
        // box-sizing: border-box;
        padding: 0 20px;
        &:hover {
          color: #409eff;
          border-bottom: 3px solid #409eff;
        }
      }
      .nuxt-link-exact-active {
        background: #409eff;
        color: #fff !important;
      }
    }
    .login {
      img {
        height: 36px;
        width: 36px;
        vertical-align: middle;
        border: 2px solid #fff;
        border-radius: 50%;
      }
      .el-dropdown-link {
        &:hover img {
          border-color: #409eff;
        }
        cursor: pointer;
      }
    }
  }
}
</style>
