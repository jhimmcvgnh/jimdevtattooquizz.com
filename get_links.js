const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const links=html.match(/https:\/\/[^\"'\s>]+/g);
console.log([...new Set(links)]);
