// Colorir calendario
function drawData() {
    // Informações sobre o calendário
    let data = parseInt(document.getElementById('day').value) + 5;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    
    let days = calendar.getElementsByTagName('td');
    days[data].style.background = color;
};