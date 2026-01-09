const {readFile,writeFile}=require('fs')


readFile('./context/first.txt',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

