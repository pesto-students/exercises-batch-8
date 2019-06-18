
const timeout = name => new Promise(() => setTimeout(() => `Hello ${name}`, 300));

export {
  timeout,
};
