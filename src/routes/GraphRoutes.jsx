import Graph from '/src/pages/Graph/Graph';

// Section-level pages
import GraphRepresentation from '/src/pages/Graph/GraphRepresentation';
import Traversals from '/src/pages/Graph/Traversals';
import SingleSourceShortestPaths from '/src/pages/Graph/SingleSourceShortestPaths';
import AllPairsShortestPaths from '/src/pages/Graph/AllPairsShortestPaths';
import SpanningTrees from '/src/pages/Graph/SpanningTrees';
import Cycles from '/src/pages/Graph/Cycles';
import Miscellaneous from '/src/pages/Graph/Miscellaneous';

// Subtopic-level pages
import List from '/src/pages/Graph/GraphRepresentation/List';
import Matrix from '/src/pages/Graph/GraphRepresentation/Matrix';

import BFS from '/src/pages/Graph/Traversals/BFS';
import DFS from '/src/pages/Graph/Traversals/DFS';
import FloodFill from '/src/pages/Graph/Traversals/FloodFill';

import Dijkstra from '/src/pages/Graph/SingleSourceShortestPaths/Dijkstra';
import BellmanFord from '/src/pages/Graph/SingleSourceShortestPaths/BellmanFord';
import ZeroOneBFS from '/src/pages/Graph/SingleSourceShortestPaths/ZeroOneBFS';

import FloydWarshall from '/src/pages/Graph/AllPairsShortestPaths/FloydWarshall';

import Prims from '/src/pages/Graph/SpanningTrees/Prims';
import Kruskals from '/src/pages/Graph/SpanningTrees/Kruskals';

import CycleDetection from '/src/pages/Graph/Cycles/CycleDetection';
import NegativeCycle from '/src/pages/Graph/Cycles/NegativeCycle';
import EulerianPath from '/src/pages/Graph/Cycles/EulerianPath';

import FordFulkerson from '/src/pages/Graph/Miscellaneous/FordFulkerson';
import Bipartite from '/src/pages/Graph/Miscellaneous/Bipartite';
import TopologicalSort from '/src/pages/Graph/Miscellaneous/TopologicalSort';
import GraphColoring from '/src/pages/Graph/Miscellaneous/GraphColoring';

export const graphRoutes = [
  { path: '/topic/graph', element: <Graph /> },

  // Section-level routes
  { path: '/topic/graph/graph-representation', element: <GraphRepresentation /> },
  { path: '/topic/graph/graph-traversals', element: <Traversals /> },
  { path: '/topic/graph/single-source-shortest-paths', element: <SingleSourceShortestPaths /> },
  { path: '/topic/graph/all-pairs-shortest-paths', element: <AllPairsShortestPaths /> },
  { path: '/topic/graph/spanning-trees', element: <SpanningTrees /> },
  { path: '/topic/graph/cycles-in-graph', element: <Cycles /> },
  { path: '/topic/graph/miscellaneous', element: <Miscellaneous /> },

  // Subtopic-level routes
  { path: '/topic/graph/graph-representation/list', element: <List /> },
  { path: '/topic/graph/graph-representation/matrix', element: <Matrix /> },

  { path: '/topic/graph/graph-traversals/bfs', element: <BFS /> },
  { path: '/topic/graph/graph-traversals/dfs', element: <DFS /> },
  { path: '/topic/graph/graph-traversals/floodfill', element: <FloodFill /> },

  { path: '/topic/graph/single-source-shortest-paths/dijkstra', element: <Dijkstra /> },
  { path: '/topic/graph/single-source-shortest-paths/bellman-ford', element: <BellmanFord /> },
  { path: '/topic/graph/single-source-shortest-paths/0-1-bfs', element: <ZeroOneBFS /> },

  { path: '/topic/graph/all-pairs-shortest-paths/floyd-warshall', element: <FloydWarshall /> },

  { path: '/topic/graph/spanning-trees/prims', element: <Prims /> },
  { path: '/topic/graph/spanning-trees/kruskals', element: <Kruskals /> },

  { path: '/topic/graph/cycles-in-graph/cycle-detection', element: <CycleDetection /> },
  { path: '/topic/graph/cycles-in-graph/negative-cycle', element: <NegativeCycle /> },
  { path: '/topic/graph/cycles-in-graph/eulerian-path', element: <EulerianPath /> },

  { path: '/topic/graph/miscellaneous/ford-fulkerson', element: <FordFulkerson /> },
  { path: '/topic/graph/miscellaneous/bipartite', element: <Bipartite /> },
  { path: '/topic/graph/miscellaneous/topological-sort', element: <TopologicalSort /> },
  { path: '/topic/graph/miscellaneous/graph-coloring', element: <GraphColoring /> }
];
