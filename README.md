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

We should write tests in order to establish the best practices around quality expectations for the product, there are many reasons for establishing a rigour to the software development as well as deployment of the software product.

- From an `end user` perspective, the most critical aspect is that our code or software actually solves the problem that it was designed to solve.

- From a `development team` perspective, the tests actually also serve as a means of `documenting` the behaviour of any unit or aspect of the system.

- Writing tests facilitates the team in being confident in making changes and make the system more adaptable to the changing requirements of the user or the environment.


**2) How much code coverage is required? Comment.**

I think that achieving a `100%` code test coverage is elusive and a vague goal since the necessity of higher test coverage also depends on other factors such as the implementation language being dynamically typed or statically typed, the architecture of the system, differences between the development and deployment environments such as simulators and actual devices. However, in most cases a goal of around 60-70% of the code-base i.e. testing the most critical aspects of the system should suffice.

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



The snippet mentioned above is an example of `Integration` testing as the tests are designed to validate the `/tasks API` behavior for the `GET` and `POST` requests. These tests are necessary to ensure that the clients of the `API` receive the correct responses.

Some of the possible clients could be 

- `Browser Front-end`
- `Command Line Tools`
- `Plug-ins` for other systems such as browsers or IDEs etc



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

I believe that the `Snippet-1` is much more understandable as well as testable since the design of the program is basically a single function which will act as an interface for the consumer. Moreover it follows a design principle of composability of independent units i.e functions and referential transparency as the functions such as `secondStageSetter` and `clipToLowerLimit` essentially operate on a single global variable and this makes them easier to test.

In the `Snippet-2` the program logic within each function is tougher to follow as there are too many procedural constructs within a single function such as multiple `return` statements as well as expressions with nested comparison operators.

(tldr)

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
