let x=Number(prompt("please enter the number"))
let flag=0
for(let i=1;i<=x;i++){
    if(x%i===0){
        flag++
    }
}
if(flag===2){
    document.querySelector("h1").innerHTML=`The number ${x} is a Prime number`
}else{
    document.querySelector("h1").innerHTML=`The number ${x} is Not a Prime number`
}