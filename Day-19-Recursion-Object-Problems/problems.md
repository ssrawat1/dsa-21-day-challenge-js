## 🎯 **Day 19 – Recursion on Objects**

### 🧩 **Core Concept Focus**

- Recursive traversal of nested objects
- Depth-first recursion
- Base cases for objects and arrays
- Aggregation, search, and transformation on nested data
- Real-world JSON-style recursion

---

## 🏫 **Class Questions**

---

### **1️⃣ Print All Values in a Nested Object**

- **Input:**

```js
{
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 'Hi'
      }
    }
  }
}
```

- **Output:** `1 2 3 Hi`

---

### **2️⃣ Count Total Number of Keys in a Nested Object**

- **Input:**

```js
{
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  }
}
```

- **Output:** `6`

---

### **3️⃣ Find the Sum of All Numeric Values in a Nested Object**

- **Input:**

```js
{
  x: 10,
  y: {
    z: 5,
    w: {
      k: 15
    }
  }
}
```

- **Output:** `30`

---

### **4️⃣ Print All Keys in a Nested Object**

- **Input:**

```js
{
  a: {
    b: {
      c: 1;
    }
  }
}
```

- **Output:** `a b c`

---

## 🏠 **Homework Questions**

---

### **1️⃣ Convert All String Values to Uppercase in a Nested Object**

- **Input:**

```js
{
  name: "john",
  details: {
    city: "mumbai",
    role: "dev"
  }
}
```

- **Output:** All strings converted to uppercase.

---

### **2️⃣ Count How Many Times a Key Appears in a Nested Object**

- **Input:**

```js
{
  a: 1,
  b: {
    a: 2,
    c: {
      a: 3
    }
  }
}
```

Search key: `"a"`

- **Output:** `3`

---

### **3️⃣ Find the Depth of a Nested Object**

- **Input:**

```js
{
  a: {
    b: {
      c: {
        d: 1;
      }
    }
  }
}
```

- **Output:** `4`

---

### **4️⃣ Check If a Value Exists in a Nested Object**

- **Input:**

```js
{
  name: "A",
  info: {
    age: 25,
    address: {
      city: "Delhi"
    }
  }
}
```

Search value: `"Delhi"`

- **Output:** `true`

---

### **5️⃣ Replace a Value in a Nested Object Using Recursion**

- **Input:** Replace `city: "Delhi"` with `"Bangalore"`
- **Output:** Updated object.

---

### **6️⃣ Count Total Number of Objects Inside a Nested Structure**

- **Input:**

```js
{
  a: {},
  b: {
    c: {},
    d: {
      e: {},
      f: 5
    }
  }
}
```

- **Output:** `5`
  Count only objects, not primitive values.

---

### **7️⃣ Find the Path to a Given Key in a Nested Object**

- **Input:** Find path to key `"e"`
- **Output:** `"b.d.e"`

---

### **8️⃣ Find the Maximum Numeric Value in a Nested Object**

- **Input:**

```js
{
  a: 4,
  b: {
    c: 9,
    d: {
      e: 2
    }
  }
}
```

- **Output:** `9`