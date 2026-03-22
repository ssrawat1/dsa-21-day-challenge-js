# 🌳 What is a Tree?

A **tree** is a way to store data in a **hierarchical structure**.

That simply means:

- One thing is at the top
- Other things are inside it
- Those things can also contain more things
- This nesting can continue

Just like folders inside folders 📁

---

## 🖥️ Real-Life Example: Files and Folders

Let’s say on your computer desktop you have a folder called `media` 👇

Inside the **media** folder, you have:

- images
- music
- videos

And inside the **images** folder, you have image files like:

- photo.png
- wallpaper.jpg
- logo.svg

Visually, this looks like 👇

```
media
 ├── images
 │    ├── photo.png
 │    ├── wallpaper.jpg
 │    └── logo.svg
 ├── music
 └── videos
```

This structure is a **tree** 🌳

---

## 🧠 Why is this a Tree?

Because:

- There is **one top folder** → media
- Everything is connected under it
- Each folder can contain more folders or files
- There is **only one path** to reach any file or folder

You cannot reach `photo.png` in two different ways.
That’s what makes it a tree.

---

## 🧩 Tree Terminologies

Let’s define important terms using the **media folder** example.

### 1️⃣ Node

A **node** is **any item** in the tree.

📁 media → node  
📁 images → node  
📄 photo.png → node

Everything is a node.

---

### 2️⃣ Root

The **root** is the **top-most node** of the tree.

In our example:

📁 **media** is the root.

Every tree has exactly **one root** 🌱

---

### 3️⃣ Parent and Child

If one node directly contains another:

- the container is the **parent**
- the contained item is the **child**

Example:

- media is parent of images
- images is parent of photo.png

---

### 4️⃣ Siblings

Nodes that share the **same parent** are siblings.

Example:

- images, music, and videos are siblings
- photo.png and wallpaper.jpg are siblings

---

### 5️⃣ Leaf Node 🍃

A **leaf node** is a node that has **no children**.

Example:

- photo.png
- wallpaper.jpg
- logo.svg

Files are usually leaf nodes.

---

### 6️⃣ Subtree 🌿

A **subtree** is any node along with everything inside it.

Example:

- images folder + all its files = a subtree
- music folder alone is also a subtree

---

### 7️⃣ Depth 📏

**Depth** means:
👉 how far a node is from the root

Let’s count depth starting from **0**:

| Node      | Depth |
| --------- | ----- |
| media     | 0     |
| images    | 1     |
| photo.png | 2     |

So `photo.png` has depth **2**.

---

### 8️⃣ Height 📐

**Height** means:
👉 the longest path from the root node to a leaf

Height tells how **tall** the tree is.

---

### 9️⃣ Edge 🔗

An **edge** is the **connection between two nodes**.

It represents the relationship between a **parent and a child**.

Example edges in the media tree:

- media → images
- images → photo.png
- images → wallpaper.jpg

Key points:

- Every parent-child relationship has **one edge**
- A tree with `N` nodes always has `N - 1` edges
- Edges show **structure**, not data

---

### 🔟 Level 🪜

**Level** represents a node’s position in the tree **row-wise**, starting from the top.

There are **two common conventions** used in practice:

#### Convention 1 (very common in computer science)

* **Depth starts from 0**
* **Level starts from 1**
* Relationship:

```
level = depth + 1
```

Example:

| Node      | Depth | Level |
| --------- | ----- | ----- |
| media     | 0     | 1     |
| images    | 1     | 2     |
| photo.png | 2     | 3     |

---

#### Convention 2 (also commonly used)

* **Depth starts from 1**
* **Depth and level mean the same thing**

Example:

| Node      | Depth / Level |
| --------- | ------------- |
| media     | 1             |
| images    | 2             |
| photo.png | 3             |

---

### 🔍 Important note

Both conventions are **correct**.

What matters is:

* clearly stating which convention is being used
* staying consistent throughout

In this explanation, we follow **Convention 1**, where depth starts from **0** and level starts from **1**.

---

### 🔍 Depth vs Level (important distinction)

- **Depth** measures distance of a node from the root
- **Level** groups nodes horizontally

Depth is used more in algorithms.
Level is used more in explanations and visualizations.

---

## 🧱 Tree as a Nested JavaScript Object

In JavaScript, a tree is not a built-in data structure. You represent it using plain objects and arrays, and the shape you choose depends on the kind of tree you want.

---

### Example 1️⃣ Media Folder Tree

```js
const media = {
  name: "media",
  children: [
    {
      name: "images",
      children: [
        { name: "photo.png", children: [] },
        { name: "wallpaper.jpg", children: [] },
        { name: "logo.svg", children: [] },
      ],
    },
    {
      name: "music",
      children: [],
    },
    {
      name: "videos",
      children: [],
    },
  ],
};
```

This object is a **tree** 🌳  
Each object is a node.  
Each `children` array holds child nodes.

---

## 🔁 Why Recursion Fits Trees Perfectly

Look at this 👇

- media has children
- images has children
- photo.png has no children

Same structure repeats again and again.

That’s exactly what recursion is good at 🔁

---

## 🧠 Key Takeaways (Very Important)

✅ A tree is hierarchical data  
✅ One root, many children  
✅ No cycles  
✅ Perfect for recursion  
✅ Used in real life everywhere  
✅ JavaScript trees are just nested objects and arrays