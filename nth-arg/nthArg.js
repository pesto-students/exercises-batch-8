function nthArg(n) {
  return (stringOne, stringTwo) => {
    const wordsArray = [];
    wordsArray.push(stringOne);
    wordsArray.push(stringTwo);
    console.log("wordsArray", wordsArray);
  };
}
nthArg(0)("foo", "bar");
// export { nthArg };
