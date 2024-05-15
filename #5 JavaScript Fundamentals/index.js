const app = require('./app');
const  arr = [2, 4, 7, 1, 3, 8, 3];
console.log(app.y);
console.log(app);
console.log(app.z());

// uses filter function to filter the items of the array.
let result = arr.filter((item) => {
    return item >= 4;
})
console.warn(result)