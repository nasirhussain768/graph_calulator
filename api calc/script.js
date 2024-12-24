// Initialize the calculator
var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);

// Add a parabola to the graph
function addParabola() {
  calculator.setExpression({ id: 'parabola', latex: 'y=x^2' });
}

// Add a circle to the graph
function addCircle() {
  calculator.setExpression({ id: 'circle', latex: '(x-2)^2 + (y+3)^2 = 9' });
}

// Clear all graphs
function clearGraph() {
  calculator.setExpressions([]);
}
