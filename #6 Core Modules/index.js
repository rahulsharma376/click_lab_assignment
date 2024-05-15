//Jo module import karne padte hai woh non-global module. function that require to import = non-global module
//Jo module import nhi karne padte hai woh Global Module. function that dont require to import= Global module

// const fs = require('fs');  // for importing all the function of file system fs
const fs = require('fs').writeFileSync;   // for particular function of file system fs
// console.log("code step by step");
// fs.writeFileSync("Hello.txt","Code step by step");
console.log("Present Directory Location ->>", __dirname);
console.log("filename with location ->>", __filename);