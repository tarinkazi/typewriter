const sentence = "hello there from lighthouse labs\n";
let i = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)//.slice(0,sentence.length-2));
  }, i += 50);
  

}
