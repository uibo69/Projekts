/* main.js */
let quotes = [
    "Dzīve ir tas, kas notiek, kamēr tu plāno citus notikumus. – John Lennon",
    "Viss ir grūti, pirms tas kļūst viegli. – Zig Ziglar",
    "Citāts īsā formā spēj nodot veselu dzīves stāstu."
  ];
  
  function showRandomQuote() {
    let index = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerText = quotes[index];
  }
  
  function addQuote() {
    let input = document.getElementById("quoteInput").value;
    if (input.trim() === "") {
      alert("Lūdzu ievadi citātu!");
      return;
    }
    quotes.push(input);
    alert("Citāts pievienots!");
    document.getElementById("quoteInput").value = "";
  }
  