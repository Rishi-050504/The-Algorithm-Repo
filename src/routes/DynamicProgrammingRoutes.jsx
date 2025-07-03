import DynamicProgramming from '/src/pages/DynamicProgramming/DynamicProgramming';
import LinearDP from '/src/pages/DynamicProgramming/LinearDP';
import KnapsackDP from '/src/pages/DynamicProgramming/KnapsackDP';
import MultiDimensionalDP from '/src/pages/DynamicProgramming/MultiDimensionalDP';
import IntervalDP from '/src/pages/DynamicProgramming/IntervalDP';
import BitDP from '/src/pages/DynamicProgramming/BitDP';
import DigitDP from '/src/pages/DynamicProgramming/DigitDP';
import DPonTrees from '/src/pages/DynamicProgramming/DPonTrees';
import DPonStrings from '/src/pages/DynamicProgramming/DPonStrings';
import DPonGraphs from '/src/pages/DynamicProgramming/DPonGraphs';
import ClassicalDP from '/src/pages/DynamicProgramming/ClassicalDP';

export const dynamicProgrammingRoutes = [
  { path: '/topic/dynamic-programming', element: <DynamicProgramming /> },
  { path: '/topic/dynamic-programming/linear-dp', element: <LinearDP /> },
  { path: '/topic/dynamic-programming/knapsack-dp', element: <KnapsackDP /> },
  { path: '/topic/dynamic-programming/multi-dimensional-dp', element: <MultiDimensionalDP /> },
  { path: '/topic/dynamic-programming/interval-dp', element: <IntervalDP /> },
  { path: '/topic/dynamic-programming/bit-dp', element: <BitDP /> },
  { path: '/topic/dynamic-programming/digit-dp', element: <DigitDP /> },
  { path: '/topic/dynamic-programming/dp-on-trees', element: <DPonTrees /> },
  { path: '/topic/dynamic-programming/string-dp', element: <DPonStrings /> },
  { path: '/topic/dynamic-programming/graph-dp', element: <DPonGraphs /> },
  { path: '/topic/dynamic-programming/classical-dp', element: <ClassicalDP /> }
];
