//tag
//var body=document.getElementsByTagName("body");
//console.log(body[0]);

/*let a=[1,4,8,9,67];
console.log(a);
//initial value,condition,incre/decre

for(let i=0;i<a.length;i++)
{
    a[i]=a[i]*3;
    console.log(a[i]);
}

console.log(a);
let b= a.map((el,ui)=>{
   return el*ui;
 });

   console.log(a);
   console.log(b);*/

   /*let a=[1,2,3,4,5,6,7,8,9,10];

   for(i=0;i<a.length;i++)
   {
   
    console.log(`2 * ${a[i]}=`,a[i]);
   }
   console.log(a);//using for loop

   let b=a.map((el,ui)=>{
    console.log(`4 * ${el}=`,el * 4);
   });*/
//   console.log(a);//using map function

   /*let table=function(per)//using function expression
   { 
    console.log(a);
    for(let i=0;i<a.length;i++)
    {
        console.log(`${per} * ${a[i]} =`,per * a[i]);
    }}


table(3);*/

/*let tab=function (per)//
{
    let b=a.map((el,ui)=>{
        console.log(`${per} * ${el} =`,per * el);
    });
}
console.log(a);
table(5);*/

/*let a= [1,2,3,4,5,6,7,8,9,10];//finding even and odd numbers
{
    
    {
        for(i=0;i<a.length;i++)
        if(a[i]%2==0)
        {
            console.log(`${a[i]} is even`);
        }
        else{
            console.log(`${a[i]} is odd`);
        }
    }
}*/

/*let aa = 40;
if(aa==4)
{
    console.log("equal");
}
else if(aa===40)
{
    console.log("equal and type is also same");
}
else if(aa==90)
{
    console.log("equal to 90");
}
else{
    console.log("not equal");
}


let mark= 85;
{
if(mark>=90 && mark<=100)
{
    console.log("Bike");
}
else if(mark>=80 && mark<90)
{
    console.log("party");
}
else if(mark>=70 && mark<80)
{
    console.log("Game");
}
else{
    console.log("nothing");
}
}*/

/*marks=90;
marks>75? table(3):table(5);*/

/*let a=[1,2,3,4,5,6,7,8,9,10];
let b=a.filter((el)=>el>=5);
console.log(b);*/

//let a=[1,2,3,4,5,6,7,8,9,10];
/*let d=c.filter((el)=>el>=5).map((el)=>el*7);
let e=d.map((el)=>el*5);
console.log(d);*/

/*let b=a.reduce((acrrc,cur, index)=>{
    console.log(acrrc,cur,index);
    return acrrc + cur;
   
},0);
console.log(b);

let acc = 0;
acc=acc+1;
acc=acc+2;
acc=acc+3;
acc=acc+4;  
acc=acc+5;
acc=acc+6;*/

/*let a=[1,2,3,4,5,6,7,8,9,10];
const evenSum=a.filter((el)=>el%2==0).reduce((a,e)=>a+e);
const oddSum=a.filter((el)=>el%2==1).reduce((a,e)=>a+e);

console.log(evenSum,oddSum);*/


const aa=[0,0,0,0,0,0,0,0,0,0];
const se=aa
.map((el,i)=>el+i+1)
.filter((el)=>el%2==0)
.reduce((a,e)=>a+e);
const ad=se.filter((el)=>el>=5);

const so=aa
.map((el,i)=>el+i+1)
.filter((el)=>el%2==1)
.reduce((a,e)=>a+e)
const dd=so.filter((el)=>el>=5);

console.log(ad,dd);




