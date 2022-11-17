function ProjectsSelected() {
  var selectBox = document.getElementById("opts");
  selectBox.style.left = "5px";
  var ShowBox = document.getElementById("works_skills");
  ShowBox.style.display = "none";
  var HideBox = document.getElementById("works_projects");
  HideBox.style.display = "grid";
  
}

function SkillsSelected() {
  var selectBox = document.getElementById("opts");
  selectBox.style.left = "161px";
  var ShowBox = document.getElementById("works_projects");
  ShowBox.style.display = "none";
  var HideBox = document.getElementById("works_skills");
  HideBox.style.display = "grid";
}