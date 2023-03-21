// 填充操作
const arr = new Array(6)
arr.fill(6)
console.log(arr);


// 查找元素

const arr1 = [1,100, 200, 3, 4, 5]

console.log(arr1.indexOf(7));
console.log(arr1.includes(1));
console.log(arr1.find((item) => item == 90 ));
console.log(arr1.findIndex((item) => item == 1 ));

// 数组排序

console.log(arr1.reverse());

arr1.sort((a, b) => a-b)
console.log(arr1);

// for forEach for...in  for...of（变量可迭代元素）

arr1.forEach((item, index, arr)=>{
    console.log(item, index, arr , this);
})

// map filter some every reduce

const arr2 = [1, 2, 100,  3,  200, 2 , 200]

// 求和
const res = arr2.reduce((pre, value, index) => {
    console.log(pre, value, index);
    return pre + value
},0)

console.log(res);

// 求最大值
const res1 = arr2.reduce((pre, value)=>{
    return pre > value ? pre : value 
})

console.log(res1);


// 去重

const res3 = arr2.reduce((p, v)=>{
    if (!p.includes(v)) {
        p.push(v)
    }
    return p

}, [])

console.log(res3);






