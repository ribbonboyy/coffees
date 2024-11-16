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

const pollForm = document.querySelector("#poll-container form");
pollForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for voting!");
});


