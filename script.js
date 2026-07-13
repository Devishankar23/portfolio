const text = "M.Sc Computer Science | Python Developer | AI & ML Learner";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
        setTimeout(type, 60);
    }
}

window.onload = type;
