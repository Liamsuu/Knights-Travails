import bfs from "./bfs.js";

export function toTableVertex(graphObj, arr) {
  // the arr is a position e.g: [0,6]
  return graphObj.chessTable[arr[0]][arr[1]];
}

function knightMoves(startNode, endNode) {
  let path = [];
  // return the shortest path using BFS
  const vertexObj = bfs(startNode, endNode);
  vertexObj.forEach((obj) => {
    path.push(obj.getPosition());
  });

  return path;
}

// For testing, for each does not seem to working above apparently undefined
console.log(knightMoves([0, 0], [1, 2]));
