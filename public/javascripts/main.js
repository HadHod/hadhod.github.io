window.addEventListener('load', () => {
  const secretButton = document.getElementById('secret-button');
  const mindMap = document.getElementById('mindmap');

  secretButton.addEventListener('click', () => {
    mindMap.style.visibility = 'visible';
  });

  const nodes = new vis.DataSet([
    { id: 1, label: "", shape: "diamond", color: "#FB7E81", size: 25 },

    { id: 2, label: "Web3" },
    { id: 21, label: "Playing Games" },
    { id: 22, label: "Development" },
    { id: 23, label: "Grants" },
    { id: 24, label: "OpenSource" },
    { id: 25, label: "D_D" },
    { id: 26, label: "Solidity" },

    { id: 3, label: "Projects" },
    { id: 31, label: "Three.js" },
    { id: 32, label: "PrzykladPrzekladu" },
    { id: 33, label: "eBook marketplace" },
    { id: 34, label: "PictureChallenge" },
    { id: 35, label: "OpenSource" },

    { id: 4, label: "Investing" },
    { id: 41, label: "Books" },
    { id: 42, label: "Tools" },
    { id: 43, label: "Analysis" },

    { id: 5, label: "Additional" },
    { id: 51, label: "Ukulele" },
    { id: 52, label: "GlobalTODO" },
    { id: 53, label: "German" },

    { id: 6, label: "Money" },
    { id: 61, label: "Freelancing" },
    { id: 62, label: "Creating courses" },
    { id: 63, label: "ebook" },
  ]);

  const edges = new vis.DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },

    { from: 2, to: 21 },
    { from: 2, to: 22 },
    { from: 2, to: 23 },
    { from: 2, to: 24 },
    { from: 2, to: 25 },
    { from: 2, to: 26 },

    { from: 3, to: 31 },
    { from: 3, to: 32 },
    { from: 3, to: 33 },
    { from: 3, to: 34 },
    { from: 3, to: 35 },

    { from: 4, to: 41 },
    { from: 4, to: 42 },
    { from: 4, to: 43 },

    { from: 5, to: 51 },
    { from: 5, to: 52 },
    { from: 5, to: 53 },

    { from: 6, to: 61 },
    { from: 6, to: 62 },
    { from: 6, to: 63 },
  ]);

  new vis.Network(mindMap, { nodes, edges }, {});
});
