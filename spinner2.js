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