# Overview

![Screenshot](https://raw.githubusercontent.com/DownTheMatrix/form-validation-challenge/master/screenshot.png?token=AH6QICUJ7EHDEBMETHKPRILBPFPOQ)

This repository contains the files for a Form Validation coding assessment.
## How To Run

+ choose a location where you would like to store the project, then right-click to open up your terminal
+ type: `git clone https://github.com/DownTheMatrix/project-a-challenge.git`
+ Access the folder you have just cloned
+ Double-click on the `index.html` file to open the project in your browser

If you want to make changes to the code (i.e.: update the styles), open up your terminal and:

+ `cd project-a-challenge` => move into the project folder
+ `npm install` => installs the project dependencies
+ `npm run compile:sass` => compiles the SASS files into plain CSS
### Dependencies/Tools

No dependencies were harmed during the development process. 

The only non-vanilla tool used is SASS (using the latest `dart-sass` [syntax](https://sass-lang.com/dart-sass)) as a CSS precompiler.
### Chrome Lighthouse audit score

![Lighthouse Audit](https://raw.githubusercontent.com/DownTheMatrix/form-validation-challenge/master/lighthouse-audit.png?token=AH6QICRDHY45OY2L5S4G4TDBPFPQU)

The page performed well when running the Google Chrome Lightouse audit in incognito mode (so as to avoid any browser extension interference). 

"Best Practices" didn't reach 100/100 because the page is not served over https.