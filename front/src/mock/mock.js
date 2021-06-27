import Mock from 'mockjs'
//使用mockjs模拟数据
Mock.mock('/api/v1/articles?page=1&limit=5', 'get' , {
    "code":0,
    "msg" :"操作成功",
    "data":{
      "records": [
        {
          "id": "1",//随机生成日期时间
          "author": "peter",//随机生成1-800的数字
          "title":  "title",//随机生成1-100的数字
          "content": "content",//随机生成1-5的数字
          "tags": [
            "java",
            "back"
          ],//随机生成中文名字
          "type": "Original",
          "category": "arch",
          "gmtCreate": "2020-07-04 22:26",
          "gmtUpdate": "2020-07-14 22:26",
          "tabloid": "???",
          "views": 0
        }
      ],
      "total": 14,
      "size": 5,
      "current": 2
    },
    "timestamp": "2020-07-21 22:26"
});

Mock.mock('/api/v1/article/1','get', {
  "code":0,
  "msg" :"操作成功",

  "data":{
    "id": "1",//随机生成日期时间
    "author": "peter",//随机生成1-800的数字
    "title":  "title",//随机生成1-100的数字
    "content": "content",//随机生成1-5的数字
    "tags": [
      "java",
      "back"
    ],//随机生成中文名字
    "type": "Original",
    "category": "arch",
    "gmtCreate": "2020-07-04 22:26",
    "gmtUpdate": "2020-07-14 22:26",
    "tabloid": "???",
    "views": 0
  },
  "timestamp": "2020-07-21 22:26"
})