// Expandable rules functionality
document.querySelector('.expand-rules-button').addEventListener('click', function () {
    const rulesContent = document.querySelector('.rules-content');
    if (rulesContent.style.display === 'none' || !rulesContent.style.display) {
        rulesContent.style.display = 'block';
        this.textContent = 'Hide Rules';
    } else {
        rulesContent.style.display = 'none';
        this.textContent = 'Show Rules';
    }
});

<script>
    // Number of stars to display
    const numStars = 10; // Adjust to change how many stars appear

    // Get the body element
    const body = document.querySelector("body");

    // Create stars
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Randomize position
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";

        // Append to body
        body.appendChild(star);
    }
</script>
