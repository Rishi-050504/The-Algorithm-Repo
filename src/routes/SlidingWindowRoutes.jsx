import SlidingWindow from '/src/pages/SlidingWindow/SlidingWindow';
import FixedSlidingWindow from '/src/pages/SlidingWindow/FixedSlidingWindow';
import VariableSlidingWindow from '/src/pages/SlidingWindow/VariableSlidingWindow';

export const slidingWindowRoutes = [
  { path: '/topic/sliding-window', element: <SlidingWindow /> },
  { path: '/topic/sliding-window/fixed-sliding-window', element: <FixedSlidingWindow /> },
  { path: '/topic/sliding-window/variable-sliding-window', element: <VariableSlidingWindow /> }
];
