# Questions (Segment 1)

1) What will be the output of the code below?
  ```js
    var y = 1;
    if (function f(){}) {
      y += typeof f;
    }
    console.log(y);
  ```

The output of the code snippet will be `1undefined` because `function f(){}` evaluates to `undefined` and therefore `typeof undefined` evaluates to `undefined` as a `string` which causes the `y= 1 + 'undefined'` to eventually become `1undefined`.

2) Assuming obj is an “empty” object in scope, say:
  ```js
    var obj = {};
    
    // What is accomplished using the following code?

    ['JS', 'C++'].forEach(function(k) {
      obj[k] = undefined;
    });
  ```

The above code snippet iterates the array `['JS','C++']` and applies the `function` for that element as an arg like `function('JS')` which eventually leads to `JS` being the key to the object `obj` and `undefined` being the value.

`{ JS: undefined, 'C++': undefined }`


3) What will the code below output to the console and why?
  ```js
    (function() {
      var a = b = 3;
    })();

    console.log("a defined? " + (typeof a !== 'undefined'));
    console.log("b defined? " + (typeof b !== 'undefined'));
  ```


```
a defined? false
b defined? true
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

`3`


5) What will the following code output and why?
  ```js
    console.log(typeof typeof 1);
  ```

`string`

