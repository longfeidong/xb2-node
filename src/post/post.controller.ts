import { Request, Response, NextFunction } from 'express';
import { getPosts } from './post.service';

/**
 * 内容列表
 * 定义内容列表接口数据
 * @param request
 * @param response
 * @param next
 */
export const index = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const posts = getPosts();
  response.send(posts);
};
