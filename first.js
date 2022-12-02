const data = {
    "users":[
        {
            "name":"jagan",
            "ohone":"87897987"
        },
        {
            "name":"kiran",
            "ohone":"346537653763"
        }
    ]
}

window.addEventListener("load", () => {
    console.log(data.users);
    console.log(data);
    var table = "<table>";
    data.users.map(data=>{
        console.log(data);
            table += `
            <tr>
            <td>${data["name"]}</td>
            <td>${data["ohone"]}</td>
            </tr>`;  
    })

    table += "</table>";
    document.getElementById("demoB").innerHTML = table;
  });