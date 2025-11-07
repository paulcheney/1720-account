const signup = document.querySelector('#signup')
const submitBtn = document.querySelector('#signup input[type=submit]')

const display = document.querySelector('#display')
const deleteBtn = document.querySelector('#display > button')


const myaccount = localStorage.getItem("yl-Name");

if (myaccount === null) {
    signup.className = "show"
    display.className = "hide"
    submitBtn.addEventListener("click", () => createProfile())

} else {
    signup.className = "hide"
    display.className = "show"
    const name = document.querySelector('#myName')
    name.innerHTML = localStorage.getItem('yl-Name')

    const email = document.querySelector('#myEmail')
    email.innerHTML = localStorage.getItem('yl-Email')

    const phone = document.querySelector('#myPhone')
    phone.innerHTML = localStorage.getItem('yl-Phone')

    deleteBtn.addEventListener("click", () => {
        localStorage.removeItem("yl-Name")
        localStorage.removeItem("yl-Email")
        localStorage.removeItem("yl-Phone")
        window.location.reload()
    })
}

function createProfile() {
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const phone = document.querySelector('#phone')

    if (!name.value || !email.value || !phone.value) {
        console.log('Fill out the form')
        
    } else {
        localStorage.setItem('yl-Name', name.value)
        localStorage.setItem('yl-Email', email.value)
        localStorage.setItem('yl-Phone', phone.value)
        window.location.reload()
    }


}
