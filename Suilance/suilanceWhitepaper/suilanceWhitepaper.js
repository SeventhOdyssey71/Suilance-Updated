// Toggle dark mode
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

/* Optional dark mode styling */
document.head.insertAdjacentHTML('beforeend', `
<style>
    .dark-mode {
        background-color: #1a1a2e;
        color: #ddd;
    }
    .dark-mode .content,
    .dark-mode .sidebar,
    .dark-mode .right-nav {
        background-color: #222;
        color: #ddd;
    }
    .dark-mode .breadcrumb a,
    .dark-mode .top-menu a,
    .dark-mode .right-nav a {
        color: #4dd0e1;
    }
    .dark-mode .ask-ai {
        background-color: #0d6efd;
    }
</style>
`);
