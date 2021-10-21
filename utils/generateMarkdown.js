function generateMarkdown(data) {
  return `
  
  # ${data.title}


  [![license](https://img.shields.io/badge/license-${data.licensing}-success)](https://shields.io)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Use](#use)
  * [Contribute](#contribute)
  * [Test](#test)
  * [Contact](#contact)
  

  ## Installation
  ${data.installation}

  ## Use
  ${data.use}


  ## License
  * This app is uses ${data.licensing} license.


  ## Contribute
  ${data.contribute}


  ## Test
  ${data.test}

  ### Questions:
  * If you have questions about this project contact me at:
  - Github [${data.githubUsername}](https://github.com/${data.githubUsername})
  - Email: ${data.email}
  `
}

module.exports = generateMarkdown;