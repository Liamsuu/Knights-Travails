import Graph from "./graph.js";
import { toTableVertex } from "./script.js";

export function markAsVisited(node) {
  node.setVisited();
}

function solve(startNode, board) {
  let queue = [startNode];

  markAsVisited(startNode);

  while (queue.length > 0) {
    let currentVertex = queue.shift();

    // first set all the potential position arrays as vertex objects
    for (let x = 0; x < currentVertex.possibleVertices.length; x++) {
      currentVertex.possibleVertices.splice(
        x,
        1,
        toTableVertex(board, currentVertex.possibleVertices[x])
      );
    }

    for (let vertexObj of currentVertex.possibleVertices) {
      // console.log(vertexObj);
      if (vertexObj.visited === false) {
        queue.push(vertexObj);
        markAsVisited(vertexObj);
        vertexObj.setPrev(currentVertex);
      }
    }
  }
  return board;
}

function reconstuctPath(startNode, endNode) {
  let path = [];
  for (
    let currentNode = endNode;
    currentNode !== null;
    currentNode = currentNode.prevVertex
  ) {
    path.push(currentNode);
  }
  // since it came from the end node(as i had to traverse through the previous nodes value in each) to the start node, the array needs to be reversed
  const reversedPath = path.reverse();
  if (reversedPath[0] === startNode) {
    return reversedPath;
  } else {
    return []; // something went wrong if it reaches here
  }
}

export default function bfs(startNode, endNode) {
  let board = new Graph();
  startNode = toTableVertex(board, startNode); // find the vertex object associated at this arrays position inside the graph provided
  endNode = toTableVertex(board, endNode);
  board = solve(startNode, board); // return the new graph (all the vertex objects were changed to show what the previous node that went into was)
  // reassociate the start and end node to the new graph with the updated previous node values
  startNode = toTableVertex(board, startNode.getPosition());
  endNode = toTableVertex(board, endNode.getPosition());
  return reconstuctPath(startNode, endNode);
}
