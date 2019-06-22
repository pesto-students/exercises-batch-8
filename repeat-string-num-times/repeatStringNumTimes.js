function repeatStringNumTimes(string, factor) {
  if (factor < 1) {
    return "";
  }
  return String(string).repeat(factor);
}

export { repeatStringNumTimes };
