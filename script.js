 // Tema escuro/claro
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        // Verificar preferência do usuário
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        if (prefersDarkScheme.matches) {
            html.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            html.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            
            // Opcional: salvar preferência
            localStorage.setItem('theme', newTheme);
        });
        
        // Abas da programação
        const tabs = document.querySelectorAll('.schedule-tab');
        const contents = document.querySelectorAll('.schedule-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                
                // Remover classe active de todas as tabs e contents
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                
                // Adicionar classe active na tab clicada e content correspondente
                tab.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Formulário de reserva
        const reservationForm = document.getElementById('reservationForm');
        
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simular envio do formulário
            alert('Reserva enviada com sucesso! Entraremos em contato para confirmação.');
            reservationForm.reset();
        });
        
        // Suavizar rolagem para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Botão de reserva no header
        const reserveBtn = document.getElementById('reserveBtn');
        reserveBtn.addEventListener('click', () => {
            document.getElementById('reserva').scrollIntoView({
                behavior: 'smooth'
            });
        });
