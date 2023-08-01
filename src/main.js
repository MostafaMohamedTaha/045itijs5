//! question 1
// 1-	In the login form assignment in Day.6 lab, use local storage to save user name and password in the prev. assignment, when user press login button, and retrieve them on page load and write them to the textboxes.

// a.	Can you use session storage in the previous assignment? Why?

// b.	What’s the difference between local storage and session storage?

// c.	Can you access local storage and session storage in another page than the page that created it (on the same site)?

//? a.solution =>no it can't because session ends when page redirect

//? b. local storage is stable storage in browser will not deleted if i make redirect 
//? b. local storage is session time storage in browser will be delete if i make redirect

//? can access local storage url and redirect it session can not
//save data in local storage and get them from input not url

const usernameGet = document.getElementById("usernameGet")
const formSubmit = document.getElementById("formSubmit");
const password = document.getElementById("password");
const remember = document.getElementById("remember");

const jsonObjectShow = document.getElementById("jsonObjectShow");

const fullnameCookies = document.getElementById("fullnameCookies");
const passwordCookies = document.getElementById("passwordCookies");
const myDate = new Date();

const ajaxUser = document.getElementById("ajaxUser");
const ajaxImg = document.getElementById("ajaxImg");
// go to welcome page
let submitUsername = () => {
    formDataInput = document.getElementById("formSubmit")
    formDataInput.addEventListener("submit", e => {
        e.preventDefault()
        fullnameValidInput = usernameGet.value
        localStorage.setItem("fullnameValidInput", fullnameValidInput)
        location.href = "./html/home.html"
    })

}
// set local storage 
var fullnameValidInputGet = localStorage.getItem("fullnameValidInput")
// get local storage by id
if (document.getElementById("usernameWelcome")) {
    document.getElementById("usernameWelcome").innerHTML =
        `Welcome ${fullnameValidInputGet} !`
}

// check if there data stored in the local storage
if (usernameGet && password) {
    window.addEventListener("load", function () {
        if (this.localStorage.getItem("username") && this.localStorage.getItem("password")) {
            usernameGet.value = window.localStorage.getItem("username");
            password.value = window.localStorage.getItem("password");
        }
    });
}


// check if remember me is checked to save the user and pass in local storage
if (formSubmit) {

    formSubmit.addEventListener("submit", function (e) {

        if (usernameGet.value == "" || password.value == "") {
            e.preventDefault();
        }
        else {

            if (remember.checked) {
                let usernameGetValue = usernameGet.value;
                let passwordValue = password.value;
                window.localStorage.setItem("username", usernameGetValue);
                window.localStorage.setItem("password", passwordValue);
            }
            else {
                window.localStorage.clear();
            }
        }
    });
}

//create object and show 3 students
const jsonObject = [
    {
        id: 1,
        name: "mostafa",
        age: 25,
        address: "cairo-egypt",
        skill: [
            {
                programming: "C#", sporting: "football"
            }
        ],
        isManager: true
    },
    {
        id: 2,
        name: "mo",
        age: 24,
        address: "alex-egypt",
        skill: [
            {
                programming: "js", sporting: "games"
            }
        ],
        isManager: false
    },
    {
        id: 3,
        name: "ahmed",
        age: 23,
        address: "cairo-egypt",
        skill: [
            {
                programming: "java", sporting: "gym"
            }
        ],
        isManager: false
    },

]

// show all students
const jsonObjectShowFunction = () => {

    jsonObject.forEach(e => {
        if (jsonObjectShow) {
            jsonObjectShow.innerHTML = `
            id =>${e.id}
            name =>${e.name}
            age =>${e.age}
            address =>${e.address}
            skill =>
            programming => ${e.skill[0].programming} 
            sporting=> ${e.skill[0].sporting}
            isManager =>${e.isManager}
            `
        }
    });
}
// cookies 

const submitUsernameCookies = () => {

    let fullnameCookies = fullnameCookies.value
    let passwordCookies = passwordCookies.value
    let myDate = myDate.value
    let endOfCookiesDate = myDate.getDate() + 10;
    myDate.setDate(endOfCookiesDate);
    document.cookie = "myCookie=" + fullnameCookies + ";expires=" + passwordCookies.toUTCString();
}

// ajax fetch data
async function showUser1() {
    const response = await fetch("https://reqres.in/api/users/1");
    const data = await response.json();
    if(ajaxUser){
        ajaxUser.innerHTML=`
        first name =>${data.data.first_name}
        last name =>${data.data.last_name}
        `
        ajaxImg.src=data.data.avatar
    }
    console.log(data.data.avatar);
}
