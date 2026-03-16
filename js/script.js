// navbar toggle system
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// FAQ section script
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const currentItem = question.parentElement;
        
        // Close other items if one is clicked (Optional)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });

        // Toggle the clicked item
        currentItem.classList.toggle('active');
    });
});