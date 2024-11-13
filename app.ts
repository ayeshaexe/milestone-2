document.getElementById("resume")?.addEventListener("submit", function(event){
    event.preventDefault();

     // input values
     const name = document.getElementById("name")
     const pnumber = document.getElementById("number") 
     const email = document.getElementById("Email") 
     const github = document.getElementById("Github") 
     const education = document.getElementById("education") 
     const skills = document.getElementById("skills")
     const experience = document.getElementById("experience")

     if (name && pnumber && email && github && education && skills && experience){
        const name1 = (name as HTMLInputElement).value
        const Pnumber = (pnumber as HTMLInputElement).value
        const e_mail = (email as HTMLInputElement).value
        const Github = (github as HTMLInputElement).value
        const Education = (education as HTMLInputElement).value
        const skills1 = (skills as HTMLInputElement).value
        const Experience = (experience as HTMLInputElement).value


    const resumeOutput =
    `
    <h2><b>Resume</b><h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name1}</p> 
    <p><b>Phone-Number:</b> ${Pnumber}</p>
    <p><b>E-mail:</b> ${e_mail}</p>
    <p><b>Github:</b> ${Github}</p>

    <h3>Education</h3>
    <p>${Education}</p>

    <h3>skills</h3>
    <p>${skills1}</p>

    <h3>Experience</h3>
    <p>${Experience}</p>
    `;
    const display_resume = document.getElementById("resumeOutput");
    if(display_resume){
        display_resume.innerHTML = resumeOutput;
    }
}
});