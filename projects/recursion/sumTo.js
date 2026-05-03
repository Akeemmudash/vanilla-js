import { logToConsole } from "../../utils.js";

function sumTo(number) {
  if (!number || isNaN(number)) {
    return 0;
  }

  return number + sumTo(number - 1);
}

logToConsole(sumTo(5));
