import axios from 'axios'
import urls from "@/http/urls"
import store from "@/store/index"
import router from "@/router/index"

const instance = axios.create({
  baseURL: urls.baseUrl,
  timeout: 5000,
});

instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

instance.interceptors.request.use((config) => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //默认除了2XX之外的都是错误的，就会走这里
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: "login",
            query: { redirect: router.currentRoute.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由
          });
      }
    }
    return Promise.reject(error.response);
  }
);

export default {
  getArticles(page, limit) {
    return instance.get(urls.articles, {
      params: {
        page: page,
        limit: limit
      }
    }).then(res => res.data); // 这里的 res => res.data 是为了防止axios中的data属性和返回值中的data属性混淆
  },
  getArticleByID(id) {
    return instance.get(urls.article + "/" + id).then(res => res.data);
  },  
  deleteArticleByID(id) {
    return instance.delete(urls.article + "/" + id).then(res => res.data);
  },  
  getAllTags() {
    return instance.get(urls.tags).then(res => res.data);
  },
  getAllCategories() {
    return instance.get(urls.categories).then(res => res.data);
  },
  getBlogInfo() {
    return instance.get(urls.info).then(res => res.data);
  },
  getTimeline() {
    return instance.get(urls.timeline).then(res => res.data);
  },
  getArticlesByTag(tag, page, limit) {
    return instance.get(urls.tag + "/" + tag, {
      params: {
        page: page,
        limit: limit
      }
    }).then(res => res.data);
  },
  getArticlesByCategory(category, page, limit) {
    return instance.get(urls.category + "/" + category, {
      params: {
        page: page,
        limit: limit
      }
    }).then(res => res.data);
  },
  postArticle(params) {
    return instance.post(urls.articles, {
        author: params.author,
        category: params.category,
        content: params.content,
        tabloid: params.tabloid,
        tags: params.tags.join(),
        title: params.title,
        type: 1
    }).then(res => res.data);
  },
  updateArticle(id, params) {
    return instance.put(urls.article + "/" + id, {
        author: params.author,
        category: params.category,
        content: params.content,
        tabloid: params.tabloid,
        tags: params.tags.join(),
        title: params.title,
        type: 1
    }).then(res => res.data);
  }
}