
  const rows = 3;
  const columns = 3;
  let turns = 0;

  let winmsg = document.querySelector('.winmsg');
  let heading = document.querySelector('.heading');
  let board = document.getElementById("board");
  let tur = document.querySelector('.tur');

  // Starting shuffled image order
  const imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

  window.onload = () => {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        const tile = document.createElement("img");
        tile.id = `${r}-${c}`;
        tile.src = imgOrder.shift() + ".jpg";
        tile.classList.add("tile");

        tile.addEventListener("click", () => handleClick(tile));
        board.appendChild(tile);
      }
    }
  };

  function handleClick(tile) {
    const [r, c] = tile.id.split("-").map(Number);

    // Check all 4 directions for the empty tile (3.jpg)
    const directions = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1]
    ];

    for (const [r2, c2] of directions) {
      const neighbor = document.getElementById(`${r2}-${c2}`);
      if (neighbor && neighbor.src.includes("3.jpg")) {
        // Swap tiles
        const temp = tile.src;
        tile.src = neighbor.src;
        neighbor.src = temp;

        turns++;
        document.getElementById("turns").innerText = turns;

        checkWin();
        return;
      }
    }
  }

  function checkWin() {
    const tiles = document.querySelectorAll("#board img");
    for (let i = 0; i < tiles.length; i++) {
      if (!tiles[i].src.includes((i + 1) + ".jpg")) return;
    }

    // Puzzle completed
    window.scrollTo({ top: 0, behavior: "smooth" });
    heading.style.display = "none";
    board.style.display = "none";
    tur.style.display = "none";
    winmsg.style.display = "block";
  }
