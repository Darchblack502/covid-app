//Realizar Solicitud

document.addEventListener('DOMContentLoaded', () => {
    const stateSelector = document.getElementById('stateSelector');
    const stateData = document.getElementById('stateData');

    fetch('https://api.covidtracking.com/v1/states/current.json')
        .then(response => response.json())
        .then(data => {
            populateStateSelector(data);
            stateSelector.addEventListener('change', () => {
                displayStateData(data, stateSelector.value);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});


//Agregar al selector los nombres de los estados

function populateStateSelector(data) {
    const stateSelector = document.getElementById('stateSelector');
    data.forEach(state => {
        const option = document.createElement('option');
        option.value = state.state;
        option.textContent = state.state;
        stateSelector.appendChild(option);
    });
}

//Mostrar los datos  del estado seleccionado

function displayStateData(data, selectedState) {
    const stateData = document.getElementById('stateData');
    const stateInfo = data.find(state => state.state === selectedState);

    if (stateInfo) {
        stateData.innerHTML = `
            <h2>State: ${stateInfo.state}</h2>
            <p>Confirmed Cases: ${stateInfo.positive}</p>
            <p>Deaths: ${stateInfo.death}</p>
            <p>Hospitalized: ${stateInfo.hospitalizedCurrently}</p>
            <p>Total Tests: ${stateInfo.totalTestResults}</p>
            <p>Last Updated: ${stateInfo.dateModified}</p>
        `;
    }
}

