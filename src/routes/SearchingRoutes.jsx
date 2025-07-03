import Searching from '/src/pages/Searching/Searching';
import LinearSearch from '/src/pages/Searching/LinearSearch';
import BinarySearch from '/src/pages/Searching/BinarySearch';
import SearchAnswerSpace from '/src/pages/Searching/SearchAnswerSpace';
import BoundSearch from '/src/pages/Searching/BoundSearch';
import SearchSortedArray from '/src/pages/Searching/SearchSortedArray';
export const searchingRoutes = [
  { path: '/topic/searching', element: <Searching /> },
  { path: '/topic/searching/linear-search', element: <LinearSearch /> },
  { path: '/topic/searching/binary-search', element: <BinarySearch /> },
  { path: '/topic/searching/binary-search-on-answer-space', element: <SearchAnswerSpace /> },
  { path: '/topic/searching/bound-search', element: <BoundSearch /> },
  { path: '/topic/searching/search-on-sorted-array', element: <SearchSortedArray /> }
];
