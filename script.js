document.getElementById('prevForm').addEventListener('submit', async(event) =>{
    event.preventDefault();
    const city = document.getElementById('city').value;

    const apiKey = 'c004b790348f4d0baa1195142242511';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Erro ao buscar cidade')
        }
        const data = await response.json();

        const current = data.current; 

        document.querySelector('img').classList.add('show');
        document.querySelector('#result-title').classList.add('show');
        document.getElementById('name', 'region').textContent = `${data.location.name}, ${data.location.region}`;
        document.getElementById('temp_c').textContent = `Temperatura: ${current.temp_c}C°`;
        document.getElementById('feelslike_c').textContent = `Sensação térmica: ${current.feelslike_c}C°`;
        document.getElementById('humidity').textContent = `Umidade: ${current.humidity}%`;
        document.getElementById('wind_kph').textContent = `Velocidade do vento: ${current.wind_kph} km/h`;
    }
    catch(error){
        alert('Ocorreu um erro: ' + error.message);
    }
})

