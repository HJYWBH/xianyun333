<template>
  <div>
    <!-- 头部组件 -->
    <Header />
    <!-- 底部组件 -->
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header"
import Footer from "@/components/footer"
export default {
  components:{
    Header,
    Footer
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*{
  padding: 0;
  margin: 0;
}
ul,ol,li,input{
  list-style: none;
}
a{
  text-decoration: none;
  color: inherit;
}
em,i{
  font-style: normal;
}
</style>
