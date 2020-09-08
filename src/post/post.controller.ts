import { Request, Response, NextFunction } from 'express';
import { getPosts, createPost, updatePost, deletePOst } from './post.service';
import _ from 'lodash';

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

/**
 * 更新内容
 */
export const update = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  // 获取内容id
  const { postId } = request.params;
  // 准备数据
  // const { title, content } = request.body;
  const post = _.pick(request.body, ['title', 'content']);

  // 更新并响应数据
  try {
    // const data = await updatePost(parseInt(postId, 10), { title, content });
    const data = await updatePost(parseInt(postId, 10), post);
    response.send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 删除内容
 */
export const destroy = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  // 获取内容id
  const { postId } = request.params;

  // 删除并响应数据
  try {
    const data = await deletePOst(parseInt(postId, 10));
    response.send(data);
  } catch (error) {
    next(error);
  }
};
