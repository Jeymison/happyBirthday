// Definindo a data do aniversário (07 de Setembro de 2024)
const birthday = new Date('Sep 07, 2024').getTime();

// Função para calcular a contagem regressiva
function contador() {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para o meu aniversário!`;
}

// Atualiza a contagem regressiva a cada segundo
setInterval(contador, 1000);

// Chama a função countdown() pela primeira vez
contador();


