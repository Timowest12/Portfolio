function mobileMenu() {
  document.querySelector('.mobilemenu').classList.add('mobilemenuopen');
}
function closemobilemenu() {
  document.querySelector('.mobilemenu').classList.remove('mobilemenuopen');
}
function navtoportfolio() {
  window.scrollTo(0, document.getElementById('projectCards').offsetTop);
  closemobilemenu();
}
function navtoabout() {
  window.scrollTo(0, document.getElementById('about').offsetTop);
  closemobilemenu();
}
function navtocontact() {
  window.scrollTo(0, document.getElementById('contact').offsetTop);
  closemobilemenu();
}
document.querySelector('#mobilemenuicon').addEventListener('click', mobileMenu);
document.querySelector('.navtoportfolio').addEventListener('click', navtoportfolio);
document.querySelector('.navtoabout').addEventListener('click', navtoabout);
document.querySelector('.navtocontact').addEventListener('click', navtocontact);
document
  .querySelector('.closemobilemenu')
  .addEventListener('click', closemobilemenu);
