document.addEventListener("DOMContentLoaded", function(){

    let btn = document.getElementById("createListing");

    function getJobs(){
        return JSON.parse(localStorage.getItem("jobs")) || [];
    }

    function saveJobs(jobs){
        localStorage.setItem("jobs", JSON.stringify(jobs));
    }

    function displayJobs(){
        let container = document.getElementById("jobsList");
        let jobs = getJobs();

        container.innerHTML = "";

        if(jobs.length === 0){
            container.innerHTML = "<p>No jobs yet</p>";
            return;
        }

        jobs.forEach((job, index) => {
            container.innerHTML += `
            <div class="card">
                <h3>${job.title}</h3>
                <p><b>Company:</b> ${job.company}</p>
                <p><b>Skills:</b> ${job.skills}</p>
                <p><b>Experience:</b> ${job.experience} years</p>
                <p><b>Location:</b> ${job.location}</p>
                <button onclick="deleteJob(${index})" class="btn" style="background:red;">Delete</button>
            </div>`;
        });
    }

    window.deleteJob = function(index){
        let jobs = getJobs();
        jobs.splice(index, 1);
        saveJobs(jobs);
        displayJobs();
    };

    btn.onclick = function(){
        let jobTitle = document.getElementById("jobTitle").value;
        let compName = document.getElementById("compName").value;
        let skills = document.getElementById("skills").value;
        let experience = document.getElementById("experience").value;
        let lctn = document.getElementById("lctn").value;

        if(!jobTitle || !compName || !skills || !experience || !lctn){
            alert("Fill all fields");
            return;
        }

        let jobs = getJobs();

        let job = {
            title: jobTitle,
            company: compName,
            skills: skills,
            experience: experience,
            location: lctn
        };

        jobs.push(job);
        saveJobs(jobs);

        displayJobs();

        document.getElementById("jobTitle").value = "";
        document.getElementById("compName").value = "";
        document.getElementById("skills").value = "";
        document.getElementById("experience").value = "";
        document.getElementById("lctn").value = "";
    };

    displayJobs();

});
