// ES6 Import - Module Systems
import inquirer from 'inquirer';
import chalk from 'chalk';

// Welcome message using template literals.
console.log(chalk.blue(`${chalk.bold('Task Manager CLI')} A modern JavaScript demo project`));

// A simple function to start the app.
async function main() {
    console.log(chalk.yellow('Starting Task Manager...'));
    console.log(chalk.green('Ready!'));
}

// Call the function.
main().catch(error => {console.error(chalk.red('Error:'), error);});