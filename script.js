const screen = document.getElementById("screen");

// Add number or operator to screen
function appendValue(value) {

    if (screen.value === "0" && value !== ".") {
        screen.value = value;
    } else {
        screen.value += value;
    }

    // Real-time result
    showResult();
}

// Clear the calculator
function clearscreen() {
    screen.value = "0";
}

// Delete the last character
function correction() {
    screen.value = screen.value.slice(0, -1);

    if (screen.value === "") {
        screen.value = "0";
    }

    showResult();
}

// Calculate final result
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}

// Show result while entering the expression
function showResult() {
    try {
        let expression = screen.value;

        // Only calculate if an operator is present
        if (/[+\-*/%]/.test(expression)) {
            let result = eval(expression);

            if (result !== undefined && !isNaN(result)) {
                console.log("Current Result:", result);
            }
        }
    } catch (error) {
        // Ignore incomplete expressions
    }
}