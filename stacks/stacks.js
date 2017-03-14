var nombres = [];

function Stack() {
  var nombreP = [];
  this.push = function(valor){
    nombreP.push(valor);
  };

  this.pop = function(){
    return nombreP.pop();
  };
  //
  // this.peek = function(){
  //   return nombresP[nombresP.length-1];
  // };
  //
  // this.isEmpty = function(){
  //   return nombresP.length == 0;
  // };
  //
  // this.size = function(){
  //   return nombresP.length;
  // };
  //
  // this.clear = function(){
  //   nombresP = [];
  // };
  //
  // this.print = function(){
  //   console.log(nombresP.toString());
  // };
}

var nombre = new Stack();
nombre.push("Lorensa");
nombre.push("Coco");
nombre.push("Pile");
nombre.push("Paco");
nombre.push("Toño");

var apellido = new Stack();
apellido.push("Díaz");
apellido.push("Gutierrez");
apellido.push("Nolasco");
apellido.push("Flores");
apellido.push("Suarez");

for (var i = 0; i < 5; i++) {
  nombres.push(nombre.pop() + " " + apellido.pop() + "<br>")
}

document.write(nombres);
