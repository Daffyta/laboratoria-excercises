var nombres = [];

var nombre = new Stack();
var apellido = new Stack();

function Stack() {
  var stack = [];
  this.push = function(element){
    stack.push(element);
  };

  this.pop = function(){
    return stack.pop();
  };

  this.peek = function(){
    return stack[stack.length-1];
  };

  this.isEmpty = function(){
    return stack.length == 0;
  };

  this.size = function(){
    return stack.length;
  };

  this.clear = function(){
    stack = [];
  };

  this.print = function(){
    console.log(stack.toString());
  };
}

nombre.push("Lorensa");
nombre.push("Coco");
nombre.push("Pile");
nombre.push("Paco");
nombre.push("Toño");

apellido.push("Díaz");
apellido.push("Gutierrez");
apellido.push("Nolasco");
apellido.push("Flores");
apellido.push("Suarez");

for (var i = 0; i < 5; i++) {
  nombres.push(nombre.pop() + " " + apellido.pop() + "<br>")
}

document.write(nombres);
