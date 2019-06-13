# Questions

1) What will be the output of this code ? 
  ```js
  var x = { foo : 1};
  var output = (function() {
    delete x.foo;
    return x.foo;
  })();

  console.log(output);
  ```
output: undefined  
reason: function has access to x obj and it deletes foo property of it before returning.  


2) What will be the output of the following code ?
  ```js
  var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company
  console.log(emp1.company);
  ```

output: xyz  
reason: emp1 is object with Employee as its prototype and delete doesn't delete prototype properties.  

3) How we will calculate length of the above associative array counterArray ?
  ```js
  var counterArray = {
    A : 3,
    B : 4
  };
  counterArray["C"] = 1;
  ```

output: Iterate through the object properties and count object's own properties. `hasOwnProperty` method can be used to identity own propterties.  

```javascript
function getSize(object){
  var count = 0;
  for(key in object){
    if(object.hasOwnProperty(key)) count++;
  }
  return count;
}

4) How we can prevent modification of object in JavaScript ?

Answer:  
There are three different methods (and levels of preventing modifications):

#### Object.preventExtensions()
It prevents new methods and properties from being added to object.

#### Object.seal()
Sealed object is non-extensible (means it has feature of preventExtensions method) plus you also cannot delete any property or method.

#### Object.freeze()
Frozen object is both sealed and non-extensible plus you cannot modify any of its property or method.



5) What is the output of the following code ?
  ```js
  (function() {
    var objA = {
      foo: 'foo',
      bar: 'bar'
    };
    var objB = {
      foo: 'foo',
      bar: 'bar'
    };
    console.log(objA == objB);
    console.log(objA === objB);
  }());
  ```

output:  
false  
false  

reason: both equalities (== or ===) compares values or references of variables and when we create object like in above question, it always create new object and hence new reference to it. So objA and objB stores different reference values.