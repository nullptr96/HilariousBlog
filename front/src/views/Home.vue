<template>
  <section>
    <Header></Header>
    <section class="blog-body">
      <p v-if="flag==0" class="nothing">Nothing</p>
      <ul>
        <li  v-for='list in lists' v-bind:key='list.id'>
          <ArticlePreview v-bind:list="list"></ArticlePreview>
        </li>
      </ul>
      <el-pagination
        small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="count"
        :page-size="5"
        style="text-align: center;margin: 15px auto;"
      ></el-pagination>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ArticlePreview from '@/components/ArticlePreview.vue'

export default {
  name: 'Home',
  data() {
    return {
      flag: 0,
      lists: {
        list: {
          id: 1,
          title: 'this is'
        }
      }
    }
  },
  components: {
    Footer, Header, ArticlePreview
  }
}
</script>
<style>
.content {
  margin-left: 3px;
}
.blog-body {
  max-width: 770px;
  margin: 100px auto 0;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
}
.blog-list ul {
  list-style: none;
}
.title-link {
  vertical-align: middle;
  cursor: pointer;
}
.title-link:hover {
  color: #409eff;
}
.artic a {
  color: #24292e;
}

.article {
  margin: 0 0 15px;

  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0;
}
.article-header {
  padding: 10px 20px 0;
  /* border-bottom: 1px solid #f2f6fc; */
}
.article-footer {
  padding: 8px 20px;
  border-top: 1px solid #f3f3f3;
  line-height: 27px;
  overflow: hidden;
  font-size: 12px;
}
.blog-list .article .article-title {
  font-size: 20px;
  font-weight: 400;
}
.blog-list .article .article-body {
  margin: 10px 0;
  color: #666;
  word-break: break-all;
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
}

</style>

