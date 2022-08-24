// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

 
  // Generate markdown
  let inputMarkdown = 
  `## 
  ${data.title}`

  inputMarkdown += `
  ## Description 
  ${data.description}`

  inputMarkdown += `
  ## Content 
  ${data.content}`;
 
  // Installation 
  inputMarkdown += `
  ## Installation 
  ${data.installation}`
  
  // Usage 
 
  inputMarkdown +=`
  ## Usage 
  ${data.usage}`
  
  // License
  inputMarkdown +=`
  ## License
  ${data.license}`

  // Contributing
  inputMarkdown += `
  ## Contributing
  ${data.contributing}`
  
  // Tests 
  inputMarkdown += `
  ## Tests
  ${data.tests}`

  // Questions
  inputMarkdown += `
  ## Questions
  ${data.questions}`

 
  return inputMarkdown;
}
module.exports = generateMarkdown;
