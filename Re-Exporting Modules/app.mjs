// app.mjs
// testing out my re-exported modules setup

import { upperFirst, triple } from "./utils/index.mjs";

console.log("Testing the string function...");
console.log(upperFirst("this should be uppercase!")); // should make first letter uppercase

console.log("Testing the number function...");
console.log(triple(7)); // 21 I think??

console.log("ok that seems to work (i think)");
