# Questions (Segment 1)

1) What will be the output of the code below?
  ```js
    var y = 1;
    if (function f(){}) {
      y += typeof f;
    }
    console.log(y);
  ```

output: 1undefined  
reason: Function declarations are hoisted. Function expressions are not.  
source: https://stackoverflow.com/questions/31664040/is-a-function-hoisted-if-it-is-defined-within-an-if-condition  

2) Assuming obj is an “empty” object in scope, say:
  ```js
    var obj = {};
    
    // What is accomplished using the following code?

    ['JS', 'C++'].forEach(function(k) {
      obj[k] = undefined;
    });
  ```

It adds elements (JS, C++) in arrays as keys in obj with value as undefined.  

3) What will the code below output to the console and why?
  ```js
    (function() {
      var a = b = 3;
    })();

    console.log("a defined? " + (typeof a !== 'undefined'));
    console.log("b defined? " + (typeof b !== 'undefined'));
  ```
a defined? false  
b defined? true  

Reason: when expression (b = 3) evaluates b is declared in global scope, so retains value outside the functions.  
But var a = (value of above expression) declares variable a in function scope, so a written outside a is still undefined.  


4) What will the following code output and why?
  ```js
    var b = 1;
    function outer() {
      var b = 2
      function inner() {
        b++;
        var b = 3;
        console.log(b)
      }
      inner();
    }
    outer();
  ```

answer: 3  
reason: var b is re declared inside inner function scope. So when ever b will be used further in inner function, it will used b inside inner scope.  


5) What will the following code output and why?
  ```js
    console.log(typeof typeof 1);
  ```

answer: string  
reason: typeof returns string value representing type name, and typeof string value is 'string'.  
