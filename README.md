#   Challenge 07 - Professional README Generator

##  User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

---

# Challenge 07
![GIF](dist/recording.gif)


## Purpose
Quickly and easily generate a README file by using a command-line application to generate one. Allowing the project creator to devote more time working on the project.

## Built With
* Javascript
* Node.js
* inquirer.js
* axios.js

## Website
https://rosemariehalim.github.io/07-challenge/

---

## Process

* planned out code
* installed axios and inquirer
* created required command-line questions
* created functions to write README file
* wrote function to initialize application
* created link.js for function to link GitHub API
* added functions for license badge and link
* completed function to generate markdown
* tested and fixed code