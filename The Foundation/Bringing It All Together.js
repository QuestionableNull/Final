// Function to check the user's answer
function checkAnswer() {
    // Get the user's input
    let userAnswer = document.getElementById('answer').value;

    // Validate if the input is a number using string manipulation
    if (isNaN(userAnswer)) {
        document.getElementById('result').innerText = "Please enter a valid number!";
        return;
    }

    // Convert input to a number and check the answer using decision logic
    if (parseInt(userAnswer) === 8) {
        document.getElementById('result').innerText = "Correct! Great job!";
    } else {
        document.getElementById('result').innerText = "Incorrect. Try again!";
    }
}

// Example of using a loop to log numbers (optional use of console)
for (let i = 1; i <= 5; i++) {
    console.log(`Loop iteration: ${i}`);
}