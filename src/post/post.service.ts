/**
 * 获取内容列表
 */
import { connection } from '../app/database/mysql';
import { PostModel } from './post.model';

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
  const statement = `
    SELECT 
      post.id,
      post.title,
      post.content,
      JSON_OBJECT(
        'id', user.id,
        'name', user.name
      ) as user
    FROM post
    LEFT JOIN user
      ON user.id = post.userId
  `;
  // await必须写在async函数内部
  const [data] = await connection.promise().query(statement);

  return data;
};

/**
 * 创建内容
 */
export const createPost = async (post: PostModel) => {
  // 准备查询语句
  const statement = `
    INSERT INTO post
    SET ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, post);

  // 提供数据
  return data;
};

/**
 * 更新内容
 */
export const updatePost = async (postId: number, post: PostModel) => {
  // 准备更新语句
  const statement = `
    UPDATE post
    SET ?
    WHERE id = ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, [post, postId]);

  // 提供数据
  return data;
};

/**
 * 删除内容
 */
export const deletePOst = async (postId: number) => {
  // 准备删除的语句
  const statement = `
    DELETE FROM post
    WHERE id = ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, postId);

  // 提供数据
  return data;
};
