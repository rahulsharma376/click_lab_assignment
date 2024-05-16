const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

// for (i=0; i<=5; i++){
//     // fs.writeFileSync(dirPath+"/song"+i+".txt","Hey Hey what you think going it's just late late what's wrong I said I cant stay do I have to give a reason it's me me what wrong. So how we get here three weeks now and so caught off better if we do on our own.");
//     fs.writeFileSync(dirPath+`/Song${i}.txt`,"Hey Hey what you think going it's just late late what's wrong I said I cant stay do I have to give a reason it's me me what wrong. So how we get here three weeks now and so caught off better if we do on our own.");
// }

fs.readdir(dirPath,(err, files) => {
    // console.warn(files);
    files.forEach((item) => {
        console.log("file name is ", item);
    })
})