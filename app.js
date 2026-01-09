// // const amount=9
// // if(amount<10){
// //     console.log('small number');
// // }else{
// //     console.log('large number');
// // }

// // console.log(__dirname)
// // setInterval(()=>{
// //     console.log('helllo world')
// // },1000)
 
// // const secret='SUPER SECRET'

// // const john='john'
// // const peter='peter'
// // console.log(module)
// const names=require('./04-names')
// const sayHi=require('./05-utils')
// const data=require('./06-alternative-flavor')
// require('./7-mind-grenade')
// // console.log(data)
// // sayHi('susan')
// // sayHi(names.john)
// // sayHi(names.peter)

// const os=require('os')

// // info about current user
// const user =os.userInfo()
// console.log(user)


// // method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`)
// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(currentOS)
// const path=require('path')

// console.log(path.sep)

// const filePath=path.join('/content/','subfolder','test.txt')
// console.log(filePath)

// const base=path.basename(filePath)
// console.log(base)


// const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute)
// const fs =require('fs')
// const { readFileSync, writeFileSync }=require('fs')

// const first=readFileSync('./context/first.txt','utf8');
// const second=readFileSync('./context/second.txt','utf8');

// writeFileSync(
//     './context/result-sync.txt',
//     `Here is the result : ${first},${second}`,{flag:'a'}
// )

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our page');
    return;
  }

  if (req.url === '/about-page') {
    res.end('Here is our short history');
    return;
  }

  res.statusCode = 404;
  res.end(`
    <h1>Ooops!!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `);
});

server.listen(5000);
