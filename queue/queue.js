function Queue(){
  this.dataStore = Array.prototype.slice.call(arguments, 0 );
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;

  this.print = print;

  function enqueue(element) {
    this.dataStore.push(element);
  }
  function dequeue() {
    return this.dataStore.shift();
  }
  function empty(){
    return this.dataStore.length == 0;
  }
  function print(element) {
    return console.log(this.dataStore);
  }
}

var nombres = [];

var nombre = new Queue();
var apellido = new Queue();

nombre.shift("Lorensa");
nombre.shift("Coco");
nombre.shift("Pile");
nombre.shift("Paco");
nombre.shift("Toño");

apellido.shift("Díaz");
apellido.shift("Gutierrez");
apellido.shift("Nolasco");
apellido.shift("Flores");
apellido.shift("Suarez");
