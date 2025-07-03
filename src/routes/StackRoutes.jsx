import Stack from '/src/pages/Stack/Stack';
import StackOperations from '/src/pages/Stack/StackOperations';
import MonotonicStack from '/src/pages/Stack/MonotonicStack';
import MinimumStack from '/src/pages/Stack/MinimumStack';

export const stackRoutes = [
  { path: '/topic/stack', element: <Stack /> },
  { path: '/topic/stack/stack-operations', element: <StackOperations /> },
  { path: '/topic/stack/monotonic-stack', element: <MonotonicStack /> },
  { path: '/topic/stack/minimum-stack', element: <MinimumStack /> }
];
