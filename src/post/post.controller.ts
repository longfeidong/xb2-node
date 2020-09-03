import { Request, Response, NextFunction } from 'express';
import { getPosts } from './post.service';

/**
 * 内容列表
 * 定义内容列表接口数据
 * @param request
 * @param response
 * @param next
 */
export const index = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  // if (request.headers.authorization !== 'SECRET') {
  //   return next(new Error());
  // }

  // 异常处理
  try {
    const posts = await getPosts();
    response.send(posts);
  } catch (error) {
    next(error);
  }
};
