import ArrayAlgorithms from '/src/pages/ArrayAlgorithms/ArrayAlgorithms';
import Kadane from '/src/pages/ArrayAlgorithms/Kadane';
import BoyerMoore from '/src/pages/ArrayAlgorithms/BoyerMoore';
import DutchFlag from '/src/pages/ArrayAlgorithms/DutchFlag';
import MosAlgorithm from '/src/pages/ArrayAlgorithms/MosAlgorithm';
import SqrtDecomposition from '/src/pages/ArrayAlgorithms/SqrtDecomposition';
import TwoPointer from '/src/pages/ArrayAlgorithms/TwoPointer';
import MexElement from '/src/pages/ArrayAlgorithms/MexElement';
import PrefixSuffixSum from '/src/pages/ArrayAlgorithms/PrefixSuffixSum';

export const arrayAlgorithmsRoutes = [
  { path: '/topic/array-algorithms', element: <ArrayAlgorithms /> },
  { path: '/topic/array-algorithms/kadane\'s-algorithm', element: <Kadane /> },
  { path: '/topic/array-algorithms/boyer-moore-majority-vote-algorithm', element: <BoyerMoore /> },
  { path: '/topic/array-algorithms/dutch-national-flag-algorithm', element: <DutchFlag /> },
  { path: '/topic/array-algorithms/mo’s-algorithm', element: <MosAlgorithm /> },
  { path: '/topic/array-algorithms/square-root-decomposition', element: <SqrtDecomposition /> },
  { path: '/topic/array-algorithms/two-pointer-technique', element: <TwoPointer /> },
  { path: '/topic/array-algorithms/minimum-excluded-element-(mex)', element: <MexElement /> },
  { path: '/topic/array-algorithms/prefix-&-suffix-sum', element: <PrefixSuffixSum /> }
];
