let div = document.getElementById("divTag");
let btn = document.getElementById("createListing");
let jobTitle = document.getElementById("jobTitle"); 
let compName = document.getElementById("compName");
let skills = document.getElementById("skills");
let experience = document.getElementById("experience");
let lctn = document.getElementById("lctn");

btn.onclick = function(){
    if(jobTitle.value === "" || compName.value === "" || skills.value === "" || experience.value === "" || lctn.value === ""){
    alert("Fill all fields");
    return;
    }

    div.innerHTML += 
    '<div>' + "<p>Job Title: " + jobTitle.value + "<br>" +
        "Company Name: " + compName.value + "<br>" +
        "Skills Required: " + skills.value + "<br>" +
        "Experience Needed: At least " + experience.value + " years<br>" +
        "Location: " + lctn.value + "</p>" + 
        '<input type="button" value="remove listing" onclick="this.parentElement.remove()">' +
    '</div>';
    jobTitle.value = "";
    compName.value = "";
    skills.value = "";
    experience.value = "";
    lctn.value = "";
}
