const students = [
 { name: "Amit Sharma", age: 19, course: "B.Tech" },
 { name: "Priya Verma", age: 22, course: "MCA" },
 { name: "Rohit Gupta", age: 20, course: "BCA" },
 { name: "Neha Singh", age: 23, course: "B.Sc" },
 { name: "Karan Patel", age: 18, course: "B.Com" }
];

const table = document.createElement("table");

const headerRow=document.createElement("tr");
const headers=["Name","Age","Course"];

headers.forEach(text=>{
    const th=document.createElement("th");
    th.innerHTML=text;
    headerRow.appendChild(th);
});

table.appendChild(headerRow);

students.forEach(student=>
{
    const row=document.createElement("tr");

    Object.values(student).forEach(value=>
    {
        const td=document.createElement("td");
        td.innerHTML=value;
        row.appendChild(td);
    }
    );
    table.appendChild(row);
}
);
// Append table to the container
document.getElementById("table-container").appendChild(table);

// Store original students for reset
const originalStudents = JSON.parse(JSON.stringify(students));

// Toggle background color 
function toggleBackground() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightyellow" ? "white" : "lightyellow";
}

// Show/hide table
function toggleTable() {
    const table = document.querySelector("#table-container table");
    if (table) {
        table.style.display = table.style.display === "none" ? "table" : "none";
    }
}

// Show only students with age above 20
function showAgeAbove20() {
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    ["Name", "Age", "Course"].forEach(text => {
        const th = document.createElement("th");
        th.innerHTML = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    students.filter(s => s.age > 20).forEach(student => {
        const row = document.createElement("tr");
        Object.values(student).forEach(value => {
            const td = document.createElement("td");
            td.innerHTML = value;
            row.appendChild(td);
        });
        table.appendChild(row);
    });
    tableContainer.appendChild(table);
}

// Reset table to original students
function resetTable() {
    students.length = 0;
    originalStudents.forEach(s => students.push({...s}));
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    ["Name", "Age", "Course"].forEach(text => {
        const th = document.createElement("th");
        th.innerHTML = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    students.forEach(student => {
        const row = document.createElement("tr");
        Object.values(student).forEach(value => {
            const td = document.createElement("td");
            td.innerHTML = value;
            row.appendChild(td);
        });
        table.appendChild(row);
    });
    tableContainer.appendChild(table);
}




