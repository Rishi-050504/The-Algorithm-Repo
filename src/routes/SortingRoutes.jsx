import Sorting from '/src/pages/Sorting/Sorting';
import BubbleSort from '/src/pages/Sorting/BubbleSort';
import SelectionSort from '/src/pages/Sorting/SelectionSort';
import InsertionSort from '/src/pages/Sorting/InsertionSort';
import MergeSort from '/src/pages/Sorting/MergeSort';
import QuickSort from '/src/pages/Sorting/QuickSort';
import HeapSort from '/src/pages/Sorting/HeapSort';
import CyclicSort from '/src/pages/Sorting/CyclicSort';

export const sortingRoutes = [
  { path: '/topic/sorting', element: <Sorting /> },
  { path: '/topic/sorting/bubble-sort', element: <BubbleSort /> },
  { path: '/topic/sorting/selection-sort', element: <SelectionSort /> },
  { path: '/topic/sorting/insertion-sort', element: <InsertionSort /> },
  { path: '/topic/sorting/merge-sort', element: <MergeSort /> },
  { path: '/topic/sorting/quick-sort', element: <QuickSort /> },
  { path: '/topic/sorting/heap-sort', element: <HeapSort /> },
  { path: '/topic/sorting/cyclic-sort', element: <CyclicSort /> }
];
