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

/* LÓGICA CALENDÁRIO DINÂMICO */

const monthYearText = document.getElementById('month-year');
const calendarDays = document.getElementById('calendar-days');
const prevBtn = document.getElementById('prev-month');
const nextBtn = document.getElementById('next-month');

let dataAtual = new Date();
let mesAtual = dataAtual.getMonth(); 
let anoAtual = dataAtual.getFullYear();

const nomesMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function renderizarCalendario() {

    monthYearText.textContent = `${nomesMeses[mesAtual]} ${anoAtual}`;
    
    calendarDays.innerHTML = '';

    const primeiroDiaDoMes = new Date(anoAtual, mesAtual, 1).getDay();
    const totalDiasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
    const totalDiasMesAnterior = new Date(anoAtual, mesAtual, 0).getDate(); 


    for (let i = primeiroDiaDoMes - 1; i >= 0; i--) {
        const diaDiv = document.createElement('div');
        diaDiv.classList.add('cal-day', 'prev-month');
        diaDiv.textContent = totalDiasMesAnterior - i;
        calendarDays.appendChild(diaDiv);
    }

    for (let i = 1; i <= totalDiasNoMes; i++) {
        const diaDiv = document.createElement('div');
        diaDiv.classList.add('cal-day');
        diaDiv.textContent = i;

        const hoje = new Date();
        if (i === hoje.getDate() && mesAtual === hoje.getMonth() && anoAtual === hoje.getFullYear()) {
            diaDiv.classList.add('today');
        }

        diaDiv.addEventListener('click', () => {
            diaDiv.classList.toggle('studied'); 
        });

        calendarDays.appendChild(diaDiv);
    }
}

prevBtn.addEventListener('click', () => {
    mesAtual--;
    if (mesAtual < 0) { mesAtual = 11; anoAtual--; }
    renderizarCalendario();
});

nextBtn.addEventListener('click', () => {
    mesAtual++;
    if (mesAtual > 11) { mesAtual = 0; anoAtual++; }
    renderizarCalendario();
});

renderizarCalendario();