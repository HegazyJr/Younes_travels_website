// Tour filtering and scroll navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // ===== TOUR FILTERING =====
    // Get references to filter buttons
    const allBtn = document.getElementById('all-btn');
    const recommendBtn = document.getElementById('recommend-btn');
    const coastalBtn = document.getElementById('coastal-btn');
    const historicalBtn = document.getElementById('historical-btn');
    const savariBtn = document.getElementById('savari-btn');

    // Get references to tour sections
    const recommendSection = document.getElementById('recommend');
    const publicCoastalSection = document.getElementById('public-coastal');
    const privateCoastalSection = document.getElementById('private-coastal');
    const historicalSection = document.getElementById('historical');
    const savariSection = document.getElementById('savari');

    // Get references to section titles
    const recommendTitle = document.getElementById('rec_h1');
    const publicCoastalTitle = document.getElementById('coas_h1');
    const privateCoastalTitle = document.getElementById('pri_h1');
    const historicalTitle = document.getElementById('his_h1');
    const savariTitle = document.getElementById('sav_h1');

    // Function to show specific section and hide others
    function showSection(selectedSection, selectedTitle) {
        // Hide all sections and titles
        [recommendSection, publicCoastalSection, privateCoastalSection, historicalSection, savariSection].forEach(section => {
            if (section) section.style.display = 'none';
        });
        [recommendTitle, publicCoastalTitle, privateCoastalTitle, historicalTitle, savariTitle].forEach(title => {
            if (title) title.style.display = 'none';
        });

        // Show selected section and title
        if (selectedSection) selectedSection.style.display = 'flex';
        if (selectedTitle) selectedTitle.style.display = 'block';
    }

    // Function to show all sections
    function showAllSections() {
        [recommendSection, publicCoastalSection, privateCoastalSection, historicalSection, savariSection].forEach(section => {
            if (section) section.style.display = 'flex';
        });
        [recommendTitle, publicCoastalTitle, privateCoastalTitle, historicalTitle, savariTitle].forEach(title => {
            if (title) title.style.display = 'block';
        });
    }

    // Add click event listeners to filter buttons
    allBtn.addEventListener('click', function() {
        showAllSections();
        // Remove active class from all buttons
        [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        // Add active class to all button
        allBtn.classList.add('active');
        // Update scroll buttons
        updateScrollButtons();
    });

    recommendBtn.addEventListener('click', function() {
        showSection(recommendSection, recommendTitle);
        // Remove active class from all buttons
        [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        // Add active class to recommend button
        recommendBtn.classList.add('active');
        // Update scroll buttons
        updateScrollButtons();
    });

    coastalBtn.addEventListener('click', function() {
        // Hide all sections and titles first
        [recommendSection, publicCoastalSection, privateCoastalSection, historicalSection, savariSection].forEach(section => {
            if (section) section.style.display = 'none';
        });
        [recommendTitle, publicCoastalTitle, privateCoastalTitle, historicalTitle, savariTitle].forEach(title => {
            if (title) title.style.display = 'none';
        });
        
        // Show both coastal sections and titles
        if (publicCoastalSection) publicCoastalSection.style.display = 'flex';
        if (privateCoastalSection) privateCoastalSection.style.display = 'flex';
        if (publicCoastalTitle) publicCoastalTitle.style.display = 'block';
        if (privateCoastalTitle) privateCoastalTitle.style.display = 'block';
        
        // Remove active class from all buttons
        [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        // Add active class to coastal button
        coastalBtn.classList.add('active');
        // Update scroll buttons
        updateScrollButtons();
    });

    historicalBtn.addEventListener('click', function() {
        showSection(historicalSection, historicalTitle);
        // Remove active class from all buttons
        [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        // Add active class to historical button
        historicalBtn.classList.add('active');
        // Update scroll buttons
        updateScrollButtons();
    });

    savariBtn.addEventListener('click', function() {
        showSection(savariSection, savariTitle);
        // Remove active class from all buttons
        [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        // Add active class to savari button
        savariBtn.classList.add('active');
        // Update scroll buttons
        updateScrollButtons();
    });

    // Show all sections by default and activate all button
    showAllSections();
    allBtn.classList.add('active');

    // Check URL hash on page load
    if (window.location.hash === '#savari') {
        // Remove active class from all buttons
        [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        // Add active class to savari button
        savariBtn.classList.add('active');
        // Show only savari section
        showSection(savariSection, savariTitle);
        // Update scroll buttons
        updateScrollButtons();
        
        // Scroll to safari section
        setTimeout(() => {
            if (savariSection) {
                savariSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else if (window.location.hash === '#coastal') {
        // Remove active class from all buttons
        [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        // Add active class to coastal button
        coastalBtn.classList.add('active');
        
        // Hide all sections and titles first
        [recommendSection, publicCoastalSection, privateCoastalSection, historicalSection, savariSection].forEach(section => {
            if (section) section.style.display = 'none';
        });
        [recommendTitle, publicCoastalTitle, privateCoastalTitle, historicalTitle, savariTitle].forEach(title => {
            if (title) title.style.display = 'none';
        });
        
        // Show both coastal sections and titles
        if (publicCoastalSection) publicCoastalSection.style.display = 'flex';
        if (privateCoastalSection) privateCoastalSection.style.display = 'flex';
        if (publicCoastalTitle) publicCoastalTitle.style.display = 'block';
        if (privateCoastalTitle) privateCoastalTitle.style.display = 'block';
        
        // Update scroll buttons
        updateScrollButtons();
        
        // Scroll to coastal section
        setTimeout(() => {
            if (publicCoastalSection) {
                publicCoastalSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else if (window.location.hash === '#historical') {
        // Remove active class from all buttons
        [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        // Add active class to historical button
        historicalBtn.classList.add('active');
        // Show only historical section
        showSection(historicalSection, historicalTitle);
        // Update scroll buttons
        updateScrollButtons();
        
        // Scroll to historical section
        setTimeout(() => {
            if (historicalSection) {
                historicalSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', function() {
        if (window.location.hash === '#savari') {
            // Remove active class from all buttons
            [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
                if (btn) btn.classList.remove('active');
            });
            // Add active class to savari button
            savariBtn.classList.add('active');
            // Show only savari section
            showSection(savariSection, savariTitle);
            // Update scroll buttons
            updateScrollButtons();
            
            // Scroll to safari section
            setTimeout(() => {
                if (savariSection) {
                    savariSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else if (window.location.hash === '#coastal') {
            // Remove active class from all buttons
            [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
                if (btn) btn.classList.remove('active');
            });
            // Add active class to coastal button
            coastalBtn.classList.add('active');
            
            // Hide all sections and titles first
            [recommendSection, publicCoastalSection, privateCoastalSection, historicalSection, savariSection].forEach(section => {
                if (section) section.style.display = 'none';
            });
            [recommendTitle, publicCoastalTitle, privateCoastalTitle, historicalTitle, savariTitle].forEach(title => {
                if (title) title.style.display = 'none';
            });
            
            // Show both coastal sections and titles
            if (publicCoastalSection) publicCoastalSection.style.display = 'flex';
            if (privateCoastalSection) privateCoastalSection.style.display = 'flex';
            if (publicCoastalTitle) publicCoastalTitle.style.display = 'block';
            if (privateCoastalTitle) privateCoastalTitle.style.display = 'block';
            
            // Update scroll buttons
            updateScrollButtons();
            
            // Scroll to coastal section
            setTimeout(() => {
                if (publicCoastalSection) {
                    publicCoastalSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else if (window.location.hash === '#historical') {
            // Remove active class from all buttons
            [allBtn, recommendBtn, coastalBtn, historicalBtn, savariBtn].forEach(btn => {
                if (btn) btn.classList.remove('active');
            });
            // Add active class to historical button
            historicalBtn.classList.add('active');
            // Show only historical section
            showSection(historicalSection, historicalTitle);
            // Update scroll buttons
            updateScrollButtons();
            
            // Scroll to historical section
            setTimeout(() => {
                if (historicalSection) {
                    historicalSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    });
// ...existing code...

// Manual click listeners for each product
document.getElementById('hala-island')?.addEventListener("click", function () {
    window.location.href = "./tour/index.html";
});
document.getElementById('orange')?.addEventListener("click", function () {
    window.location.href = "./tour/Orange.html";
});
document.getElementById('paradise')?.addEventListener("click", function () {
    window.location.href = "./tour/paradise.html";
});
document.getElementById('dolphin')?.addEventListener("click", function () {
    window.location.href = "./tour/dolphin.html";
});
document.getElementById('scope')?.addEventListener("click", function () {
    window.location.href = "./tour/private_sea_scope.html";
});
document.getElementById('p_hola')?.addEventListener("click", function () {
    window.location.href = "./tour/private_hola.html";
});
document.getElementById('p_magawish')?.addEventListener("click", function () {
    window.location.href = "./tour/magawish.html";
});
document.getElementById('p_dolphin')?.addEventListener("click", function () {
    window.location.href = "./tour/private_dolphin.html";
});
document.getElementById('giftun')?.addEventListener("click", function () {
    window.location.href = "./tour/Private_Giftun.html";
});
document.getElementById('abu-menkara')?.addEventListener("click", function () {
    window.location.href = "./tour/Umungar.html";
});
document.getElementById('sharm-el-naga')?.addEventListener("click", function () {
    window.location.href = "./tour/elnaga.html";
});
document.getElementById('fishing')?.addEventListener("click", function () {
    window.location.href = "./tour/fishing.html";
});
document.getElementById('el-gouna')?.addEventListener("click", function () {
    window.location.href = "./tour/guona.html";
});
document.getElementById('hurghada')?.addEventListener("click", function () {
    window.location.href = "./tour/city.html";
});
document.getElementById('luxor')?.addEventListener("click", function () {
    window.location.href = "./tour/Luxor.html";
});
document.getElementById('private-luxor')?.addEventListener("click", function () {
    window.location.href = "./tour/private_luxor.html";
});
document.getElementById('cairo')?.addEventListener("click", function () {
    window.location.href = "./tour/cairo.html";
});
document.getElementById('private-cairo')?.addEventListener("click", function () {
    window.location.href = "./tour/private_cairo.html";
});
document.getElementById('safari')?.addEventListener("click", function () {
    window.location.href = "./tour/savari.html";
});
document.getElementById('desert')?.addEventListener("click", function () {
    window.location.href = "./tour/super_savari.html";
});
document.getElementById('morning')?.addEventListener("click", function () {
    window.location.href = "./tour/morning.html";
});
document.getElementById('r-hurghada')?.addEventListener("click", function () {
    window.location.href = "./tour/city.html";
});
document.getElementById('r-guona')?.addEventListener("click", function () {
    window.location.href = "./tour/guona.html";
});
document.getElementById('r-dolphin')?.addEventListener("click", function () {
    window.location.href = "./tour/private_dolphin.html";
});
document.getElementById('r-sharm')?.addEventListener("click", function () {
    window.location.href = "./tour/elnaga.html";
});
// ...existing code...

    // ===== SCROLL NAVIGATION =====
    function createScrollButtons() {
        // Remove any existing scroll containers first
        document.querySelectorAll('.scroll-container').forEach(container => {
            container.remove();
        });
        
        // Get all visible products containers
        const visibleContainers = document.querySelectorAll('.products[style*="display: flex"], .products:not([style*="display: none"])');
        
        visibleContainers.forEach(container => {
            // Create wrapper for scroll buttons
            const wrapper = document.createElement('div');
            wrapper.className = 'scroll-container';
            wrapper.style.position = 'relative';
            
            // Create left scroll button
            const leftBtn = document.createElement('button');
            leftBtn.className = 'scroll-btn left-btn';
            leftBtn.innerHTML = '&#8249;';
            leftBtn.style.left = '-25px';
            
            // Create right scroll button
            const rightBtn = document.createElement('button');
            rightBtn.className = 'scroll-btn right-btn';
            rightBtn.innerHTML = '&#8250;';
            rightBtn.style.right = '-25px';
            
            // Insert buttons into wrapper
            wrapper.appendChild(leftBtn);
            wrapper.appendChild(rightBtn);
            
            // Insert wrapper after the products container
            container.parentNode.insertBefore(wrapper, container.nextSibling);
            
            // Scroll functionality
            const scrollAmount = 350;
            
            leftBtn.addEventListener('click', () => {
                container.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            rightBtn.addEventListener('click', () => {
                container.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            // Update button states
            function updateButtonStates() {
                const isAtStart = container.scrollLeft === 0;
                const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;
                
                leftBtn.disabled = isAtStart;
                rightBtn.disabled = isAtEnd;
            }
            
            // Initial button state update
            updateButtonStates();
            
            // Update button states on scroll
            container.addEventListener('scroll', updateButtonStates);
        });
    }
    
    // Create scroll buttons on page load
    createScrollButtons();
    
    // Update scroll buttons when sections change
    function updateScrollButtons() {
        setTimeout(createScrollButtons, 100); // Small delay to ensure DOM is updated
    }
});