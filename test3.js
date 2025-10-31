const firstArray = [];
const secondArray = [];
for (let i = 0; i < 4000; i++) {
   if(i < 2000){
    firstArray.push(i)
   }
   secondArray.push(i)
    
}
console.log("first Array", firstArray.length);
console.log("Second Array", secondArray);
console.time('map1')
const firstUserList = firstArray.map((number) => ({userId: number}))
console.timeEnd("map1")
console.time("map2");
const secondUserList = secondArray.map((number) => ({userId: number}))
console.timeEnd("map2")
console.time("find")
const userFind = firstUserList.find(user => user.userId === 400)
console.timeEnd('find')