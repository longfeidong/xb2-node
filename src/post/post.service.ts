/**
 * 获取内容列表
 */
import { connection } from '../app/database/mysql';

export const getPosts = async () => {
  // const data = [
  //   {
  //     content: 'm15社区',
  //   },
  //   {
  //     content: '运河壹号',
  //   },
  //   {
  //     content: '鲁宁重工',
  //   },
  // ];
  const statement = `SELECT * FROM post`;
  // await必须写在async函数内部
  const [data] = await connection.promise().query(statement);

  return data;
};
