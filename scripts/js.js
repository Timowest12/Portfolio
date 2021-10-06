const projectsarray = [
  {
    name: "test",
    description: "test test test",
    mainimage: "project1img.png",
    technologies: ["tech1", "tech2", "tech3"],
    livelink: "test",
    sourcelink: "test",
  },
  {
    name: "test2",
    description: "test2",
    mainimage: "project2img.png",
    technologies: ["tech3", "tech4", "tech4"],
    livelink: "test2",
    sourcelink: "test2",
  },
];
for (let project in projectsarray) {
  let index = project;
  project = projectsarray[project];
  let technologieshtml = "";
  for (let technologie in project.technologies) {
    technologie = project.technologies[technologie];
    technologieshtml += `<li>${technologie}</li>`;
  }
  console.log(index);
  document.querySelector(
    "#cardContainer"
  ).innerHTML += `<div class='card'><div class='leftcard'><div class='imgplaceholder'><img class='projectimg' src='/assets/images/${project.mainimage}'></div></div><div class='rightcard'><h3 class='cardTxt'>${project.name}</h3><p class='cardText'>${project.description}</p><div><ul class="skillsbar">${technologieshtml}</ul></div><div class='probtn'><button onclick='projectdetails(${index})' class='projectbtn'>see project</button></div></div></div>`;
}
function mobileMenu() {
  document.querySelector(".mobilemenu").classList.add("mobilemenuopen");
}
function closemobilemenu() {
  document.querySelector(".mobilemenu").classList.remove("mobilemenuopen");
}
function navtoportfolio() {
  window.scrollTo(0, document.getElementById("projectCards").offsetTop);
  closemobilemenu();
}
function navtoabout() {
  window.scrollTo(0, document.getElementById("about").offsetTop);
  closemobilemenu();
}
function navtocontact() {
  window.scrollTo(0, document.getElementById("contact").offsetTop);
  closemobilemenu();
}

function projectdetails(index){
  let dataobj = projectsarray[index];
  const popuptitletext = document.querySelector('.popupTxt');
  const popupimg = document.querySelector('.popupimg');
  const popupdescription = document.querySelector('.popupdescription');
  const livebutton = document.getElementById('livebtn');
  const sourcebutton = document.getElementById('srcbtn');
  
  popuptitletext.innerHTML = dataobj.name;
  popupdescription.innerHTML = dataobj.description;
  popupimg.src = 'assets/images/' + dataobj.mainimage;
  livebutton.href = dataobj.livelink;
  sourcebutton.href = dataobj.sourcelink;

  document.querySelector('#popup').style.display = 'block';
 
console.log(projectsarray[index]);

}
function closepopup(){
  document.querySelector('#popup').style.display = 'none';
}
document.querySelector("#mobilemenuicon").addEventListener("click", mobileMenu);
document
  .querySelector(".navtoportfolio")
  .addEventListener("click", navtoportfolio);
document.querySelector(".navtoabout").addEventListener("click", navtoabout);
document.querySelector(".navtocontact").addEventListener("click", navtocontact);
document.querySelector(".popuptopright").addEventListener("click", closepopup);
document
  .querySelector(".closemobilemenu")
  .addEventListener("click", closemobilemenu);
