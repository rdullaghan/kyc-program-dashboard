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

// Chart Colors (matching the clean, minimal style)
const chartColors = {
    primary: '#4A90E2',
    secondary: '#7ED321', 
    tertiary: '#9013FE',
    accent: '#F5A623',
    warning: '#D0021B',
    neutral: '#9B9B9B'
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

// Monthly Alert Volume Chart (Bar Chart)
function initMonthlyVolumeChart() {
    const ctx = document.getElementById('monthlyVolumeChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [213738, 252182, 336960, 249053, 329182],
                    backgroundColor: '#4A90E2',
                    borderWidth: 0,
                    borderRadius: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderWidth: 0,
                        cornerRadius: 4,
                        displayColors: false,
                        titleFont: { size: 11 },
                        bodyFont: { size: 10 },
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y.toLocaleString();
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
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { 
                            display: true,
                            color: '#f0f0f0',
                            drawBorder: false
                        }
                    },
                    x: {
                        ticks: { 
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// DL/Subscription Rate Trend Chart (Line Chart)
function initDLSubscriptionChart() {
    const ctx = document.getElementById('dlSubscriptionChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [14.2, 15.8, 16.1, 17.2, 17.8],
                    borderColor: '#F5A623',
                    backgroundColor: 'rgba(245, 166, 35, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 3,
                    pointBackgroundColor: '#F5A623',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderWidth: 0,
                        cornerRadius: 4,
                        displayColors: false,
                        titleFont: { size: 11 },
                        bodyFont: { size: 10 },
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
                        max: 20,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { 
                            display: true,
                            color: '#f0f0f0',
                            drawBorder: false
                        }
                    },
                    x: {
                        ticks: { 
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// DQSLA Rate Trend Chart (Line Chart)
function initDQSLAChart() {
    const ctx = document.getElementById('dqslaChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [0.45, 0.38, 0.32, 0.31, 0.29],
                    borderColor: '#D0021B',
                    backgroundColor: 'rgba(208, 2, 27, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 3,
                    pointBackgroundColor: '#D0021B',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderWidth: 0,
                        cornerRadius: 4,
                        displayColors: false,
                        titleFont: { size: 11 },
                        bodyFont: { size: 10 },
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
                        max: 0.5,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { 
                            display: true,
                            color: '#f0f0f0',
                            drawBorder: false
                        }
                    },
                    x: {
                        ticks: { 
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// Headcount Ramp Chart (Bar Chart)
function initHeadcountChart() {
    const ctx = document.getElementById('headcountChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [375, 385, 395, 405, 410],
                    backgroundColor: '#9013FE',
                    borderWidth: 0,
                    borderRadius: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderWidth: 0,
                        cornerRadius: 4,
                        displayColors: false,
                        titleFont: { size: 11 },
                        bodyFont: { size: 10 },
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
                        ticks: { 
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { 
                            display: true,
                            color: '#f0f0f0',
                            drawBorder: false
                        }
                    },
                    x: {
                        ticks: { 
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// SLA Compliance Trend Chart (Line Chart)
function initSLAChart() {
    const ctx = document.getElementById('slaChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [99.2, 99.4, 99.5, 99.6, 99.7],
                    borderColor: '#7ED321',
                    backgroundColor: 'rgba(126, 211, 33, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 3,
                    pointBackgroundColor: '#7ED321',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderWidth: 0,
                        cornerRadius: 4,
                        displayColors: false,
                        titleFont: { size: 11 },
                        bodyFont: { size: 10 },
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
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { 
                            display: true,
                            color: '#f0f0f0',
                            drawBorder: false
                        }
                    },
                    x: {
                        ticks: { 
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

// QC Pass Rate Trend Chart (Line Chart)
function initQCChart() {
    const ctx = document.getElementById('qcChart');
    if (ctx && !ctx.chartInstance) {
        ctx.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                datasets: [{
                    data: [92.8, 93.1, 93.3, 93.4, 93.6],
                    borderColor: '#4A90E2',
                    backgroundColor: 'rgba(74, 144, 226, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 3,
                    pointBackgroundColor: '#4A90E2',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderWidth: 0,
                        cornerRadius: 4,
                        displayColors: false,
                        titleFont: { size: 11 },
                        bodyFont: { size: 10 },
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
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
                        grid: { 
                            display: true,
                            color: '#f0f0f0',
                            drawBorder: false
                        }
                    },
                    x: {
                        ticks: { 
                            font: { size: 9 },
                            color: '#9B9B9B'
                        },
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

// Chart defaults for consistent styling
Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
Chart.defaults.font.size = 10;
Chart.defaults.color = '#9B9B9B';
Chart.defaults.animation.duration = 600;
Chart.defaults.animation.easing = 'easeOutQuart';

// Performance optimization
Chart.defaults.interaction.intersect = false;
Chart.defaults.interaction.mode = 'index';

console.log('KYC Dashboard loaded successfully');