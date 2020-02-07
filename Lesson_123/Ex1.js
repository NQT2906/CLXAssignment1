var Mouse1 = require('./Mouse');

var Cat12342 = require('./Cat')

var mickey =  new Mouse1('black');
var jerry =  new Mouse1('blue');

console.log(mickey);
console.log(jerry);

var tom = new Cat12342();

tom.eat(mickey);
tom.eat(jerry);
console.log(tom);
