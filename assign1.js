const students = [
 { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
 { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
 { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
 { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
 { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
 { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
 { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
 { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
 ];
 
 students.map((el)=>{
    const c=el.name;
    console.log(c);
 });



const d= students.map((el)=>
    {
        return ` name: ${el.name}  course:${el.course}`
    
 });

console.log(d);



students.map((el)=>
{
    const e=el.marks=el.marks+5;
    console.log(e);
});
console.log(students);




const f = students.map((el)=>
    {
        return ` ${el.name}  ${el.course}`
    
 });
console.log(f);

students.map((el)=>{
    if(el.marks>=60)
    {
        el.status="Pass";

    }
    else{
        el.status="Fail";
    }
});
console.log(students);

//FILTER

const g=students.filter((el)=>
    el.course==="Computer science");
console.log(g);


const h = students.filter(({ marks }) => marks >= 80);
console.log(h);


const i=students.filter((el)=>
el.feesPaid === false);
console.log(i);



const j=students.filter((el)=>
el.age>20&& el.marks>70
);
console.log(j);



const k=students.filter((el)=>
    el.course="Mechanical"&& el.marks<85
);
console.log(k);



//REDUCE




const l=students.reduce((acc,curr)=>{
    return acc+curr.marks;
},0
);
console.log(l);



const m = students.reduce((cur, index) => cur + index.marks, 0);
const avg = m / students.length;
console.log(avg);





const n = students.filter((el) => el.feesPaid === true).reduce((acc)=>{return(acc+1)},0);
console.log(n);




const o = students.reduce((max, el) => el.marks > max ? el.marks : max, students[0].marks);
console.log(o);




const u = students.reduce((acc, el) => {
    acc[el.course] = acc[el.course] || [];
    acc[el.course].push(el);
    return acc;
}, {});
console.log(u);
