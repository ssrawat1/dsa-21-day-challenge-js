const obj = {
  name: "Sanjay",
  age: 25,
  address: {
    city: "Bathinda",
    state: "Punjab",
    country: {
      name: "India",
      code: "IN",
      continent: {
        name: "Asia",
        hemisphere: "North"
      }
    }
  },
  education: {
    school: "DAV",
    college: {
      name: "PEC",
      degree: {
        type: "B.Tech",
        branch: "CSE",
        grade: "A"
      }
    }
  }

}
/* Print All Values in a Nested Object: */
function printAllValues(obj, values = []) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printAllValues(obj[key], values)
    } else {
      values.push(obj[key])
    }
  }
  return values
};

console.log(printAllValues(obj))

/* 2nd ---> Solution */

function keysCount(obj, count = 0) {
  for (const key in obj) {
    count += 1
    if (typeof obj[key] === "object") {
      console.log({ count })
      count += keysCount(obj[key]);
    }
  }
  return count
};

console.log(keysCount(obj))

/* 3rd --> Solution */

function getNumericValueSum(obj, sum = 0) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += getNumericValueSum(obj[key])
    } else {
      if (typeof obj[key] === "number") {
        sum += obj[key]
      }
    }
  }
  return sum;
};

console.log(getNumericValueSum({
  a: 1,
  b: "hello",
  c: {
    d: 2,
    e: {
      f: 3,
      g: "world",
      h: null,
      i: true,
      j: false
    }
  },
  k: 4,
  l: null,
  m: true,
  n: false
}))


/* 4th ---> Solution */

function printAllKeys(obj) {
  for (const key in obj) {
    console.log(key)
    if (typeof obj[key] === "object") {
      printAllKeys(obj[key])
    }
  }
  return
};

printAllKeys({
  a: 1,
  b: "hello",
  c: {
    d: 2,
    e: {
      f: 3,
      g: "world"
    }
  },
  h: 4
})


/* 5th ---> Solution */

function capitalizeValues(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      capitalizeValues(obj[key])
    } else {
      obj[key] = typeof obj[key] === "string" ? obj[key].toUpperCase() : obj[key]
    }
  }
  return obj
};

console.log(capitalizeValues({
  name: "john",
  age: 25,
  address: {
    city: "mumbai",
    country: "india",
    zip: 400001
  },
  active: true
}))

/*  6th ---> Solution */

function keyAppearance(obj, targetKey, count = 0) {
  console.log({ count })
  for (const key in obj) {
    if (key === targetKey) count++;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += keyAppearance(obj[key], targetKey)
    }
  }
  return count
};

console.log(keyAppearance({
  a: 1,
  b: {
    a: 2,
    c: {
      a: 3
    }
  }
}, "a"))


/* 7th ---> Recursion */

function calculateDepth(obj) {
  let maxDepth = 0;
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      maxDepth = Math.max(maxDepth, calculateDepth(obj[key]));
    }
  }
  return maxDepth + 1;
}

console.log(calculateDepth({
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: "good"
            }
          }
        }
      }
    }
  },
  x: {
    y: {
      z: "zoo"
    }
  }
}))

/* 8th ---> Solution */

function isExist(obj, value) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (isExist(obj[key], value)) return true
    } else {
      if (obj[key] === value) return true
    }
  }
  return false
};

console.log(isExist({
  name: "A",
  info: {
    age: 25,
    address: {
      city: "Delhi"
    }
  }
}, "Delhi"))

/* 9th ---> Solution */

function replaceValue(obj, replace, to) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      replaceValue(obj[key], replace, to);
    } else {
      if (obj[key] === replace) {
        obj[key] = to;
      }
    }
  }
  return obj;
}

console.log(replaceValue({
  name: "A",
  info: {
    age: 25,
    address: {
      city: "Delhi"
    }
  }
}, "Delhi", "Bangalore"));


/* 10th ---> Solution */

function getNestedObjectCount(obj, count = 0) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count++
      count += getNestedObjectCount(obj[key])
    }
  }
  return count;
};

console.log(getNestedObjectCount({
  a: {},
  b: {
    c: {},
    d: {
      e: {},
      f: 5
    }
  }
}))


/* 11th ---> Solution */

function getKeyPath(obj, inputKey, path = "") {
  for (const key in obj) {
    const currentPath = path ? path + "." + key : key;
    if (key === inputKey) return currentPath;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const result = getKeyPath(obj[key], inputKey, currentPath);
      if (result) return result;
    }
  }
  return null;
}

console.log(getKeyPath({
  a: {},
  b: {
    c: {},
    d: {
      e: {},
      f: 5
    }
  }
}, "e"))


/* 12th ---> Solution */

function maxNumericValue(obj, maxValue = -Infinity) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      maxValue = maxNumericValue(obj[key], maxValue);
    } else if (typeof obj[key] === "number" && obj[key] > maxValue) {
      maxValue = obj[key];
    }
  }
  return maxValue;
}

console.log(maxNumericValue({
  a: 4,
  b: {
    c: 9,
    d: {
      e: 2
    }
  }
}))