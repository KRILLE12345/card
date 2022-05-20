document.querySelector("#generateCard").addEventListener("click", function(e) {
    let picture = document.querySelector("#cardPic").value
    let text = document.querySelector("#cardText").value
    let color = document.querySelector("#colorPicker").value
    let generatedCard = document.querySelector("#generatedCard")

    generatedCard.innerHTML = `${text}<img src = "img/${picture}">`
    generatedCard.style.background = color;
})