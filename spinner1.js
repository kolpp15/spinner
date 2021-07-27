// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

const spinner = '|/-\\|/-\\|';
let interval = 1000;

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}    `);
  }, interval);
  interval += 500;
}

setTimeout(() => {
  process.stdout.write('\n');
}, interval + 1000);