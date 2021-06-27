<template>
  <div>
    <el-carousel indicator-position="none" height="400px" arrow="nerver" :interval="5000">
      <el-carousel-item v-for="item in blogInfo.covers" :key="item">
        <div class="item-box">
          <img :src="item" class="carimg" />
          <div class="desc-box">
            <h1>{{ blogInfo.title }}</h1>
            <p>{{ blogInfo.desc }}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20">
      <el-col :span="14" :offset="2">

        <article-item v-for="article in pageInfo.records" :key="article.id" :article="article"></article-item>
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page="pageInfo.current"
          @update:current-page="pageInfo.current = $event"
          :page-size="pageInfo.size"
          layout="prev, pager, next, jumper"
          :total="pageInfo.total"
          :hide-on-single-page="true"
        ></el-pagination>
      </el-col>
      <el-col :span="6">
        <blog-info></blog-info>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import request from "@/http/request";
import BlogInfo from '@/components/BlogInfo.vue'
import ArticleItem from '@/components/ArticleItem.vue'
export default {
  name: "Home",
  components: {
    BlogInfo, ArticleItem
  },
  computed: {
    blogInfo () {
      return {...this.$store.state.blogInfo};
    }
  },
  data() {
    return {
      pageInfo: {}
    };
  },
  created() {
    this.getPageArticles(1, 5);
  },
  methods: {
    handleCurrentChange(page) {
      this.getPageArticles(page, 5);
    },
    getPageArticles(page, limit) {
      request
      .getArticles(page, limit)
      .then(res => {
        if (res.code === 0) {
          this.pageInfo = res.data;
        } else {
          this.$notify.error({
            title: "提示",
            message: res.msg
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.$notify.error({
          title: "Notification",
          message: "Fail to load article"
        });
      });
    }
  },
};
</script>
<style>
.item-box {
  position: relative;
  width: 100%;
  height: 100%;
}
.carimg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
}
.desc-box {
  position: absolute;
  bottom: 0;
  left: 50%;
  top: 50%;
  width: 500px;
  height: 40px;
  margin-left: -250px;
  margin-top: -20px;
  text-align: center;
  color: aliceblue;
}
.el-card {
  margin-top: 20px;
}
.article-info {
  margin-top: 10px;
  color: #909399;
  font-size: 13px;
}
.article-icon,
.article-icon .tag {
  color: #909399;
  font-size: 13px;
  margin-right: 10px;
  text-decoration: none;
}
.article-icon .tag:hover {
  color: #409eff;
  cursor: pointer;
}
.tabloid {
  color: #606266;
  font-size: 14px;
  margin-bottom: 10px;
}

</style>

