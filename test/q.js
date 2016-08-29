window = global;

// require('../src/index.js')
// require('../src/x.array.js');
// require('../src/x.math.js');
// require('../src/LinkedList.js');
// require('../src/Stack.js');
// require('../src/Queue.js');
// require('../src/Tree.js');
// require('../src/Heap.js');
// require('../src/Graph.js');
// require('../src/WeightedGraph.js');
// require('../src/UnionFind.js');
// require('../src/x.math.stats.js');
// require('../src/x.math.vector.js');
//
// require('../src/list.js');
// require('../src/sorting.js');
// require('../src/sorting.mergeSort.js');
// require('../src/sorting.quickSort.js');
// require('../src/graph.cut.js');
// require('../src/graph.search.js');
// require('../src/graph.path.js');

window.should = require('should');
window.test = (message, fn) => describe(message, fn);
window.strictEqual = (actual, expected, message) => it(message || 'N/A', () => (actual).should.equal(expected));
window.deepEqual = (actual, expected, message) => it(message || 'N/A', () => (actual).should.eql(expected));
window.ok = (actual, message) => it(message || 'N/A', () => (actual).should.be.ok);
window.throws = (fn, message) =>it(message || 'N/A', () => (fn).should.throw());