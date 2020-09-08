import express from 'express';
import * as postController from './post.controller';
import { requestUrl } from '../app/app.middleware';

const router = express.Router();

/**
 * 内容列表
 * 定义内容列表的路由接口
 */
// 中间件放在接口地址和接口处理器中间
router.get('/posts', requestUrl, postController.index);

/**
 * 创建内容的接口
 */
router.post('/posts', postController.store);

/**
 * 更新内容的接口
 */
router.patch('/posts/:postId', postController.update);

/**
 * 删除内容的接口
 */
router.delete('/posts/:postId', postController.destroy);

/**
 * 导出路由
 */
export default router;
