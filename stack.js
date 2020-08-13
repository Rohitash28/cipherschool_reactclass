class Stack {

    constructor(){
        this.list=[];
    }

    push(value){
        return this.list.push(value)
    }

    pop(){
        if(this.list.length==0){
            return;
        }
        else{
          return this.list.pop();
        }        
    }
}

var s = new Stack();

console.log(s);
console.log(s.push(5));
console.log(s.push(10));
console.log(s.push(15));
console.log(s.pop());
console.log(s.pop());
console.log(s);