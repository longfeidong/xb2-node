import express from 'express';

/**
 * 创建应用
 */
const app = express();

/* *
 * 处理JSON
 */
app.use(express.json());

/* 
    导出模块
*/
export default app;
