class Dino {
  constructor(name) {
      this.name = name;
      this.next = null
  }
}


let anthony = new Dino("anthony");
anthony.next = new Dino("daeqwon");

let daeqwon = anthony.next;
daeqwon.next = new Dino("sabrina");

let sabrina = daeqwon.next;
sabrina.next = new Dino("Angie");

console.log(anthony);
console.log(anthony.next.next.next);
console.log(typeof anthony.next.next.next);
