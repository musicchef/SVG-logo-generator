class Shape {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
        this.size = 80; // Consistent size for all shapes
    }

    render() {
        throw new Error('Child class must implement render() method.');
    }
}

class Circle extends Shape {
    render() {
        return `
<svg version="1.1" width="${this.size}" height="${this.size}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${this.size / 2}" cy="${this.size / 2}" r="${this.size / 2}" fill="${this.color}" />
  <text x="${this.size / 2}" y="${this.size / 2}" font-size="30" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

class Square extends Shape {
    render() {
        return `
<svg version="1.1" width="${this.size}" height="${this.size}" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="${this.size}" height="${this.size}" fill="${this.color}" />
  <text x="${this.size / 2}" y="${this.size / 2}" font-size="30" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

class Triangle extends Shape {
    render() {
        const halfSize = this.size / 2;
        const textX = halfSize;
        const textY = halfSize + (this.size * 0.2);
        const fontSize = Math.min(this.size * 0.22, 30);

        return `
<svg version="1.1" width="${this.size}" height="${this.size}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="${halfSize},${this.size * 0.1} ${this.size * 0.9},${this.size * 0.9} ${this.size * 0.1},${this.size * 0.9}" fill="${this.color}" />
  <text x="${textX}" y="${textY}" font-size="${fontSize}" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}


module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
};
