function spliceHowMuch([...args], index) {
  return args.length / index;
}

function chunkArrayInGroups([...args], index) {
  return [args, args.splice];
}

export { chunkArrayInGroups };
