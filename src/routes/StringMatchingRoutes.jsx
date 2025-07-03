import StringMatching from '/src/pages/StringMatching/StringMatching';
import KMP from '/src/pages/StringMatching/KMP';
import RabinKarp from '/src/pages/StringMatching/RabinKarp';
import ZFunction from '/src/pages/StringMatching/ZFunction';

export const stringMatchingRoutes = [
  { path: '/topic/string-matching', element: <StringMatching /> },
  { path: '/topic/string-matching/kmp', element: <KMP /> },
  { path: '/topic/string-matching/rabin-karp', element: <RabinKarp /> },
  { path: '/topic/string-matching/z-function', element: <ZFunction /> }
];
