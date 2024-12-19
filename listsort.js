function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));

            button.classList.add('selected');

            const tag = button.getAttribute('data-tag');
            filterByTag(tag);
        });
    });
}

function filterByTag(tag) {
    const items = document.querySelectorAll('#item-list li');
    items.forEach(item => {
        const tags = item.getAttribute('data-tags').split(' ');
        if (tag === 'all' || tags.includes(tag)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupFilterButtons();
});