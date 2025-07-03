import Home from '/src/pages/Home';
import { sortingRoutes } from '/src/routes/SortingRoutes';
import { searchingRoutes } from '/src/routes/SearchingRoutes';
import { stringMatchingRoutes } from '/src/routes/StringMatchingRoutes';
import { stackRoutes } from '/src/routes/StackRoutes';
import { linkedListRoutes } from '/src/routes/LinkedListRoutes';
import { queueRoutes } from '/src/routes/QueueRoutes';
import { graphRoutes } from '/src/routes/GraphRoutes';
import { treeRoutes } from '/src/routes/TreeRoutes';  
import { slidingWindowRoutes } from '/src/routes/SlidingWindowRoutes';
import { numberTheoryRoutes } from '/src/routes/NumberTheoryRoutes';
import { recursionBacktrackingRoutes } from '/src/routes/RecursionBacktrackingRoutes';
import { arrayAlgorithmsRoutes } from '/src/routes/ArrayAlgorithmsRoutes';
import { bitManipulationRoutes } from '/src/routes/BitManipulationRoutes';
import { dynamicProgrammingRoutes } from '/src/routes/DynamicProgrammingRoutes';

export const appRoutes = [
  { path: '/', element: <Home /> },
  ...sortingRoutes,
  ...searchingRoutes,
  ...stringMatchingRoutes,
  ...stackRoutes,
  ...linkedListRoutes,
  ...queueRoutes,
  ...graphRoutes,
  ...treeRoutes,
  ...slidingWindowRoutes,
  ...numberTheoryRoutes,
  ...recursionBacktrackingRoutes,
  ...arrayAlgorithmsRoutes,
  ...bitManipulationRoutes,
  ...dynamicProgrammingRoutes
];
