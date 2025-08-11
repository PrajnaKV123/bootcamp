/*const incButton = document.querySelector("button");
console.log(incButton);

incButton.addEventListener("click",()=>
{
    console.log("button clicked");
});*/

const btn=document.getElementsByTagName("button");
const incbtn=btn[0];
const decbtn=btn[1];
const resetbtn=btn[2];
const p=document.querySelector("#val");
let val=0;
let inc=true;

let pause=()=>{
    if (val>=10){
        inc=false;
    }
};


/*incbtn.addEventListener("click",()=>
{
    if(inc){
    val=val+1;
    p.textContent = val;}
    if(val>=10)
    {
        inc=false;
    }

pause();
});

decbtn.addEventListener("click",()=>
{if(inc){
    
    val=val-1;
    p.textContent = val;}
    if(val>=10)
    {
        inc=false;
    }
    pause();
});

resetbtn.addEventListener("click",()=>
{
 val=0;
 p.textContent = val;
});*/

/*const handleInc=()=>
{
    if(inc)
    {
        val=val+1;
        p.textContent=val;
    }
    pause();
};
const handleDec=()=>
{
    if (inc){
        val=val-1;
        p.textContent=val;
    }
    pause();
};

const init=()=>
{
    val=0;
    p.textContent=val;
    inc=true;
};

incbtn.addEventListener("click",handleInc);
decbtn.addEventListener("click",handleDec);
resetbtn.addEventListener("click",init);*/

/*const handler=(vall)=>
{
    if(inc)
    {
        vall?(val=val+1):(val=val-1);
        val>=0?(p.style.color="green"):(p.style.color="blue");
        p.textContent=val;
    }
    pause();
};


const init=()=>
{
    val=0;
    p.textContent=val;
    inc=true;
};



incbtn.addEventListener("click",()=>handler(true));
decbtn.addEventListener("click",()=>handler(false));
resetbtn.addEventListener("click",init);*/


/*var obj={            // To create object
    id:1,
    name:"Name",
    email:"example@vom",
};

console.log(obj.id);
console.log(obj.name);
console.log(obj.email);*/


/*var obj={  //To create nested objects
    name:"prajna",
    email:"kolchar@123",
    data:{
        address:"Aivarnadu",
        contact:0825727864,
        adhaar:6575437735,
        info:{
            salary:10000,
            rollno:1234,

        },

    },
};
console.log(obj.data.info.rollno);*/

/*var obj={                  //JSON stringify
    name:"prajna",
    email:"kolchar@123",
    data:{
        address:"Aivarnadu",
        contact:0825727864,
        adhaar:6575437735,
        info:{
            salary:10000,
            rollno:1234,

        },

    },
};
console.log(obj);
JSON.stringify(obj);
console.log(obj.data);*/

/*let arr = [                         //objects inside array
{id: 1, name:"Prajwal"},
{id: 2, name:"Prajna"},
{id: 3, name:"Laxmi"},
{id: 4,name:"Venu"},
{id: 5,name:"Rajani"},
];

console.log(arr);

arr.forEach((el)=>console.log(el)); //using for each

/*arr.map((el)=>console.log(el));*/ //using map function

//el.id=el.id*el.id
//const a= arr.map((el)=>{
   // el.id=el.id*el.id;
   /* return el;});*/
   //return{
    //i:el.id,
   // n:el.name,
   //};
//});
//console.log(a);

const b=[0,0,0,0,0,0,0,0,0,0];

const c=b.map((el,index)=>{
    return{
        id:index,
        name:index+el,
        as:index+index+el,
    };

});
let e=c.filter((el)=>el.id%2==0);
console.log(e);
let f=c.filter((el)=>el.id%2==1);
console.log(f);









