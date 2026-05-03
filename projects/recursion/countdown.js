function countdown(n) {
  if (n === 0) {
    return "Done";
  }
  return n + ", " + countdown(n - 1);
}

console.log(countdown(5));
