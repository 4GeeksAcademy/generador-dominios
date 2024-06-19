let dominios = [];
const pronoun = ["the", "our"];
const adj = ["perfect", "absolute", "first", "one"];
const noun = ["service", "video", "text", "marketplace"];
const ext = [".com", ".org", ".es", ".io", ".net"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        dominios.push(`${pronoun[i]}${adj[j]}${noun[k]}${ext[l]}`);
      }
    }
  }
}

console.log(dominios.join("\n"));
