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

/**
 * 默认异常处理器
 */
export const defaultErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error.message) {
    console.log('异常错误：', error.message);
  }

  let statusCode: number, message: string;
  /**
   * 处理异常
   */
  switch (error.message) {
    default:
      statusCode = 500;
      message = '服务器出现错误';
      break;
  }
  response.status(statusCode).send({ message });
};
