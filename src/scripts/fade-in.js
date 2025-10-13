const cards = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
        setTimeout(() => {
        entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
    }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));
