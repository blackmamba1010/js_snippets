// The sum of a range
// range function
function range(start, end, step = 1) {
  let arr = new Array();
  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

// sum function
function sum(arr) {
  return arr.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

// reversing an array
// reverse array
function reverseArray(arr) {
  let newArr = new Array();
  for (let element in arr) {
    newArr.unshift(arr[element]);
  }
  return newArr;
}
// swap function
function swap(a, b) {
  let tmp = a;
  a = b;
  b = tmp;
}
// reverseArrayInPlace
function reverseArrayInPlace(arr) {
  for (
    let i = 0, j = arr.length - 1;
    i < Math.floor(arr.length / 2), j >= Math.floor(arr.length / 2);
    i++, j--
  ) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
let valueArray = [1, 2, 3, 4, 5];
reverseArrayInPlace(valueArray);
console.log(valueArray);
//
//

console.log("-----array to list and vice versa------");

// a list
// array to list by traverse array backwards
function arrayToList(arr) {
  //let list = new List();
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    //list.prepend(arr[i]);
    let node = { value: arr[i], next: null };
    if (list == null) {
      list = node;
    } else {
      let tmp_node = list;
      node.next = tmp_node;
      list = node;
    }
  }
  return list;
}

let list = arrayToList([1, 2, 3]);
console.log(list);

// list to array
function listToArray(list) {
  let arr = new Array();
  for (let l = list; l; l = l.next) {
    arr.push(l.value);
  }
  return arr;
}

let arr = listToArray({
  value: 1,
  next: { value: 2, next: { value: 3, next: null } },
});
console.log(arr);

// Journal of Jaques
var JOURNAL = [
  { events: ["carrot", "exercise", "weekend"], squirrel: false },
  {
    events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
    squirrel: false,
  },
  {
    events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
    squirrel: false,
  },
  {
    events: [
      "brussel sprouts",
      "ice cream",
      "brushed teeth",
      "computer",
      "weekend",
    ],
    squirrel: false,
  },
  {
    events: [
      "potatoes",
      "candy",
      "brushed teeth",
      "exercise",
      "weekend",
      "dentist",
    ],
    squirrel: false,
  },
  {
    events: [
      "brussel sprouts",
      "pudding",
      "brushed teeth",
      "running",
      "weekend",
    ],
    squirrel: false,
  },
  {
    events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
    squirrel: false,
  },
  {
    events: ["bread", "beer", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
  { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
  {
    events: ["lettuce", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "computer", "work"], squirrel: false },
  { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["cauliflower", "reading", "weekend"], squirrel: false },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  {
    events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  { events: ["spaghetti", "nachos", "work"], squirrel: false },
  {
    events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
    squirrel: false,
  },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "work"],
    squirrel: false,
  },
  { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work"], squirrel: false },
  { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
  {
    events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
    squirrel: false,
  },
  { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "work"], squirrel: false },
  { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
  { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  {
    events: ["spaghetti", "pudding", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["bread", "brushed teeth", "exercise", "weekend"],
    squirrel: false,
  },
  { events: ["lasagna", "peanuts", "work"], squirrel: true },
  { events: ["pizza", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  { events: ["pizza", "cycling", "weekend"], squirrel: false },
  { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
  { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
  {
    events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
    squirrel: false,
  },
  {
    events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["lasagna", "brushed teeth", "cycling", "weekend"],
    squirrel: false,
  },
  {
    events: [
      "cauliflower",
      "peanuts",
      "brushed teeth",
      "computer",
      "work",
      "touched tree",
    ],
    squirrel: false,
  },
  {
    events: ["lettuce", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  {
    events: ["potatoes", "brushed teeth", "computer", "work"],
    squirrel: false,
  },
  { events: ["bread", "candy", "work"], squirrel: false },
  { events: ["potatoes", "nachos", "work"], squirrel: false },
  {
    events: ["carrot", "pudding", "brushed teeth", "weekend"],
    squirrel: false,
  },
  {
    events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
    squirrel: false,
  },
  { events: ["brussel sprouts", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["candy", "brushed teeth", "work"], squirrel: false },
  {
    events: ["brussel sprouts", "brushed teeth", "computer", "work"],
    squirrel: false,
  },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
  {
    events: ["spaghetti", "candy", "television", "work", "touched tree"],
    squirrel: false,
  },
  { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["pizza", "brushed teeth", "work"], squirrel: false },
  { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
  {
    events: ["bread", "beer", "computer", "weekend", "touched tree"],
    squirrel: false,
  },
  { events: ["brushed teeth", "running", "work"], squirrel: false },
  {
    events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
    squirrel: false,
  },
  {
    events: ["lasagna", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  {
    events: ["cauliflower", "brushed teeth", "running", "work"],
    squirrel: false,
  },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["carrot", "reading", "weekend"], squirrel: false },
  { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
  { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["bread", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
    squirrel: false,
  },
];

// function calculate the measure of correlation between two Boolean variables
// use phi coefficient (statistic)
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

// function make table for each event of JOURNAL
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

// make an array of all events of JOURNAL
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL));

// print all events with correlation
for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

console.log("----------------------------------");

// print all events with correlation that > 0.1 or < -0.1
for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

// rest parameters
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2)); // 9

console.log(max(4, 1, 9, -2)); // 9
