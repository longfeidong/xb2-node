/**
 * 接口中间件
 *
 */

import { Request, Response, NextFunction } from 'express';

/**
 * 输出请求的url
 */
export const requestUrl = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log('请求地址：', request.url);
  next();
};
