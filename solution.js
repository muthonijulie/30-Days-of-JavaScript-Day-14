//clearTimeout 
// function sayHello(name){
//     console.log("Hello"+name);
// }
// const timeoutId=setTimeout(sayHello,2000,"Dan");
//console.log(timeoutId);
// clearTimeout(timeoutId);

function cancellable(fn,args,t){
   const timeoutId= setTimeout(()=>{
       console.log(fn(...args));
    },t);
    return function cancelFn(){
        clearTimeout(timeoutId);

    };
}
//example 1
// const fn = (x) => x * 5;
// const cancelFn=cancellable(fn,[2],20);
// setTimeout(cancelFn, 50);

//example 2
// const  fn = (x) => x*2;
// const cancelFn=cancellable(fn,[2],100);
// setTimeout(cancelFn, 50);

//example 3
const  fn = (x1, x2) => x1 * x2;
const cancelFn=cancellable(fn,[2,4],30);
setTimeout(cancelFn, 100);