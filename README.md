# Questions (Segment 1)

1) What will be the output of the code below?
  ```js
    var y = 1;
    if (function f(){}) {
      y += typeof f;
    }
    console.log(y);
  ```
  "1undefined"

2) Assuming obj is an “empty” object in scope, say:
  ```js
    var obj = {};
    
    // What is accomplished using the following code?

    ['JS', 'C++'].forEach(function(k) {
      obj[k] = undefined;
    });
  ```
  object for the key JS,C++ is initialised with value undifined

3) What will the code below output to the console and why?
  ```js
    (function() {
      var a = b = 3;
    })();

    console.log("a defined? " + (typeof a !== 'undefined')); //true
    console.log("b defined? " + (typeof b !== 'undefined')); //true
  ```

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

5) What will the following code output and why?
  ```js
    console.log(typeof typeof 1);
  ```
  string beaccuse type of 1 is number which is a string
