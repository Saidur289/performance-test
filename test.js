const startTime = performance.now()
for(i = 0; i <= 500; i++){
 console.log(i);
}
const endTime = performance.now()
console.log(`This take time ${endTime - startTime}`);