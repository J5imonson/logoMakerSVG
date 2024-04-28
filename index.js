const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/shapes');
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', maxLengthInputPrompt);

function input() {
  inquirer.prompt([
    {
      type: 'maxlength-input',
      message: 'Please input up to three letters for your logo',
      name: 'letters',
      maxLength: 3,
    },
    {
      type: 'input',
      message: 'Please enter a color keyword for your text (may also be a hexadecimal number)',
      name: 'textCol',
    },
    {
      type: 'list',
      message: 'Please select a shape for your logo',
      name: 'shape',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      message: 'Please enter a color keyword for your shape (may also be a hexadecimal number)',
      name: 'shapeCol',
    },
  ]).then((data) => {

    fs.writeFile('logo.svg', generateSVG.generateSVG(data), (err) => err
      ? console.error('An error has occurred')
      : console.log('Generated logo.svg')
    );
  })
};

input();