// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// Demonstrates local vs global scope, parameters, and return values

// Global variable
let globalVar = "I'm global!";

function showScopeDemo() {
    // Local variable
    let localVar = "I'm local!";
    document.getElementById('scope-output').textContent =
        `Global: ${globalVar} | Local: ${localVar}`;
}

function addNumbers(a, b) {
    // Function with parameters and return value
    return a + b;
}

function calculateAndShow(x, y) {
    const result = addNumbers(x, y);
    document.getElementById('calc-output').textContent =
        `Result of ${x} + ${y} is ${result}`;
}

// Part 3: Combining CSS Animations with JavaScript
// Use JS to trigger CSS animations by adding/removing classes
function animateBox() {
    const box = document.getElementById('js-animated-box');
    box.classList.add('bounce');
    // Remove the class after animation ends for reusability
    setTimeout(() => box.classList.remove('bounce'), 700);
}

function toggleModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('show');
}

// ...additional reusable functions can be added below...
