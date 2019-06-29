function binaryAgent(binaryText) {
  const binaryArray = binaryText.split(" ");
  return binaryArray.reduce(
    (acc, character) => acc + String.fromCharCode(parseInt(character, 2)),
    ""
  );
}

export { binaryAgent };
