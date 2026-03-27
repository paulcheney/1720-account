// Grab a reference to the selected elements that we are going to use. 
const darkbtn = document.querySelector('#dark');
const darkel = document.querySelector('body')

// Load saved preference from local storage
if (localStorage.getItem('theme') === 'dark') {
	darkel.classList.add('dark');
}

darkbtn.addEventListener('click', () => {
	darkel.classList.toggle('dark');

  if (darkel.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});


