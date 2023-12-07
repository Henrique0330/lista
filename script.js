let Button = document.getElementById("adicionar-tarefa");
let tarefasA = document.getElementById("tarefasA");
let inputcamp = document.getElementById("Resultado");
let Complete = document.getElementById("TCompletas");

function additem() {
    let terminando = document.createElement("p");
    let buttonFinish = document.createElement("button")
    buttonFinish.textContent = "Finish"
    inputcamp.focus();
    terminando.innerText = inputcamp.value;
    tarefasA.appendChild(terminando);
    terminando.appendChild(buttonFinish)
    inputcamp.value = ""
    terminando.addEventListener("click", function () {
        tarefasA.removeChild(terminando);
        Complete.appendChild(terminando);
        terminando.removeChild(terminando.childNodes[1])
        inputcamp.focus();
    })
    document.getElementById("limpar").addEventListener("click", function () {
        document.getElementById("TCompletas").removeChild(terminando);
        inputcamp.focus();
    })
}
Button.addEventListener("click", additem)
inputcamp.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        additem()
    }


})