/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-mutable-exports
let errorName;
try {
  const k = undeclaredName;
} catch (e) {
  errorName = e.name;
}

export { errorName };
