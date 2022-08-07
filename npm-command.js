// npm - global command, comes with node
// npm --version => we can check the version by runnign thi scommand

// local dependency - use it only in the particular project
// npm i <package_name>

// global dependency - use it in any project
// npm install -g <package_name>
// sudo npm install -g <package_name> (mac)

// package.json - manifest file (stores important info about project/package)'
// manual approach ( create package.json in the root, create properties etc);
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const lodash = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = lodash.flattenDeep(items);
console.log(newItems);
