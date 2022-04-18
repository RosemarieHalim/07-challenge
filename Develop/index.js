// Include packages needed for this application
const fs= require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const link = ('./utils/link.js')

// Create an array of questions for user input
const questions = [
   {
       type: 'input',
       name: 'project',
       message: 'What is your project title? (Required)',
       validate: nameInput => {
           if (nameInput) {
           return true;
           } else {
           console.log('Please enter your project name!');
           return false;
           }
       }
   },
   {
       type: 'input',
       name: 'description',
       message: 'Please provide a description of project:'
   },
   {
       type: 'input',
       name: 'installation',
       message: 'Please provide installation instructions:',
   },
   {
       type: 'input',
       name: 'usage',
       message: 'What is the useage of the project?'
   },
   {
       type: 'input',
       name: 'contributions',
       message: 'Who are the constributors of the project?'
   },
   {
       type: 'input',
       name: 'test',
       message: 'Is there tests included?'
   },
   {
       type: 'list',
       name: 'license',
       message: 'What license did you use for the project:',
       choises: [
           'Apache',
           'Boost',
           'CC0',
           'Eclipse',
           'IBM',
           'MIT',
           'Mozilla',
           'SIL',
           'Unlicense'
       ]
   },
   {
       type: 'input',
       name: 'Username',
       message: 'What is your GitHub Username? (Required)',
       validate: nameInput => {
           if (nameInput) {
           return true;
           } else {
           console.log('Please enter your name!');
           return false;
           }
       }
   },
   {
       type: 'input',
       name: 'email',
        message: 'Please write your email. (Required)',
       validate: nameInput => {
           if (nameInput) {
           return true;
           } else {
           console.log('Please enter your email!');
           return false;
           }
       }
   },

];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err)
        }
        console.log('README.md has been generated!')
    });
}

const writeFileAsync = util.promisify(writeToFile);

// Create a function to initialize app
function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log('Your answers: ', userResponses);
        console.log('Fetching GitHub data...')

        const userInfo = await link.getUser(userResponses);
        console.log('GitHub user info: ', userInfo);

        console.log('Generating README.md...');
        const md = markdown(userResponses, userInfo);

        await writeFileAsync('ExampleREADME.md', md);
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
