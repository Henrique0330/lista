function adicionar(){
    let text = document.getElementById("texto").value
    let list = document.getElementById("Lista").innerHTML

    list = + list + "<li>" +text+ "</li>"
}