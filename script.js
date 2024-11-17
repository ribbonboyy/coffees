<script src="script.js" defer></script>

document.addEventListener("mousemove", (event) => {
    const panels = document.querySelectorAll("header, .section, footer");

    const { clientX: mouseX, clientY: mouseY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();
        const offsetX = (mouseX - rect.left - rect.width / 2) / 20;
        const offsetY = (mouseY - rect.top - rect.height / 2) / 20;

        panel.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) rotateX(${offsetY / 5}deg) rotateY(${offsetX / 5}deg)`;
    });
});
