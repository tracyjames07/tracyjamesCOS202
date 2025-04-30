import chalk from 'chalk';

// Arrow function to format a task for display.
export const formatTask = (task) => {
    // Template literals for string formatting.
    const status = task.completed
        ? chalk.green ('')
        : chalk.yellow ('');

    const title = task.completed
        ? chalk.dim(task.title)
        : chalk.white(task.title);

    // Format date using Intl API.
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });

    const created = dateFormatter.format(new Date(task.createdAt));

    // String interpolation with template literals.
    return `${status} ${title} $`
}