
let signUpButton = document.getElementById('signUpId')

let welcomeText = document.getElementById('wlcmTxtId')
let myBox_element = document.getElementById('myBoxId')


let newWelcomeText_element= document.createElement('h1')
newWelcomeText_element.innerText = "S I G N - U P"
newWelcomeText_element.classList.add('wlcmTxt')


let isaUser = true

signUpButton.addEventListener('click' , function (){

    console.log(" clicked")

    isaUser=!isaUser
    

    if(!isaUser){
        welcomeText.parentNode.replaceChild(newWelcomeText_element,welcomeText)

        signUpButton.innerText = 'login'

    } else {
        newWelcomeText_element.parentNode.replaceChild(welcomeText,newWelcomeText_element)
        signUpButton.innerText = 'sign-up'

    }



})
