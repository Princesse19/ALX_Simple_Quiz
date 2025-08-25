// Function to check the user's answer
function checkAnswer() {
    // 1. Correct answer
    const correctAnswer = "4";

    // 2. Get the selected radio button (if any)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // 3. If no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    // 4. Retrieve user's selected answer
    const userAnswer = selectedOption.value;

    // 5. Compare user's answer with the correct one
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// 6. Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

