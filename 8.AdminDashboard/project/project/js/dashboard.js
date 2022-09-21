$('.counterUp').counterUp({
    delay: 10,
    time: 1000
});

let dateArr = ['jul 21','jul 20','jul 19','jul 18','jul 17','jul 16','jul 15','jul 14','jul 13','jul 12','jul 11'];
let orderCountArr = [7, 5, 6, 4, 6, 4,8,6,8,9,6];
let viewerCountArr = [13,12,15,14,20,17,19,16,23,33,16];

let ov = document.getElementById('ov').getContext('2d');
let ovChart = new Chart(ov, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
                label: 'Orders Count',
                data: orderCountArr,
                backgroundColor: [
                    '#007bff30',
                ],
                borderColor: [
                    '#007bff',
                ],
                borderWidth: 1,
                tension:0
            },
            {
                label: 'Viewer Count',
                data: viewerCountArr,
                backgroundColor: [
                    '#28a74530',
                ],
                borderColor: [
                    '#28a745',
                ],
                borderWidth: 1,
                tension:0
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                display:true,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes:[
                {
                    display: true,
                    gridLines:[
                        {
                            display: false,
                        }
                    ]
                }
            ]
        },
        legend:{
            display: true,
            shape:"circle",
            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }
});