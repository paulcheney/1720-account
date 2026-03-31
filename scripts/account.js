// GRAB REFERENCES TO THE SIGN UP FORM
const signup = document.querySelector("#signup");
const submitBtn = document.querySelector("#signup input[type=submit]");
submitBtn.addEventListener("click", createProfile);

//GRAB REFERENCES TO THE DELETE LOCAL STORAGE
const display = document.querySelector("#display");
const details = document.querySelector("#display div");
const deleteBtn = document.querySelector("#display > button");
deleteBtn.addEventListener("click", deleteProfile);



//CHECK TO SEE IF LOCAL STORATE DATA ALREADY EXISTS
const myaccount = localStorage.getItem("ly-Name");

// DO THE SWITCHEROO
if (myaccount === null) {
  console.log("null")
  signup.classList.remove("hide");
  display.classList.add("hide");
} else {
  signup.classList.add("hide");
  display.classList.remove("hide");
  //Display Values from local storage
  details.innerHTML = `
  <h3>Full Name</h3><p>${localStorage.getItem("ly-Name")}</p>
  <h3>Email Address</h3><p>${localStorage.getItem("ly-Email")}</p>
  <h3>Phone Number</h3><p>${localStorage.getItem("ly-Phone")}</p>
  `
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
