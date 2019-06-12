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

We should write tests because they help in ensuring we have a better speed at coding. With tests, we don't have to manually check things again and again which significantly gives us more time for the development. If we are wrong at something or should be fixed, we get early feedback of the things. Tests also work as documentation and give us confidence that we have covered enough scenarios covered.

**2) How much code coverage is required? Comment.**

In any programming, there is no guarantee that 100% of the code can be covered through testing. But the majority of the code should get covered. There is no right number to it.

Less code coverage means you have a possibility to improve the coverage by refactoring your code and making it more testable. As the coverage increases, it might get difficult to cover it all, but that's fine. There can be situations that can not be tested depending on situations.

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

The given example is of Integration test. An Integration test is a combination of unit tests - which essentially test the smallest unit of the logic. When such tests are combined to test a meaningful action or interaction, it becomes an Integration test.

Also, we can say it's not an End to End test because these tests involve interacting with UI, getting information from UI elements and then using that for testing things. Hence the given example is of Integration test.

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

The second code is better testable because each function is written separately and has a specific purpose. Each function in the second code can be tested independently.

Whereas in the first code we don't have a choice which function to invoke. By executing the main function, internally it calls other functions, whether or not we want to test/cover them. This is against the purpose of the unit testing, where we essentially want to test each logic separately.

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

The second way is ideal for testing. The reason is there are two things being tested, so the feedback we receive after the tests should also be separate and independent of other tests. 

The message in the first way can be confusing, especially when the tests fail. This doesn't serve a purpose as it essentially creates confusion because there can be three scenarios when the test fails and we get the same message (first assert fails, the second assert fails, both assert fails).