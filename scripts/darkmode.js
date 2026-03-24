// Store the selected elements that we are going to use. 
const darkbtn = document.querySelector('#dark');
const darkel = document.querySelector('body')


//Toggle the show class off and on
darkbtn.addEventListener('click', () => {
	darkel.classList.toggle('dark');
});