const requireShapes = require('./shapes');

describe('requireShapes', () => {

  it('should return a red circle', () => {
    const circle = new requireShapes.Circle('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  it('should return a green triangle', () => {
    const triangle = new requireShapes.Triangle('green');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
  });

  it('should return a blue square', () => {
    const square = new requireShapes.Square('blue');
    expect(square.render()).toEqual('<rect width="200" height="200" x="10" y="10" fill="blue" />');
  });
});