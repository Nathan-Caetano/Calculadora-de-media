const form = document.getElementById("form");
form.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        calcMedia();
    }
});

function calcMedia(){
    const numeros = document.getElementById('numeros').value.split(",").map(n => parseFloat(n.trim()));

    if (numeros.some(isNaN)){
        alert("Há valores não válidos")
        return;
    }

    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length

    document.getElementById('media').innerText= media.toFixed(2);
}

function mostrarAjuda() {
    const telaAjuda = document.getElementById('ajuda')

    telaAjuda.classList.toggle('show')
}