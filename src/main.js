// const greeting = '你好，小白兔';
// console.log(greeting);

// const fn = (breakfast) => {
//     console.log('早餐：', breakfast);
// }

const fn = (fan, food) => {
    console.log(fan, food);
}
fn('早饭', '豆浆油条');
fn('午饭', '大盘鸡');

const greet = (name) => {
    return '你好，' + name
}

const greeting = greet('阿远');

console.log(greeting);

const book = {
    title: '三体',
    toString() {
        return `《${this.title}》`;
    }
};
console.log(book.toString());

const obj = {
    'title': '时代楷模',
    'name': '张富清'
}
// 解构对象，可以定义别名
const { title: rongyu, name } = obj;
console.log(rongyu, name);

const fruits = ['苹果', '香蕉', '橙子'];
const [apple, banna, orange] = fruits;
console.log(apple, banna, orange);

const city1 = ['济宁', '菏泽', '枣庄'];
const city2 = ['济南', '泰安', '淄博'];
const sd = [...city1, ...city2];
console.log(sd);

const data = {
    title: '四世同堂'
};

const author = {
    name: '老舍'
};

const work = {
    ...data,
    author
};

console.log(work)

class Car {
    // brank;

    constructor(brank) {
        this.brank = brank;
    }

    driver() {
        console.log('嘀~嘀~')
    }
}

const c1 = new Car('Benz');
const c2 = new Car('BMW');
c1.driver();
console.log(c1, c2);

class Suv extends Car {}
const s1 = new Suv('Audi');
s1.driver();
console.log(s1)