class Queue{
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }

    push(item){
        this.s1.push(item);
    }

    /*1. if s2 is empty
    2. pop all elements from s1 thill empty nahi hota and push to s2
    3. pop out all elements from s2 till empty nahi hota*/

    pop(item){
        if(this.s2.length === 0)
        {
            while(this.s1.length)
            {
                this.s2.push(this.s1.pop());
            }
        }
        if(this.s1.length === 0 && this.s2.length)
        {
            while(this.s2.length)
            {
                return this.s2.pop();
            }
        }
        else{
            return -1;
        }
        
    }
}

let queue = new Queue();
for(let i=0;i<3;i++)
{
    queue.push(i);
}

queue.push(5);
queue.push(7);
queue.push(9);
for(let i=0;i<8;i++)
{
    console.log(queue.pop());
}