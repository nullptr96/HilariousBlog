<template>
  <div class="header-wraper">
    <header class="blog-header">
      <h1 class="header-title">
        <router-link to="/">StarBlog</router-link>
      </h1>
      <nav class="header-nav">
        <el-input
          placeholder="请输入搜索内容"
          prefix-icon="el-icon-search"
          v-model="search"
          class="nav-search"
          autocomplete="off"
          name="aa"
        ></el-input>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      search: ""
    };
  }
};
</script>
<style scoped lang="scss">
.el-input /deep/ .el-input__inner {
  height: 30px;
}
.header-wraper {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  z-index: 999;
  background-color: #fff;
}
.blog-header {
  display: flex;
  width: 960px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 15px;
}
.header-title {
  font-size: 20px;
  font-weight: 700;
}
.header-nav {
  display: -webkit-box;
  margin-right: 5rem;
}
.blog-header .header-nav ul {
  list-style: none;
}
.blog-header .header-nav li {
  display: inline-block;
}
.blog-header .header-nav li a {
  padding: 0 15px;
}
</style>
