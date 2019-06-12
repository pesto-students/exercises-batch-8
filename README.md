<p align="center">
  <a href="https://pesto.tech/">
    <img alt="PESTO" src="https://www.pesto.tech/assets/pestoblack.svg" width="500">
  </a>
</p>

# Questions:

## Instructions:
All the answers should be written in proper English.

---

**1) Why should we write tests?**
1. Tests are written to make sure that most general bugs and guessable bugs are not in the system. Tests can't give the complete assurance that product can't be broken. But tests determine, whether the system is working or not. If it's failing when exposed to general points of failute. 
2. Tests is another way of documentation of the software. One by looking at tests can get understanding of the functionality of the software, even without looking at the code. 
3. Tests when written, they solve a lot of time, instead of manually testing the product by giving input manually each time.

**2) How much code coverage is required? Comment.**
More the code coverage is lesser the chances of finding bugs. Code coverage can be done using different crietria. Each criteria tests the software in a particular manner. Function coverage, statement coverage, parameter coverage, branch coverage, condition coverage are some of the criteria based coverages. All these criterias tests perform how the software is going to perform in different and difficult conditions.

**3) What kind of test is this? Explain your choice of answer.**
  #### Options:
  - End to end (E2E)
  - Integration
  - Unit

      ```js
        var request = require('supertest');
        var app = require('../server');

        describe('API Tests', function() {
          var task  = {
            name: 'test',
          };

          describe('Get all tasks', function() {
            it('should get all tasks', function(done) {
              request(app)
                .get('/tasks')
                .end(function(err, res) {
                  expect(res.statusCode).toBe(200);
                  expect(Array.isArray(res.body)).toBe(true);
                  done();
                });
            });
          });

          describe('Create task ', function() {
            it('should create a task', function(done) {
              request(app)
                .post('/tasks')
                .send(task)
                .end(function(err, res) {
                  expect(res.statusCode).toBe(200);
                  expect(res.body.name).toBe('test');
                  task = res.body;
                  done();
                });
            });
          });
        });
      ```
I'd like to call this an Integration test. Because unit test is done for small modules, and end to end tests are done when whole system is ready. Integration tests are used to test how combination of different modules are working together. In the example above we're testing API's which usually combinte different modules like databases, libraries and other modules. Testing api is inturn testing how all those things are working together.
**4) Below are 2 snippets of code which achieve the same functionality. Which snippet of code is better testable and WHY?**

  ```js
    // 1
    function valIncrementer(val, disabled) {
      var nextVal = val + 1;
      function clipToUpperLimit() {
        if (val >= 10) {
          nextVal = v10;
          secondStageSetter()
        }
      }
      function clipToLowerLimit() {
        if (val <= 0) {
          nextVal = 0;
          secondStageSetter()
        }
      }
      function secondStageSetter() {
        if (disabled) {
          nextVal = val
        }
      }
      function run() {
        clipToUpperLimit()
        clipToLowerLimit()
      }
      run()
      return nextVal
    }

    // 2
    const incrementedVal = (val) => val + 1;
    function substituteVal(val, low, high) {
      if (val >= high) return high
      else if (val <= low) return low
      else return val
    }
    function shouldIncrement(val, disabled) {
      return val >= 0 && val < 10 && !disabled
    }
    function valIncrementer(val, disabled) {
      if (shouldIncrement(val, disabled)) {
        return incrementedVal(val)
      }
      return substituteVal(val, 0, 10)
    }
  ```
  2nd code snippet is better testable. Because in order to test the first test, there's only one testable point that's the entering function. If something goes wrong with internal functions, it's not possible to test them. Coming to 2nd code snippet, every function is individually available, and hence can be tested separately, which can eradicate the possibility of existance of errors to greater extent. 
  **5) Describe the difference between the two tests below. Which one is ideal and WHY?**

  ```js
      // 1
      it('should send the profile data to the server and update the profile view properly', function() {
        expect(...)to(...);
        expect(...)to(...);
      });

      // 2
      it('should send the profile data to the server', function() {
        expect(...)to(...);
      });

      it('should update the profile view properly', function() {
        expect(...)to(...);
      });
  ```
  2nd test is better. Because in the second tests we have separated tests based on functionality. In first test if any of the test fails, the entire statement will be called failed. But in second test, if one of the test scenario fails, we can focus only on that part of code, instead of focusing on both codes. Since 2nd test provides more modularity, it is better one. 
