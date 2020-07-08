// 常见代码片段

// 遍历数组
[1,2,3].forEach(function(value,index){
  console.log(`${index} => ${value}`);
})

// 映射新数据
console.log([1,2,3].map(item=> {
  return item * 2
}))

// 所有元素是否通过测试
console.log(
  [1,2,3].every(v=>v>3)
)

// 是否有元素通过测试
console.log(
  [1,2,3,4].some(
    v => v>3
  )
)

// 过滤数组
console.log(
  [1,2,3,4,5,6].filter(
    v => v > 3
  )
)

// 查找符合条件的元素
arr = [{name:'dasheng', age: '18'},{name: 'cat', age: 1}]
console.log(arr);

// 查找索引
console.log([1,2,3].indexOf(2));

// 连接数组
const arr1 = [1,2,3,4];
const arr2 = [2,3,4,56];
console.log([...arr1,...arr2]);

// 数组去重
const arr3 = [1,2,3,12,1,2,45,3,1,4,5]
console.log([...new Set(arr3)])

const [head, ...tail] = [1,2,3,4,5];
console.log('head',head);
console.log('tail',tail);

const [last, ...initial] = [1,2,3,4,5].reverse();
console.log('last',last);
console.log('initial',initial);