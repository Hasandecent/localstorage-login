const userName = document.getElementById("userName");
const email = document.getElementById("useremail");
const userNumber = document.getElementById("userNum");
const password = document.getElementById("userPassword");
let userData = {}

const creatAcc = () => {
    if (userName.value !== "" && email.value !== "" && password.value !== "") {
        userData = {
            userName: userName.value,
            email: email.value,
            userNumber: userNumber.value,
            password: password.value
            
        }
        const getUserData = JSON.parse(localStorage.getItem("users")) || []
        console.log(getUserData);
        
        const userInd = getUserData.findIndex((value) => {
            return value.email === userData.email
        })
        
        if (userInd === -1) {
            getUserData.push(userData)
            localStorage.setItem("users", JSON.stringify(getUserData))
            alert("Your Account Has Been Activated. You May Login To Traces")
            window.location.assign("./login.html")
            userName.value = ""
            email.value = ""
        }
        else {
            alert("Please Fill The Form Correctly")
        }
        
    }
    else{
        alert("Please Fill The Form Correctly")
    }
}

const showPassword = (e) => {
    if (e.className == "fa fa-eye eye") {
        password.type = "text"
        e.className = "fa fa-eye-slash eye"
    }
    else {
        password.type = "password"
        e.className = "fa fa-eye eye"
    }
}


const login = () => {
    
    const userEmail = document.getElementById("userMail");
    const userPassword = document.getElementById("userPass");
    const getUserData = JSON.parse(localStorage.getItem("users"))
    const checkUser = getUserData.find((value) => {
        return value.email === userEmail.value && value.password === userPassword.value
        // console.log(value);
    })
    if (checkUser) {
        localStorage.setItem("presentUser", JSON.stringify(checkUser))
        alert("Succesfully login")
        window.location.assign("./dashboard.html")
        emailInp.value = ""
        passInp.value = ""
    }
    else {
        alert("Invalid User")
    }
}


// dashBoard Setting
const myDashBoard = () => {
    var encrypted = CryptoJS.AES.encrypt("64821041", "Secret Passphrase");
//U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
//4d657373616765
    let UserName1 = document.getElementById("UserName1")
    let UserName = document.getElementById("UserName")
    let UserEmail = document.getElementById("UserEmail")
    let UserNumber = document.getElementById("UserNum")

    let UserPassword = document.getElementById("Userpass").innerHTML = decrypted;
    const localData = JSON.parse(localStorage.getItem("presentUser"))
    // console.log(localData);
    UserName1.innerHTML = localData.userName;
    UserName.innerHTML = localData.userName;
    UserEmail.innerHTML = localData.email;
    UserNumber.innerHTML = localData.userNumber;
    UserPassword.innerHTML = localData.password;
    
}

const logOut =()=>{
    confirm("You Are Loging Out")
    window.location.assign("./index.html")
}

