// console.log(username)
// username.push("admin04")
// console.log(username)
// username.push("admin05")
// console.log(username)
// username.push("admin06")
// console.log(username)
// username.pop()
// console.log(username)
// username.unshift("admin00") 
// console.log(username)
// username.shift("admin00")
// console.log(username)
const addBtnEL = document.getElementById("addBtn")
const userListEl = document.getElementById("userList")
const addToListEl = document.getElementById("addToList")
let username = []

addBtnEL.addEventListener("click", function(){
    username = []
    let newInput = addToListEl.value 
    username.push(newInput)
    for (let i in username){
        userListEl.innerHTML +=
        `<li style="margin-left:20px">${username[i]}</li>`
    }
    addToListEl.value = ''
})