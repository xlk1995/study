// 如何创建一数组 new
const arr1 = new Array(1, 2, 3, 4);
arr1.length = 10;
// console.table(arr1)
console.log(arr1);

const arr2 = new Array(5);
console.log(arr2);

console.log(Array.of(5));
// 字面量创建

const arr3 = [1, 2, 3, 4, 5];
console.log(arr3);

// crud

console.clear();

// 增加 删除
const arr4 = [];
arr4.push(1); // 返回值是个数
arr4[arr4.length] = 2;
arr4.unshift(3); // 返回值是个数

console.log(arr4.pop());
console.log(arr4.shift());

// 改
arr4[0] = 6;
console.log(arr4);

// 使用splice实现增删改

const arr5 = [1, 2, 3, 4, 5];
arr5.splice(1, 0, 9);

arr5.splice(1, 1);

arr5.splice(0, 1, 8);

move(arr5, 0, 2)
console.log(arr5);

// 写一个函数来移动位置

function move(arr, start, end) {
  const item = arr.splice(start, 1);
 
  arr.splice(end, 0, ...item);
}

// 类型检测

console.log(typeof arr5);
console.log(arr5 instanceof Array);

// 展开语法

const arr6 = ['ab','cd']
const arr7 = [1, 2, 3]

console.log([...arr6, ...arr7]);

function fn(...args){
    console.log(args);
}

fn(1, 2, 3)

// 解构

const [[item, item1], age] = arr6
console.log(item,item1, age);

const obj = {
    0: "f",
    1: "z",
    length: 2
}

console.log(Array.from(obj));

// 清空数组的方式
// arr7.length = 0
// arr7 = []
console.log(arr7);
arr7.forEach((item, index , arr)=>{
    console.log(item,'======');
    console.log(index, '-----');

    // console.log(arr7.pop()); 
})

console.log(arr7);




