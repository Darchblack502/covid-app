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
            <div class="dataText">
            <div><h4>State:</h4> <h5>${stateInfo.state}</h5></div>
            <hr class="divider">
            <div><p>Confirmed Cases:</p><p> ${stateInfo.positive}</p></div>
            <div><p>Deaths:</p><p> ${stateInfo.death}</p></div>
            <div><p>Hospitalized:</p><p> ${stateInfo.hospitalizedCurrently}</p></div>
            <div><p>Total Tests:</p><p> ${stateInfo.totalTestResults}</p></div>
            <div><p>Last Updated:</p><p> ${stateInfo.dateModified}</p></div>
            </div>
        `;
    }
}