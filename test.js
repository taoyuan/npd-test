var counter = 0,
  fs = require('fs');

setInterval(function() {
  console.log('ITERATION ' + (++counter) + ':');
  console.log("ARGUMENTS:\n");
  console.log("\t" + JSON.stringify(require('yargs').argv));
  console.log("ENVIRONMENT VARIABLES:\n");
  console.log("\t" + JSON.stringify(Object.keys(process.env)));
  console.log('READ FILE FROM WORKING DIRECTORY:');
  console.log("\t" + fs.readFileSync('./local.txt').toString());
}, 2000);

process.on("SIGINT", function() {
  console.log('received [SIGINT]');
  process.exit();
});

process.on("SIGHUP", function() {
  console.log('received [SIGHUP]');
  process.exit();
});

process.on("SIGTERM", function() {
  console.log('received [SIGTERM]');
  process.exit();
});
