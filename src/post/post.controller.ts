import { Request, Response, NextFunction } from 'express';
import { getPosts, createPost } from './post.service';

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

/**
 * 创建内容
 */
export const store = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  // 准备数据
  const { title, content } = request.body;

  // 创建并响应数据
  try {
    const data = await createPost({ title, content });
    response.status(201).send(data);
  } catch (error) {
    next(error);
  }
};
