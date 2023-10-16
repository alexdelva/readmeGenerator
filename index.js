// Packages needed for the application

const generateMarkdown=require("./utils/generateMarkdown") 
const fs=require("fs")
const inquirer=require("inquirer")

//Questions for the User
const questions = [
    {
        type:"input",
        message:"What is the project title?",
        name:"title"
    },
    {
        type:"input",
        message:"What is the project description?",
        name:"description"
    },
    {
        type:"input",
        message:"What are the steps for installation?",
        name:"installation"
    },
    {
        type:"input",
        message:"How would someone use this project?",
        name:"usage"
    },
    {
        type:"input",
        message:"How could someone contribute to this project?",
        name:"contribution"
    },
    {
        type:"input",
        message:"How would someone test this project?",
        name:"test"
    },

    {
        type:"list",
        message:"Choose the following license?",
        choices:["MIT","Apache","The Hippocratic License 3.0","No License"],
        name:"license"
    },
    {
        type:"input",
        message:"What is your GitHub username?",
        name:"username"
    },
    {
        type:"input",
        message:"What is your Email Address?",
        name:"email"
    }

];

// Function to Write to ReadMe
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data),err=>{
        if(err) throw err
        console.log("success!")
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=>{writeToFile("./output/README.md",data)
})
}

// Function call to initialize app
init();
