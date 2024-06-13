import Vertex from "./vertex.js";

export default class Graph {
  constructor() {
    this.chessTable = [
      [
        new Vertex([0, 0], setPossibleGrids([0, 0])),
        new Vertex([0, 1], setPossibleGrids([0, 1])),
        new Vertex([0, 2], setPossibleGrids([0, 2])),
        new Vertex([0, 3], setPossibleGrids([0, 3])),
        new Vertex([0, 4], setPossibleGrids([0, 4])),
        new Vertex([0, 5], setPossibleGrids([0, 5])),
        new Vertex([0, 6], setPossibleGrids([0, 6])),
        new Vertex([0, 7], setPossibleGrids([0, 7])),
      ],
      [
        new Vertex([1, 0], setPossibleGrids([1, 0])),
        new Vertex([1, 1], setPossibleGrids([1, 1])),
        new Vertex([1, 2], setPossibleGrids([1, 2])),
        new Vertex([1, 3], setPossibleGrids([1, 3])),
        new Vertex([1, 4], setPossibleGrids([1, 4])),
        new Vertex([1, 5], setPossibleGrids([1, 5])),
        new Vertex([1, 6], setPossibleGrids([1, 6])),
        new Vertex([1, 7], setPossibleGrids([1, 7])),
      ],
      [
        new Vertex([2, 0], setPossibleGrids([2, 0])),
        new Vertex([2, 1], setPossibleGrids([2, 1])),
        new Vertex([2, 2], setPossibleGrids([2, 2])),
        new Vertex([2, 3], setPossibleGrids([2, 3])),
        new Vertex([2, 4], setPossibleGrids([2, 4])),
        new Vertex([2, 5], setPossibleGrids([2, 5])),
        new Vertex([2, 6], setPossibleGrids([2, 6])),
        new Vertex([2, 7], setPossibleGrids([2, 7])),
      ],
      [
        new Vertex([3, 0], setPossibleGrids([3, 0])),
        new Vertex([3, 1], setPossibleGrids([3, 1])),
        new Vertex([3, 2], setPossibleGrids([3, 2])),
        new Vertex([3, 3], setPossibleGrids([3, 3])),
        new Vertex([3, 4], setPossibleGrids([3, 4])),
        new Vertex([3, 5], setPossibleGrids([3, 5])),
        new Vertex([3, 6], setPossibleGrids([3, 6])),
        new Vertex([3, 7], setPossibleGrids([3, 7])),
      ],
      [
        new Vertex([4, 0], setPossibleGrids([4, 0])),
        new Vertex([4, 1], setPossibleGrids([4, 1])),
        new Vertex([4, 2], setPossibleGrids([4, 2])),
        new Vertex([4, 3], setPossibleGrids([4, 3])),
        new Vertex([4, 4], setPossibleGrids([4, 4])),
        new Vertex([4, 5], setPossibleGrids([4, 5])),
        new Vertex([4, 6], setPossibleGrids([4, 6])),
        new Vertex([4, 7], setPossibleGrids([4, 7])),
      ],
      [
        new Vertex([5, 0], setPossibleGrids([5, 0])),
        new Vertex([5, 1], setPossibleGrids([5, 1])),
        new Vertex([5, 2], setPossibleGrids([5, 2])),
        new Vertex([5, 3], setPossibleGrids([5, 3])),
        new Vertex([5, 4], setPossibleGrids([5, 4])),
        new Vertex([5, 5], setPossibleGrids([5, 5])),
        new Vertex([5, 6], setPossibleGrids([5, 6])),
        new Vertex([5, 7], setPossibleGrids([5, 7])),
      ],
      [
        new Vertex([6, 0], setPossibleGrids([6, 0])),
        new Vertex([6, 1], setPossibleGrids([6, 1])),
        new Vertex([6, 2], setPossibleGrids([6, 2])),
        new Vertex([6, 3], setPossibleGrids([6, 3])),
        new Vertex([6, 4], setPossibleGrids([6, 4])),
        new Vertex([6, 5], setPossibleGrids([6, 5])),
        new Vertex([6, 6], setPossibleGrids([6, 6])),
        new Vertex([6, 7], setPossibleGrids([6, 7])),
      ],
      [
        new Vertex([7, 0], setPossibleGrids([7, 0])),
        new Vertex([7, 1], setPossibleGrids([7, 1])),
        new Vertex([7, 2], setPossibleGrids([7, 2])),
        new Vertex([7, 3], setPossibleGrids([7, 3])),
        new Vertex([7, 4], setPossibleGrids([7, 4])),
        new Vertex([7, 5], setPossibleGrids([7, 5])),
        new Vertex([7, 6], setPossibleGrids([7, 6])),
        new Vertex([7, 7], setPossibleGrids([7, 7])),
      ],
    ];
  }

  removeVisitedAll() {
    this.chessTable.forEach((row) => {
      row.forEach((node) => {
        node.removeVisited();
      });
    });
  }
}

function setPossibleGrids(startLocation) {
  let possibleLocations = [];
  let y = startLocation[0];
  let x = startLocation[1];

  // check top left and right
  if (y - 2 >= 0) {
    if (x - 1 >= 0) {
      possibleLocations.push([y - 2, x - 1]);
    }
    if (x + 1 <= 7) {
      possibleLocations.push([y - 2, x + 1]);
    }
  }
  // check right top and bottom
  if (x + 2 <= 7) {
    if (y - 1 >= 0) {
      possibleLocations.push([y - 1, x + 2]);
    }
    if (y + 1 <= 7) {
      possibleLocations.push([y + 1, x + 2]);
    }
  }

  // check BOTTOM left and right
  if (y + 2 <= 7) {
    if (x - 1 >= 0) {
      possibleLocations.push([y + 2, x - 1]);
    }
    if (x + 1 <= 7) {
      possibleLocations.push([y + 2, x + 1]);
    }
  }

  // check LEFT top and bottom
  if (x - 2 >= 0) {
    if (y - 1 >= 0) {
      possibleLocations.push([y - 1, x - 2]);
    }
    if (y + 1 <= 7) {
      possibleLocations.push([y + 1, x - 2]);
    }
  }

  return possibleLocations;
}
