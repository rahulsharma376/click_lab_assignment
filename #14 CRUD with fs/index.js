const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"crud");
const filePath = `${dirPath}/data.txt`;

//Make
fs.writeFileSync(filePath,"Helo, from the other side.");

// // Read
// fs.readFile(filePath,'utf-8', (err, item) => {
//     console.log(item);
// })

// //Update/ Append
// fs.appendFile(filePath, " And feels like no one. I tell you", (err) => {
//     if(!err){
//         console.log("Updated");
//     } else{
//         console.log("no file found");
//     }
// })

// //Rename
// fs.rename(filePath, `${dirPath}/HelloSong.txt`, (err) => {
//     if(!err) console.log("Filename is updated.");
// });

// //Delete
// fs.unlinkSync(`${dirPath}/hellosong.txt`);// 