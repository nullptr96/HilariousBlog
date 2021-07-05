module.exports = {
  devServer: {
    proxy: {
      "/api": {
         target: "http://139.196.201.165:9000/api/",
        // target: "http://localhost:9000/api/",
        changeOrigin:true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}