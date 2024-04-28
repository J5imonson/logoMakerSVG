class Circle {
  constructor(shapeCol) {
    this.shapeCol = shapeCol
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeCol}" />`
  }
};

class Triangle {
  constructor(shapeCol) {
    this.shapeCol = shapeCol
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeCol}" />`
  }
};

class Square {
  constructor(shapeCol) {
    this.shapeCol = shapeCol
  }
  render() {
    return `<rect width="200" height="200" x="10" y="10" fill="${this.shapeCol}" />`
  }
};

function generateSVG(data) {

  switch (data.shape) {
    case 'circle':
      data.shape = new Circle(data.shapeCol)
      break;

    case 'triangle':
      data.shape = new Triangle(data.shapeCol)
      break;

    case 'square':
      data.shape = new Square(data.shapeCol)
      break;

    default:
      console.log('No shape selected')
      break;
  }
  return`

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${data.shape.render()}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textCol}">${data.letters}</text>

</svg>`
};

module.exports = {Circle, Triangle, Square, generateSVG};
