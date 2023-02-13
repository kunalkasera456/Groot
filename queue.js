class Queue{
    constructor(){
        this.myqueue = [];
    }

    push(item){
        return this.myqueue.push(item);
    }
    pop(iteam){
        if(this.myqueue.length){
            return this.myqueue.shift();
        }
        return -1;
    }
    peek(){
        if(this.myqueue.length)
        {
            return this.myqueue[0];
        }
        return -1;
    }

    length(){
        return this.myqueue.length;
    }

    print(){
        console.log(this.myqueue);
    }

}

let queue = new Queue();

    for(let i=0;i<10;i++)
    {
        queue.push(i);
    }
    queue.print();
    console.log(queue.pop());
    queue.print();