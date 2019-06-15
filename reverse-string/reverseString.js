function reverseString(string) {
  return string.split('').reduceRight((acc, character) => acc + character, '');
}

export { reverseString };
