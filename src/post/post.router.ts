import express from 'express';
import * as postController from './post.controller';

const router = express.Router();

/**
 * 内容列表
 * 定义内容列表的路由接口
 */
router.get('/posts', postController.index);

/**
 * 导出路由
 */
export default router;
