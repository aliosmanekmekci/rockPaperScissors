# Rock Paper Scissors Game

## Description
A simple console-based Rock Paper Scissors game where a player competes against the computer over five rounds, entirely within the browser's developer tools console.

## Features
* Play against the computer
* Five-round game with score tracking for both player and computer
* Text-based interface in the browser console

## How to Play
1. **Open the Game:**
   * Open the `index.html` file in a web browser

2. **Access the Console:**
   * Open the browser's developer tools console:
      * **Chrome:** Right-click on the page and select "Inspect," then go to the "Console" tab
      * **Firefox:** Right-click on the page and select "Inspect Element," then go to the "Console" tab
      * **Edge:** Right-click on the page and select "Inspect," then go to the "Console" tab

3. **Play the Game:**
   * The game will start automatically
   * Enter your choice (rock, paper, or scissors) when prompted in the console
   * Observe the game results and score updates in the console after each round

## Example Interaction
```
Enter your choice: rock
Computer chose: paper
Result: You lose! Paper beats Rock
Score: You 0 - Computer 1
```

## Game Rules
* Rock beats Scissors
* Scissors beats Paper
* Paper beats Rock
* Each win earns a point
* The player with the most points after five rounds wins the game

## Technologies Used
* HTML
* JavaScript

## How the Game Works
* The game is initialized when the HTML file is opened in a browser
* The `getComputerChoice` function randomly selects the computer's choice
* The `getHumanChoice` function captures the player's input from the console
* The `playRound` function determines the winner of each round
* The `playGame` function orchestrates the five-round game and declares the final winner

## Contributing
Contributions are welcome! If you want to improve this project, please fork the repository and create a pull request. Consider maintaining the console-based interface for consistency.

## License
MIT License
