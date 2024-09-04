document.addEventListener('DOMContentLoaded', () => {
    const stateSelector = document.getElementById('stateSelector');
    const stateData = document.getElementById('stateData');
    const chartContainer = document.getElementById('myChart');
    let myChart;

    fetch('https://api.covidtracking.com/v1/states/daily.json')
        .then(response => response.json())
        .then(data => {
            populateStateSelector(data);
            stateSelector.addEventListener('change', () => {
                const selectedState = stateSelector.value;
                displayStateData(data, selectedState);
                const last30DaysData = getLast30DaysData(data, selectedState);
                if (myChart) {
                    myChart.destroy(); // Destruir el gráfico anterior si existe
                }
                myChart = renderChart(last30DaysData);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

function populateStateSelector(data) {
    const stateSelector = document.getElementById('stateSelector');
    const states = Array.from(new Set(data.map(item => item.state)));
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelector.appendChild(option);
    });
}

function displayStateData(data, selectedState) {
    const stateData = document.getElementById('stateData');
    const latestData = data.filter(state => state.state === selectedState)[0];

    if (latestData) {
        stateData.innerHTML = `
            <div class="dataText">
            <div><h4>State:</h4> <h5>${latestData.state}</h5></div>
            <hr class="divider">
            <div><p>Confirmed Cases:</p><p> ${latestData.positive}</p></div>
            <div><p>Deaths:</p><p> ${latestData.death}</p></div>
            <div><p>Hospitalized:</p><p> ${latestData.hospitalizedCurrently}</p></div>
            <div><p>Total Tests:</p><p> ${latestData.totalTestResults}</p></div>
            <div><p>Last Updated:</p><p> ${latestData.dateModified}</p></div>
            </div>
        `;
    }
}

function getLast30DaysData(data, selectedState) {
    const filteredData = data.filter(state => state.state === selectedState).slice(0, 30).reverse();
    const dates = filteredData.map(entry => new Date(entry.dateChecked).toLocaleDateString());
    const cases = filteredData.map(entry => entry.positive);
    return { dates, cases };
}

function renderChart({ dates, cases }) {
    const ctx = document.getElementById('myChart').getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dates,
            datasets: [{
                label: 'Confirmed Cases',
                data: cases,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
