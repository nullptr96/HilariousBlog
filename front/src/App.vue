<template>
  <div id="nav">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Footer, Header//, ArticlePreview
  },
  created() {
  }
}
</script>


<style lang="scss">

</style>
