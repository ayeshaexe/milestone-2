var _a, _b, _c;
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // input values
    var name = document.getElementById("name");
    var pnumber = document.getElementById("number");
    var email = document.getElementById("Email");
    var github = document.getElementById("Github");
    var education = document.getElementById("education");
    var skills = document.getElementById("skills");
    var experience = document.getElementById("experience");
    if (name && pnumber && email && github && education && skills && experience) {
        var name1 = name.value;
        var Pnumber = pnumber.value;
        var e_mail = email.value;
        var Github = github.value;
        var Education = education.value;
        var skills1 = skills.value;
        var Experience = experience.value;
        var resumeOutput = "\n    <h2><b>Resume</b><h2>\n    <h3>Personal Information:</h3>\n    <p><b>Name:</b> ".concat(name1, "</p> \n    <p><b>Phone-Number:</b> ").concat(Pnumber, "</p>\n    <p><b>E-mail:</b> ").concat(e_mail, "</p>\n    <p><b>Github:</b> ").concat(Github, "</p>\n\n    <h3>Education:</h3>\n    <p>").concat(Education, "</p>\n\n    <h3>skills:</h3>\n    <p>").concat(skills1, "</p>\n\n    <h3>Experience:</h3>\n    <p>").concat(Experience, "</p>\n    ");
        var display_resume = document.getElementById("resumeOutput");
        if (display_resume) {
            display_resume.innerHTML = resumeOutput;
        }
    }
});
(_b = document.getElementById("editResumeButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var form = document.getElementById("resume");
    var displayResume = document.getElementById("resumeOutput");
    // Show the form and clear the displayed resume
    if (form && displayResume) {
        form.style.display = "block";
        displayResume.innerHTML = "";
        console.log("Editing mode activated.");
    }
});
// Share resume (copy resume content to clipboard)
(_c = document.getElementById("shareResumeButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var _a;
    var resumeText = (_a = document.getElementById("resumeOutput")) === null || _a === void 0 ? void 0 : _a.innerText;
    if (resumeText) {
        navigator.clipboard.writeText(resumeText)
            .then(function () { return alert('Resume text copied to clipboard for sharing!'); })
            // .catch(err => alert('Failed to copy: '));
            .catch(function (err) { return alert('Failed to copy: ' + err); });
    }
});
