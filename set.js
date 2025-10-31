// example - 1 
const set = new Set();
console.log(set);
set.add('Riam')
console.log(set);
console.log(set, set.size);
// example - 2 
const mezba = {userName: 'Mezba'};
const riaz = {userName: "Riaz"}
const set1 = new Set()
set1.add(mezba)
set1.add(riaz)
console.log(set1);

// example - 3 
const arr = ['apple', 'banana', 'a', 'b', 'a'];
const sett = new Set(arr)
console.log("set is here:", sett);
const test = Array.from(sett)
console.log(test);

