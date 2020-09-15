// 定义user需要的中间件
import { Request, Response, NextFunction } from 'express';
import * as userService from './user.service';
/**
 * 验证用户数据
 */
export const validateUserData = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log('准备验证用户数据~');

  // 准备数据
  const { name, password } = request.body;

  // 验证必填数据
  if (!name) return next(new Error('NAME_IS_REQUIRED'));
  if (!password) return next(new Error('PASSWORD_IS_REQUIRED'));

  // 验证用户名
  const userName = await userService.getUserByName(name);
  if (userName) return next(new Error('USER_ALREADY_EXIST'));

  // 下一步
  next();
};
