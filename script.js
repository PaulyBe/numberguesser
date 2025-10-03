var btn = document.getElementById('btn'); //* Variable conected to button
var output = document.getElementById('output'); //* Variable connected to output
var reset = document.getElementById('resetbtn');
var number = Math.floor(Math.random() * 100) + 1; // Generate random number between 1-100
btn.addEventListener('click', function () {
    var input = document.getElementById('userInput').value; //* Connect the value of the user input to if statement
    var guess = parseInt(input);
    
    // Validate input
    if (input === '' || isNaN(guess) || guess < 1 || guess > 100) {
        output.innerHTML = "Please enter a valid number between 1 and 100!";
        return;
    }
    
    if (guess === number) {
        output.innerHTML = "Correct! The number is ".concat(number);
    }
    else if (guess < number) {
        output.innerHTML = "You guessed too low!";
    }
    else if (guess > number) {
        output.innerHTML = "You guessed too high!";
    }
});
reset.addEventListener('click', function () {
    location.reload();
});
