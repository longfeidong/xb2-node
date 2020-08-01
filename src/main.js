// 使用express创建Web服务器
const express = require('express');
const { response } = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('服务已启动');
})

app.get('/', (request, response) => {
    response.send('Welcome express');
})

const data = [
    {
        id: 1,
        title: 'HTML',
        content: '超文本标记语言'
    },
    {
        id: 2,
        title: 'CSS',
        content: '层叠样式表'
    },
    {
        id: 3,
        title: 'JavaScript',
        content: '全栈开发语言'
    }
]

app.get('/posts', (request, response) => {
    response.send(data);
})

app.get('/posts/:postId', (request, response) => {
    // 获取内容ID
    const { postId } = request.params;
    // 查询对应的数据
    const results = data.filter(item => item.id == postId)
    // 作出相应
    response.send(results[0]);
})