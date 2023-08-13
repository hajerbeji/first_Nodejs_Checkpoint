const generatepassword=require("generate-password")
const password=generatepassword.generate({
    length:12,
    numbers:true,
    symbols:true,
    uppercase:true,
    lowercase:true
});
console.log(password)