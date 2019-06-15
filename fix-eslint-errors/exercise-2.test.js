function noop() {}

if (typeof console === 'undefined') {
  global.console = {
    warn: noop,
    error: noop,
  };
}

// avoid info messages during test
global.console.info = noop;

let asserted;

function createCompareFn(spy) {
  const hasWarned = (msg) => {
    function containsMsg(arg) {
      return arg.toString().indexOf(msg) > -1;
    }

    let count = spy.calls.count();
    let args;
    while (count) {
      count -= 1;
      args = spy.calls.argsFor(count);
      if (args.some(containsMsg)) {
        return true;
      }
    }
    return false;
  };

  return {
    compare: (msg) => {
      asserted = asserted.concat(msg);
      const warned = Array.isArray(msg)
        ? msg.some(hasWarned)
        : hasWarned(msg);
      return {
        pass: warned,
        message: warned
          ? `Expected message "${msg}" not to have been warned`
          : `Expected message "${msg}" to have been warned`,
      };
    },
  };
}

// define custom matcher for warnings
beforeEach(() => {
  asserted = [];
  spyOn(console, 'warn');
  spyOn(console, 'error');
  jasmine.addMatchers({
    toHaveBeenWarned: () => createCompareFn(global.console.error),
    toHaveBeenTipped: () => createCompareFn(global.console.warn),
  });
});

afterEach((done) => {
  const warned = msg => asserted.some(assertedMsg => msg.toString().indexOf(assertedMsg) > -1);
  let count = global.console.error.calls.count();
  let args;
  while (count) {
    count -= 1;
    args = global.console.error.calls.argsFor(count);
    if (!warned(args[0])) {
      done.fail(`Unexpected console.error message: ${args[0]}`);
      return;
    }
  }
  done();
});
