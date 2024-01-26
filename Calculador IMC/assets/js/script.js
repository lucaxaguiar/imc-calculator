const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';
    
    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 16.9) {
        description = 'Cuidado! Você está muito abaixo do peso!';
    } else if ( bmi >= 17 && bmi <= 18.4) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if ( bmi >= 18.5 && bmi <= 24.9) {
        description = 'Seu peso está normal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if ( bmi >= 25 && bmi <= 29.9) {
        description = 'Atenção! Você está acima do peso.';
    } else if ( bmi >= 30 && bmi <= 34.9) {
        description = 'Cuidado! você está com obesidade grau 1';
    } else if ( bmi >= 35 && bmi <= 40) {
        description = 'Cuidado! você está com obesidade grau 2';
    } else {
        description = 'Cuidado! você está com obesidade grau 3';
    }
    
    
    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});