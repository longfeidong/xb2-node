// const nature = callback => {
//   const data = '恭喜发财';
//   callback(data);
// };

import { resolve } from 'path';

// nature(data => {
//   console.log(data);
// });

const nature = () => {
  console.log('考试开始');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('考试结束');
    }, 2000);
  });
};

// nature().then(data => {
//   console.log(data);
// });

const demo = async () => {
  const data = await nature();
  console.log(data);
};

demo();

console.log('答题中');
