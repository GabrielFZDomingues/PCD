function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        // Alterna a visibilidade da resposta
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            button.querySelector('span').textContent = '+';
        } else {
            answer.style.display = 'block';
            button.querySelector('span').textContent = '-';
        }
    });
});
