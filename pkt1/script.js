const ASK_TIMES = 5;
const interestsList = document.querySelector('#interestsList');

for(let i = 1; i <= ASK_TIMES; i++){
    const interest = prompt(`Podaj swoje zainteresowanie (${i}/${ASK_TIMES})`) || "-";
    interestsList.innerHTML += `<li>${interest}</li>`
}
