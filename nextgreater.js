
class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    push(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    pop() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    length(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}

/*
    Input: 
    N = 4, arr[] = [1 3 2 4]
    Output:
    3 4 4 -1    */

/* Algo
   1. iterate from left side
   2. take ans array
   3. if stack is empty ans.add (-1);
   4. if stack is not empty ans check arr[i] > stack.peek() pop karna hai kyuki largest element stack
      mew rakna hai smaller ko neglet karna hai kyuki hame largest find karna hai
   5. ans.add(peek)  */

let arr = [1 ,3, 2, 4];

let st = new Stack();

for(let i=3; i>=0; i--)
{
    while(st.length && arr[i] >= st.peek())
    {
        st.pop();
    }
    if(st.length === 0)
    {
        console.log(-1);
    }
    else
    {
        console.log(st.peek());
    }
    st.push(arr[i]);
}

