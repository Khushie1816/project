// console.log("HEYYYY")

// var num1=21
// var num2=33

// console.log(num1+num2)

// var num1=21
// var num2=33

// console.log(num1-num2)

// let num1= Number(prompt("Enter Number1:"));
// let num2= Number(prompt("Enter Number 2:"));
// alert(num1+num2);

// let num3= Number(prompt("Enter Number3:"));
// let num4= Number(prompt("Enter Number 4:"));
// alert(num3-num4);

// let num5= Number(prompt("Enter Number5:"));
// let num6= Number(prompt("Enter Number 6:"));
// alert(num5*num6);

// let input=prompt("enter your name")
//  if(input="gull")
//   {console.log ("heyyyy gull")}

// if(input="hashir")
//      {console.log ("heyyyy hashir")}

// else(
//     console.log(hello)
// )

// let num=prompt("enter the number:");
// if(num>30)
//     {
//         console.log("Greater than 30");
//     } 
// else if(num>50)
// {
//     console.log("Greater than 50");
// }

// else{
//     console.log("None");
// }


// let number= Number (prompt("Enter a Number:"));
//  if(number%2==0)
//  {
//     console.log("The given number was even")
//  }

//  for(i=0;i<100;i++)
//  {
//     console.log(i)
//  }
   
// let condition=true
// while (condition==true)
// {
//    let input=prompt("GULL")
//    if(input=="yes")
//       {
//          console.log("GULL");
//       }
//       else{
//          condition=false;
//       }
//    }
// function greeting(name){
//   console.log("heyy,My name is "+ name)
// }
// greeting("Aisha")
// greeting("Gull")
// greeting("Hamza")
// greeting("beeba")

// function add(num){
//   console.log(i=0;i<100;i++)
// }


//strings Method in Java

// let statement="hey world"
// console.log(statement.charAt(6))
// console.log(statement.slice(2,5))
// console.log(statement.startsWith("H"))
// console.log(statement.endsWith("d"))

// let array= [
//     [1,2,3],
//     [4,5,6]
// ]

// console.log(array[0][2])

// for(i=0;i<array.length;i++)
// {
//     console.log(array[i])
//     for(j=0;j<3;j++){
//         console.log ("the second loop number"+array[i][j])
//     }
// }


// (Document Object Model) DOM

// const heading= document.getElementById("heading")
// heading.style.background="pink"
// heading.style.color="blue"


// const navAnchors= document.querySelector("nav a")
// navAnchors.style.color="yellow"
// navAnchors.style.background="red"



// const btn= document.getElementById("btn");
// btn.addEventListener("click", function(){
//     btn.classList.toggle("makecolorred");
// })


let num1="";
let num2="";
let op="";
let resultshown=false;

const resultDisplay= document.querySelector('#result');

function updateDisplay(value){
resultDisplay.textContent=value}


function pressNumber(num){
    if ( resultshown===true){
   num1=""
   resultshown=false}

   if(num1,length>=12) {
    return
   }
   num1+=num;
   updateDisplay(num1)
}

