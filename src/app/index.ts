import express from 'express';
import postRouter from '../post/post.router';

/**
 * 创建应用
 */
const app = express();

/* *
 * 处理JSON
 */
app.use(express.json());

/**
 * 路由
 */
app.use(postRouter);

/* 
    导出模块
*/
export default app;
