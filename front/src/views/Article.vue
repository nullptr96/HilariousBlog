<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <el-card class="markdown-body">
        <h1>{{article.title}} 
              <el-dropdown style="float:right;" :hide-on-click="false">
                <span class="el-dropdown-link">
                  操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="handleMod()">修改</el-dropdown-item>
                    <el-dropdown-item @click="handleDel()">删除</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
        </h1>
        
        <blockquote>{{'作者：' + article.author + ' | 创建时间：' + article.gmtCreate + ' | 浏览数：' + article.views + ' | 分类：' + article.category + ' | 标签：' + article.tags}}</blockquote>
        <VueShowdown
          :markdown="article.content"
          flavor="vanilla"
          :options="{ emoji: true, tables: true }"
          :extensions="extensions"
        />
      </el-card>
    </el-col>
    <el-backtop></el-backtop>
  </el-row>
</template>

<script>
import request from "@/http/request";
import showdownHighlight from "showdown-highlight";

export default {
  name: "Article",
  data() {
    return {
      article: { content: "" },
      extensions: [showdownHighlight]
    };
  },
  created() {
    request
      .getArticleByID(this.$route.params.id)
      .then(res => {
        if (res.code === 0) {
          this.article = res.data;
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
          title: "提示",
          message: "网络忙，文章详情获取失败"
        });
      });
  },
  methods: {
    handleDel() {
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        request.deleteArticleByID(this.$route.params.id).then(() => {
          this.$notify({
            title: "提示",
            message: `文章删除成功`,
            type: "success",
          });
          this.$router.push("/index");
        });
      });
    },
    handleMod() {
      this.$router.push('/editor/' + this.$route.params.id);
    }
  },
};
</script>

<style scoped>
.el-card {
  margin-top: 15px;
  padding: 20px;
}
</style>