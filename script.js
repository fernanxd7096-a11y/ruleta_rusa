function jugar() {

    let numero = Math.floor(Math.random() * 6) + 1;

    let resultado = document.getElementById("resultado");

    if (numero === 1) {
        resultado.innerHTML = "💥 PERDISTE";
    } else {
        resultado.innerHTML = "😅 SALVADO";
    }

}