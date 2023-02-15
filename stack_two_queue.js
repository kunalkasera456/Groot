class Stack{
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }

    push(item){
    /* 1. push item to q2
       2. pop from q1 and then push to q2
       3. swap q1 and q2*/

       this.q2.push(item);
       while(this.q1.length)
       {
        this.q2.push(this.q1.shift());
       }

       let temp = this.q1;
       this.q1 = this.q2;
       this.q2 = temp;
    }

    pop(item){
        if(this.q1.length)
        {
            return this.q1.shift()
        }
        return -1;
    }
}

let q = new Stack();
for(let i=0;i<5;i++)
{
    q.push(i);
}

for(let i=0;i<6;i++)
{
    console.log(q.pop(i));
}