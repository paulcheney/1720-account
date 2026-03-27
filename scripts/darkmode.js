// Grab a reference to the selected elements that we are going to use. 
const darkbtn = document.querySelector('#dark');
const darkel = document.querySelector('body')

// Load saved preference from local storage
if (localStorage.getItem('theme') === 'dark') {
	darkel.classList.add('dark');
}

//Toggle and save the state when icon is clicked
darkbtn.addEventListener('click', () => {
	darkel.classList.toggle('dark');

  if (darkel.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});


