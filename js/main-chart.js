var ctx = document.getElementById('main-chart').getContext('2d');

// Global options
Chart.defaults.global.defaultFontSize = 24;

// Chart line gradient
var gradientStroke = ctx.createLinearGradient(500, 0, 50, 0);
gradientStroke.addColorStop(0, '#7A0899');
gradientStroke.addColorStop(0.5, '#005a84');
gradientStroke.addColorStop(1, '#0C76F5');


var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2019', '2030', '2041'],
        datasets: [{
            label: 'Armenia Leapfrogging',
            data: [0.23, 2.8, 2.95, 3.2],
            backgroundColor: [
                'rgba(255, 255, 255, 0)',
            ],
            borderColor: gradientStroke,
            borderWidth: 12,

            pointRadius: 10,
            pointHoverRadius: 10,
            pointBorderWidth: 8,
            pointBorderColor: "white",
            pointBackgroundColor: gradientStroke,
            pointStyle: 'circle',
        },
        {
            label: 'Armenia Leapfrogging',
            data: [0.23, 0.56, 1.5],
            backgroundColor: [
                'rgba(255, 255, 255, 0)',
            ],
            borderColor: [
                'rgba(8, 54, 114, 1)',
            ],
            borderDash: [
                3, 15
            ],
            borderWidth: 3,

            pointRadius: 10,
            pointHoverRadius: 10,
            pointBorderWidth: 8,
            pointBorderColor: "white",
            pointBackgroundColor: "#005a84",
            pointStyle: 'circle',
        },
        {
            label: 'Armenia Leapfrogging',
            data: [2.49],
            backgroundColor: [
                'rgba(255, 255, 255, 0)',
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
            ],
            borderDash: [
                5, 15
            ],
            borderWidth: 3,

            pointRadius: 10,
            pointHoverRadius: 10,
            pointBorderWidth: 8,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: "white",
            pointStyle: 'circle',
        },
    ],
    },
    
    options: {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    borderDash: [3, 10],
                    color: '#C7C8CA',
                },
            }]
        },
        legend: {
            display: false,
        }
    },
});


// Chart media Queries

function Media(x) {
    if (x.matches) { // If media query matches
        Chart.defaults.global.defaultFontSize = 15;
        chart.data.datasets[0].borderWidth = 5;
        chart.data.datasets[0].pointBorderWidth = 3;
        chart.data.datasets[0].pointRadius = 7;
        chart.data.datasets[0].pointHoverRadius = 7;
        chart.data.datasets[1].borderWidth = 2;
        chart.data.datasets[1].pointBorderWidth = 3;
        chart.data.datasets[1].pointRadius = 7;
        chart.data.datasets[1].pointHoverRadius = 7;
        chart.data.datasets[2].borderWidth = 2;
        chart.data.datasets[2].pointBorderWidth = 3;
        chart.data.datasets[2].pointRadius = 5;
        chart.data.datasets[2].pointHoverRadius = 5;
        console.log(chart.data.datasets[0].pointHoverRadius);
    }
    else {
        Chart.defaults.global.defaultFontSize = 24;
        chart.data.datasets[0].borderWidth = 12;
        chart.data.datasets[0].pointBorderWidth = 8;
        chart.data.datasets[0].pointRadius = 10;
        chart.data.datasets[0].pointHoverRadius = 10;
        chart.data.datasets[1].borderWidth = 3;
        chart.data.datasets[1].pointBorderWidth = 8;
        chart.data.datasets[1].pointRadius = 10;
        chart.data.datasets[1].pointHoverRadius = 10;
        chart.data.datasets[2].borderWidth = 3;
        chart.data.datasets[2].pointBorderWidth = 8;
        chart.data.datasets[2].pointRadius = 10;
        chart.data.datasets[1].pointHoverRadius = 10;
    }
  }
  
  var x = window.matchMedia("(max-width: 480px)")
  Media(x) // Call listener function at run time
  x.addListener(Media) // Attach listener function on state changes