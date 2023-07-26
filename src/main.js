//(((((((((((((((((1)))))))))))))))))
// can not use use session ends with session,local save to full data session save to session end

//(((((((((((((((((2)))))))))))))))))
// remember me checkbox if not use check box remove username,password

//(((((((((((((((((3)))))))))))))))))
let jsonObject = [
    { id: 1, name: "mostafa", age: 26, skills: [{ management: "pmp", programming: "fullStackDotnet" }], isLeader: true, address: "cairo" },
    { id: 2, name: "mohamed", age: 25, skills: [{ management: "pmp", programming: "fullStackDotnet" }], isLeader: true, address: "cairo" },
    { id: 3, name: "taha", age: 24, skills: [{ management: "pmp", programming: "fullStackDotnet" }], isLeader: true, address: "cairo" },
]
let showJson = () => {
    let arr = []
    for (const object in jsonObject) {
        arr.push(jsonObject[object].name)
    }
    document.getElementById("showJsonBtn").innerHTML = arr.join(" | ")
}

// console.log(jsonObject[0].name)
// console.log(jsonObject[1].name)
// console.log(jsonObject[2].name)
//json hold any value | json is better performance ,string,not implement
let showAJaxBtn = () => {
    async function foo() {
        let response = await fetch("https://reqres.in/api/users/1
        ");
        if (response.ok) {
            let result = await response.json();
            // now do something with the result
        } else {
            alert(response.status);
        }
    }
}