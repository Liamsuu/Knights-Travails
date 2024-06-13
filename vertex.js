export default class Vertex {
  constructor(position, possibleVertices, visited = false) {
    this.position = position;
    this.possibleVertices = possibleVertices;
    this.visited = visited;
    this.prevVertex = null;
  }

  setVisited() {
    this.visited = true;
  }

  setPrev(vertexObj) {
    this.prevVertex = vertexObj;
  }

  removeVisited() {
    this.visited = false;
  }

  getPosition() {
    return this.position;
  }
}
