// Grab a reference to the selected elements that we are going to use. 
const darkbtn = document.querySelector('#dark')
const darkel = document.body

// Load saved preference from local storage
if (localStorage.getItem('theme') === 'dark') {
	darkel.classList.add('dark');
}

//Toggle and save the state when icon is clicked
darkbtn.addEventListener('click', () => {
  //darkel.classList.toggle('dark');
  const isDark = darkel.classList.toggle('dark');
  //console.log(isDark)
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


