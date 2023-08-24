const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Square, Triangle } = require('./lib/shapes');

// Define a function to prompt the user for input
async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'list',
            name: 'textColor',
            message: 'Select a color for the text:',
            choices: ['black', 'white', 'red', 'green', 'blue', 'purple', 'orange'],
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'Select a color for the shape:',
            choices: ['black', 'white', 'red', 'green', 'blue', 'purple', 'orange'],
        },
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter up to three letters for the logo:',
            validate: input => input.match(/^[A-Za-z]{1,3}$/) ? true : 'Please enter 1 to 3 letters.',
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Select a shape:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
    ]);

    return userInput;
}

async function main() {
    const userInput = await getUserInput();
    const { shapeType, shapeColor, textColor, logoText } = userInput;

    let shape;

    switch (shapeType) {
        case 'Circle':
            shape = new Circle(shapeColor, textColor, logoText);
            break;
        case 'Square':
            shape = new Square(shapeColor, textColor, logoText);
            break;
        case 'Triangle':
            shape = new Triangle(shapeColor, textColor, logoText);
            break;
    }

    const svgCode = shape.render();
    console.log(svgCode);

    fs.writeFile('./logo.svg', svgCode, err => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

main();
