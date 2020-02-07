function Circle(x, y, radius)
{
  this.x = x;
  this.y = y;
  this.radius = radius;
}

Circle.prototype.isOverlapped = function(Circle2)
{
  if(this.x == Circle2.x && this.y == Circle2.y)
  {
    return -1;
  }
  else if(this.radius + Circle2.radius == 
  Math.sqrt(Math.pow(this.x - Circle2.x, 2) + Math.pow(this.y - Circle2.y, 2)))
  {
    return 0;
  }
  return 1;
}

module.exports = Circle;