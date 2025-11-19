// document.body.style.background = 'indigo';
// setTimeout(() => document.body.style.background = '', 3000);

document.getElementById('submitBtn').addEventListener('click', function(event) {
	event.preventDefault();
	const selected = document.querySelector('input[name="radioo"]:checked');
	if (selected) {
		alert('You selected: ' + selected.value);
	} else {
		alert('Please select an option.');
	}
});

let allImages = document.querySelectorAll('img');
allImages.forEach((imageInstance) => {
  console.log(imageInstance.alt);
});

const dialog = document.getElementById('dialog');
const text = document.getElementById('text');
const jsbutton = document.getElementById('jsbutton');
const modal = document.getElementById('modal');
const reset = document.getElementById('reset');

modal.addEventListener('click', (event) => {
  dialog.showModal();
  text.textContent = '';
});

jsbutton.addEventListener('click', (event) => {
  dialog.close();
  text.innerHTML += '"JS close" closed the dialog.<br/>';
});


dialog.addEventListener('cancel', (event) => {
  text.innerHTML += 'cance event happened<br/>';
});

dialog.addEventListener('close', (event) => {
  text.innerHTML += 'close event happened<br/>';
});