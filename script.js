document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica do Formulário de Recomendação ---
    const recommendationForm = document.getElementById('recommendation-form');

    if (recommendationForm) {
        recommendationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = document.getElementById('rec-name').value;
            const messageInput = document.getElementById('rec-message').value;
            const recList = document.getElementById('rec-list');
            
            const newRecCard = document.createElement('div');
            newRecCard.className = 'rec-card';
            
            newRecCard.innerHTML = `
                <p>"${messageInput}"</p>
                <h4>- ${nameInput}</h4>
            `;

            recList.appendChild(newRecCard);
            alert("Thank you! Your recommendation has been submitted successfully.");
            recommendationForm.reset();
        });
    }

    // --- Nova Lógica: Palavra HOME Vermelha ao Clicar ---
    const homeWord = document.getElementById('home-word');
    
    if (homeWord) {
        homeWord.addEventListener('click', function() {
            // Muda a cor da fonte para vermelho quando clicado
            this.style.color = 'red';
        });
    }
});