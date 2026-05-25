const displayTempo = document.getElementById('tempo');
const btnIniciar = document.getElementById('btn-iniciar');

let tempoRestante = 25 * 60; 
let temporizador; 
let rodando = false; 

function atualizarDisplay() {
    let minutos = Math.floor(tempoRestante / 60);
    let segundos = tempoRestante % 60;

    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;

    displayTempo.textContent = `${minutos}:${segundos}`;
}

function iniciarPomodoro() {
    if (rodando === true) return; 
    rodando = true;
    
    btnIniciar.textContent = "Focado...";
    btnIniciar.style.backgroundColor = "var(--azul-petroleo)"; 

    temporizador = setInterval(() => {
        tempoRestante--; 
        atualizarDisplay(); 

        if (tempoRestante <= 0) {
            clearInterval(temporizador);
            rodando = false;
            btnIniciar.textContent = "Iniciar Foco";
            btnIniciar.style.backgroundColor = "var(--rosa-poeira)";
            alert("Bloco concluído! Descanse a mente.");
        }
    }, 1000);
}

btnIniciar.addEventListener('click', iniciarPomodoro);