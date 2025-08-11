/*const fetchData=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response.ok);
   if(response.ok===true){
    const data= await response.json();
    console.log(data);
   }
    };

fetchData();
console.log("Hello");*/

/*const fetchData=async()=>{
    const response = await ("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
    const a=await fetch ("https://jsonplaceholder.typicode.com/users");
    console.log(a);
    const b= await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(b);
    const data=await response.json();
    console.log(data);
    const aa=await a.json();
    console.log(aa);
    const bb=await b.json();
    console.log(bb);
    
};
fetchData();
console.log("Hello");*/

/*const fetchData=async()=>{
    try{
        //successful cases we have to write code iside try
        const response=await fetch("https://jsonplaceholder.typicode.com/uc sers");
        if(response.ok===true)
        {
            const data=await response.json();
            console.log(data);
        }
        else{
            throw new Error("Something is wrong");
        }

    }catch(err){
        console.log("Error",err);
    }
};
fetchData();*/


/*const get=async()=>{
    const rep=await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(rep);
    const data=await rep.json();
    console.log(data);

    const aa= await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(aa.ok);
    if(aa.ok===true){
        const a= await aa.json();
        console.log(a);
    
    }

    try{
    const bb=await fetch("https://jsonplaceholder.typicode.com/posts");
    if(bb.ok===true){
        const b=await bb.json();
        console.log(b);
    }
    else{
        throw new Error("Something went wrong");
    }
}catch (err){
    console.log("Error",err);
}

};
console.log("hello");
get();
*/

const fetchData=async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(response.ok);
    if(response.ok===true){
     const data=await response.json();
    console.log(data);   
    }
    const a=await fetch ("https://jsonplaceholder.typicode.com/users");
    console.log(a.ok);
    if(a.ok===true){
        const aa=await a.json();
    console.log(aa);
    }
    const b= await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(b.ok);
    if(b.ok===true)
    {
    const bb=await b.json();
    console.log(bb);
    }
    
};
fetchData();
console.log("Hello");


//using try and catch
const fetchdata=async()=>{
    try{
        const rep=await fetch("https://jsonplaceholder.typicode.com/users");
        const rep1=await fetch("https://jsonplaceholder.typicode.com/todos");
        const rep2=await fetch("https://jsonplaceholder.typicode.com/posts");

        if(rep1.ok){
            const data=await rep.json();
            console.log(data);
        }
        if(rep.ok===true){
            const data= await rep.json();
            console.log(data);
        }

        if(!rep.ok || !rep1.ok || !rep2.ok){
            throw new Error("Something went wrong");
        }
    }  catch (err){
        console.log("ERROR",err);
    }
}

fetchdata();