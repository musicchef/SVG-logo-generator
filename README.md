# SVG Logo Generator

The SVG Logo Generator is a Node.js command-line application that empowers freelance web developers to quickly generate customized logos for their projects. This tool eliminates the need for graphic designers, providing an efficient way to create eye-catching logos for web applications, websites, and more.

## Features

- **Interactive User Input:** The application prompts the user to choose logo options such as shape, colors, and logo text.
- **Variety of Shapes:** Choose from a selection of shapes including circles, squares, and triangles.
- **Color Customization:** Specify the colors for both the shape and the logo text using color keywords or hexadecimal values.
- **Custom Text:** Enter up to three characters for your logo text, allowing for personalization.
- **SVG Rendering:** The application generates SVG code based on user inputs, creating a scalable vector logo.
- **File Saving:** The generated SVG logo is saved as a `.svg` file for easy integration into web projects.
- **Intuitive Interface:** The application's command-line interface guides users through the logo generation process step by step.

## Getting Started

1. **Installation:** Clone this repository and run `npm install` to install the required dependencies.
2. **Usage:** Open your terminal and run `node index.js` to launch the SVG Logo Generator.
3. **Follow Prompts:** Follow the prompts to choose your logo options, including shape, colors, and text.
4. **Logo Generation:** The application will generate the SVG logo based on your selections and save it as `logo.svg` in the project directory.

## Example

Here's an example of how the SVG Logo Generator can be used:

1. Choose a square shape.
2. Select a green fill color for the square.
3. Choose white as the text color.
4. Enter the logo text "ABC".
5. The application generates the following SVG logo:

```xml
<svg version="1.1" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="80" height="80" fill="green" />
  <text x="40" y="40" font-size="30" text-anchor="middle" alignment-baseline="middle" fill="white">ABC</text>
</svg>
```

## Walkthrough Video

[Watch the Walkthrough Video](I_STILL_NEED_TO_MAKE_WALKTHROUGH_VIDEO_DEMO) to see the SVG Logo Generator in action and learn how to use it effectively.
