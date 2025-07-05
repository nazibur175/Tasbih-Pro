    let count = 0, cycle = 0;
    const limit = 100;
    const goal = 10;

    function increment() {
      count++;
      if (count >= limit) {
        count = 0;
        cycle++;
        alert("Congratulations 1 Full Tasbih Done!");
      }
      document.getElementById("count").textContent = count;
      document.getElementById("cycle").textContent = cycle;
    }

    function reset() {
      count = 0;
      cycle = 0;
      document.getElementById("count").textContent = count;
      document.getElementById("cycle").textContent = cycle;
    }
