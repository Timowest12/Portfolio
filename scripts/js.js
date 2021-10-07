let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
if(localStorage.hasOwnProperty('forminfo')){
  let getforminfo = window.localStorage.getItem('forminfo');
  getforminfo = JSON.parse(getforminfo);
  alert(getforminfo.name);
}
const form = document.querySelector('#contact');
const outputtext = document.querySelector('.outputtext');
form.addEventListener('submit', (event) => {
  const emailstring = document.getElementById('email').value;
  // alert(emailstring);
  if (emailstring !== emailstring.toLowerCase()) {
    outputtext.innerHTML = 'Please make sure the email address is written only in lower case';
    event.preventDefault();
  }
});

function updatestoragearray(){
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let storageobj = {"name":name,"email":email,"message":message};
  let storagestring = JSON.stringify(storageobj);
  console.log(storagestring);
  localStorage.setItem('forminfo', storagestring);
}
const formelems = document.querySelectorAll('.formelem');
formelems.forEach(function(elem) {
  elem.addEventListener('input', function() {
    updatestoragearray();
  });
});

const projectsarray = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mainimage: 'project1img.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    livelink: 'http://www.github.com/livelink1.html',
    sourcelink: 'http://www.github.com/sourcelink1.html',
  },
  {
    name: 'Multi-post stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    mainimage: 'project2img.png',
    technologies: ['HTML', 'ruby on rails', 'CSS', 'Javascript'],
    livelink: 'http://www.github.com/livelink2.html',
    sourcelink: 'http://www.github.com/courcelink2.html',
  },
  {
    name: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    mainimage: 'project3img.png',
    technologies: ['HTML', 'ruby on rails', 'CSS', 'Javascript'],
    livelink: 'http://www.github.com/livelink3.html',
    sourcelink: 'http://www.github.com/sourcelink3.html',
  },
  {
    name: 'Uber navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    mainimage: 'project4img.png',
    technologies: ['HTML', 'ruby on rails', 'CSS', 'Javascript'],
    livelink: 'http://www.github.com/livelink4.html',
    sourcelink: 'http://www.github.com/sourcelink4.html',
  },
];
for (let n = 0; n < projectsarray.length; n += 1) {
  const index = n;
  const project = projectsarray[n];
  let technologieshtml = '';
  for (let v = 0; v < project.technologies.length; v += 1) {
    const technologie = project.technologies[v];
    technologieshtml += `<li>${technologie}</li>`;
  }
  document.querySelector(
    '#cardContainer',
  ).innerHTML += `<div class='card'><div class='leftcard'><div class='imgplaceholder'><img class='projectimg' src='assets/images/${project.mainimage}'></div></div><div class='rightcard'><h3 class='cardTxt'>${project.name}</h3><p class='cardText'>${project.description}</p><div><ul class="skillsbar">${technologieshtml}</ul></div><div class='probtn'><button onclick='projectdetails(${index})' class='projectbtn'>see project</button></div></div></div>`;
}
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

function projectdetails(index) {
  const dataobj = projectsarray[index];
  const popuptitletext = document.querySelector('.popupTxt');
  const popupimg = document.querySelector('.popupimg');
  const popupdescription = document.querySelector('.popupdescription');
  const livebutton = document.getElementById('livebtn');
  const sourcebutton = document.getElementById('srcbtn');

  popuptitletext.innerHTML = dataobj.name;
  popupdescription.innerHTML = dataobj.description;
  popupimg.src = `assets/images/${dataobj.mainimage}`;
  livebutton.href = dataobj.livelink;
  sourcebutton.href = dataobj.sourcelink;

  document.querySelector('#popup').style.display = 'block';
}
function closepopup() {
  document.querySelector('#popup').style.display = 'none';
}
document.querySelector('#mobilemenuicon').addEventListener('click', mobileMenu);
document
  .querySelector('.navtoportfolio')
  .addEventListener('click', navtoportfolio);
document.querySelector('.navtoabout').addEventListener('click', navtoabout);
document.querySelector('.projectdetails').addEventListener('click', projectdetails);
document.querySelector('.navtocontact').addEventListener('click', navtocontact);
document.querySelector('.popuptopright').addEventListener('click', closepopup);
document
  .querySelector('.closemobilemenu')
  .addEventListener('click', closemobilemenu);
