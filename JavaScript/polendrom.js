const num = 1441;
const toString = num.toString();
const toArray = toString.split();

function namd(number) {
  const reversed = toArray.reverse();
  const toStr2 = reversed.join();
  if (toStr2 == toString) {
    console.log(true);
  } else {
    console.log(false);
  }
}

namd(toArray);