// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Initialize charts when Program Overview tab is shown
            if (targetTab === 'program-overview') {
                setTimeout(() => {
                    initAllCharts();
                }, 100);
            }
        });
    });

    // Initialize charts on page load (Program Overview is active by default)
    initAllCharts();
});

// Chart Colors (matching the screenshot style)
const chartColors = {
    primary: '#1da1f2',
    secondary: '#17bf63', 
    tertiary: '#794bc4',
    accent: '#e0245e',
    warning: '#ff9500',
    neutral: '#657786'
};

// Initialize all charts
function initAllCharts() {
    initMonthlyVolumeChart();
    initDLSubscriptionChart();
    initDQSLAChart();
    initHeadcountChart();
    initSLAChart();
    initQCChart();
}

// Monthly Alert Volume Chart
function initMonthlyVolumeChart() {
    const ctx = document.getElementById('monthlyVolumeChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [213738, 252182, 336960, 249053, 329182],
                    backgroundColor: [
                        '#1da1f2',
                        '#1da1f2', 
                        '#1da1f2',
                        '#1da1f2',
                        '#17bf63' // Current month in green
                    ],
                    borderWidth: 0,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y.toLocaleString() + ' alerts';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return (value / 1000) + 'K';
                            },
                            font: { size: 10 }
                        },
                        grid: { display: false }
                    },
                    x: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// DL/Subscription Rate Trend Chart
function initDLSubscriptionChart() {
    const ctx = document.getElementById('dlSubscriptionChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [14.2, 15.8, 16.1, 17.2, 17.8],
                    borderColor: '#ff9500',
                    backgroundColor: 'rgba(255, 149, 0, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: '#ff9500'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 25,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: { size: 10 }
                        },
                        grid: { display: false }
                    },
                    x: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// DQSLA Rate Trend Chart
function initDQSLAChart() {
    const ctx = document.getElementById('dqslaChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [0.45, 0.38, 0.32, 0.31, 0.29],
                    borderColor: '#e0245e',
                    backgroundColor: 'rgba(224, 36, 94, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: '#e0245e'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1.0,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: { size: 10 }
                        },
                        grid: { display: false }
                    },
                    x: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// Headcount Ramp Chart
function initHeadcountChart() {
    const ctx = document.getElementById('headcountChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [375, 385, 395, 405, 410],
                    backgroundColor: '#794bc4',
                    borderWidth: 0,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + ' people';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 450,
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    },
                    x: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// SLA Compliance Trend Chart
function initSLAChart() {
    const ctx = document.getElementById('slaChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [99.2, 99.4, 99.5, 99.6, 99.7],
                    borderColor: '#17bf63',
                    backgroundColor: 'rgba(23, 191, 99, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: '#17bf63'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        min: 98,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: { size: 10 }
                        },
                        grid: { display: false }
                    },
                    x: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// QC Pass Rate Trend Chart
function initQCChart() {
    const ctx = document.getElementById('qcChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [92.8, 93.1, 93.3, 93.4, 93.6],
                    borderColor: '#1da1f2',
                    backgroundColor: 'rgba(29, 161, 242, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: '#1da1f2'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        min: 90,
                        max: 95,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: { size: 10 }
                        },
                        grid: { display: false }
                    },
                    x: {
                        ticks: { font: { size: 10 } },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// Utility functions
function formatNumber(num) {
    return num.toLocaleString();
}

function calculatePercentageChange(current, previous) {
    if (previous === 0) return 0;
    return ((current - previous) / previous * 100).toFixed(1);
}

// Handle window resize for responsive charts
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        Chart.helpers.each(Chart.instances, function(instance) {
            instance.resize();
        });
    }, 300);
});

// Error handling for chart initialization
function handleChartError(error, chartName) {
    console.error(`Error initializing ${chartName}:`, error);
}

// Add smooth animations
Chart.defaults.animation.duration = 800;
Chart.defaults.animation.easing = 'easeOutQuart';

console.log('KYC Dashboard loaded successfully');