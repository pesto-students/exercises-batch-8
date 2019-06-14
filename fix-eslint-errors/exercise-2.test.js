function noop() {}

if (typeof console === 'undefined') {
  // eslint-disable-next-line no-undef
  window.console = {
    warn: noop,
    error: noop,
  };
}

// avoid info messages during test
console.info = noop;

let asserted;

function createCompareFn(spy) {
  // eslint-disable-next-line consistent-return
  const hasWarned = (msg) => {
    let count = spy.calls.count();
    let args;
    function containsMsg(arg) {
      return arg.toString().indexOf(msg) > -1;
    }
    while (count) {
      count -= 1;
      args = spy.calls.argsFor(count);
      if (args.some(containsMsg)) {
        return true;
      }
    }
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
  // eslint-disable-next-line no-undef
  spyOn(console, 'warn');
  // eslint-disable-next-line no-undef
  spyOn(console, 'error');
  // eslint-disable-next-line no-undef
  jasmine.addMatchers({
    toHaveBeenWarned: () => createCompareFn(console.error),
    toHaveBeenTipped: () => createCompareFn(console.warn),
  });
});

afterEach((done) => {
  const warned = msg => asserted.some(assertedMsg => msg.toString().indexOf(assertedMsg) > -1);
  let count = console.error.calls.count();
  let args;
  while (count) {
    count -= 1;
    args = console.error.calls.argsFor(count);
    if (!warned(args[0])) {
      done.fail(`Unexpected console.error message: ${args[0]}`);
      return;
    }
  }
  done();
});
