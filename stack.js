class Stack{
    constructor(){
        this.mystack = [];
    }

    push(item){
        this.mystack.push(iteam);
    }

    pop(item){
        if(this.mystack.length)
        {
            return this.mystack.pop();
        }
        return -1;
    }

    peek(){
        if(this.mystack,length)
        {
            return this.mystack.peek(this.mystack.length - 1);
        }
        return -1
    }

    length(){
        return this.mystack.length();
    }

    reverse(){
        let dummystack = [];
        let length = this.mystack.length;

        while(length > 0)
        {
            dummystack.push(this.mystack.pop());
            length--;
        }
        this.mystack = dummystack;
    }

    print(){
        // while(this.mystack.length)
        // {
        //     console.log(this.mystack.pop());
        // }

        console.log(this.mystack);
    }

}


function implementUsingQueue()
{
    for(let i=0;i<5;i++)
    {
        
    }
    const st = new Stack();
}
// console.log(st.length());
// function printUsingRecursion(n){


// }
// function print()
// {
    
//     printUsingRecursion(n);

// }