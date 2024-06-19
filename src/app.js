/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
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

function domain_name_generator() {
  const first = pronoun[Math.floor(Math.random() * pronoun.length)];
  const second = adj[Math.floor(Math.random() * adj.length)];
  const third = noun[Math.floor(Math.random() * noun.length)];
  const fourth = ext[Math.floor(Math.random() * ext.length)];

  const domain_name = `${first}${second}${third}${fourth}`;
  document.getElementById("domain").value = domain_name;

  console.log(domain_name);
}
