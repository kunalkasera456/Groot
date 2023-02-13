/*function printFib(n)
{
    let first = 0;
    let second = 1;
    let next;

    if(n === 1)
    {
        console.log(first);
    }
    else if(n >= 2)
    {
        console.log(first);
        console.log(second);
    }

    if(n > 2)
    {
        while(n > 2)
        {
            next = first + second;
            console.log(next);
            first = second;
            second = next;     
            n--; 
        }
    }
   
}
printFib(10);*/

// using recursion

function printFib(n){
    //base case
    if(n === 1 || n === 0)
    return console.log(n);

    return printFib(n-1) + printFib(n-2);
    
}
printFib(9);


  