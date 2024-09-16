
document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('saveButton');

    function updateCarInfo() {
        const car = JSON.parse(localStorage.getItem('car'));

        if (car) {
            console.log('Informações do Carro Armazenado:');
            console.log(`Marca: ${car.make}`);
            console.log(`Modelo: ${car.model}`);
            console.log(`Ano: ${car.year}`);
            console.log(`Cor: ${car.color}`);
        } else {
            console.log('Nenhum dado armazenado.');
        }
    }

    saveButton.addEventListener('click', () => {
        const make = document.getElementById('make').value;
        const model = document.getElementById('model').value;
        const year = document.getElementById('year').value;
        const color = document.getElementById('color').value;
        
        const car = {
            make,
            model,
            year,
            color
        };
        localStorage.setItem('car', JSON.stringify(car));
        
        updateCarInfo();
    });
    updateCarInfo();
});
