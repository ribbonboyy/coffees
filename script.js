// Wait for the DOM content to fully load before executing any scripts
document.addEventListener("DOMContentLoaded", function () {

    // Expand or collapse rules content
    const expandRulesButton = document.querySelector('.expand-rules-button');
    const rulesContent = document.querySelector('.rules-content');

    if (expandRulesButton && rulesContent) {
        expandRulesButton.addEventListener('click', function () {
            // Toggle the visibility of the rules content
            const isVisible = rulesContent.style.display === 'block';
            rulesContent.style.display = isVisible ? 'none' : 'block';
            expandRulesButton.textContent = isVisible ? "Show Rules" : "Hide Rules";
        });
    }

    // Poll submission logic
    const pollForm = document.getElementById('poll-form');
    const voteButton = document.querySelector('.vote-button');

    if (voteButton && pollForm) {
        voteButton.addEventListener('click', function () {
            const selectedOption = pollForm.querySelector('input[name="coffee"]:checked');

            if (selectedOption) {
                alert(`You voted for: ${selectedOption.value}`);
            } else {
                alert("Please select an option before voting!");
            }
        });
    }
});
