let n=5;

if(n>0){
    console.log("positive integer");
}
else{
    console.log("negative number");
}

 if(n<18){
    console.log("eligible for vote");
 }
 else{
    console.log("not eligible")
 }
 let m = 8;

if (m % 2 == 0) 
    {
    console.log("even");
} 
else 
    {
    console.log("odd");
}

var M=55;
if(M>=90)
{
    console.log("A+");
}
else if(M>=75&&M<90)
{
    console.log("B");
}
else if(M>=50&&M<75)
{
    console.log("C");
}
else
{
    console.log("Fail");
}

let usr ="abcde"
let pass ="12345"

usr === "abcde" && pass === "12345"

let data;
let name = "heaven";

data = name || "N/A"

// if (name){
//     data = name;
// } else {
//     data = "N/A";
// }

console.log(data);

let x=2;
console.log(x>10 && y<5);



for (let i =0; i <5; i++){
    if (i === 3){
        continue
    }
    console.log(i)
}

let choice=3;
switch(choice){
    case 1:{
        console.log("Tea");
        break;
    }
    case 2:{
        console.log("coffee");
        break;
    }
    case 3:{
        console.log("Lassi");
        break;
    }
    default: {
        console.log("paani")
    }
  
}
