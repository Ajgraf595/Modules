// Demo that imports the Post default export and publishes one example.
// (tiny imperfections: comment typo, redundant console.log)

import Post from "./Post.mjs";

console.log("=== Blog Demo (Default Export) ===");

const myPost = new Post(
  "ES Modules make code cleaner",
  "Today I practiced default exports/imports, and it actually feels way less messy!",
  "Ali"
);

// this will log title, content, and timestamp
myPost.publish();

// redundant but harmless:
console.log("Published?", myPost.isPublished); // true
