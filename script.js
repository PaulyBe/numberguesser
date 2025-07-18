var btn = document.getElementById('btn'); //* Variable conected to button
var output = document.getElementById('output'); //* Variable connected to output
var reset = document.getElementById('resetbtn');
var number = [Math.floor(Math.random() * 100)]; // Generate random number
btn.addEventListener('click', function () {
    var input = document.getElementById('userInput').value; //* Connect the value of the user input to if statement
    if (input == number) {
        output.innerHTML = "Correct! The number is ".concat(number);
    }
    else if (input < number) {
        output.innerHTML = "You guessed too low!";
    }
    else if (input > number) {
        output.innerHTML = "You guessed too high!";
    }
});
reset.addEventListener('click', function () {
    location.reload();
});
