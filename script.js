document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll(".section, .header");

    // Smooth Parallax Effect
    document.addEventListener("mousemove", (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        panels.forEach((panel) => {
            const rect = panel.getBoundingClientRect();
            const offsetX = (mouseX - centerX) / 50;
            const offsetY = (mouseY - centerY) / 50;

            panel.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });

    // Expand Rules Interaction
    const expandRulesButton = document.querySelector('.expand-rules-button');
    const rulesContent = document.querySelector('.rules-content');

    expandRulesButton.addEventListener('click', () => {
        const isVisible = rulesContent.style.display === 'block';
        rulesContent.style.display = isVisible ? 'none' : 'block';
        expandRulesButton.textContent = isVisible ? 'Show Rules' : 'Hide Rules';
    });

    // Voting Alert
    const voteButton = document.querySelector('.vote-button');
    voteButton.addEventListener('click', () => {
        const selected = document.querySelector('input[name="coffee"]:checked');
        alert(selected ? `You voted for: ${selected.value}` : 'Please select an option!');
    });
});
