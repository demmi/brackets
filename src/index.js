module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const brkt = {};

  bracketsConfig.forEach((a) => (brkt[a[0]] = a[1]));

  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
      if (brkt[stack[stack.length - 1]] === arr[i]) {
          stack.pop();
      } else if (brkt.hasOwnProperty(arr[i])) {
          stack.push(arr[i]);
      } else {
          return false;
      }
  }

  return stack.length === 0 ? true : false;
}
