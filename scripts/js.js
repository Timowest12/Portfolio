function mobileMenu() {
  document.querySelector('.mobilemenu').classList.add('mobilemenuopen');
}
function closemobilemenu() {
  document.querySelector('.mobilemenu').classList.remove('mobilemenuopen');
}
document.querySelector('#mobilemenuicon').addEventListener('click', mobileMenu);
document
  .querySelector('.closemobilemenu')
  .addEventListener('click', closemobilemenu);
