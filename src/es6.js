// {
//   var name = 'cat';
// }

// console.log(name)


/* function hello(name) { 
  console.log(`I am ${name}`);
}

const hello1 = (name)=> {
  console.log(`I am ${name}`);
}

hello('cat');
hello1('cat');

setTimeout(() => {
  console.log('xxxx');
}, 1000);

const double = x => x*2;
console.log(double(3))

const hello2 = (name='cat') => {
  console.log(`I am ${name}`)
}

hello2('imooc')

function hello3(name1,name2) {
  console.log(name1,name2)
}

arr = ['cat','dog'];
hello3.apply(null,arr);
hello3(...arr);

const obj = {
  name: 'cat',
  course: 'React App编程开发'
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const name = 'imooc';
const obj1 = {
  // [name]: 'Hello'
  name: 'hello'
}
// obj1[name] = 'Hello'
console.log(obj1)

const obj2 = {
  name : 'hello',
  course : 'React APP 编程开发'
}

const obj3 = {
  name: 'cat',
  type: 'IT'
}

console.log({...obj2,...obj3});

class MyApp {
  constructor() {
    this.name = 'cat';
  }
  sayHello() {
    console.log(`Hello , I am ${this.name}`);
  }
}

const app = new MyApp();
app.sayHello(); */


// import { name } from './module111';
// console.log('name',name);

const arr = [1,2,3,4];
console.log(arr.map(
  x => x *2
))