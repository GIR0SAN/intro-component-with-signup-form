const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const lastNameInput = document.querySelector("#lastname")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")

form.addEventListener("submit", (event) =>{
    event.preventDefault()

    if(nameInput.value === ""){
        errorName.style.display = "block"
        imageErrorName.style.display = "flex"
        nameInput.style.borderColor = "var(--red)"
    } else {
        errorName.style.display = ""
        imageErrorName.style.display = ""
        nameInput.style.borderColor = ""
    }

    if(lastNameInput.value === ""){
        errorLastName.style.display = "block"
        imageErrorLastName.style.display = "flex"
        lastNameInput.style.borderColor = "var(--red)"
    } else {
        errorLastName.style.display = ""
        imageErrorLastName.style.display = ""
        lastNameInput.style.borderColor = ""

    }

    if (emailInput.value  === "" || !isEmailValidy(emailInput.value)){
        errorEmail.style.display = "block"
        imageErrorEmail.style.display = "flex"
        emailInput.style.borderColor = "var(--red)"
    } else {
        errorEmail.style.display = ""
        imageErrorEmail.style.display = ""
        emailInput.style.borderColor = ""

    }

    if (passwordInput.value === ""){
        errorPassword.style.display = "block"
        imageErrorPassword.style.display = "flex"
        passwordInput.style.borderColor = "var(--red)"
    } else {
        errorPassword.style.display = ""
        imageErrorPassword.style.display = ""
        passwordInput.style.borderColor = ""

    }
    
})

function isEmailValidy(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    if (emailRegex.test(email)){
        return true 
    }
    return false
}

form.addEventListener("submit", event => {
    console.log("Enviar o formulário")

    
})