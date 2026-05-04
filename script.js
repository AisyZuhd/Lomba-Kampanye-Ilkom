document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 20px';
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.padding = '15px 20px';
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
    });

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if(navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'white';
                navLinks.style.padding = '20px';
            }
        });
    }

    // Slider Nominal Logic (Halaman Kontribusi)
    const slider = document.getElementById('nominal-slider');
    const displayValue = document.getElementById('display-value');
    const treeCount = document.getElementById('tree-count');
    // Harga 1 pohon = Rp 20.000
    const PRICE_PER_TREE = 20000;

    if (slider && displayValue && treeCount) {
        slider.addEventListener('input', function() {
            const val = parseInt(this.value);
            displayValue.textContent = 'Rp ' + val.toLocaleString('id-ID');
            
            const trees = Math.floor(val / PRICE_PER_TREE);
            treeCount.textContent = `${trees} Pohon`;
        });
    }

    // Chart.js (Halaman Laporan)
    const ctx = document.getElementById('reportChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Reforestasi (Penanaman)', 'Edukasi Masyarakat', 'Operasional & Logistik'],
                datasets: [{
                    data: [70, 20, 10],
                    backgroundColor: [
                        '#1B4332', // green dark
                        '#40916C', // green light
                        '#9C6644'  // brown
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                family: "'Inter', sans-serif"
                            }
                        }
                    }
                }
            }
        });
    }

});
