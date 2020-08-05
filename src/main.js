// 使用express创建Web服务器
const express = require('express');
const { response } = require('express');
const app = express();
const port = 3000;

/**
 * 使用 JSON 中间件
 * 使用后服务端可以直接处理客户端发送过来的 JSON 数据
 */
app.use(express.json());

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

/**
 * 创建内容
 */
app.post('/posts', (request, response) => {
    // 获取请求数据
    const { content } = request.body;
    // 设置响应的状态码
    response.status('201');
    // 输出请求的头部数据
    console.log(request.headers.token);
    // 设置服务端响应的头部数据
    response.set('Token', 112233);
    // 作出响应，express会把客户端发送过来的数据处理成json，然后再发送给客户端
    response.send({
        message: `成功创建了内容：${content} `
    })
})