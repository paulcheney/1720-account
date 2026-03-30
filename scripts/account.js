// GRAB REFERENCES TO THE SIGN UP FORM
const signup = document.querySelector("#signup");
const submitBtn = document.querySelector("#signup input[type=submit]");
submitBtn.addEventListener("click", createProfile);

//GRAB REFERENCES TO THE DELETE LOCAL STORAGE
const display = document.querySelector("#display");
const deleteBtn = document.querySelector("#display > button");
deleteBtn.addEventListener("click", deleteProfile);



//CHECK TO SEE IF LOCAL STORATE DATA ALREADY EXISTS
const myaccount = localStorage.getItem("ly-Name");

// DO THE SWITCHEROO
if (myaccount === null) {
  signup.className = "show";
  display.className = "hide";
} else {
  signup.className = "hide";
  display.className = "show";
  //Grab Values from local storage
  const name = document.querySelector("#myName");
  name.innerHTML = localStorage.getItem("ly-Name");

  const email = document.querySelector("#myEmail");
  email.innerHTML = localStorage.getItem("ly-Email");

  const phone = document.querySelector("#myPhone");
  phone.innerHTML = localStorage.getItem("ly-Phone");
}

// FUNCTION TO CREATE A NEW PROFILE
function createProfile() {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");

  if (name.value && email.value && phone.value) {
    localStorage.setItem("ly-Name", name.value);
    localStorage.setItem("ly-Email", email.value);
    localStorage.setItem("ly-Phone", phone.value);
    window.location.reload();
  }
}

// FUNCTION TO DELETE A PROFILE
function deleteProfile() {
  localStorage.removeItem("ly-Name");
  localStorage.removeItem("ly-Email");
  localStorage.removeItem("ly-Phone");
  window.location.reload();
}
