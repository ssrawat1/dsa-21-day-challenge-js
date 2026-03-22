const mediaTree = {
  name: "media",
  children: [
    {
      name: "images",
      children: [
        {
          name: "events",
          children: [
            {
              name: "birthday",
              children: [
                { name: "cake.png", children: [] },
                { name: "party.jpg", children: [] },
              ],
            },
          ],
        },
        {
          name: "wallpapers",
          children: [
            { name: "nature.jpg", children: [] },
            { name: "city.png", children: [] },
          ],
        },
      ],
    },
    {
      name: "music",
      children: [
        {
          name: "rock",
          children: [{ name: "song1.mp3", children: [] }],
        },
      ],
    },
    {
      name: "videos",
      children: [],
    },
  ],
}

/* 1st ---> Solution */

function printAllNodes(tree, depth = 1) {
  console.log(' '.repeat(depth) + tree.name)
  for (const node of tree.children) {
    printAllNodes(node, depth + 1);
  }
  return depth
};

printAllNodes(mediaTree);


/* 2nd ---> Solution */

function countNodes(node) {
  let count = 1
  for (const child of node.children) {
    count += countNodes(child)
  }
  return count
};

console.log(countNodes(mediaTree));

/* 3rd ---> Solution */

function printLeafNodes(tree) {
  if (!tree.children.length) console.log(tree.name)
  for (const node of tree.children) {
    printLeafNodes(node)
  }
};

printLeafNodes(mediaTree)

// /* 4th ---> Solution */

function printAllTagName(node, depth = 0) {
  let count = 0;
  console.log(" ".repeat(depth) + node.localName)
  for (const child of node.children) {
    count++
    count += printAllTagName(child, depth + 1)
  }
  return count
};

// console.log(printAllTagName(document.documentElement)
// )

/* 5th ---> Solution */

function countElements(node) {
  let count = 0;
  for (const child of node.children) {
    count++;
    count += countElements(child)
  }
  return count
};

// console.log(countElements(document.documentElement));

/* 6th ---> Solution */

function totalLeaf(node) {
  if (!node.children.length) {
    return 1
  }
  let leafCount = 0;
  for (const child of node.children) {
    leafCount += totalLeaf(child, leafCount);
  }
  return leafCount
};

console.log(totalLeaf(mediaTree));

/* 7th ---> Solution */

function depth(node, currentDepth = 0) {
   if (!node.children.length) return 1;
  for (const child of node.children) {
    currentDepth = Math.max(currentDepth, depth(child, currentDepth + 1))
  }
  return currentDepth
}


console.log(depth(mediaTree))

/* 8th ---> Solution */

function height(node) {
  if (!node.children.length) return 0;
  let max = 0;
  for (const child of node.children) {
    max = Math.max(max, height(child));
  }
  return max + 1;
}

console.log(height(mediaTree))