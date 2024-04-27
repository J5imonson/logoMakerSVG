const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/shapes')

function input() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please input up to three letters for your logo',
      name: 'letters',
    },
    {
      type: 'input',
      message: 'Please enter a color keyword for your text (may also be a hexadecimal number)',
      name: 'textCol',
    },
    {
      type: 'list',
      message: 'Please select a shape for your logo',
      name: 'shapes',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      message: 'Please enter a color keyword for your shape (may also be a hexadecimal number)',
      name: 'shapeCol',
    },
  ]).then((data) => {

    fs.writeFile('logo.svg', generateSVG(data), (err) => err
      ? console.error('An error has occurred')
      : console.log('Generated logo.svg')
    );
  })
};

input();