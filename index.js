//console.log(a);

//var a = 10;
//console.log(a);
//console.log(b);
//var a = 50;
//console.log(a);

//let b = 10;
//console.log(b);
//b = 30;
//console.log(b);

//const c=30;
//console.log(familyFunction);

//function declaration
//function functionname(){}
//function familyFunction(){
    //console.log("papa will not go in uncle function");
    //console.log("She will take a lot of time to do her makeup");}

//familyFunction();
//familyFunction();



const family  = function (){                  
    console.log("papa will go in uncle function");
    console.log("She will take a lot of time to do her makeup");
}
family();

let sum=function(parameter1,parameter2){
   let a = parameter1;
   let b =parameter2;
    console.log("value of paramaeter1 is ",parameter1,"value of paramaeter2 is ",parameter2,
    "sum is ", a + b);

}
sum(3,8);
sum(13,80);

//console.log(typeof(1+2+5)); to check the type of the result



let product=function(parameter1,parameter2,parameter3){
    let a = parameter1;
    let b = parameter2;
    let c = parameter3;
    console.log("value of paramaeter1 is ",parameter1,"value of paramaeter2 is ",parameter2,
    "value of paramaeter3 is ",parameter3,"product is ", a * b * c);    

}
product(10,5,3);
product(3,5,7);

let a=()=>{
    console.log("hello world");
};
a();

//this is an arrow fnctn

//2nd example for arrow function
let b = (pae,ffg,hgf) => {
    console.log("Hello,Welcome to Manglore");

}
b(1,3,4);

(function()
{
    console.log("IIFE");// Immediately Invoked Function Expression
})();

