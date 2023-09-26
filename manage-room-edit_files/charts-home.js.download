"use strict";
document.addEventListener("DOMContentLoaded", function () {
	
	// ------------------------------------------------------- //
    // Charts Gradients
    // ------------------------------------------------------ //
    var canvas = document.querySelector("canvas");

    var ctx1 = canvas.getContext("2d");
    var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
    gradient1.addColorStop(0, "rgba(133, 180, 242, 0.91)");
    gradient1.addColorStop(1, "rgba(255, 119, 119, 0.94)");

    var gradient2 = ctx1.createLinearGradient(146.0, 0.0, 154.0, 300.0);
    gradient2.addColorStop(0, "rgba(104, 179, 112, 0.85)");
    gradient2.addColorStop(1, "rgba(76, 162, 205, 0.85)");
	
	// ------------------------------------------------------- //
    // Bar Chart
    // ------------------------------------------------------ //
    var BARCHARTEXMPLE = document.getElementById("barChartExample");
    var barChartExample = new Chart(BARCHARTEXMPLE, {
        type: "bar",
        options: {
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            color: "#eee",
                        },
                    },
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            color: "#eee",
                        },
                    },
                ],
            },
        },
        data: {
            labels: ["07/1", "07/2", "07/3", "07/4", "07/5", "07/6", "07/7", "07/8", "07/9", "07/10", "07/11", "07/12", "07/13", "07/14", "07/15", "07/16", "07/17", "07/18", "07/19", "07/20"],
            datasets: [
                {
                    label: "MG Bookings",
                    backgroundColor: [gradient1, gradient1, gradient1, gradient1, gradient1, gradient1, gradient1],
                    hoverBackgroundColor: [gradient1, gradient1, gradient1, gradient1, gradient1, gradient1, gradient1],
                    borderColor: [gradient1, gradient1, gradient1, gradient1, gradient1, gradient1, gradient1],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40],
                },
                {
                    label: "Hoterip Bookings",
                    backgroundColor: [gradient2, gradient2, gradient2, gradient2, gradient2, gradient2, gradient2],
                    hoverBackgroundColor: [gradient2, gradient2, gradient2, gradient2, gradient2, gradient2, gradient2],
                    borderColor: [gradient2, gradient2, gradient2, gradient2, gradient2, gradient2, gradient2],
                    borderWidth: 1,
                    data: [35, 40, 60, 47, 88, 27, 30],
                },
            ],
        },
    });

	// ------------------------------------------------------- //
    // Bar Chart 1
    // ------------------------------------------------------ //
    var BARCHART1 = document.getElementById("barChart1");
    var barChartHome = new Chart(BARCHART1, {
        type: "bar",
        options: {
            scales: {
                xAxes: [
                    {
                        display: false,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                    ],
                    borderColor: [
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                        "#44b2d7",
                    ],
                    borderWidth: 0,
                    data: [35, 55, 65, 85, 30, 22, 18, 35],
                },
            ],
        },
    });


    // ------------------------------------------------------- //
    // Line Chart
    // ------------------------------------------------------ //
    var legendState = true;
    if (window.outerWidth < 576) {
        legendState = false;
    }

    var LINECHART = document.getElementById('lineCahrt');
    var myLineChart = new Chart(LINECHART, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: legendState
            }
        },
        data: {
            labels: ["07/1", "07/2", "07/3", "07/4", "07/5", "07/6", "07/7", "07/8", "07/9", "07/10", "07/11", "07/12", "07/13", "07/14", "07/15", "07/16", "07/17", "07/18", "07/19", "07/20", "07/21", "07/22", "07/23", "07/24", "07/25", "07/26", "07/27", "07/28", "07/29", "07/30", "07/31"],
            datasets: [
                {
                    label: "MG Bookings",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: '#E19E48',
					borderWidth: 'thin medium',
                    pointBorderColor: '#E19E48',
                    pointHoverBackgroundColor: '#da4c59',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 2,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [50, 20, 60, 31, 52, 22, 40, 25, 30, 68, 56, 40, 60, 43, 55, 39, 47, 50, 32, 61, 58, 52, 50, 45, 71, 47, 60],
                    spanGaps: false
                },
                {
                    label: "Vacation Bookings",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#5372E6",
                    pointHoverBackgroundColor: "#14B2FF",
                    borderCapStyle: 'round',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1.5,
                    pointBorderColor: "#5372E6",
                    pointBackgroundColor: "#5372E6",
                    pointBorderWidth: 2,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [20, 7, 35, 17, 26, 8, 18, 10, 14, 46, 30, 30, 14, 28, 17, 25, 17, 40],
                    spanGaps: false
                }
            ]
        }
    });



    // ------------------------------------------------------- //
    // Line Chart 1
    // ------------------------------------------------------ //
    var LINECHART1 = document.getElementById('lineChart1');
    var myLineChart = new Chart(LINECHART1, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 40,
                        min: 0,
                        stepSize: 0.5
                    },
                    display: false,
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["A", "B", "C", "D", "E", "F", "G"],
            datasets: [
                {
                    label: "Total Overdue",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: '#6ccef0',
                    pointBorderColor: '#59c2e6',
                    pointHoverBackgroundColor: '#59c2e6',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 3,
                    pointBackgroundColor: "#59c2e6",
                    pointBorderWidth: 0,
                    pointHoverRadius: 4,
                    pointHoverBorderColor: "#fff",
                    pointHoverBorderWidth: 0,
                    pointRadius: 4,
                    pointHitRadius: 0,
                    data: [20, 28, 30, 22, 24, 10, 7],
                    spanGaps: false
                }
            ]
        }
    });



    // ------------------------------------------------------- //
    // Pie Chart
    // ------------------------------------------------------ //
    var PIECHART = document.getElementById('pieChart');
    var myPieChart = new Chart(PIECHART, {
        type: 'doughnut',
        options: {
            cutoutPercentage: 80,
            legend: {
                display: false
            }
        },
        data: {
            labels: [
                "First",
                "Second",
                "Third",
                "Fourth"
            ],
            datasets: [
                {
                    data: [300, 50, 100, 60],
                    borderWidth: [0, 0, 0, 0],
                    backgroundColor: [
                        '#44b2d7',
                        "#59c2e6",
                        "#71d1f2",
                        "#96e5ff"
                    ],
                    hoverBackgroundColor: [
                        '#44b2d7',
                        "#59c2e6",
                        "#71d1f2",
                        "#96e5ff"
                    ]
                }]
        }
    });


    // ------------------------------------------------------- //
    // Bar Chart
    // ------------------------------------------------------ //
    var BARCHARTHOME = document.getElementById('barChartHome');
    var barChartHome = new Chart(BARCHARTHOME, {
        type: 'bar',
        options:
        {
            scales:
            {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }],
            },
            legend: {
                display: false
            }
        },
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"],
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)'
                    ],
                    borderColor: [
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)',
                        'rgb(121, 106, 238)'
                    ],
                    borderWidth: 1,
                    data: [35, 49, 55, 68, 81, 95, 85, 40, 30, 27, 22, 15]
                }
            ]
        }
    });

});
