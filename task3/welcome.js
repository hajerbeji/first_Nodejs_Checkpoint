var fs=require("fs");
fs.writeFile("./welcome.txt","Hello Node ",(err,data)=>{
    if(err){
        return err
    }
    return console.log(data.toString)
})
fs.readFile("./welcome.txt",(err,data)=>{
    console.log(data.toString())
})
