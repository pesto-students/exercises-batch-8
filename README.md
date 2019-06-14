### **NOTE: Do not use for or while loop, or Array.forEach in any of questions questions**

# Questions

1) What would be the output of the following code ?
    
  ```js
    var obj = {
      message: 'Hello',
      innerMessage: function () {
        (function () {
          console.log(this.message);
        }());
      }
    };
    console.log(obj.innerMessage());
  ```


The output of the above code snippet would be the following

```
undefined
undefined
```


2) What would be the output of the following code ?

```js
    var obj = {
      message: 'Hello',
      innerMessage: function () {
        var self = this;
        (function () {
          console.log(self.message);
        }());
      }
    };
    console.log(obj.innerMessage());
```

The output of the above code snippet would be the following

```
Hello

undefined
```


3) What would be the output of the following code ?
  ```js
    function myFunc(){
      console.log(this.message);
    }
    myFunc.message = "Hi John";
      
    console.log(myFunc());
  ```

The output of the above code snippet would be the following
```
undefined

undefined
```


4) What would be the output of the following code ?
  ```js
    function myFunc() {
      myFunc.message = 'Hi John';
      console.log(myFunc.message);
    }
    console.log(myFunc());
  ```

The output of the above code snippet would be the following
  ```
  Hi John

  undefined

  ```