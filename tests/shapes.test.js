const { Circle, Square, Triangle, Shape } = require('../lib/shapes');

describe('Shape', () => {
    test('should throw error if render() is called', () => {
        const shape = new Shape('blue', 'white', 'SVG');
        const err = new Error('Child class must implement render() method.');
        expect(() => shape.render()).toThrow(err);
    });
});


/*  I was experiencing a strange error where the expected result from the test was matching the output of my code
    however the tests were failing. Through some research and looking at the errors in the test suite I was able 
    to discover the cause of the failed tests was white space. I found a solution by using the trim method to remove 
    leading and trailing whitespace in both the test suite and the shape.render()
*/ 

describe('Circle', () => {
    test('should properly render a circle SVG tag with appropriate color', () => {
        const circle = new Circle('blue', 'black', 'SVG');
        const expectedSVG = `
<svg version="1.1" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="40" fill="blue" />
  <text x="40" y="40" font-size="30" text-anchor="middle" alignment-baseline="middle" fill="black">SVG</text>
</svg>`.trim();

        const renderedSVG = circle.render();
        expect(renderedSVG.trim()).toEqual(expectedSVG);
    });
});

describe('Square', () => {
    test('should properly render a square SVG tag with appropriate color', () => {
        const square = new Square('green', 'orange', 'SVG');
        const expectedSVG = `
<svg version="1.1" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="80" height="80" fill="green" />
  <text x="40" y="40" font-size="30" text-anchor="middle" alignment-baseline="middle" fill="orange">SVG</text>
</svg>`.trim();

        const renderedSVG = square.render();
        expect(renderedSVG.trim()).toEqual(expectedSVG);
    });
});

describe('Triangle', () => {
    test('should properly render a triangle SVG tag with appropriate color', () => {
        const triangle = new Triangle('purple', 'red', 'SVG');
        const expectedSVG = `
<svg version="1.1" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,8 72,72 8,72" fill="purple" />
  <text x="40" y="56" font-size="17.6" text-anchor="middle" alignment-baseline="middle" fill="red">SVG</text>
</svg>`.trim();

        const renderedSVG = triangle.render();
        expect(renderedSVG.trim()).toEqual(expectedSVG);
    });
});
