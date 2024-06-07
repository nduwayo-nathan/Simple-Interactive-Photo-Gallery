# Simple-Interactive-Photo-Gallery

## Project Title
Gallery Project

## Table of Contents
1. [Overview](#overview)
2. [JavaScript Files](#javascript-files)
3. [HTML File](#html-file)
4. [CSS File](#css-file)
5. [How to Run](#how-to-run)
6. [Running JavaScript Files in Terminal](#running-javascript-files-in-terminal)

## Overview
This project consists of an image gallery displayed on a web page. The gallery includes several images with captions, and the layout and behavior of the gallery are controlled by an accompanying CSS file. Additionally, there are JavaScript files with utility functions for array mapping and string transformations.

## JavaScript Files
### challenges/arrayMap.js
Contains utility functions for array operations:

- `arraySum(arr)`: Returns the sum of all elements in the array `arr`.
- `arrayContains(arr, val)`: Checks if the array `arr` contains the value `val`.
- `subarraySumExists(arr, target)`: Determines if there is a subarray in `arr` whose sum equals `target`.

### challenges/stringTransform.js
Contains utility functions for string transformations:

- `reverseString(s)`: Returns the reverse of the string `s`.
- `toASCII(s)`: Converts the string `s` to its ASCII representation.
- `transformString(s)`: Transforms the string `s` based on its length. Reverses the string if its length is divisible by 3, converts it to ASCII if its length is divisible by 5, and does both if its length is divisible by 15.

## HTML File
### index.html
The main HTML file that sets up the structure of the image gallery. It includes references to the CSS file for styling and displays a series of images with captions.

## CSS File
### style.css
Contains the styles for the image gallery. It defines the layout and appearance of the gallery, including image hover effects and caption styles.

## How to Run
1. Clone or download the project to your local machine.
2. Open `index.html` in a web browser to view the image gallery.
3. To see the effects of the JavaScript functions, you can include them in your HTML file and call the functions from the browser console or add interactive elements to demonstrate their functionality.

### Running JavaScript Files in Terminal
To run the JavaScript files in the terminal, follow these steps:

1. **Install Node.js**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org).

2. **Navigate to the Project Directory**:
   - Open your terminal (Command Prompt, PowerShell, or a terminal emulator on Linux/Mac).
   - Change the directory to the project's root folder:
     ```bash
     cd path/to/project/root
     ```

3. **Run the JavaScript Files**:
   - To run `arrayMap.js`, use the following command:
     ```bash
     node challenges/arrayMap.js
     ```
   - To run `stringTransform.js`, use the following command:
     ```bash
     node challenges/stringTransform.js
     ```

By following these instructions, you will be able to run the project and its JavaScript files effectively.
