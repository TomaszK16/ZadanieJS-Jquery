const headingEl = document.getElementById("heading");
const nameEls = document.querySelectorAll("p .animal");

headingEl.innerHTML = "All about cats";

for (let i = 0; i < nameEls.length; i++) {
    nameEls[i].innerHTML = "cat";
}

// ZADANIE 2:

const publishButton = document.querySelector("#publish");
const opinionInput = document.querySelector("#opinionInput");

publishButton.addEventListener('click', () => {
    if(!opinionInput.value) return;
    
    const opinion = document.createElement('p');
    opinion.classList.add("opinion")
    opinion.innerText = opinionInput.value;

    document.body.appendChild(opinion);
})
